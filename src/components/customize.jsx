import React, { useState } from "react";
import img1 from "../assets/tshirtblack.PNG";
import img2 from "../assets/tshirtblue.PNG";
import img3 from "../assets/tshirtwhite.PNG";
import styles from "../styles/home.module.css";
import { useNavigate } from "react-router-dom";

function Customize() {
  const [displayItems, setDisplayItems] = useState(8);

  const productItems = [img1, img2, img3];
  const navigate = useNavigate();

  return (
    <>
      <div className="container pt-5 pb-5">
        <h2 className={styles.fulfill_title}>
          Customize and sell premium products
        </h2>
        <p className={`h5 mb-4 text-center ${styles.avenir}`}>
          Print and stitch on demand with your brand name
        </p>
        <div className="row">
          {[...Array(displayItems)].map((e, index) => (
            <div className="col-lg-3 col-sm-6 p-3 mb-4">
              <div
                className="card"
                style={{ maxWidth: "100%", height: "100%" }}
              >
                <img
                  className="card-img-top"
                  src={productItems[index % 3]}
                  alt="img1"
                  style={{
                    height: "75%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body" style={{ height: "25%" }}>
                  <p
                    className={`card-text fw-bold mb-1 ${styles.avenir}`}
                    style={{ fontWeight: "900" }}
                    id={styles.card_product_title}
                  >
                    T-shirts
                  </p>
                  <span
                    className={`${styles.avenir}`}
                    style={{ fontWeight: "300", fontSize: "14px" }}
                  >
                    Starting from ₹175 only
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* <Script src="https://portal.zakeke.com/scripts/config.js"></Script> */}
          {/* <Script src="https://portal.zakeke.com/scripts/integration/api/customizer.js"></Script> */}
          {/* <Script src="./design-tribe-components/script.js"></Script> */}
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {displayItems === 8 ? (
            <button
              onClick={() => setDisplayItems(15)}
              className="btn btn-danger mt-4 mb-3 px-4"
              style={{
                backgroundColor: "#EE3C2F",
                fontFamily: "Avenir,sans-serif",
                fontSize: "16px",
                letterSpacing: "1.6px",
                fontWeight: "700",
                width: "150px",
              }}
            >
              Show More
            </button>
          ) : (
            <button
              onClick={() => setDisplayItems(8)}
              className="btn btn-danger mt-4 mb-3 px-4"
              style={{
                backgroundColor: "#EE3C2F",
                fontFamily: "Avenir,sans-serif",
                fontSize: "16px",
                letterSpacing: "1.6px",
                fontWeight: "700",
                width: "150px",
              }}
            >
              Show Less
            </button>
          )}
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            onClick={() => navigate("/products")}
            className="btn btn-danger mt-4 mb-3 px-3 py-2"
            style={{
              fontFamily: "Avenir,sans-serif",
              fontSize: "16px",
              letterSpacing: "1.6px",
              fontWeight: "700",
              backgroundColor: "rgb(238, 60, 47)",
            }}
          >
            All Products
          </button>
        </div>
      </div>
    </>
  );
}

export default Customize;
