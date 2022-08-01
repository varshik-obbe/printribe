import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/catalog.module.css";
import {useNavigate} from 'react-router-dom'

require("dotenv").config();

const SubCatalog = () => {
  const [products, setproducts] = useState([]);
  // console.log(useParams())
  const { id } = useParams();

  const [cat, setCat] = useState();
  const [subCat, setSubCat] = useState();

  const [catURL,setCatURL] = useState()

  const navigate = useNavigate();

  const getPost = () => {
    axios
      .get(`/categories/getCategoryById/${id}`)
      .then(({ data }) => {
        // console.log(data.category.categorydata[0]);

        setproducts(data.category.categorydata[0].subsubCategories);

        setSubCat(data.category.categorydata[0].name)

        // api call with 'maincat' id to get the main category
        axios
        .get(`/categories/getCategoryById/${data.category.categorydata[0].maincat}`)
        .then(({ data }) => {
          // console.log(data.category.categorydata[0]);
          
          setCat(data.category.categorydata[0].name)
          setCatURL(data.category.categorydata[0].url + '/' + data.category.categorydata[0].id)             
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
          </span>
          {" "}
          /
          {" "}
          <span
            style={{ cursor: "pointer", color: "#000" }}
            onClick={() => navigate(`/products${catURL}`)}
          >
            {cat && cat}
          </span>
          {" "}
          /
          {" "}
          <span
            style={{ cursor: "pointer"}}            
          >
            {subCat && subCat}
          </span>
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
    </>
  );
};

export default SubCatalog;
