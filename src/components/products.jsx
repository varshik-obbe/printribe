import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React, { useEffect, useRef, useState } from "react";
import { default as img1, default as img3 } from "../assets/tshirtblack.PNG";

import axios from "axios"
import img2 from "../assets/tshirtblue.PNG";
import style from "../styles/style.css";
import { useParams } from "react-router-dom";

const Products = () => {

  const { prodid } = useParams()
  const [product, setproduct] = useState({})

  const getProduct = () => {
    axios.get(`/products/getproduct/${prodid}`)
      .then(({ data }) => {
        setproduct(data.product.productdata[0])
        console.log(data.product.productdata[0])
      })
      .catch(({ err }) => {
        console.log(err)
      })
  }

  const customize = (evt) => {
    evt.preventDefault();
    var formCustomizer =
      document.getElementById("frmCustomizer");
    // var formProductPage = document.getElementById("{ idFormProduct }");
    formCustomizer.elements["productid"].value = 'Blue61d5bb7d1ed8c4d5cbb9d162';
    formCustomizer.elements["quantity"].value = '1';
    formCustomizer.elements["masterProductId"].value = '61d5bb7d1ed8c4d5cbb9d162';
    formCustomizer.submit();
  }

  const handleSizeChange = (e) => {
    console.log(e.target.id)

    const color = document.getElementById(e.target.id).style.backgroundColor

    if (color !== "black") {
      document.getElementById(e.target.id).style.backgroundColor = "black"
      document.getElementById(e.target.id).style.color = "white"
    } else {
      document.getElementById(e.target.id).style.backgroundColor = "white"
      document.getElementById(e.target.id).style.color = "black"
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <div className="row ">
              <div className="">
                <div className="ti">
                  <div>
                    <img src={img1} />
                  </div>
                  <div>
                    <img src={img2} />
                  </div>
                  <div>
                    <img src={img3} />
                  </div>
                  <div>
                    <img src={img1} />
                  </div>
                  <div>
                    <img src={img2} />
                  </div>
                  <div>
                    <img src={img3} />
                  </div>
                </div>

                <div className="fi">
                  <img src={product.img} alt={product.title} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-5">
            <p className="h4 fw-bold mb-5">{product.title}</p>
            <p className="mt-3 fw-bold">{product.description}</p>
            {/* <p className="btn btn-md btn-light fw-bold  mb-3 border-dark">
                Printing (DTG)
              </p> */}
            <p className="mt-3 fw-bold">Choose color</p>
            <div className="d-flex mb-3">
              <div
                className="border  bg-black mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
              <div
                className="border  bg-light mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
              <div
                className="border  bg-danger mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
              <div
                className="border  bg-warning mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
              <div
                className="border  bg-info mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
              <div
                className="border  bg-danger mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
              <div
                className="border  bg-info mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
              <div
                className="border border-dark bg-warning mx-1 "
                style={{ height: "20px", width: "20px", borderRadius: "5px" }}
              ></div>
            </div>
            <div className="d-flex mt-3 mb-3">
              <div className="me-5 fw-bold">Choose size</div>
              <div className="mx-5 text-info">Size chart</div>
            </div>
            <div className="d-flex mt-3 mb-3">
              <div className="d-flex mb-3">
                <div id="S"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}
                >
                  S
                </div>
                <div id="M"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}
                >
                  M
                </div>
                <div
                  id="L"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}
                >
                  L
                </div>
                <div
                  id="XL"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}
                >
                  XL
                </div>
                <div
                  id="2XL"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}

                >
                  2XL
                </div>
                <div
                  id="3XL"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}
                >
                  3XL
                </div>
                <div
                  id="4XL"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}
                >
                  4XL
                </div>
                <div
                  id="5XL"
                  className="border p-2 fw-bold text-center mx-1 sizes"
                  onClick={(e) => handleSizeChange(e)}
                >
                  5XL
                </div>
              </div>
            </div>
            <div className=""></div>
            <p className="fw-bold h3 mt-3 mb-3">₹{product.price}</p>
            <button className="fw-bold h3 text-light btn btn-danger px-3" id="btnCustomize" onClick={(e) => customize(e)}>
              Start Designing
            </button>
          </div>
        </div>
        <div>
          <form id="frmCustomizer" action="/customizer">
            <input type="hidden" name="quantity" value={1} />
            <input type="hidden" name="productid" value={"object123"} />
            <input type="hidden" name="masterProductId" value={"object123"} />
          </form>
        </div>
      </div>
    </>
  );
}




export default Products
