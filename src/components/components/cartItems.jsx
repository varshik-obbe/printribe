import React, { useEffect, useState } from "react";
import classes from "../../styles/add-product.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Delayed from "../Delayed";
import Loader from "../Loader/Loader";

const CartItems = ({
  cartProduct,
  customizeProduct,
  cartItems,
  handleDeleteCartItem,
  handleEdit,
  getRetailPrice,
}) => {
  const [quantity, setQuantity] = useState(cartProduct.quantity);

  const navigate = useNavigate();

  var subTotal = localStorage.getItem("subTotal");

  const handleChangeQty = (task) => {
    if (task === "increase") {
      setQuantity(Number(quantity) + 1);
    } else {
      if (quantity === 1) {
        return;
      }

      setQuantity(Number(quantity) - 1);
    }
  };

  useEffect(() => {
    customizeProduct.map((curr) => {
      if (
        curr.product_id === cartProduct.product_id &&
        curr.size === cartProduct.size &&
        curr.color.color_code === cartProduct.color.color_code
      ) {
        curr.quantity = Number(quantity);
        return localStorage.setItem(
          "customizeProduct",
          JSON.stringify(customizeProduct)
        );
      }
    });
  }, [quantity]);

  const checkQty = (e) => {
    if (e.target.value < 1 || e.target.value === "") {
      setQuantity(1);
    }
  };

  return (
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
              src={cartProduct.productImg}
              alt="product img"
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <div class="col-8 col-sm-9">
            <b class=" text-break">{cartProduct.title}</b>
            <hr class="my-2" />
            <span>Thread colors</span>
            <br />
            <div class="d-flex mt-1">
              {cartItems &&
                cartItems.map((ele) => (
                  <div
                    style={{
                      height: "12px",
                      width: "12px",
                      background: cartProduct.color.color_name,
                      marginRight: "5px",
                      border: "1px solid #666",
                      borderRadius: "2px",
                    }}
                  />
                ))}
            </div>
            <div class="mt-3" />
            <button
              class="p-0 border-0 bg-transparent text-primary"
              onClick={() => handleEdit(cartProduct)}
            >
              Edit
            </button>
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
                src={cartProduct.link}
                alt=""
                style={{
                  objectFit: "fit",
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
        <div style={{ display: "flex" }} className={classes.cart_qty_container}>
          <button onClick={() => handleChangeQty("decrease")}>-</button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            onBlur={(e) => checkQty(e)}
            style={{
              height: "40px",
              width: "50px",
              border: "1px solid #999",
              textAlign: "center",
              borderRadius: "5px",
              margin: "0 5px",
            }}
          />
          <button onClick={() => handleChangeQty("increase")}>+</button>
        </div>
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

        <b class="fs-5">{`₹${cartProduct.price}`}</b>
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
          <input
            value={quantity * cartProduct.price}
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
          onClick={() =>
            handleDeleteCartItem(
              cartProduct.product_id,
              cartProduct.size,
              cartProduct.color.color_code
            )
          }
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
  );
};

export default CartItems;
