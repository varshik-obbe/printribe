import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Api from "../api/api";
import ClothingRock from "../assets/Clothing Rack.png";
// ---- import PNG from Assets ---- //
import PrintribeLogo from "../assets/Printribe-logo.png";
// ---- import Styles ---- //
import classes from "../styles/signinsignup.module.css";
import { useLocation } from "react-router-dom";

const UpdatePassword = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [customerId, setCustomerId] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.theprintribe.com/api/customers/tokenVerify/${params.tokenId}`
      )
      .then(({ data }) => {
        console.log(data.data);
        setUserData(data.data);
        setCustomerId(data.data.customer_id);
      })
      .catch((err) => {
        console.log(err);
        console.log("Inavlid Token Id");
      });
  }, []);

  const handleUpdatePassword = () => {
    console.log(newPassword);
    console.log(confirmPassword);

    if (newPassword !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      axios
        .put("https://api.theprintribe.com/api/customers/updatePass", {
          restData: {
            id: customerId,
            password: confirmPassword,
          },
        })
        .then(({ data }) => {
          console.log(data);
          navigate("/signin?redirect=from_update");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-5 pt-5 pb-4">
            <img
              src={PrintribeLogo}
              alt=""
              style={{ height: "40px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div
                // className="d-flex flex-column align-items-center"
                className={classes.divForm}
              >
                <h2 class="fw-bold">Update Password</h2>
                {/* ----- Email Input ----- */}
                <div>
                  <label for="basic-url" class="form-label mt-2">
                    New Password
                  </label>

                  <div class="input-group mb-2">
                    <input
                      type="password"
                      value={newPassword}
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      onChange={(e) => setNewPassword(e.target.value)} // Email Change Event //
                    />
                  </div>
                </div>
                <div>
                  <label for="basic-url" class="form-label mt-2">
                    Confirm Password
                  </label>
                  <div class="input-group mb-2">
                    <input
                      type="password"
                      value={confirmPassword}
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      onChange={(e) => setConfirmPassword(e.target.value)} // Email Change Event //
                    />
                  </div>
                </div>
                {passwordError && (
                  <div>
                    <label class="mb-2 text-danger">
                      Passwords Do Not Match, Please Try Again
                    </label>
                  </div>
                )}
                <div class="d-flex justify-content-center">
                  {/* ----- SignIn Button ----- */}
                  <button
                    type="button"
                    class="btn w-25"
                    style={{ background: "#EE3C2F", color: "#FFF" }}
                    onClick={handleUpdatePassword}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img
                alt=""
                class="my-5"
                src={ClothingRock}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
