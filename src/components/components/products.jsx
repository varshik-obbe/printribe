import React, { useEffect, useState } from "react";

import axios from "axios";
import classes from "../../styles/add-product.module.css";

function Products({ products, handleNext }) {
  // const { products,handleNext } = props;
  console.log("pros comp");
  console.log(products);

  const customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));

  const [quantity, setQuantity] = useState();
  const [color, setColor] = useState();

  var subTotal = 0;
  var total_quantity = 0;
  customizeProduct.forEach((curr) => {
    products.forEach((ele) => {
      if (ele.prodId === curr.product_id) {
        subTotal += Number(curr.quantity) * Number(ele.price);
      }
      total_quantity += Number(curr.quantity);
    });
  });

  localStorage.setItem("subTotal", subTotal);
  localStorage.setItem("total_quantity", total_quantity);

  const [renderPage, setRenderPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderPage(true);
    }, 3000);
  }, []);

  return (
    <>
      {renderPage && (
        <React.Fragment>
          <div
            class="w-100"
            style={{
              padding: "30px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: "8px",
              background: "#FFFFFF",
            }}
          >
            <div class="">
              {products &&
                products.map((curr) => (
                  <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 px-0">
                      <span class="fs-6">PRODUCTS</span>
                      <hr
                        class="w-100 mt-2 mb-4"
                        style={{ height: "2px", background: "#999" }}
                      />
                      <div class="row" style={{ paddingRight: "25px" }}>
                        <div class="col-4 col-sm-3 pe-0">
                          <img
                            src={curr.image}
                            alt=""
                            style={{
                              width: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>

                        <div class="col-8 col-sm-9">
                          <b class=" text-break">
                            {curr.name}
                            {/* Unisex Fleece Pullover | Cotton Heritage M2480 (White / XL) */}
                            {/* {products && products[0].name} */}
                            {/* {+new Date()} */}
                          </b>
                          <hr class="my-2" />
                          <span>Thread colors</span>
                          <br />
                          <div class="d-flex mt-1">
                            {customizeProduct.map(
                              (ele) =>
                                ele.product_id === curr.prodId && (
                                  <div
                                    style={{
                                      height: "12px",
                                      width: "12px",
                                      background: ele.color.color_code,
                                      marginRight: "5px",
                                      border: "1px solid #666",
                                      borderRadius: "2px",
                                    }}
                                  />
                                )
                            )}

                            {/* <div
                      style={{
                        height: "12px",
                        width: "12px",
                        background: "red",
                        marginRight: "5px",
                        border: "1px solid #666",
                        borderRadius: "2px",
                      }}
                    />
                    <div
                      style={{
                        height: "12px",
                        width: "12px",
                        background: "blue",
                        marginRight: "5px",
                        border: "1px solid #666",
                        borderRadius: "2px",
                      }}
                    /> */}
                          </div>
                          <div class="mt-3" />
                          <button class="p-0 border-0 bg-transparent text-primary">
                            Edit
                          </button>
                          <button class="p-0 ms-3 border-0 bg-transparent text-primary">
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class={[
                        "col-12 col-md-6 col-lg-3 px-0",
                        classes.productGrid2,
                      ].join(" ")}
                    >
                      <span class="fs-6">PRINT FILE</span>
                      <hr
                        class="w-100 mt-2 mb-4"
                        style={{ height: "2px", background: "#999" }}
                      />
                      <div class="row">
                        <div class="col-6 col-lg-5">
                          <div
                            style={{
                              height: "140px",
                              border: "1px solid #d0d0d0",
                              borderRadius: "5px 5px 0 0",
                            }}
                          >
                            <img
                              src={curr.zekekeImage}
                              alt=""
                              style={{
                                objectFit: "contain",
                                height: "100%",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={[
                        "col-4 col-sm-3 col-lg-1 px-0 d-flex align-items-center flex-column",
                        classes.productGrid3,
                      ].join(" ")}
                    >
                      <span class="fs-6">QTY</span>
                      <hr
                        class="w-100 mt-2 mb-4"
                        style={{ height: "2px", background: "#999" }}
                      />
                      {customizeProduct.map(
                        (ele) =>
                          ele.product_id === curr.prodId && (
                            <input
                              type="text"
                              value={ele.quantity}
                              style={{
                                height: "40px",
                                width: "50px",
                                border: "1px solid #999",
                                textAlign: "center",
                                borderRadius: "5px",
                              }}
                            />
                          )
                      )}
                    </div>
                    <div
                      class={[
                        "col-4 col-sm-3 col-lg-1 px-0 d-flex align-items-center flex-column",
                        classes.productGrid4,
                      ].join(" ")}
                    >
                      <span class="fs-6">PRICE</span>
                      <hr
                        class="w-100 mt-2 mb-4"
                        style={{ height: "2px", background: "#999" }}
                      />
                      <b class="fs-5">{`₹${curr.price}`}</b>
                    </div>
                    <div
                      class={[
                        "col-4 col-sm-4 col-lg-2 px-0 d-flex align-items-center flex-column",
                        classes.productGrid5,
                      ].join(" ")}
                    >
                      <span class="fs-6">RETAIL</span>
                      <hr
                        class="w-100 mt-2 mb-4"
                        style={{ height: "2px", background: "#999" }}
                      />
                      <div class="d-flex">
                        <div
                          style={{
                            height: "40px",
                            width: "30px",
                            borderTop: "1px solid #999",
                            borderLeft: "1px solid #999",
                            borderBottom: "1px solid #999",
                            borderRadius: "5px 0 0 5px",
                          }}
                          class="d-flex justify-content-center align-items-center"
                        >
                          ₹
                        </div>
                        {customizeProduct.map(
                          (ele) =>
                            ele.product_id === curr.prodId && (
                              <input
                                value={Number(ele.quantity) * curr.price}
                                style={{
                                  height: "40px",
                                  width: "80px",
                                  border: "1px solid #999",
                                  textAlign: "center",
                                  borderRadius: "0 5px 5px 0",
                                }}
                              />
                            )
                        )}
                      </div>
                    </div>
                    <div
                      class={[
                        "col-12 col-sm-2 col-lg-1 px-0 d-flex align-items-center flex-column",
                        classes.productGrid6,
                      ].join(" ")}
                    >
                      <hr
                        class="w-100 mb-4"
                        style={{
                          height: "2px",
                          background: "#999",
                          marginTop: "32px",
                        }}
                      />
                      <button class="btn">Delete</button>
                    </div>
                    <div class="col-12 px-0">
                      <hr
                        class="my-4"
                        style={{
                          height: "2px",
                          width: "100%",
                          background: "#999",
                        }}
                      />
                    </div>
                  </div>
                ))}

              <div
                class="col-12 px-0 d-flex justify-content-center align-content-center"
                style={{ height: "50px" }}
              >
                <button
                  class="btn btn-secondary"
                  style={{
                    height: "40px",
                    backgroundColor: "#EE3C2F",
                    color: "#fff",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>

          <div
            class="w-100 mt-4"
            style={{
              padding: "30px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: "8px",
              background: "#FFFFFF",
            }}
          >
            <div class="d-flex justify-content-center align-items-center">
              <div style={{ width: "350px" }}>
                <div class="row">
                  <div class="col-8">
                    <span class="fs-5">Subtotal (1 item)</span>
                  </div>
                  <div class="col-4 d-flex justify-content-end">
                    <b class="fs-5">{`₹${subTotal}`}</b>
                  </div>
                </div>
                <div class="row mt-1">
                  <div class="col-9">
                    <span class="fs-5">File digitization (1 item)</span>
                  </div>
                  <div class="col-3 d-flex justify-content-end">
                    <b class="fs-5">₹0</b>
                  </div>
                </div>
                <div class="row mt-1">
                  <div class="col-8">
                    <span class="fs-5">Total</span>
                  </div>
                  <div class="col-4 d-flex justify-content-end">
                    <b class="fs-5">{`₹${subTotal}`}</b>
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-center mt-5 mb-3">
                  <button
                    class="btn btn-danger"
                    onClick={handleNext}
                    style={{
                      height: "40px",
                      backgroundColor: "#EE3C2F",
                      color: "#fff",
                      fontWeight: "bold",
                      border: "none",
                    }}
                  >
                    Continue to shipping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
}

export default Products;
