import React, { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import PaymentComp from "./payment-comp";
import axios from "axios";
import classes from "../../styles/add-product.module.css";
import { useNavigate } from "react-router-dom";
import CartItems from "./cartItems";
import Swal from "sweetalert2";

function ReviewOrder({ handleNext }) {
  const [mess, setMess] = React.useState(false);
  const [giftCard, setGiftCard] = React.useState(false);
  const [fulfillment, setFulfillment] = React.useState(false);
  const [filDig, setFilDig] = React.useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [total_quantity, setTotal_Quantity] = useState(0);

  var customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
  var customerShippingId = localStorage.getItem("customerShipping_id");
  // var total_quantity = localStorage.getItem("total_quantity");
  var shipping_charges = localStorage.getItem("shipping_charges");
  var customerId = localStorage.getItem("customerId");
  var visitor_id = localStorage.getItem("visitorId");
  var zekekeData = JSON.parse(localStorage.getItem("zekekeData"));
  var courierId = localStorage.getItem("courier_id");
  var customerEmail = localStorage.getItem("customer_email");
  var zekekeTotal = localStorage.getItem("zekekeTotal");
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState();
  const [cartEmpty, setCartEmpty] = useState(
    !customizeProduct || customizeProduct.length === 0 ? true : false
  );

  const productData = [];
  var productInfo = [];

  const apiCall = () => {
    //to remove duplicate items in productInfo array
    var temp = [];

    for (var i = 0; i < productInfo.length; i++) {
      if (temp.length == 0) {
        temp.push(productInfo[i]);
      } else {
        var added = false;

        for (var j = 0; j < temp.length; j++) {
          if (
            temp[j].product_id === productInfo[i].product_id &&
            temp[j].productsize === productInfo[i].productsize &&
            temp[j].productcolor === productInfo[i].productcolor
          ) {
            added = true;
          }
        }

        if (!added) {
          temp.push(productInfo[i]);
        }
      }
    }
    //setting customizeProduct with unique elements present in temp by id,size ,color & cumulated quanitities of similar products
    productInfo = temp;

    const payData = {
      orderData: {
        customerShipping_id: customerShippingId,
        product_info: productInfo,
        total_quantity: total_quantity,
        total_price: subTotal,
        shipping_charges: shipping_charges,
        payment_type: "cash on delivery",
        payment_ref_id: "23451AAX",
        customer_email: customerEmail,
        visitor_id: visitor_id,
        courier_id: courierId,
        customer_id: customerId,
      },
    };

    axios
      .post("/orders/addOrder", payData)
      .then(({ data }) => {
        console.log(data);
        window.location.href = "https://printribe-partner.web.app/";
      })
      .catch((err) => console.log(err));
  };

  const setData = () => {
    console.log("hppro", productData);
    console.log("hp", productInfo);

    productData.forEach((curr) => {
      // console.log("currid", customizeProduct);

      console.log(curr);

      customizeProduct.forEach((ele) => {
        console.log("ele", ele);

        zekekeData.forEach((zakekeVal) => {
          console.log("zakekeVal", zakekeVal);

          // console.log(curr, ele, zakekeVal);
          if (
            curr.id === ele.product_id &&
            ele.product_id === zakekeVal.ProductId
          ) {
            var dataObject = {
              product_id: curr.id,
              title: curr.title,
              description: curr.description,
              price: curr.price,
              productsize: ele.size,
              productcolor: ele.color.color_name,
              product_img: `https://api.theprintribe.com/${curr.img}`,
              category_id: curr.category_id,
              quantity: ele.quantity,
              zakeke_price: zakekeVal.totalPrice,
              designID: zakekeVal.designId,
            };
            productInfo.push(dataObject);

            if (productInfo.length > 0) {
              apiCall();
            }
          }
        });
      });
    });
  };

  const handlePay = () => {
    customizeProduct.forEach((prod) => {
      axios
        .get(`/products/getproduct/${prod.product_id}`)
        .then(({ data }) => {
          data.product.productdata.map((ele) => {
            productData.push(ele);
          });
          if (productData.length === customizeProduct.length) {
            setData();
          }
        })
        .catch((err) => console.log(err));
    });
  };

  var visitorId = JSON.parse(localStorage.getItem("visitorId"));
  const [ShippingTo, setShippingTo] = useState("");

  useEffect(() => {
    if (ShippingTo === "") {
      axios
        .get(`/customerShipping/getShippingById/${visitorId}`)
        .then(({ data }) => {
          console.log(data.shipping_data);

          setShippingTo({
            Name: data.shipping_data.fullname,
            Address_Line_1: data.shipping_data.address1,
            Address_Line_2: data.shipping_data.address2,
            City: data.shipping_data.city,
            Postal_Code: data.shipping_data.zip_code,
            Country: data.shipping_data.country,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [ShippingTo]);

  useEffect(() => {
    if (localStorage.getItem("customizeProduct") === null) {
      setCartEmpty(true);
    } else {
      setCartItems(JSON.parse(localStorage.getItem("customizeProduct")));
    }
  }, []);

  //cart empty prompt
  useEffect(() => {
    if (
      (!customizeProduct ||
        customizeProduct.length === 0 ||
        !customizeProduct ||
        customizeProduct.length === 0) &&
      cartEmpty
    ) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Cart Is Empty!",
        showConfirmButton: true,
      }).then(() => {
        setCartEmpty(true);
        navigate("/products");
      });
    }
  }, [cartEmpty, customizeProduct, cartItems]);

  const handleDeleteCartItem = (prod_id, prod_size, prod_colorCode) => {
    console.log("delete cart item", prod_id, prod_size, prod_colorCode);

    let temp1 = [];
    customizeProduct.forEach((curr) => {
      if (
        curr.product_id === prod_id &&
        curr.size === prod_size &&
        curr.color.color_code === prod_colorCode
      ) {
        console.log("deleted item", curr);
        // temp.push(curr);
      } else {
        temp1.push(curr);
      }
    });

    customizeProduct = temp1;

    localStorage.setItem("customizeProduct", JSON.stringify(customizeProduct));
    // refresh()

    if (customizeProduct.length === 0) {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("visitorId");
      localStorage.removeItem("customizeProduct");
      localStorage.removeItem("zekekeData");
      // localStorage.removeItem("subTotal");
      // localStorage.removeItem("total_quantity");
      localStorage.removeItem("zekekeTotal");
      localStorage.removeItem("shipping_charges");
      localStorage.removeItem("courier_id");
      localStorage.removeItem("customerShipping_id");

      navigate("/products");
    }

    console.log(customizeProduct);

    window.location.reload();
  };

  const handleEdit = (editProduct) => {
    zekekeData.forEach((ele) => {
      customizeProduct.forEach((curr) => {
        if (
          editProduct.product_id === curr.product_id &&
          editProduct.product_id === ele.ProductId
        )
          navigate(
            `/customizer?productid=${
              curr.color.color_name + curr.product_id
            }&masterProductId=${curr.product_id}&quantity=${
              curr.quantity
            }&designId=${ele.designId}&colorId=${curr.color.colorId}&color=${
              curr.color.color_name
            }&title=${curr.title}`
          );
      });
    });
  };

  //calculating subtotal & total_quantity for the cart
  useEffect(() => {
    var tempsubTotal = 0;
    var temptotal_quantity = 0;

    customizeProduct &&
      customizeProduct.forEach((curr) => {
        tempsubTotal += Number(curr.quantity) * Number(curr.price);
        temptotal_quantity += Number(curr.quantity);
      });
    // setCartValue(tempsubTotal)
    setSubTotal(tempsubTotal);
    setTotal_Quantity(temptotal_quantity);
    localStorage.setItem("subTotal", tempsubTotal);
    localStorage.setItem("total_quantity", temptotal_quantity);
  }, []);

  return (
    <>
      <React.Fragment>
        <div
          class="w-100"
          style={{
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "8px",
            background: "#FFF",
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
          <div class="">
            {customizeProduct &&
              customizeProduct.length !== 0 &&
              customizeProduct.map(
                (curr, index) =>
                  !cartEmpty && (
                    <CartItems
                      cartProduct={curr}
                      customizeProduct={customizeProduct}
                      cartItems={customizeProduct}
                      handleDeleteCartItem={handleDeleteCartItem}
                      handleEdit={handleEdit}
                    />
                  )
              )}
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
                onClick={() => navigate("/products")}
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
                    style={{
                      maxWidth: "600px",
                      padding: "10px",
                      height: "auto",
                    }}
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </React.Fragment>
          )}
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
          <b class="fs-4">Shipping</b>
          <div class="row mt-4">
            <div class="col-12 col-md-4 d-flex flex-column">
              <b class="fs-6">Shipping From</b>
              <span class="mt-2">India</span>
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
              <span class="">{ShippingTo && ShippingTo.Name}</span>
              <span class="">{ShippingTo && ShippingTo.Address_Line_1}</span>
              <span class="">{ShippingTo && ShippingTo.Address_Line_2}</span>
              <span class="">{ShippingTo && ShippingTo.City}</span>
              <span class="">{ShippingTo && ShippingTo.Postal_Code}</span>
              <span class="">{ShippingTo && ShippingTo.Country}</span>
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
          class="w-100 mt-4"
          style={{
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "8px",
            background: "#FFFFFF",
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
                        style={{ padding: "20px", color: "#000" }}
                      >
                        <b class="fs-6">Fulfilled in India</b>
                        <div class="d-flex justify-content-between mt-2 ms-3">
                          <span>Products and fulfillment</span>
                          <b></b>
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
                          <span>
                            {total_quantity > 1
                              ? `Subtotal (${total_quantity} items)`
                              : `Subtotal (${total_quantity} item)`}
                          </span>
                          <b>{`₹${zekekeTotal}`}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-3 d-flex justify-content-between">
                  <b>Shipping</b>
                  <b>{`₹${shipping_charges}`}</b>
                </div>
                <hr class="my-3" style={{ height: "1px", width: "100%" }} />
                <div class="col-12 d-flex justify-content-between">
                  <b class="fs-4">Total</b>
                  <b class="fs-4">{`₹${
                    Number(subTotal) + Number(shipping_charges)
                  }`}</b>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-center mt-5 mb-3">
                <button
                  class="btn btn-lg btn-danger w-100"
                  onClick={() => {
                    // handleNext();
                    handlePay();
                  }}
                >
                  Pay Securely Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default ReviewOrder;
