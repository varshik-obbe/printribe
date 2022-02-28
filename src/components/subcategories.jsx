import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";
import img from "../assets/mensclothing.PNG";
import img1 from "../assets/womensclothing.PNG";
import styles from "../styles/catalog.module.css";

require("dotenv").config();

const SubCatalog = () => {
  const [products, setproducts] = useState([]);
  const { subcatid } = useParams();
  const getPost = () => {
    axios
      .get(`/categories/getCategoryById/${subcatid}`)
      .then(({ data }) => {
        // console.log(data.maincat.categories);
        setproducts(data.category.categorydata[0].subCategories);
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className={`container `}>
        <div className="row mt-3 mb-3 mx-0">
          {products.map((category) => {
            console.log(category);
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 p-2"
                key={category.id}
              >
                <div className={`card ${styles.catalogcontainer}`}>
                  <Link
                    to={
                      category.subsubCategories.length > 0
                        ? `/products${category.url}/${category.id}`
                        : `/products/${category.id}`
                    }
                    className={styles.catalogText}
                  >
                    <img
                      class="card-img-top"
                      src={process.env.REACT_APP_IMAGE_BASE_URL + category.img}
                      alt={category.name}
                    />
                    <div
                      class="card_body h-25 p-2"
                      className={styles.card_body}
                    >
                      <p class="card-text fw-bold">{category.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubCatalog;
