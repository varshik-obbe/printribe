import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/catalog.module.css";
import { useNavigate } from "react-router-dom";

require("dotenv").config();

const SubCatalog = () => {
  const [products, setproducts] = useState([]);
  const [productArrUnderSubCat, setProductArrUnderSubCat] = useState([]);

  // console.log(useParams())
  const { id } = useParams();

  const [cat, setCat] = useState();
  const [subCat, setSubCat] = useState();

  const [catURL, setCatURL] = useState();

  const navigate = useNavigate();

  const getPost = () => {
    axios
      .get(`/categories/getCategoryById/${id}`)
      .then(({ data }) => {
        // console.log(data.category.categorydata[0]);

        setproducts(data.category.categorydata[0].subsubCategories);

        setSubCat(data.category.categorydata[0].name);

        // api call with 'maincat' id to get the main category
        axios
          .get(
            `/categories/getCategoryById/${data.category.categorydata[0].maincat}`
          )
          .then(({ data }) => {
            // console.log(data.category.categorydata[0]);

            setCat(data.category.categorydata[0].name);
            setCatURL(
              data.category.categorydata[0].url +
                "/" +
                data.category.categorydata[0].id
            );
          })
          .catch((resp) => {
            console.log(resp);
          });

        axios
          .get("/products/getProducts")
          .then(({ data }) => {
            let tempArr = new Set();

            data.maincat.categories.map((maincat) => {
              maincat.subCategories.map((subCat) => {
                subCat.products &&
                  subCat.products.map((subCatProduct) => {
                    tempArr.add(subCatProduct);
                  });
              });
            });

            setProductArrUnderSubCat([...tempArr]);
          })
          .catch((resp) => {
            console.log(resp);
          });
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <>
      {cat && (
        <div>
          <span
            style={{ cursor: "pointer", color: "#000" }}
            onClick={() => navigate("/products")}
          >
            Products
          </span>{" "}
          /{" "}
          <span
            style={{ cursor: "pointer", color: "#000" }}
            onClick={() => navigate(`/products${catURL}`)}
          >
            {cat && cat}
          </span>{" "}
          / <span style={{ cursor: "pointer" }}>{subCat && subCat}</span>
        </div>
      )}
      <div className={`container `}>
        <div className="row mt-3 mb-3 mx-0">
          {products != undefined
            ? products.map((category) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 p-2"
                    key={category.id}
                  >
                    <div className={`${styles.catalogcontainer}`}>
                      <Link
                        to={`/products/${category.id}`}
                        className={styles.catalogText}
                      >
                        <img
                          class={`${styles.cardImg}`}
                          src={
                            process.env.REACT_APP_IMAGE_BASE_URL + category.img
                          }
                          alt={category.name}
                        />
                        <div className={styles.card_body}>
                          <p class="card-text fw-bold">{category.name}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className={`container `}>
        <div className="row mt-5 mb-3 mx-0">
          {productArrUnderSubCat.length
            ? productArrUnderSubCat.map((subCatProduct) => {
                return (
                  id === subCatProduct.category_id &&
                  subCatProduct.quantities_updated && (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 p-2"
                      key={subCatProduct.id}
                    >
                      {console.log(subCatProduct)}
                      <div className={`${styles.catalogcontainer}`}>
                        <Link
                          to={`/fabricDesign/${subCatProduct.id}`}
                          className={styles.catalogText}
                        >
                          <img
                            class={`${styles.cardImg}`}
                            src={
                              process.env.REACT_APP_IMAGE_BASE_URL +
                              "/" +
                              subCatProduct.cover_img
                            }
                            alt={subCatProduct.title}
                          />
                          <div className={styles.card_body}>
                            <p class="card-text fw-bold">
                              {subCatProduct.title}
                            </p>
                          </div>
                          <p className="ms-5 fw-normal" style={{marginTop:'-5px'}}>
                            Starting Price
                            <br />₹{subCatProduct.price}{" "}
                            <span style={{ color: "#3699ff" }}>incl. VAT</span>{" "}
                            <br />
                            {subCatProduct.productsizes[0]} -{" "}
                            {
                              subCatProduct.productsizes[
                                subCatProduct.productsizes.length - 1
                              ]
                            }
                            <br />
                            <div className='d-flex mt-2'>
                            {subCatProduct.productcolors.map((curr) => (                              
                              <div
                                style={{
                                  height: "12px",
                                  width: "12px",
                                  background: curr.colorCode,
                                  marginRight: "5px",
                                  border: "1px solid #666",
                                  borderRadius: "2px",
                                }}
                              />                            
                            ))}
                            </div>
                          </p>
                        </Link>
                      </div>
                    </div>
                  )
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default SubCatalog;
