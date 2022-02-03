import PaymentComp from "./payment-comp";
import React,{useEffect,useState} from "react";
import axios from "axios";
import classes from "../../styles/add-product.module.css";

function ReviewOrder({products,handleNext}) {
  // const { handleNext } = props;
  const [mess, setMess] = React.useState(false);
  const [giftCard, setGiftCard] = React.useState(false);
  const [fulfillment, setFulfillment] = React.useState(false);
  const [filDig, setFilDig] = React.useState(false);

  const handlePay = () => {

    var customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"))
    var customerShippingId = localStorage.getItem("customerShipping_id");
    var total_quantity = localStorage.getItem("total_quantity")
    var subTotal = localStorage.getItem("subTotal")
    var shipping_charges = localStorage.getItem("shipping_charges")
    var customerId = localStorage.getItem("customerId")
    var visitor_id = localStorage.getItem("visitorId")
    var zekekeData = JSON.parse(localStorage.getItem("zekekeData"))

    var productData = []
    var productInfo = []

    customizeProduct.forEach((prod) => {
      axios.get(`/products/getproduct/${prod.product_id}`)
        .then(({ data }) => {

          productData.push(data.product.productdata[0])



        })
        .catch((err) => console.log(err))
    })

    console.log("prod", productData);
    console.log("cust", customizeProduct);
    console.log("zakeke", zekekeData);
    let prodData = productData.map(item=>{
      return item
    })
    prodData.forEach((curr) => {
      console.log('currid',curr.id);
      customizeProduct.forEach((ele) => {
      console.log('eleid',ele.id);

        zekekeData.forEach((zakekeVal) => {
      console.log('zakekeValid',zakekeVal.id);

          console.log(curr,ele,zakekeVal);
          if (curr.id === ele.product_id && ele.id === zakekeVal.ProductId) {

            var dataObject = {
              "product_id": curr.id,
              "title": curr.title,
              "description": curr.description,
              "price": curr.price,
              "productsize": ele.size,
              "productcolor": ele.color.color_name,
              "product_img": `https://api.theprintribe.com/${curr.img}`,
              "category_id": curr.category_id,
              "quantity": ele.quantity,
              "zakeke_price": "0",
              "designID": zakekeVal.designId
            }
            console.log(dataObject);
            productInfo.push(dataObject)
          }
        })
      })
    })
    console.log(productInfo);


    const payData = {
      "orderData": {
        "customerShipping_id": customerShippingId,
        "product_info": productInfo,
        "total_quantity": total_quantity,
        "total_price": subTotal,
        "shipping_charges": shipping_charges,
        "payment_type": "cash on delivery",
        "payment_ref_id": "23451AAX",
        "customer_email": "mktg@obbe.in",
        "visitor_id": visitor_id,
        "courier_id": "6",
        "customer_id": customerId
      }
    }

    axios.post('/orders/addOrder', payData)
      .then(({ data }) => {
        console.log(data)
        window.location.href = "https://printribe-partner.web.app/"

      })
      .catch(err => console.log(err))
  }

  var visitorId = JSON.parse(localStorage.getItem("visitorId"))
  const [ShippingTo,setShippingTo] = useState("")

  useEffect(() =>{
    axios.get(`/customerShipping/getShippingById/${visitorId}`)
    .then(({ data }) =>{
      console.log(data.shipping_data)

      setShippingTo({
        Name : data.shipping_data.fullname,
        Address_Line_1 :data.shipping_data.address1 ,
        Address_Line_2 :data.shipping_data.address2 ,
        City : data.shipping_data.city,
        Postal_Code : data.shipping_data.zip_code,
        Country : data.shipping_data.country
      })

    }).catch((err) => console.log(err))
  },[])

  const customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));

  return (
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
                            {customizeProduct && customizeProduct.map(
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
                  style={{ maxWidth: "600px", padding: "10px", height: "auto" }}
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
              <button class="btn btn-lg btn-danger w-100" onClick={() => { handleNext(); handlePay(); }}>
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
