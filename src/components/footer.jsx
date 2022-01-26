import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from '../assets/Printribe-logo.png'

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      <div className="container" style={{padding:"0 8%"}}>
        <div className="row px-sm-5">
          <div className="col-6 text-center text-sm-start mb-3 mb-sm-0 py-2">

                        <img src={logo} alt="" style={{ height: "35px", maxWidth: "100%" }} />

                    
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
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
      <div className="conatiner-fluid" style={{ background: "#1F649F", padding:"0 8%"}}>
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-3 col-md-12 text-light" style={{fontSize:"15px" ,fontFamily:"Avenir"}}>
              <p className="h2  text-uppercase fw-bold " style={{fontSize:"18px" ,fontFamily:"Avenir"}}>contact us</p>

              <p className="h4 fw-bold" style={{fontSize:"15px" ,fontFamily:"Avenir"}}><b>Address:</b></p>
              Kereguddadahalli, Chikkabanavara, Bangalore, Karnataka - 560032

              <div className="h4 fw-bold" style={{marginTop:"20px", fontSize:"15px" ,fontFamily:"Avenir"}}>Email:</div>
              info@theprintribe.com
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{fontSize:"15px" ,fontFamily:"Avenir"}}>
              <p className="h3 text-light text-uppercase fw-bold" style={{fontSize:"18px" ,fontFamily:"Avenir"}}>Company</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">About us</a>
                </li>
                <li className="mt-3">
                  <a href="/terms-conditions" class="text-white text-decoration-none ">Terms of service</a>
                </li>
                <li className="mt-3">
                  <a href="/privacy-policy" class="text-white text-decoration-none">Privacy policy</a>
                </li>
                <li className="mt-3">
                  <a href="/return-refund" class="text-white text-decoration-none">Returns and Refunds</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Dropship terms</a>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{fontSize:"15px" ,fontFamily:"Avenir"}}>
              <p className="h3 text-light text-uppercase fw-bold" style={{fontSize:"18px" ,fontFamily:"Avenir"}}>Company</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">About us</a>
                </li>
                <li className="mt-3">
                  <a href="/terms-conditions" class="text-white text-decoration-none ">Terms of service</a>
                </li>
                <li className="mt-3">
                  <a href="/privacy-policy" class="text-white text-decoration-none">Privacy policy</a>
                </li>
                <li className="mt-3">
                  <a href="/return-refund" class="text-white text-decoration-none">Returns and Refunds</a>
                </li>
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Dropship terms</a>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" style={{fontSize:"15px" ,fontFamily:"Avenir"}}>
              <p className="h3 text-light text-uppercase fw-bold" style={{fontSize:"18px" ,fontFamily:"Avenir"}}>Company</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">About us</a>
                </li>
                <li className="mt-3">
                  <a href="/terms-conditions" class="text-white text-decoration-none ">Terms of service</a>
                </li>
                <li className="mt-3">
                  <a href="/privacy-policy" class="text-white text-decoration-none">Privacy policy</a>
                </li>
                <li className="mt-3">
                  <a href="/return-refund" class="text-white text-decoration-none">Returns and Refunds</a>
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
          Copyright Ⓒ {year} Printribe. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
