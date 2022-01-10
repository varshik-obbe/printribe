import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { default as img1, default as img3 } from "../assets/tshirtblack.PNG";
import img2 from "../assets/tshirtblue.PNG";
import style from "../styles/style.css";
function Products() {
  let design = style;
  const [imgSrc, setImgSrc] = useState(img1);

  const imgChangeHandler = (evt) => {
    setImgSrc(evt.target.src);
  };

  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <div className="row ">
              <div className="">
                <div className="ti">
                  <div>
                    <img src={img1} onClick={imgChangeHandler} />
                  </div>
                  <div>
                    <img src={img2} onClick={imgChangeHandler} />
                  </div>
                  <div>
                    <img src={img3} onClick={imgChangeHandler} />
                  </div>
                  <div>
                    <img src={img1} onClick={imgChangeHandler} />
                  </div>
                  <div>
                    <img src={img2} onClick={imgChangeHandler} />
                  </div>
                  <div>
                    <img src={img3} onClick={imgChangeHandler} />
                  </div>
                </div>

                <div className="fi">
                  <img className="fi_image" src={imgSrc} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-5">
            <p className="h4 fw-bold mb-5">Unisex Round Neck Cotton T-shirt</p>
            <p className="mt-3 fw-bold">Choose technique</p>
            <p className="btn btn-md btn-light fw-bold  mb-3 border-dark">
              Printing (DTG)
            </p>
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
                <div
                  className="border p-2 fw-bold text-center mx-1 "
                  style={{ height: "40px", width: "40px", borderRadius: "5px" }}
                >
                  XS
                </div>
                <div
                  className="border p-2 fw-bold text-center mx-1 "
                  style={{ height: "40px", width: "40px", borderRadius: "5px" }}
                >
                  S
                </div>
                <div
                  className="border p-2 fw-bold border-dark text-center mx-1 "
                  style={{ height: "40px", width: "40px", borderRadius: "5px" }}
                >
                  M
                </div>
                <div
                  className="border p-2 fw-bold text-center mx-1 "
                  style={{ height: "40px", width: "40px", borderRadius: "5px" }}
                >
                  L
                </div>
                <div
                  className="border p-2 fw-bold text-center mx-1 "
                  style={{ height: "40px", width: "40px", borderRadius: "5px" }}
                >
                  XL
                </div>
                <div
                  className="border p-2 fw-bold text-center mx-1 "
                  style={{ height: "40px", width: "40px", borderRadius: "5px" }}
                >
                  XXL
                </div>
              </div>
            </div>
            <div className=""></div>
            <p className="fw-bold h3 mt-3 mb-3">₹155.00</p>
            <button className="fw-bold h3 text-light btn btn-danger px-3">
              Start Designing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;