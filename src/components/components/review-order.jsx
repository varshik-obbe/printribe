import React from "react";
import classes from "../../styles/add-product.module.css";
import PaymentComp from "./payment-comp";

function ReviewOrder(props) {
  const { handleNext } = props;
  const [mess, setMess] = React.useState(false);
  const [giftCard, setGiftCard] = React.useState(false);
  const [fulfillment, setFulfillment] = React.useState(false);
  const [filDig, setFilDig] = React.useState(false);
  return (
    <React.Fragment>
      <div
        class="w-100 my-5"
        style={{
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
        }}
      >
        <div class="mb-3">
          <b class="fs-4 px-0">Order Items</b>
          <button
            style={{
              background: "transparent",
              border: "0",
              color: "blue",
              padding: "0",
              marginLeft: "15px",
            }}
          >
            Edit
          </button>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5 pe-0">
            <span class="fs-6">PRODUCTS</span>
            <hr
              class="w-100 mt-2 mb-4"
              style={{ height: "2px", background: "#999" }}
            />
            <div class="row" style={{ paddingRight: "25px" }}>
              <div class="col-4 col-sm-3 pe-0">
                <img
                  src={
                    "https://files.cdn.printful.com/products/411/11249_1581496513.jpg"
                  }
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div class="col-8 col-sm-9">
                <b class=" text-break">
                  Unisex Fleece Pullover | Cotton Heritage M2480 (White / XL)
                </b>
                <hr class="my-2" />
                <span>Thread colors</span>
                <br />
                <span class="mt-2">Left chest:</span>
                <div class="d-flex mt-1">
                  <div
                    style={{
                      height: "12px",
                      width: "12px",
                      background: "#FFF",
                      marginRight: "5px",
                      border: "1px solid #666",
                      borderRadius: "2px",
                    }}
                  />
                  <div
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class={["col-12 col-md-6 col-lg-3 px-0", classes.productGrid2].join(
              " "
            )}
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
                    src={
                      "https://files.cdn.printful.com/files/1c5/1c563115f7a227a13e0cc8c818fa65eb_thumb.png"
                    }
                    alt=""
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "30px",
                    borderBottom: "1px solid #d0d0d0",
                    borderLeft: "1px solid #d0d0d0",
                    borderRight: "1px solid #d0d0d0",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "0 0 5px 5px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Left Chest
                  </span>
                </div>
              </div>
              <div class="col-6 col-lg-5">
                <div
                  style={{
                    height: "140px",
                    border: "1px solid #d0d0d0",
                    borderRadius: "5px 5px 0 0",
                  }}
                >
                  <img
                    src={
                      "https://files.cdn.printful.com/files/b7f/b7fa6044b42067afb47a2cd2dd78c155_thumb.png"
                    }
                    alt=""
                    style={{
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "30px",
                    borderBottom: "1px solid #d0d0d0",
                    borderLeft: "1px solid #d0d0d0",
                    borderRight: "1px solid #d0d0d0",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "0 0 5px 5px",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>Mockup</span>
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
            <input
              type="text"
              value="1"
              style={{
                height: "40px",
                width: "50px",
                border: "1px solid #999",
                textAlign: "center",
                borderRadius: "5px",
              }}
            />
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
            <b class="fs-5">$25</b>
          </div>
          <div
            class={[
              "col-4 col-sm-6 col-lg-2 px-0 d-flex align-items-center flex-column",
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
                $
              </div>
              <input
                type="text"
                value="1"
                style={{
                  height: "40px",
                  width: "80px",
                  border: "1px solid #999",
                  textAlign: "center",
                  borderRadius: "0 5px 5px 0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-100 mb-5"
        style={{
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
        }}
      >
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={mess}
              id="flexCheckChecked"
              onClick={() => setMess(!mess)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Include a personalized message
            </label>
          </div>
        </div>
        {mess && (
          <React.Fragment>
            <div class="col-12 mt-4">
              <label for="basic-url" class="form-label mb-2">
                <b>Subject (optional)</b>
              </label>
              <div class="input-group mb-2">
                <input
                  type="email"
                  class="form-control"
                  style={{ maxWidth: "400px" }}
                />
              </div>
            </div>
            <div class="col-12 mt-4">
              <label for="basic-url" class="form-label mb-2">
                <b>Message (optional)</b>
              </label>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  style={{ maxWidth: "600px", padding: "10px", height: "auto" }}
                  rows="5"
                ></textarea>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div
        class="w-100 mb-5"
        style={{
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
        }}
      >
        <b class="fs-4">Shipping</b>
        <div class="row mt-4">
          <div class="col-12 col-md-4 d-flex flex-column">
            <b class="fs-6">Shipping From</b>
            <span class="mt-2">United States</span>
          </div>
          <div
            className={[
              "col-12 col-md-4 d-flex flex-column",
              classes.shippingGrid2,
            ].join(" ")}
          >
            <div class="mb-2">
              <b class="fs-6">Shipping to</b>
              <button
                style={{
                  background: "transparent",
                  border: "0",
                  color: "blue",
                }}
              >
                Edit
              </button>
            </div>
            <span class="">Name</span>
            <span class="">Address Line 1</span>
            <span class="">Address Line 2</span>
            <span class="">City</span>
            <span class="">Postal Code</span>
            <span class="">Country</span>
          </div>
          <div
            class={[
              "col-12 col-md-4 d-flex flex-column",
              classes.shippingGrid2,
            ].join(" ")}
          >
            <div class="mb-2">
              <b class="fs-6">Shipping Method</b>
              <button
                style={{
                  background: "transparent",
                  border: "0",
                  color: "blue",
                }}
              >
                Edit
              </button>
            </div>
            <span class="text-break">
              Flat Rate (Estimated delivery: Feb 3⁠– 9)
            </span>
          </div>
        </div>
      </div>
      <div
        class="w-100 mb-5"
        style={{
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
        }}
      >
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={mess}
              id="flexCheckChecked"
              onClick={() => setGiftCard(!giftCard)}
            />
            <label class="form-check-label" for="flexCheckChecked">
              Apply a discount or gift card code to your order
            </label>
          </div>
        </div>
        {giftCard && (
          <React.Fragment>
            <div class="col-12 mt-4">
              <label for="basic-url" class="form-label mb-2">
                <b>Discount or gift card code</b>
              </label>
              <div class="input-group mb-2">
                <input
                  type="email"
                  class="form-control"
                  style={{ maxWidth: "400px" }}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <React.Fragment>
        <PaymentComp />
      </React.Fragment>
      <div
        class="w-100 mb-5"
        style={{
          padding: "30px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "8px",
        }}
      >
        <div class="d-flex justify-content-center align-items-center">
          <div style={{ width: "350px" }}>
            <div class="row">
              <div class="col-12">
                <b class="fs-5">Order breakdown</b>
              </div>
              <div class="col-12 mt-3">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        onClick={() => setFulfillment(!fulfillment)}
                        style={{ height: "40px" }}
                      >
                        Fulfillment
                      </button>
                    </h2>
                    <div
                      class={
                        fulfillment
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse hide"
                      }
                      style={{ padding: "20px" }}
                    >
                      <b class="fs-6">Fulfilled in USA</b>
                      <div class="d-flex justify-content-between mt-2 ms-3">
                        <span>Products and fulfillment</span>
                        <b>$25</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        onClick={() => setFilDig(!filDig)}
                        style={{ height: "40px" }}
                      >
                        File digitization
                      </button>
                    </h2>
                    <div
                      class={
                        filDig
                          ? "accordion-collapse collapse show"
                          : "accordion-collapse collapse hide"
                      }
                      style={{ padding: "20px" }}
                    >
                      <div class="d-flex justify-content-between">
                        <span>1 file</span>
                        <b>$6.50</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3 d-flex justify-content-between">
                <b>Shipping</b>
                <b>$13.99</b>
              </div>
              <hr class="my-3" style={{ height: "1px", width: "100%" }} />
              <div class="col-12 d-flex justify-content-between">
                <b class="fs-4">Total</b>
                <b class="fs-4">$45.49</b>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center mt-5 mb-3">
              <button class="btn btn-lg btn-danger w-100" onClick={handleNext}>
                Pay Securely Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ReviewOrder;
