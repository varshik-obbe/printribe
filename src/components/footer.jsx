import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from '../assets/Printribe-logo.png'
function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-12 text-center text-sm-start">
          <div className=" col-lg-4 col-12 logo text-center mb-3 mb-sm-0 py-2">
                        <img src={logo} alt="" style={{ height: "35px", maxWidth: "100%" }} />

                    </div>
          </div>
          <div className="col-sm-4 col-12">
            <div className="d-flex justify-content-center">
              <div className="p-2 h3">
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </div>
              <div className="p-2 h3">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </div>
              <div className="p-2 h3">
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
              </div>
              <div className="p-2 h3">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="conatiner-fluid" style={{ background: "#116dff" }}>
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-3 col-md-12 text-light">
              <p className="h2  text-uppercase fw-bold">contact us</p>

              <p className="h4 fw-bold">Address:</p>
              Kereguddadahalli, Chikkabanavara, Bangalore, Karnataka - 560032
              <div className="h4 fw-bold">Email:</div>
              info@theprintribe.com
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="h3 text-light text-uppercase fw-bold">Company</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">About us</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Terms of service</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none">Privacy policy</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Dropship terms</a>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="h3 text-light text-uppercase fw-bold">Company</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">About us</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Terms of service</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none">Privacy policy</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Dropship terms</a>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="h3 text-light text-uppercase fw-bold">Company</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">About us</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Terms of service</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none">Privacy policy</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Dropship terms</a>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid text-center" style={{ background: "rgb(31 100 159)" }}>
        <p className="text-light p-3 m-0">
          Copyright Ⓒ 2021 Printribe. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
