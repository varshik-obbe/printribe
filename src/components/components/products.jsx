import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import classes from "../../styles/add-product.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function Products({ handleNext }) {
  const navigate = useNavigate();
  // console.log("pros comp");

  var customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
  const zekekeData = JSON.parse(localStorage.getItem("zekekeData"));

  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState();
  const [cartEmpty, setCartEmpty] = useState(false);

  var subTotal = 0;
  var total_quantity = 0;
  var common_quanitity = 0;

  // customizeProduct = [...new Map(customizeProduct.map((item) => [item["product_id"], item])).values()]
  // customizeProduct = [...new Set(customizeProduct.map(item => item.group))]

  // for(var i=0;i<customizeProduct.length;i++){

  //   uniqueProducts[i].quantity=0;

  // customizeProduct.map(item=>{

  // if(item.product_id==uniqueProducts[i].product_id &&  item.size === uniqueProducts[i].size &&
  //   item.color.color_code === uniqueProducts[i].color.color_code){

  //     uniqueProducts[i].quantity+=item.quantity;
  //     console.log(uniqueProducts[i].quantity)
  //     }

  // })
  // }

  // var uniqueProducts = []

  // customizeProduct.map((curr) =>{
  //   customizeProduct.map((ele) =>{
  //     if(curr.product_id==ele.product_id && curr.size === ele.size && curr.color.color_code === ele.color.color_code){
  //       if(uniqueProducts.find())

  //     }
  //   })
  // })

  var temp = [];

  for (var i = 0; i < customizeProduct.length; i++) {
    if (temp.length == 0) {
      temp.push(customizeProduct[i]);
    } else {

      var added = false;

      for (var j = 0; j < temp.length; j++) {
        if (
          temp[j].product_id === customizeProduct[i].product_id &&
          temp[j].size === customizeProduct[i].size &&
          temp[j].color.color_code == customizeProduct[i].color.color_code
        ) {
          temp[j].quantity += customizeProduct[i].quantity;
          added = true;
        }
      }

      if (!added) {
        temp.push(customizeProduct[i]);        
      }
    }
  }

  customizeProduct = temp

  customizeProduct &&
    customizeProduct.forEach((curr) => {
      cartItems &&
        cartItems.forEach((ele) => {
          if (ele.prodId === curr.product_id) {
            subTotal += Number(curr.quantity) * Number(ele.price);
          }
          total_quantity += Number(curr.quantity);
        });
    });

  var zekekeTotal = 0;

  zekekeData &&
    zekekeData.forEach((curr) => {
      cartItems &&
        cartItems.forEach((ele) => {
          if (ele.prodId === curr.ProductId) {
            zekekeTotal += Number(curr.totalPrice);
          }
        });
    });

  localStorage.setItem("subTotal", subTotal);
  localStorage.setItem("total_quantity", total_quantity);
  localStorage.setItem("zekekeTotal", zekekeTotal);

  useEffect(() => {
    if (localStorage.getItem("cartItems") === null) {
      setCartEmpty(true);
    } else {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  //cart empty prompt
  useEffect(() => {
    if ((!cartItems || cartItems.length === 0) && cartEmpty) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Cart Is Empty!",
        showConfirmButton: true,
      }).then(() => {
        navigate(-1);
      });
    }
  }, [cartEmpty]);

  const handleDeleteCartItem = (index) => {
    console.log(index);

    cartItems.splice(index, 1);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    if (cartItems.length === 0) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Cart Is Empty!",
        showConfirmButton: true,
      }).then(() => {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("visitorId");
        navigate(-1);
      });
    }
    console.log(cartItems);
  };

  // const handleChangeQty = (task, prod_id,prod_size,prod_colorCode) => {

  //   // console.log(prod_id)
  //   // console.log(prod_size)
  //   // console.log(prod_colorCode)

  //   if (task === "increase") {
  //     setQuantity(Number(quantity) + 1);

  //     // customizeProduct[index].quantity = (Number(quantity) + 1).toString();

  //     customizeProduct.map((curr) =>{
  //       if(curr.product_id === prod_id && curr.size === prod_size && curr.prod_colorCode === prod_colorCode){
  //         curr.quantity = (Number(quantity) + 1).toString();
  //       }
  //     })

  //     localStorage.setItem(
  //       "customizeProduct",
  //       JSON.stringify(customizeProduct)
  //     );
  //   } else {
  //     if (quantity == 1) return;

  //     setQuantity(Number(quantity) - 1);

  //     customizeProduct.map((curr) =>{
  //       if(curr.product_id === prod_id && curr.size === prod_size && curr.prod_colorCode === prod_colorCode){
  //         curr.quantity = (Number(quantity) - 1).toString();
  //       }
  //     })

  //     localStorage.setItem(
  //       "customizeProduct",
  //       JSON.stringify(customizeProduct)
  //     );
  //   }
  // };

  const handleEdit = (editProduct) => {
    zekekeData.forEach((ele) => {
      customizeProduct.forEach((curr) => {
        if (
          editProduct.prodId === curr.product_id &&
          editProduct.prodId === ele.ProductId
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

  return (
    <>
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
            {customizeProduct &&
              customizeProduct.length !== 0 &&
              customizeProduct.map((curr, index) => (
                <div class="row">
                  <div class="col-12 col-md-6 col-lg-4 px-0">
                    <span class="fs-6">PRODUCTS</span>
                    <hr
                      class="w-100 mt-2 mb-4"
                      style={{ height: "2px", background: "#999" }}
                    />
                    <div class="row" style={{ paddingRight: "25px" }}>
                      <div class="col-4 col-sm-3 pe-0">
                      {
                        cartItems && cartItems.map((ele) =>(
                          curr.product_id === ele.prodId
                          &&
                          <img
                          src={ele.image}
                          alt=""
                          style={{
                            width: "100%",
                            objectFit: "contain",
                          }}
                        />
                        ))
                      }
                        
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
                          {cartItems && cartItems.map(
                            (ele) =>
                              curr.product_id === ele.prodId && (
                                <div
                                  style={{
                                    height: "12px",
                                    width: "12px",
                                    background: curr.color.color_code,
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
                        <button
                          class="p-0 border-0 bg-transparent text-primary"
                          onClick={() => handleEdit(curr)}
                        >
                          Edit
                        </button>
                      </div>

                      {/* <button class="p-0 ms-3 border-0 bg-transparent text-primary">
                            Copy
                          </button> */}
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
                        {
                        cartItems && cartItems.map((ele) =>(
                          curr.product_id === ele.prodId
                          &&
                          <img
                            src={ele.zekekeImage}
                            alt=""
                            style={{
                              objectFit: "contain",
                              height: "100%",
                              width: "100%",
                            }}
                          />
                        ))
                      }
                          
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
                    {cartItems && cartItems.map((ele, index) => {
                      if (curr.product_id === ele.prodId) {
                        quantity === 1 && setQuantity(curr.quantity);
                        return (
                          <div
                            style={{ display: "flex" }}
                            className={classes.cart_qty_container}
                          >
                            <button
                              // onClick={() => handleChangeQty("decrease", curr.product_id,curr.size,curr.color.color_code)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              style={{
                                height: "40px",
                                width: "50px",
                                border: "1px solid #999",
                                textAlign: "center",
                                borderRadius: "5px",
                                margin: "0 5px",
                              }}
                            />
                            <button
                              // onClick={() => handleChangeQty("increase", curr.product_id,curr.size,curr.color.color_code)}
                            >
                              +
                            </button>
                          </div>
                        );
                      }
                    })}
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
                    {cartItems && cartItems.map((ele) =>(
                      ele.prodId === curr.product_id 
                      &&(
                       <b class="fs-5">{`₹${ele.price}`}</b>
                      )
                    ))}
                    
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
                      {cartItems && cartItems.map(
                        (ele) =>
                          curr.product_id === ele.prodId && (
                            <input
                              value={Number(curr.quantity) * ele.price}
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
                    <button
                      class="btn"
                      onClick={() => handleDeleteCartItem(index)}
                    >
                      Delete
                    </button>
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
          <div class="d-flex justify-content-center align-items-center">
            <div style={{ width: "350px" }}>
              {/* <div class="row">
                  <div class="col-8">
                    <span class="fs-5">
                      {total_quantity > 1
                        ? `Subtotal (${total_quantity} items)`
                        : `Subtotal (${total_quantity} item)`}
                    </span>
                  </div>
                  <div class="col-4 d-flex justify-content-end">
                    <b class="fs-5">{`₹${subTotal}`}</b>
                  </div>
                </div> */}
              <div class="row mt-1">
                <div class="col-9">
                  {/* <span class="fs-5">
                      {total_quantity > 1
                        ? `File digitization (${total_quantity} items)`
                        : `File digitization (${total_quantity} item)`}
                    </span> */}
                </div>
                {/* <div class="col-3 d-flex justify-content-end">
                    <b class="fs-5">{`₹${zekekeData && zekekeTotal}`}</b>
                  </div> */}
              </div>
              <div class="row mt-1">
                {/* <div class="col-8">
                    <span class="fs-5">Total</span>
                  </div> */}
                {/* <div class="col-4 d-flex justify-content-end">
                    <b class="fs-5">{`₹${subTotal + zekekeTotal}`}</b>
                  </div> */}
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
    </>
  );
}

export default Products;
