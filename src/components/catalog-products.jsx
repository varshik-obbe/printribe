import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/catalog.module.css";
import { useNavigate } from "react-router-dom";

const Catalogproducts = () => {
  const { productid } = useParams();
  const [products, setproducts] = useState([]);
  const [collection, setcollection] = useState([]);

  const [cat, setCat] = useState();
  const [subCat, setSubCat] = useState();
  const [subCatCat, setSubCatCat] = useState();

  const [catURL, setCatURL] = useState();
  const [subCatURL, setSubCatURL] = useState();

  const [showAnother, setShowAnother] = useState(false);

  const navigate = useNavigate();

  const getPost = () => {
    console.log("reached");
    axios
      .get("/products/getProducts")
      .then(({ data }) => {
        console.log(data.maincat.categories);
        // setproducts(data.maincat.categories);
        data.maincat.categories.map((product) => {
          product.subCategories.map((subproduct) => {
            if (subproduct.products) {
              if (subproduct.id === productid) {
                setcollection(subproduct.products);
                console.log(subproduct.products);

                setShowAnother(true);

                setCat(product.name);
                setSubCat(subproduct.name);

                setCatURL(product.url + "/" + product.id);

                setSubCatURL(subproduct.url + "/" + subproduct.id);
              }
            }

            subproduct.subsubCategories.map((subsubproduct) => {
              if (subsubproduct.id === productid) {
                if (subsubproduct.products) {
                  setcollection(subsubproduct.products);
                  console.log(subsubproduct.products);

                  setCat(product.name);
                  setSubCat(subproduct.name);
                  setSubCatCat(subsubproduct.name);

                  setCatURL(product.url + "/" + product.id);

                  setSubCatURL(subproduct.url + "/" + subproduct.id);
                }
              }
            });
          });
        });
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  useEffect(() => {
    getPost();
  }, [productid]);

  return (
    <>
      {cat && (
        <>
          {showAnother ? (
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
              / <span>{subCat && subCat}</span>
            </div>
          ) : (
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
              /{" "}
              <span
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => navigate(`/products${subCatURL}`)}
              >
                {subCat && subCat}
              </span>{" "}
              / <span>{subCatCat && subCatCat}</span>
            </div>
          )}
        </>
      )}

      <div className={`container `}>
        <div className="row mt-3 mb-3 mx-0">
          {collection.map((category) => {
            return (
              <>
                {console.log(category)}
                {category.active && category.active === "true" && (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 p-2"
                  key={category.id}
                >
                  <div className={`card ${styles.catalogcontainer}`}>
                    <Link
                      to={`/fabricDesign/${category.id}`}
                      className={styles.catalogText}
                    >
                      <img
                        class="card-img-top"
                        className={styles.cardImg}
                        src={
                          process.env.REACT_APP_IMAGE_BASE_URL +
                          "/" +
                          category.cover_img
                        }
                        alt={category.name}
                      />
                      <div
                        class="card_body h-25 p-2"
                        className={styles.card_body}
                      >
                        <p class="card-text fw-bold">{category.title}</p>
                      </div>
                    </Link>
                  </div>
                </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Catalogproducts;
