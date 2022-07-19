import axios from "axios";
import React from "react";
// ---- import Google Icon from ReactIcons ---- //
import { FcGoogle } from "react-icons/all";
import { Link, useNavigate,useLocation } from "react-router-dom";
import Api from "../api/api";
import ClothingRock from "../assets/Clothing Rack.png";
// ---- import PNG from Assets ---- //
import PrintribeLogo from "../assets/Printribe-logo.png";
// ---- import Styles ---- //
import classes from "../styles/signinsignup.module.css";
import Swal from "sweetalert2";


function ForgotPassword() {
  let navigate = useNavigate();
  var location = useLocation();

  var redirect_url = location.search ? location.search.split('=')[1] : ""
  console.log(redirect_url)

  const [state, setState] = React.useState({
    email: "",
    error: false,
  });

  const handleChangeEmail = (event) => {
    // handle Input Email //
    setState((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleForgotPassword = () =>{
    axios.get(`https://api.theprintribe.com/api/customers/forgotpass/${state.email}`)
    .then(({data}) => {
      console.log(data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Link Sent!",
        text:"Please Check Your Email",
        showConfirmButton: true,
      })

    })
    .catch(err => console.error(err));
  }


  return (
    // ---- Main Container ---- //
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 px-5 pt-5 pb-4">
          <img src={PrintribeLogo} alt="" style={{ height: "40px",cursor: "pointer"}} onClick={() => navigate('/')} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div
              // className="d-flex flex-column align-items-center"
              className={classes.divForm}
            >
              <h2 class="fw-bold">Forgot Password</h2>
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
              {state.error && (
                <div>
                  <label class="mb-2 text-danger">
                    Please Enter Correct Email or Password
                  </label>
                </div>
              )}
              <div class="d-flex justify-content-center">
                {/* ----- SignIn Button ----- */}
                <button
                  type="button"
                  class="btn w-25"
                //   disabled={
                //     state.email === "" || state.password === "" ? true : false
                //   }
                  style={{ background: "#EE3C2F", color: "#FFF",whiteSpace:'nowrap' }}
                  onClick={handleForgotPassword}
                >
                  Send Link
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
  );
}

export default ForgotPassword;
