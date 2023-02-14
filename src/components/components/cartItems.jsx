import React, { useEffect, useState } from "react";
import classes from "../../styles/add-product.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Delayed from "../Delayed";
import Loader from "../Loader/Loader";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {AiFillCloseCircle} from 'react-icons/ai'
const CartItems = ({
  cartProduct,
  customizeProduct,
  cartItems,
  handleDeleteCartItem,
  handleEdit,
  getRetailPrice,
  
}) => {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const[retail,setRetail]=useState(cartProduct.retail_price)
  const[designGst,setDesignGst]=useState()

  const[handlingGst,setHandlingGst]=useState(cartProduct.handling_gst)

  const[previewUrl,setPreviewUrl]=useState();
  const[open,setOpen]=useState(false)
  const navigate = useNavigate();
console.log(customizeProduct,"customizeProduct")
  var subTotal = localStorage.getItem("customizeProduct");
const design_gst=()=>{
 console.log(customizeProduct.map(item=>item.designGst)) 
}
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
        console.log(curr,"crrrrrrrr")
        curr.retail_price= Number(retail)
        curr.handling_gst=Number(handlingGst)
        curr.design_gst=curr.design_gst

        curr.quantity = Number(quantity);
        return localStorage.setItem(
          "customizeProduct",
          JSON.stringify(customizeProduct)
        );
      }
    });
  }, [quantity,retail,handlingGst,designGst]);

  const checkQty = (e) => {
    if (e.target.value < 1 || e.target.value === "") {
      setQuantity(1);
    }
  };
const handlePreview=(img)=>{
  setPreviewUrl(img);
  setOpen(true)

}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

  return (
    <>   <Modal
    open={open}
    onClose={()=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    
  >
    <Box sx={style}>
      <AiFillCloseCircle size={25} onClick={()=>setOpen(false)} className="preview-close-icon" style={{position:'absolute',right:0,top:0}} />

    <img 
                src={previewUrl}
                alt=""
                style={{
                  objectFit: "contain",
                  height: "90%",
                  width: "100%",
                }}
              />
    </Box>
  </Modal>
    <div class="row">
      <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div class="col-12 col-md-6 col-lg-2 px-0">
        <span class="fs-6">PRODUCTS</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />
        <div class="row" style={{ paddingRight: "25px" }}>
          {/* <div class="col-4 col-sm-3 pe-0">
            <img
              src={cartProduct.productImg}
              alt="product img"
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div> */}

          <div class="col-8 col-sm-9">
            <b class=" text-break">{cartProduct.title}</b>
            <hr class="my-2" />
            <div className="d-flex justify-content-between">
            <div>
            <span>Thread colors</span>
            <br />
            <div class="d-flex mt-1">
              {/* {cartItems &&
                cartItems.map((ele) => ( */}
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
                {/* ))} */}
            </div>
            </div>
            <div><span>Size</span>
            <br />
            <div class="d-flex mt-1">
              {cartProduct.size}
            </div></div></div>
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
        class={["col-12 col-md-6 col-lg-2 px-0", classes.productGrid2].join(
          " "
        )}
      >
        <span class="fs-6">PRINT FILE</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />

        <div class="row g-0">
          <div class="col-6 col-lg-7">
            <div
              style={{
                border: "1px solid #d0d0d0",
                borderRadius: "5px 5px 0 0",
              }}
            >
              <img 
              onClick={()=>handlePreview(cartProduct.link)}
                src={cartProduct.link}
                alt=""
                style={{
                  objectFit: "contain",
                  height: "90%",
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
          "col-4 col-sm-3 col-lg-1 px-0 d-flex align-items-center flex-column",
          classes.productGrid4,
        ].join(" ")}
      >
        <span class="fs-6" style={{whiteSpace: "nowrap"}}>DESIGN PRICE</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />
{console.log(customizeProduct,"customizeProductcustomizeProduct")}
        <b class="fs-5">{`₹${customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price}`}</b>
      </div>
      <div
        class={[
          "col-4 col-sm-4 col-lg-1 px-0 d-flex align-items-center flex-column",
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
            value={retail}
            onChange={(e)=>setRetail(e.target.value)}
            style={{
              height: "40px",
              width: "60px",
              border: "1px solid #999",
              textAlign: "center",
              borderRadius: "0 5px 5px 0",
            }}
          />
        </div>
      </div>
      <div
        class={[
          "col-4 col-sm-4 col-lg-1 px-0 d-flex align-items-center flex-column",
          classes.productGrid5,
        ].join(" ")}
      >
        <span class="fs-6">Design GST</span>
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
          {console.log(customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price,Number(cartProduct.design_gst),"=======================")}
          <input
            value={(Number(customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price)*Number(cartProduct.design_gst))/100}
            onChange={(e)=>setDesignGst(e.target.value)}
            style={{
              height: "40px",
              width: "60px",
              border: "1px solid #999",
              textAlign: "center",
              borderRadius: "0 5px 5px 0",
            }}
          />
        </div>
      </div>
      {/* <div
        class={[
          "col-4 col-sm-4 col-lg-1 px-0 d-flex align-items-center flex-column",
          classes.productGrid5,
        ].join(" ")}
      >
        <span class="fs-6">Handling GST</span>
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
            value={handlingGst}
            onChange={(e)=>setHandlingGst(e.target.value)}
            style={{
              height: "40px",
              width: "60px",
              border: "1px solid #999",
              textAlign: "center",
              borderRadius: "0 5px 5px 0",
            }}
          />
        </div>
      </div> */}
      <div
        class={[
          "col-4 col-sm-4 col-lg-2 px-0 d-flex align-items-center flex-column",
          classes.productGrid5,
        ].join(" ")}
      >
        <span class="fs-6">Total</span>
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
            value={(quantity * cartProduct.price)+(quantity * (customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price))}
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
    </div></>
  );
};

export default CartItems;
