import axios from "axios";
import React from "react";
// ---- import Google Icon from ReactIcons ---- //
import { FcGoogle } from "react-icons/all";
import { Link, useNavigate } from "react-router-dom";
import Api from "../api/api";
import ClothingRock from "../assets/Clothing Rack.png";
// ---- import PNG from Assets ---- //
import PrintribeLogo from "../assets/Printribe-logo.png";
// ---- import Styles ---- //
import classes from "../styles/signinsignup.module.css";
import {useLocation} from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function Signin() {
  let navigate = useNavigate();
  var location = useLocation();

  var redirect_url = location.search ? location.search.split('=')[1] : ""
  console.log(redirect_url)

  const [state, setState] = React.useState({
    email: "",
    password: "",
    error: false,
  });

  const handleGoogleSignUp = () => {
    // Google SignUp Event
    alert("Google SignUp");
  };

  const handleEmailSignUp = () => {
    // Email Sign Up Event
    alert("Email Sign Up");
  };

  const handleChangeEmail = (event) => {
    // handle Input Email //
    setState((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleChangePassword = (event) => {
    // handle Input Password //
    setState((prev) => ({ ...prev, password: event.target.value }));
  };

  const handleSignIn = () => {
    // User Login Api Call //
    axios
      .post(Api.customers.LOGIN, {
        credentials: {
          password: state.password,
          email: state.email,
          role: "customer",
        },
      })
      .then((res) => {
        console.log("login success", res);
        localStorage.setItem(
          "token",
          res.data.customer.token ? res.data.customer.token : ""
        );
        localStorage.setItem(
          "customerId",
          res.data.customer.id ? res.data.customer.id : ""
        );
        setState((prev) => ({ ...prev, error: false }));

        localStorage.setItem("customer_email" , res.data.customer.email ? res.data.customer.email : "")

        if(redirect_url === "from_signup") navigate('/')
        else navigate(-1);

      })
      .catch((err) => {
        console.log(err);
        setState((prev) => ({ ...prev, error: true }));
      });
  };

  const handleForgotPassword = () => {
    // ForgotPassword
    // alert("Forgot Password");
    navigate('/forgotpassword')
  };

  const handleGoogleSignIn = () => {
    // GoogleSignIn
    alert("Google SignIn");
  };

  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
  };

const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
};

const clientId = "46834513654-iea0lq8m5t6vksausg1ssh8ktk62vnlu.apps.googleusercontent.com"

    return (
    // ---- Main Container ---- //
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-5 pt-5 pb-4">
          <img src={PrintribeLogo} alt="" style={{ height: "40px" }} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div
              // className="d-flex flex-column align-items-center"
              className={classes.divForm}
            >
              <h2 class="fw-bold">Sign up to Printribe</h2>
              {/* ----- Google Sign Up Button ----- */}
              <div>
                {/* <button
                  type="button"
                  class="btn btn-outline-secondary w-100"
                  style={{ color: "#000", marginTop: "10px" }}
                  onClick={handleGoogleSignUp} // Sign Up with Google Click Event //
                  disabled
                >
                  <span>
                    <FcGoogle style={{ fontSize: "25px" }} /> Sign up with
                    Google
                  </span>
                </button> */}

                {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}

                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
              </div>
              {/* ----- Sign Up with Email Button ----- */}
              <div>
                <Link to="/signup">
                  <button
                    type="button"
                    class="btn btn-primary w-100 fw-bold"
                    style={{
                      color: "#FFF",
                      background: "#1F649F",
                      marginTop: "15px",
                    }}
                  >
                    Sign up with your email
                  </button>
                </Link>
              </div>
              <div class="d-flex mt-3">
                <span>Already a member?</span>
                <span class="mx-4">Sign in now</span>
              </div>
              {/* ----- Email Input ----- */}
              <div>
                <label for="basic-url" class="form-label mt-2">
                  Email
                </label>
                <div class="input-group mb-2">
                  <input
                    type="email"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    onChange={handleChangeEmail} // Email Change Event //
                  />
                </div>
              </div>
              {/* ----- Password Input ----- */}
              <div>
                <label for="basic-url" class="form-label mb-0">
                  Password
                </label>
                <div class="input-group mb-2">
                  <input
                    type="password"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    onChange={handleChangePassword} // Password Change Event //
                  />
                </div>
              </div>
              {state.error && (
                <div>
                  <label class="mb-2 text-danger">
                    Please Enter Correct Email or Password
                  </label>
                </div>
              )}
              <div class="d-flex justify-content-between">
                {/* ----- SignIn Button ----- */}
                <button
                  type="button"
                  class="btn w-25"
                  disabled={
                    state.email === "" || state.password === "" ? true : false
                  }
                  style={{ background: "#EE3C2F", color: "#FFF" }}
                  onClick={handleSignIn} // Sign In Click Event //
                >
                  Sign in
                </button>

                {/* ----- Forgot Password Button ----- */}
                <button
                  type="button"
                  style={{
                    color: "#000",
                    border: "0",
                    background: "transparent",
                  }}
                  onClick={handleForgotPassword} // Forgot Password Click Event //
                >
                  Forgot Password?
                </button>
              </div>
              <div class="d-flex align-items-center">
                <hr class="w-100" />
                <span class="mx-3">or</span>
                <hr class="w-100" />
              </div>

              {/* ----- Sign in with Google Button ----- */}
              <button
                type="button"
                class="btn btn-outline-secondary w-100"
                style={{ color: "#000" }}
                onClick={handleGoogleSignIn}
                disabled
              >
                <span>
                  <FcGoogle style={{ fontSize: "25px" }} /> Sign in with Google
                </span>
              </button>
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
  );
}

export default Signin;
