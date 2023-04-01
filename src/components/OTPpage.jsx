import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import OTPInput from "otp-input-react";

const OTPpage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [OTP, setOTP] = useState(null);
  const [text, setText] = useState("");
  const [navtext, setNavText] = useState("");

  useEffect(async () => {
    try {
        await axios.post(
          "https://api.theprintribe.com/api/customers/verifyMail",
          {
            data: {
              email: params.email,
              verificationId: params.id,
            },
          },
          {
            "Content-Type": "application/json",
          }
        ).then((data) => {
          setText("email verified successfully");
          setNavText("Redirecting to login in 5 seconds");
          setTimeout(() => {
            navigate("/signin")
          }, 5000);
        })
        .catch((err) => {
          console.log("err", err);
          setText("could not verify");
          setNavText("Redirecting to signup in 5 seconds");
          setTimeout(() => {
            navigate("/signup")
          }, 5000);
        })
        
    } catch (error) {
      console.log("err", error);
      setText("could not verify");
      setNavText("Redirecting to signup in 5 seconds");
      setTimeout(() => {
        navigate("/signup")
      }, 5000);
    }
  }, [])

  const handleClick = async () => {
    try {
      if (OTP == null) {
        Swal.fire({
          title: "Please Enter An OTP!",
          icon: "info",
          confirmButtonText: "Close",
        });
      } else {
        await axios.post(
          "https://api.theprintribe.com/api/customers/verifyMail",
          {
            data: {
              email: params.email,
              verificationId: params.id,
            },
          },
          {
            "Content-Type": "application/json",
          }
        );

        Swal.fire({
          title: "User Verified!",
          icon: "success",
          confirmButtonText: "Close",
        }).then(() => navigate("/signin"));
      }
    } catch (error) {
      Swal.fire({
        title: "Incorrect OTP entered! Please Try Again",
        icon: "error",
        confirmButtonText: "Close",
      }).then(() => navigate("/signup"));;
    }
  };
  console.log(params.id);

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mb-5 ">
        {/* <div className="row d-flex flex-column justify-content-center align-items-center">
          <h3 className="mt-5 mb-4 text-center">Enter the OTP</h3>
          <div className="mx-auto d-flex flex-column justify-content-center align-items-center">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              className="ms-3"
            />
            <button
              className="btn btn-danger mx-auto my-4 mb-5"
              style={{ backgroundColor: "#EF392B" }}
              onClick={handleClick}
            >
              Verify
            </button>
          </div>
        </div> */}
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h3 className="mt-5 mb-4 text-center">{text}</h3>
          <a href="/signin" style={{ color: "blue"}} className="mt-5 mb-4 text-center">{navtext}</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OTPpage;
