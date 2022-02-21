import React, { useEffect, useState } from "react";
import classes from "./../styles/add-product.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Delayed from "./Delayed";
import Loader from "./Loader/Loader";
import { Spinner, Modal, Alert } from "react-bootstrap";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const InventoryProducts = ({
  customizeProduct,
  cartItems,
  handleDeleteCartItem,
  handleEdit,
}) => {
  const [quantity, setQuantity] = useState();
  const [modalState, setModalState] = useState(false);
  const [showStatusProduct, setShowStatusProduct] = useState(null);
  const [showStatusImages, setShowStatusImages] = useState(null);
  const [showStatusQts, setShowStatusQts] = useState(null);
  const [showModalClose , setShowModalClose] = useState(false)

  //dummy cartProduct
  const cartProduct = [
    {
      name: "Blue T Shirt",
    },
  ];

  const navigate = useNavigate();

  const handleChangeQty = (task) => {
    if (task === "increase") {
      setQuantity(Number(quantity) + 1);
    } else {
      if (quantity === 1) return;

      setQuantity(Number(quantity) - 1);
    }
  };

  //   useEffect(() => {
  //     customizeProduct.map((curr) => {
  //       if (
  //         curr.product_id === cartProduct.product_id &&
  //         curr.size === cartProduct.size &&
  //         curr.color.color_code === cartProduct.color.color_code
  //       ) {
  //         curr.quantity = Number(quantity);
  //         return localStorage.setItem(
  //           "customizeProduct",
  //           JSON.stringify(customizeProduct)
  //         );
  //       }
  //     });
  //   }, [quantity]);

  const checkQty = (e) => {
    if (e.target.value < 1 || e.target.value === "") {
      setQuantity(1);
    }
  };

  const modalStyle = {
    modalItem: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "1%",
      color: "gray",
    },
  };

  const makeApiCall = () => {
    //three apis here
    setTimeout(() => {
      setShowStatusProduct(true);
      setTimeout(() => {
        setShowStatusImages(true);
        setTimeout(() => {
          setShowStatusQts(false);
          setShowModalClose(true)
        }, 2000);
      }, 2000);
    }, 2000);
  };

  const handleModalClose = () => {
    setModalState(false);
    setShowStatusProduct(null);
    setShowStatusImages(null);
    setShowStatusQts(null);
    setShowModalClose(false)
  };

  return (
    <div class="row container mx-auto mb-3"
    style={{
      padding: "30px",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      borderRadius: "8px",
      background: "#FFFFFF",
    }}>
      <div
        class={[
          "col-4 col-sm-3 col-lg-3 px-0 d-flex align-items-center flex-column",
          classes.productGrid4,
        ].join(" ")}
      >
        <span class="fs-6">IMAGE</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />
        <img
          src="https://www.babyshop.com/images/690857/card_xlarge.jpg"
          alt=""
          width="100px"
        />
      </div>
      <div
        class={[
          "col-4 col-sm-3 col-lg-2 px-0 d-flex align-items-center flex-column",
          classes.productGrid4,
        ].join(" ")}
      >
        <span class="fs-6">TITLE</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />
        <b class=" text-break">A Blue T Shirt</b>
      </div>
      <div
        class={[
          "col-4 col-sm-3 col-lg-2 px-0 d-flex align-items-center flex-column",
          classes.productGrid4,
        ].join(" ")}
      >
        <span class="fs-6">COLOR</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />
        <div class="d-flex mt-1">
          <div
            style={{
              height: "12px",
              width: "12px",
              background: "green",
              marginRight: "5px",
              border: "1px solid #666",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
      <div
        class={[
          "col-4 col-sm-3 col-lg-1 px-0 d-flex align-items-center flex-column",
          classes.productGrid4,
        ].join(" ")}
      >
        <span class="fs-6">SIZE</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />

        <b class="fs-5">S</b>
      </div>
      <div
        class={[
          "col-4 col-sm-3 col-lg-2 px-0 d-flex align-items-center flex-column",
          classes.productGrid4,
        ].join(" ")}
      >
        <span class="fs-6">PRICE</span>
        <hr
          class="w-100 mt-2 mb-4"
          style={{ height: "2px", background: "#999" }}
        />

        <b class="fs-5">₹200</b>
      </div>
      <div
        class={[
          "col-12 col-sm-2 col-lg-2 px-0 d-flex align-items-center flex-column",
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
          class="btn btn-secondary"
          style={{
            height: "40px",
            backgroundColor: "#EE3C2F",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
          }}
          onClick={() => {
            setModalState(!modalState);
            makeApiCall();
          }}
        >
          Add
        </button>
      </div>

      <Modal
        show={modalState}
        onHide={() => setModalState(!false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Header> <h5 className="mx-auto">Adding Product To Wix Store</h5> </Modal.Header>
        <Modal.Body className="p-3">
          <div style={modalStyle.modalItem}>
            {showStatusProduct === true ? (
              <>
                <Alert
                  variant="success"
                  style={{ width: "100%" }}
                  className="d-flex justify-content-around align-items-center"
                >
                  <h5 style={{ color: "lightblack" }}>Product Added</h5>
                  <AiFillCheckCircle
                    style={{ color: "green", transform: "scale(1.5)" }}
                  />
                </Alert>
              </>
            ) : showStatusProduct === false ? (
              <>
                <Alert
                  variant="danger"
                  style={{ width: "100%" }}
                  className="d-flex justify-content-around align-items-center"
                >
                  <h5 style={{ color: "lightblack" }}>
                    Adding Product Failed{" "}
                  </h5>
                  <AiFillCloseCircle
                    style={{ color: "red", transform: "scale(1.5)" }}
                  />{" "}
                </Alert>
              </>
            ) : (
              <>
                <Alert
                  variant="primary"
                  style={{ width: "100%" }}
                  className="d-flex justify-content-around align-items-center"
                >
                  <h5 style={{ color: "lightblack" }}>Adding Product </h5>
                  <Spinner animation="border" variant="primary" />
                </Alert>
              </>
            )}
          </div>
          <div style={modalStyle.modalItem}>
            {showStatusProduct && (
              <>
                {showStatusImages === true ? (
                  <>
                    <Alert
                      variant="success"
                      style={{ width: "100%" }}
                      className="d-flex justify-content-around align-items-center"
                    >
                      <h5 style={{ color: "lightblack" }}>Images Added</h5>
                      <AiFillCheckCircle
                        style={{ color: "green", transform: "scale(1.5)" }}
                      />
                    </Alert>
                  </>
                ) : showStatusImages === false ? (
                  <>
                    <Alert
                      variant="danger"
                      style={{ width: "100%" }}
                      className="d-flex justify-content-around align-items-center"
                    >
                      <h5 style={{ color: "lightblack" }}>
                        Adding Images Failed{" "}
                      </h5>
                      <AiFillCloseCircle
                        style={{ color: "red", transform: "scale(1.5)" }}
                      />{" "}
                    </Alert>
                  </>
                ) : (
                  <>
                    <Alert
                      variant="primary"
                      style={{ width: "100%" }}
                      className="d-flex justify-content-around align-items-center"
                    >
                      <h5 style={{ color: "lightblack" }}>Adding Images </h5>
                      <Spinner animation="border" variant="primary" />
                    </Alert>
                  </>
                )}
              </>
            )}
          </div>
          <div style={modalStyle.modalItem}>
            {showStatusProduct && showStatusImages && (
              <>
                {showStatusQts === true ? (
                  <>
                    <Alert
                      variant="success"
                      style={{ width: "100%" }}
                      className="d-flex justify-content-around align-items-center"
                    >
                      <h5 style={{ color: "lightblack" }}>Quantities Added</h5>
                      <AiFillCheckCircle
                        style={{ color: "green", transform: "scale(1.5)" }}
                      />
                    </Alert>
                  </>
                ) : showStatusQts === false ? (
                  <>
                    <Alert
                      variant="danger"
                      style={{ width: "100%" }}
                      className="d-flex justify-content-around align-items-center"
                    >
                      <h5 style={{ color: "lightblack" }}>
                        Adding Quantities Failed{" "}
                      </h5>
                      <AiFillCloseCircle
                        style={{ color: "red", transform: "scale(1.5)" }}
                      />{" "}
                    </Alert>
                  </>
                ) : (
                  <>
                    <Alert
                      variant="primary"
                      style={{ width: "100%" }}
                      className="d-flex justify-content-around align-items-center"
                    >
                      <h5 style={{ color: "lightblack" }}>
                        Adding Quantities{" "}
                      </h5>
                      <Spinner animation="border" variant="primary" />
                    </Alert>
                  </>
                )}
              </>
            )}
          </div>
        </Modal.Body>
        {showModalClose && (
            <span className="mx-auto mb-3">
              <button
                class="btn btn-secondary"
                style={{
                  height: "40px",
                  backgroundColor: "#EE3C2F",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                }}
                onClick={handleModalClose}
              >
                Close
              </button>
            </span>
          )}
      </Modal>
    </div>
  );
};

export default InventoryProducts;
