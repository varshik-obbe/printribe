import React from "react";
import axios from "axios";
import Layout from "../components/layout";
import classes from "../styles/account.module.css";
import { AiFillCamera } from "react-icons/all";
import account from "../assets/account.png";
import {useNavigate} from 'react-router-dom'

import api from "../api/api";

function Account() {
    const navigate = useNavigate()
  const [btnVisible, setBtnVisible] = React.useState(false);

  const [state, setState] = React.useState();

  let customerId = localStorage.customerId ? localStorage.customerId : "";

  const getByCustomerIdApiCall = React.useCallback(() => {
    axios
      .get(api.customers.GETBYID + customerId)
      .then((res) => {
        console.log(res);
        setState(res.data.customerRecordData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerId]);

  React.useEffect(() => {
    getByCustomerIdApiCall();
  }, [getByCustomerIdApiCall]);

  const updateCustomerApiCall = () => {
    delete state._id;
    delete state.updatedAt;
    delete state.createdAt;
    axios
      .put(api.customers.UPDATECUSTOMER + customerId, {
        data: state,
      })
      .then((res) => {
        console.log(res);
        getByCustomerIdApiCall();
        alert("Your Account Information Update Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error in Update your Account Information");
      });
  };

  const handleChange = (e, name) => {
    setState((prev) => ({ ...prev, [name]: e.target.value }));
  };

  console.log(state);

  if (state) {
    return (
      <Layout>
        <div className={[classes.mainContainer, "mb-5"].join(" ")}>
          <div className="container-lg" style={{ padding: "0 20px" }}>
            <div class={[classes.topProfileDiv, "row"].join(" ")}>
              <div class="col-12">
                <button
                  
                  style={{ border: "0"}}
                >
                  <div
                    style={{ backgroundColor: "#000",padding:'0.375rem 0.75rem' }}
                    class="d-flex align-items-center rounded"
                  >
                    <AiFillCamera
                      style={{
                        fontSize: "25px",
                        marginRight: "10px",
                        color: "#fff",
                      }}
                    />
                    <span style={{ color: "#fff"}}>Change Photo</span>
                  </div>
                </button>
              </div>
              <div class="col-12 col-md-6 mt-5 d-flex align-items-end">
                <img
                  alt=""
                  src={account}
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    borderRadius: "50%",
                    border: '1px solid rgba(0,0,0,0.5)',                    
                  }}
                />
                <h4 class="ms-4" style={{ color: "#000" }}>
                  {state.username ? state.username : ""}
                </h4>
              </div>
            </div>
          </div>
          <div className="container-lg" style={{ padding: "0 40px" }}>
            <div>
              <button
                className="btn"
                style={{
                  height: "50px",
                  background: "transparent",
                  borderBottom: "5px solid rgb(31, 100, 159)",
                  borderRadius: "0",
                }}
              >
                My Account
              </button>
              <div className="row mt-5">
                <div className="col-12 col-sm-6">
                  <h4>My Account</h4>
                  <label>View and edit your personal info below.</label>
                </div>
                <div className="col-12 col-sm-6 mt-3">
                  <div className=" d-flex justify-content-end">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={getByCustomerIdApiCall}
                      style={{ width: "120px" }}
                    >
                      Discard
                    </button>
                    <button
                      className="btn btn-secondary ms-3"
                      onClick={updateCustomerApiCall}
                      style={{ width: "120px" }}
                    >
                      Update Info
                    </button>
                  </div>
                </div>
              </div>
              <hr class="my-4" />
              <div className="row">
                <label class="fs-5">Display Info</label>
                <label class="mt-2">
                  Your profile card is visible to all members of this site
                </label>
                <div class="col-12 col-sm-6 mt-4">
                  <label for="basic-url" class="form-label">
                    Your Vanity URL *
                  </label>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control border-dark"
                      value={state.website ? state.website : ""}
                      onChange={(e) => handleChange(e, "website")}
                      required
                    />
                  </div>
                </div>
              </div>
              <hr class="my-4" />
              <div className="row">
                <label class="fs-5">Account</label>
                <label class="mt-2">
                  Update & Edit the information you share with the community
                </label>
                <div class="d-flex flex-column mt-4">
                  <label>Login Email:</label>
                  <label class="text-primary">
                    {state.email ? state.email : ""}
                  </label>
                  <label style={{ color: "#666" }}>
                    Your Login email can't be changed
                  </label>
                </div>
                <div class="row mt-3">
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Username
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-dark"
                        value={state.username ? state.username : ""}
                        required
                        onChange={(e) => handleChange(e, "username")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Bussiness Name
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-dark"
                        value={state.buisness_name ? state.buisness_name : ""}
                        required
                        onChange={(e) => handleChange(e, "buisness_name")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Brand Name
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-dark"
                        value={state.brand_name ? state.brand_name : ""}
                        required
                        onChange={(e) => handleChange(e, "brand_name")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Email
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="email"
                        class="form-control border-dark"
                        disabled
                        value={state.email ? state.email : ""}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Phone
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="phone"
                        class="form-control border-dark"
                        value={state.mobile ? state.mobile : ""}
                        onChange={(e) => handleChange(e, "mobile")}
                        required
                      />
                    </div>
                  </div>
                  {/* <div class='col-12 mt-3'>
                                        <div className=" d-flex justify-content-end">
                                            <button className="btn btn-outline-secondary" onClick={getByCustomerIdApiCall} style={{width: '120px'}}>Discard</button>
                                            <button className="btn btn-secondary ms-3" onClick={updateCustomerApiCall} style={{width: '120px'}}>Update Info</button>
                                        </div>
                                    </div> */}
                </div>
              </div>
              <hr class="my-4" />
              <div className="row">
                <label class="fs-5">Address</label>
                <label class="mt-2">
                  Update & Edit the information you share with the community
                </label>
                <div class="row mt-4">
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Address Line1
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-dark"
                        value={state.address1 ? state.address1 : ""}
                        required
                        onChange={(e) => handleChange(e, "address1")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Address Line2
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-dark"
                        value={state.address2 ? state.address2 : ""}
                        required
                        onChange={(e) => handleChange(e, "address2")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Address Line3
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="email"
                        class="form-control border-dark"
                        value={state.address3 ? state.address3 : ""}
                        required
                        onChange={(e) => handleChange(e, "address3")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      City
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="phone"
                        class="form-control border-dark"
                        value={state.city ? state.city : ""}
                        onChange={(e) => handleChange(e, "city")}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      State
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="phone"
                        class="form-control border-dark"
                        value={state.state ? state.state : ""}
                        onChange={(e) => handleChange(e, "state")}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Country
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="phone"
                        class="form-control border-dark"
                        value={state.country ? state.country : ""}
                        onChange={(e) => handleChange(e, "country")}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Pincode
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="phone"
                        class="form-control border-dark"
                        value={state.pincode ? state.pincode : ""}
                        onChange={(e) => handleChange(e, "pincode")}
                        required
                      />
                    </div>
                  </div>
                  {/* <div class='col-12 mt-3'>
                                        <div className=" d-flex justify-content-end">
                                            <button className="btn btn-outline-secondary" onClick={getByCustomerIdApiCall} style={{width: '120px'}}>Discard</button>
                                            <button className="btn btn-secondary ms-3" onClick={updateCustomerApiCall} style={{width: '120px'}}>Update Info</button>
                                        </div>
                                    </div> */}
                </div>
              </div>
              <hr class="my-4" />
              <div className="row">
                <label class="fs-5">Bank Account</label>
                <label class="mt-2">
                  Update & Edit the information you share with the community
                </label>
                <div class="row mt-4">
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Bank Name
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-dark"
                        value={state.bank_name ? state.bank_name : ""}
                        required
                        onChange={(e) => handleChange(e, "bank_name")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      Account Number
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control border-dark"
                        value={state.account_number ? state.account_number : ""}
                        required
                        onChange={(e) => handleChange(e, "account_number")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      IFSC Code
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="email"
                        class="form-control border-dark"
                        value={state.ifsc_code ? state.ifsc_code : ""}
                        required
                        onChange={(e) => handleChange(e, "ifsc_code")}
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="basic-url" class="form-label">
                      GST Number
                    </label>
                    <div class="input-group mb-3">
                      <input
                        type="phone"
                        class="form-control border-dark"
                        value={state.gst ? state.gst : ""}
                        onChange={(e) => handleChange(e, "gst")}
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12 mt-3">
                    <div className=" d-flex justify-content-end">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={getByCustomerIdApiCall}
                        style={{ width: "120px" }}
                      >
                        Discard
                      </button>
                      <button
                        className="btn btn-secondary ms-3"
                        onClick={updateCustomerApiCall}
                        style={{ width: "120px" }}
                      >
                        Update Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <div
        class="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div class="spinner-grow text-primary" role="status" />
      </div>
    );
  }
}

export default Account;
