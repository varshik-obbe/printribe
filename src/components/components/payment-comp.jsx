import React, { useEffect, useState } from "react";
import { BsPaypal, GoCreditCard, MdOutlinePrivacyTip } from "react-icons/all";
import classes from "../../styles/add-product.module.css";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";


const fieldsArray = [
  { name: "fullName", title: "Full Name", diff: false },
  { name: "company", title: "Company (optional)", diff: false },
  { name: "address1", title: "Address line 1", diff: false },
  { name: "mobile", title: "Phone (optional)", diff: "mobile" },
  { name: "address2", title: "Address line 2 (optional)", diff: false },
  { name: "city", title: "City", diff: false },
  { name: "country", title: "Country", diff: "country" },
  { name: "postalCode", title: "Postal/Zip code", diff: false },
];

const MyVerticallyCenteredModal = (props) => {

  const handleAddAmount = () =>{
    if(props.amountToBeAdded === ""){
      Swal.fire({
        title: "Error!",
        text: "Amount Should Be More Than ₹0",
        icon: "error",
        confirmButtonText: "Close",
      })
    }else{
      props.addAmount(parseFloat(props.amountToBeAdded).toFixed(2),"addToWallet")
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Amount </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">₹</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter Amount..." value={props.amountToBeAdded} onChange={(e) => props.setAmountToBeAdded(e.target.value)}/>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-danger mx-auto' onClick={() => {handleAddAmount();props.onHide();}}>Add</button>
      </Modal.Footer>
    </Modal>
  );
};

function PyamentComp({ addAmount,walletAmount }) {
  const [activePayment, setActivePayment] = useState("other");
  const [billing, setBilling] = useState("same");
  const [amountToBeAdded, setAmountToBeAdded] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
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
        <ul class="nav nav-tabs">
          <li
            class="nav-item"
            onClick={() => setActivePayment("wallet")}
            style={{ cursor: "pointer" }}
          >
            <span
              class={
                activePayment === "wallet" ? "nav-link active" : "nav-link"
              }
            >
              Wallet
            </span>
          </li>
          {/* <li
            class="nav-item"
            onClick={() => setActivePayment("other")}
            style={{ cursor: "pointer" }}
          >
            <span
              class={activePayment === "other" ? "nav-link active" : "nav-link"}
            >
              Other Methods
            </span>
          </li> */}
        </ul>
        <div class="mt-3">
          <React.Fragment>
            <div>
              <div class="col-12 mt-4">
                <div
                  style={{
                    backgroundColor: "#E5F5E4",
                    padding: "22px",
                    borderRadius: "5px",
                  }}
                  class="row"
                >
                  <div class="col-12 col-md-10">
                    <span>
                      Each currency on Printribe has its own Wallet, so please
                      add funds to your USD Wallet to pay for this order. You
                      can do this by going to the Billing section. This order
                      will be saved as a draft.
                    </span>
                  </div>
                  <div
                    class={["col-12 col-md-2", classes.btnAddMoney].join(" ")}
                  >
                    <div>
                      <button
                        class="btn btn-danger"
                        style={{ height: "auto", width: "100%" }}
                        onClick={() => setModalShow(true)}
                      >
                        Add Money
                      </button>

                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        addAmount={addAmount}
                        amountToBeAdded={amountToBeAdded}
                        setAmountToBeAdded={setAmountToBeAdded}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div
                  style={{
                    padding: "20px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "5px",
                  }}
                  class="d-flex align-items-center"
                >
                  <span>IND Wallet</span>
                  <dvi class="d-flex flex-column ms-5">
                    <span>Balance:</span>
                    <b class="fs-5">₹{walletAmount}</b>
                  </dvi>
                </div>
              </div>
            </div>
          </React.Fragment>

          {/* {activePayment === "other" ? (
            <React.Fragment>
              <div class="row">
                <div class="col-12">
                  <b class="fs-4">Billing Info</b>
                </div>
                <div class="col-12 mt-4">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option1"
                      onClick={() => setBilling("manual")}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Add manually
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      defaultChecked
                      name="inlineRadioOptions"
                      value="option2"
                      onClick={() => setBilling("same")}
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Same as shipping address
                    </label>
                  </div>
                </div>
                {billing === "same" ? (
                  <div class="col-12 mt-3">
                    <div
                      class="fs-6 text-break"
                      style={{
                        border: "1px solid #e0e0e0",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      Address Line 1, Address Line 2, City, Country, PostalCode.
                    </div>
                  </div>
                ) : (
                  <React.Fragment>
                    <div class="row mt-4">
                      {fieldsArray.map((ele, index) => {
                        switch (ele.diff) {
                          case false:
                            return (
                              <>
                                <div class="col-12 col-sm-6 mt-2">
                                  <label
                                    for="basic-url"
                                    class="form-label mb-1"
                                  >
                                    <b>{ele.title}</b>
                                  </label>
                                  <div class="input-group mb-2">
                                    <input type="email" class="form-control" />
                                  </div>
                                </div>
                              </>
                            );
                          case "orderNumber":
                            return (
                              <>
                                <div class="col-12 col-sm-6 mt-2">
                                  <label
                                    for="basic-url"
                                    class="form-label mb-1"
                                  >
                                    <b>{ele.title}</b>
                                  </label>
                                  <div class="input-group mb-2">
                                    <span
                                      class="input-group-text"
                                      id="basic-addon1"
                                    >
                                      #
                                    </span>
                                    <input type="text" class="form-control" />
                                  </div>
                                </div>
                              </>
                            );
                          case "mobile":
                            return (
                              <>
                                <div class="col-12 col-sm-6 mt-2">
                                  <label
                                    for="basic-url"
                                    class="form-label mb-1"
                                  >
                                    <b>{ele.title}</b>
                                  </label>
                                  <div class="input-group mb-2">
                                    <button
                                      class="btn btn-outline-secondary dropdown-toggle form-control w-25"
                                      type="button"
                                      style={{ border: "1px solid #CED4DA" }}
                                    >
                                      +91
                                    </button>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a class="dropdown-item" href="#">
                                          Action
                                        </a>
                                      </li>
                                    </ul>
                                    <input
                                      type="text"
                                      class="form-control w-75"
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          case "country":
                            return (
                              <div class="col-12 col-sm-6 mt-2">
                                <label for="basic-url" class="form-label mb-1">
                                  <b>{ele.title}</b>
                                </label>
                                <div class="input-group mb-2">
                                  <select
                                    class="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option selected>
                                      Open this select menu
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                            );
                          case "retailShippingPprice":
                            return (
                              <>
                                <div class="col-12 col-sm-6 mt-2">
                                  <label
                                    for="basic-url"
                                    class="form-label mb-1"
                                  >
                                    <b>{ele.title}</b>
                                  </label>
                                  <div class="input-group mb-2">
                                    <span
                                      class="input-group-text"
                                      id="basic-addon1"
                                    >
                                      $
                                    </span>
                                    <input
                                      type="text"
                                      disabled
                                      class="form-control"
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          default:
                            return null;
                        }
                      })}
                    </div>
                  </React.Fragment>
                )}
                <div class="col-12 mt-4">
                  <b class="fs-4">Billing Method</b>
                </div>
                <div class="col-12 col-md-6 mt-4">
                  <div class="row">
                    <div
                      class="col-12 d-flex align-items-center"
                      style={{
                        height: "50px",
                        border: "1px solid #e0e0e0",
                        borderRadius: "5px",
                      }}
                    >
                      <BsPaypal
                        style={{ fontSize: "25px", margin: "0 15px" }}
                      />
                      <span style={{ marginTop: "-4px" }}>PayPal</span>
                    </div>
                    <div
                      class="col-12 d-flex align-items-center mt-3"
                      style={{
                        height: "50px",
                        border: "1px solid #e0e0e0",
                        borderRadius: "5px",
                      }}
                    >
                      <GoCreditCard
                        style={{ fontSize: "25px", margin: "0 15px" }}
                      />
                      <span style={{ marginTop: "-4px" }}>Payment Card</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 mt-4">
                  <div
                    style={{
                      backgroundColor: "#E5F5E4",
                      padding: "8px",
                      borderRadius: "5px",
                    }}
                    class="d-flex align-items-center"
                  >
                    <MdOutlinePrivacyTip
                      style={{ margin: "0 15px", fontSize: "100px" }}
                    />
                    <span>
                      Your data is safe—we don't store your card or billing
                      method details, and we use industry-standard encryption to
                      protect your personal information.
                    </span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div>
                <div class="col-12 mt-4">
                  <div
                    style={{
                      backgroundColor: "#E5F5E4",
                      padding: "22px",
                      borderRadius: "5px",
                    }}
                    class="row"
                  >
                    <div class="col-12 col-md-10">
                      <span>
                        Each currency on Printribe has its own Wallet, so please
                        add funds to your USD Wallet to pay for this order. You
                        can do this by going to the Billing section. This order
                        will be saved as a draft.
                      </span>
                    </div>
                    <div
                      class={["col-12 col-md-2", classes.btnAddMoney].join(" ")}
                    >
                      <div>
                        <button
                          class="btn btn-danger"
                          style={{ height: "auto", width: "100%" }}
                        >
                          Add Money
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-3">
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "5px",
                    }}
                    class="d-flex align-items-center"
                  >
                    <span>USD Wallet</span>
                    <dvi class="d-flex flex-column ms-5">
                      <span>Balance:</span>
                      <b class="fs-5">$0</b>
                    </dvi>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default PyamentComp;
