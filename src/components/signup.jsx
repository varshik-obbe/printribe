import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

// ---- import ApiUrl ----- //
import Api from "../api/api";

// ---- import Google Icon from ReactIcons ---- //
import { FcGoogle } from "react-icons/all";

// ---- import PNG from Assets ---- //
import PrintribeLogo from "../assets/Printribe-logo.png";
import ClothingRock from "../assets/Clothing Rack.png";

// ---- import Styles ---- //
import classes from "../styles/signinsignup.module.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function Signup() {
  var location = useLocation();
  let navigate = useNavigate();

  var redirect_url = location.search ? location.search.split("=")[1] : "";

  const [state, setState] = React.useState({
    email: "",
    userName: "",
    password: "",
    confPassword: "",
    error: false,
  });

  const handleGoogleSignIn = () => {
    // Google SignUp Event
    alert("Google SignUp");
  };

  const handleEmailSignIn = () => {
    // Email Sign Up Event
    alert("Email Sign In");
  };

  const handleChangeEmail = (event) => {
    // handle Input Email //
    setState((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleChangeUsername = (event) => {
    // handle Input Username //
    setState((prev) => ({ ...prev, userName: event.target.value }));
  };

  const handleChangePassword = (event) => {
    // handle Input Password //
    setState((prev) => ({ ...prev, password: event.target.value }));
  };

  const handleChangeConfirmPassword = (event) => {
    // handle Input Confirm Password //
    setState((prev) => ({ ...prev, confPassword: event.target.value }));
  };

  // Add User Api Call //
  const handleSignUp = () => {
    if (
      state.email === "" ||
      state.userName === "" ||
      state.password === "" ||
      state.confPassword === ""
    ) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please Fill All The Fields!",
        showConfirmButton: true,
      });
    } else {
      if (state.password === state.confPassword) {
        axios
          .post(Api.customers.SIGNUP, {
            customerRegisterdata: {
              email: state.email,
              username: state.userName,
              password: state.password,
              role: "customer",
            },
          })
          .then((res) => {
            console.log(res.data.customerRecord._id);
            // localStorage.setItem('customerId', res.data.customerRecord._id)

            // if(redirect_url === "from_signup" || redirect_url === "from_update") navigate('/')
            // else navigate(-1)

            // if(redirect_url === "from_wix_integrations") navigate("/signin?redirect=from_wix_integrations")
            // else navigate("/signin?redirect=from_signup");

            if (redirect_url === "from_wix_integrations"){
              navigate("/signin?redirect=from_wix_integrations");
            }
            else {
              console.log(state.email)
              navigate(`/verify/${state.email}`);
            }
            setState((prev) => ({ ...prev, error: false }));

          })
          .catch((err) => {
            // console.log(err.response.data.errors)
            setState((prev) => ({ ...prev, error: err.response.data.errors }));
          });
      } else {
        setState((prev) => ({
          ...prev,
          error: "Please make sure your passwords match",
        }));
      }
    }
  };

  const handleGoogleSignUp = () => {
    // GoogleSignIn
    alert("Google SignIn");
  };

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);

    var googleUser = res.profileObj;

    axios
      .post("https://api.theprintribe.com/api/customers/customerGoogleSign", {
        saveData: {
          email: googleUser.email,
          password: googleUser.googleId,
          role: "customer",
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "token",
          res.data.savedData.token ? res.data.savedData.token : ""
        );
        localStorage.setItem(
          "customerId",
          res.data.savedData._id ? res.data.savedData._id : ""
        );

        localStorage.setItem(
          "customer_email",
          res.data.savedData.email ? res.data.savedData.email : ""
        );
        setState((prev) => ({ ...prev, error: false }));

        // if(redirect_url === "from_signup" || redirect_url === "from_update") navigate('/')
        // else if(redirect_url === "from_wix_integrations") navigate('/integrations/wix')
        // else navigate(-1);

        if (redirect_url === "from_signup" || redirect_url === "from_update")
          navigate("/");
        else if (redirect_url === "from_wix_integrations")
          navigate("/integrations/wix");
        else navigate(`/`);
      })
      .catch((err) => {
        setState((prev) => ({ ...prev, error: "Error in SignUp" }));
      });
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const clientId =
    "46834513654-iea0lq8m5t6vksausg1ssh8ktk62vnlu.apps.googleusercontent.com";

  return (
    // ---- Main Container ---- //
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
              <h2 class="fw-bold">Sign up to Printribe</h2>
              {/* ----- Google Sign Up Button ----- */}
              <div>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <button
                      type="button"
                      className="btn w-100"
                      style={{
                        color: "#000",
                        marginTop: "10px",
                        border: "1px solid gray",
                      }}
                      onClick={renderProps.onClick} // Sign Up with Google Click Event //
                    >
                      <FcGoogle style={{ fontSize: "25px" }} /> Sign up with
                      Googles
                    </button>
                  )}
                />
              </div>
              {/* ----- Sign Up with Email Button ----- */}

              <div class="d-flex mt-3">
                <span>Don't Have an Account?</span>
                <span class="mx-4">Sign up now</span>
              </div>
              {/* ----- Email Input ----- */}
              <div class="mt-2">
                <label for="basic-url" class="form-label mb-0">
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
              {/* ----- Username Input ----- */}
              <div>
                <label for="basic-url" class="form-label mb-0">
                  Username
                </label>
                <div class="input-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    onChange={handleChangeUsername} // Username Change Event //
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
                    minlength="8"
                    onChange={handleChangePassword} // Password Change Event //
                  />
                </div>
              </div>
              {/* ----- Confirm Password Input ----- */}
              <div>
                <label for="basic-url" class="form-label mb-0">
                  Confirm Password
                </label>
                <div class="input-group mb-2">
                  <input
                    type="password"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    minlength="8"
                    onChange={handleChangeConfirmPassword} // Confirm Password Change Event //
                  />
                </div>
              </div>
              {state.error !== false && (
                <div>
                  <label class="mb-2 text-danger">{state.error}</label>
                </div>
              )}
              {/* ----- SignIn Button ----- */}
              <button
                type="submit"
                class="btn w-100"
                style={{ background: "#EE3C2F", color: "#FFF" }}
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <div class="d-flex align-items-center">
                <hr class="w-100" />
                <span class="mx-3">or</span>
                <hr class="w-100" />
              </div>

              {/* ----- Sign in with Google Button ----- */}
              {/* <button
                class="btn btn-outline-secondary w-100"
                style={{ color: "#000" }}
                onClick={handleGoogleSignUp}
                disabled
              >
                <span>
                  <FcGoogle style={{ fontSize: "25px" }} /> Sign up with Google
                </span>
              </button> */}
              <div>
                <Link
                  to={
                    redirect_url === "from_wix_integrations"
                      ? "/signin?redirect=from_wix_integrations"
                      : "/signin?redirect=from_signup"
                  }
                >
                  <button
                    type="button"
                    class="btn btn-primary w-100 fw-bold"
                    style={{
                      color: "#FFF",
                      background: "#1F649F",
                      marginTop: "10px",
                    }}
                  >
                    Sign in with your email
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img
              alt=""
              class="my-2"
              src={ClothingRock}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
