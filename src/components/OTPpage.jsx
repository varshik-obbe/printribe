import React, { useState,useEffect } from "react";
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

  const [OTP, setOTP] = useState();

  const handleClick = async () => {
    try {
      await axios.post(
        "https://api.theprintribe.com/api/customers/verifyMail",
        {
          data: {
            email : params.id,
            verificationId: OTP,
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
    } catch (error) {
      Swal.fire({
        title: "Incorrect OTP entered! Please Try Again",
        icon: "error",
        confirmButtonText: "Close",
      })
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mb-5 ">
        <div className="row d-flex flex-column justify-content-center align-items-center">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OTPpage;
