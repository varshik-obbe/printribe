import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from '../assets/Printribe-logo.png'
import styles from "../styles/home.module.css"

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      <div className="container" style={{padding:"0 8%"}}>
        <div className="row px-sm-5">
          <div className="col-6 text-center text-sm-start mb-3 mb-sm-0 py-2" style={{position:'relative'}}>

                        <img src={logo} alt="" style={{ height: "30px", maxWidth: "100%" }} />
                        <p style={{position:'absolute',left:'34%',top:0}}>Beta</p>

                    
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
            <div className="p-2 h3">
         <a href="" style={{ color: 'gray'}}> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
              </div>
              <div className="p-2 h3">
              <a href="" style={{ color: 'gray'}}>  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              </div>
              <div className="p-2 h3">
              <a href="" style={{ color: 'gray'}}>    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
              </div>
              <div className="p-2 h3">
              <a href="" style={{ color: 'gray'}}> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="conatiner-fluid" style={{ background: "#1F649F", padding:"0 8%"}}>
        <div className="container" >
          <div className ={`row ${styles.footerrow}`} style={{width:"100%"}} >
            <div className={`col-lg-3 col-md-12  text-light mb-4 mb-md-0 ${styles.footerdivs}`} style={{fontSize:"15px" ,fontFamily:"Avenir !important"}}>
              <p className="h2  text-uppercase fw-bold " style={{fontSize:"18px" ,fontFamily:"Avenir !important"}}>contact us</p>

              <p className="h4 fw-bold" style={{fontSize:"15px" ,fontFamily:"Avenir !important"}}><b>Address:</b></p>
              Mallayya Industrial Area, Bangalore -560032

              <div className="h4 fw-bold" style={{marginTop:"20px", fontSize:"15px" ,fontFamily:"Avenir !important"}}>Email:</div>
              info@theprintribe.com
            </div>

            <div className={`col-lg-3 col-md-6 mb-4 mb-md-0 ${styles.footerdivs}`} style={{fontSize:"15px" ,fontFamily:"Avenir !important"}}>
              <p className="h3 text-light text-uppercase fw-bold" style={{fontSize:"18px" ,fontFamily:"Avenir !important"}}>Company</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="/about" class="text-white text-decoration-none ">About us</a>
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
                  <a href="/return-refund" class="text-white text-decoration-none ">Dropship terms</a>
                </li>

              </ul>
            </div>
            <div className={`col-lg-3 col-md-6 mb-4 mb-md-0 ${styles.footerdivs}`} style={{fontSize:"15px" ,fontFamily:"Avenir !important"}}>
              <p className="h3 text-light text-uppercase fw-bold" style={{fontSize:"18px" ,fontFamily:"Avenir !important"}}>RESOURCES</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="#!" class="text-white text-decoration-none ">Blog</a>
                </li>
                <li className="mt-3">
                  <a href="/FAQ" class="text-white text-decoration-none ">Help Center</a>
                </li>
                <li className="mt-3">
                  <a href="/design-tribe" class="text-white text-decoration-none">Mockup generator</a>
                </li>
                <li className="mt-3">
                  <a href="/community" class="text-white text-decoration-none">Community</a>
                </li>

              </ul>
            </div>
            <div className={`col-lg-3 col-md-6 mb-4 mb-md-0 ${styles.footerdivs}`} style={{fontSize:"15px" ,fontFamily:"Avenir !important"}}>
              <p className="h3 text-light text-uppercase fw-bold" style={{fontSize:"18px" ,fontFamily:"Avenir !important"}}>SELL WITH PRINTRIBE</p>

              <ul class="list-unstyled mb-0">
                <li className="mt-3">
                  <a href="/products" class="text-white text-decoration-none">Product Catalog</a>
                </li>
                <li className="mt-3">
                  <a href="/design-tribe" class="text-white text-decoration-none ">Design Tribe</a>
                </li>
                <li className="mt-3">
                  <a href="/integrations" class="text-white text-decoration-none">Integrations</a>
                </li>
                <li className="mt-3">
                  <a href="https://printribe-partner.web.app" class="text-white text-decoration-none">Merchant Panel</a>
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
