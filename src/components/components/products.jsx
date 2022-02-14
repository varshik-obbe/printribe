import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import classes from "../../styles/add-product.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import CartItems from "./cartItems";

function Products({ handleNext }) {
  const navigate = useNavigate();
  console.log("pros comp");

  var customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
  const zekekeData = JSON.parse(localStorage.getItem("zekekeData"));

  const [cartItems, setCartItems] = useState();
  const [cartEmpty, setCartEmpty] = useState(!customizeProduct || customizeProduct.length === 0 ? true: false);

  const [value, setValue] = useState();

    const refresh = ()=>{
        // re-renders the component
        setValue({});
    }


  var subTotal = 0;
  var total_quantity = 0;
  // var common_quanitity = 0;

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

  //storing unique customizeProduct items in temp array & increasing quanitities of that product which is again added by user
  var temp = [];

  if(customizeProduct){  
  for (var i = 0; i < customizeProduct.length; i++) {
    if (temp.length == 0) {
      temp.push(customizeProduct[i]);
    } else {
      var added = false;

      for (var j = 0; j < temp.length; j++) {
        if (
          temp[j].product_id === customizeProduct[i].product_id &&
          temp[j].size === customizeProduct[i].size &&
          temp[j].color.color_code === customizeProduct[i].color.color_code
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
   //setting customizeProduct with unique elements present in temp by id,size ,color & cumulated quanitities of similar products
  customizeProduct = temp;
}

 

  customizeProduct &&
    customizeProduct.forEach((curr) => {
      cartItems &&
        cartItems.forEach((ele) => {
          if (ele.prodId === curr.product_id) {
            subTotal += Number(curr.quantity) * Number(ele.price);
          }
        });
        total_quantity += Number(curr.quantity);
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
    if ((!cartItems || cartItems.length === 0 ||!customizeProduct || customizeProduct.length === 0) && cartEmpty) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Cart Is Empty!",
        showConfirmButton: true,
      }).then(() => {
        setCartEmpty(true)
        navigate('/products');
      });
    }
  }, [cartEmpty,customizeProduct,cartItems]);

  const handleDeleteCartItem = (prod_id, prod_size, prod_colorCode) => {
    console.log("delete cart item", prod_id, prod_size, prod_colorCode);

    let temp1 = []

    // temp = customizeProduct.filter(
    //   (curr) => (curr.product_id !== prod_id && curr.size !== prod_size && curr.color.color_code !== prod_colorCode)
    // );

    customizeProduct.forEach((curr) =>{
      if(curr.product_id === prod_id && curr.size === prod_size && curr.color.color_code === prod_colorCode){
        console.log("deleted item",curr)
        // temp.push(curr);
      }else{
        temp1.push(curr);
      }
      
    })

    customizeProduct = temp1

    localStorage.setItem("customizeProduct", JSON.stringify(customizeProduct));
    // refresh()


    if (customizeProduct.length === 0) {      
        localStorage.removeItem("customizeProduct");
        localStorage.removeItem("cartItems")
        localStorage.removeItem("visitorId");
    }

    console.log(customizeProduct);

    window.location.reload() 

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
                !cartEmpty && 
                <CartItems
                  cartProduct={curr}
                  customizeProduct={customizeProduct}
                  cartItems={cartItems}
                  handleDeleteCartItem={handleDeleteCartItem}
                  handleEdit={handleEdit}
                />
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
