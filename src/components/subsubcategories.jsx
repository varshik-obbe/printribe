import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/catalog.module.css";

require("dotenv").config();

const SubCatalog = () => {
  const [products, setproducts] = useState([]);
  // console.log(useParams())
  const { id } = useParams();
  const getPost = () => {
    axios
      .get(`/categories/getCategoryById/${id}`)
      .then(({ data }) => {
        // console.log(data.maincat.categories);
        setproducts(data.category.categorydata[0].subsubCategories);
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
