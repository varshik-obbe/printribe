import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";
import img from "../assets/mensclothing.PNG";
import img1 from "../assets/womensclothing.PNG";
import styles from "../styles/catalog.module.css";
import {useNavigate} from 'react-router-dom'

require("dotenv").config();

const SubCatalog = () => {
  const [products, setproducts] = useState([]);
  const { subcatid } = useParams();

  const [cat, setCat] = useState();

  const navigate = useNavigate();

  const getPost = () => {
    axios
      .get(`/categories/getCategoryById/${subcatid}`)
      .then(({ data }) => {
        // console.log(data.category.categorydata[0]);
        setproducts(data.category.categorydata[0].subCategories);
        setCat(data.category.categorydata[0].name)
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
    {
      cat && 
      <div>
        <span style={{cursor:'pointer',color:'#000'}} onClick={() => navigate('/products')}>Products</span> / <span>{cat && cat}</span> 
      </div>
    }
      
      <div className={`container `}>
        <div className="row mt-3 mb-3 mx-0">
          {products.map((category) => {
            {/* console.log(category); */}
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 p-2"
                key={category.id}
              >
                <div className={`${styles.catalogcontainer} `}>
                  <Link
                    to={
                      category.subsubCategories.length > 0
                        ? `/products${category.url}/${category.id}`
                        : `/products/${category.id}`
                    }
                    className={styles.catalogText}
                  >
                    <img
                      class={`${styles.cardImg}`}
                      src={process.env.REACT_APP_IMAGE_BASE_URL + category.img}
                      alt={category.name}
                    />
                    <div
                      className={styles.card_body}
                    >
                      <p class="fw-bold">{category.name}</p>
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
