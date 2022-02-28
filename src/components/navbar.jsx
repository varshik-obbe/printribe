import { Accordion } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";
import styles from "../styles/home.module.css";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const params = useParams();

  const wixIntegration = () => {
    console.log("wix integration");

    const appId = "7cd28949-b7fe-43b6-a047-78a1104ffa26";
    const wixToken = params.token;

    //example/dummy redirect url for now
    const redirectUrl = "https://printribe-partner.web.app/success";

    //redirecting user to the below url with params so that wix can authorize the permissions
    axios
      .get(
        `https://www.wix.com/installer/install?token=${wixToken}&appId=${appId}&redirectUrl=${redirectUrl}`
      )
      .then(({ data }) => {
        console.log(data);

        //storing 'code' & 'instanceId' in the local storage
        localStorage.setItem("auth_code", data.code);
        localStorage.setItem("instanceId", data.instanceId);

        const customerId = localStorage.getItem("customerId");

        //check user is logged in or not redirect them to dashboard

        //after wix authorizes , we will pass 'code' & 'customer id' to backend as post req
        axios
          .post("https://api.theprintribe.com/api/wix/finishInitialize", {
            tokenData: {
              auth_code: data.code,
              customer_id: customerId,
            },
          })
          .then(({ data }) => {
            console.log(data);

            //if the post req was successful , we will display a success msg which conveys that 'code' & 'instanceId' were successfully obtained
            alert("Token Was Sent Successfully!");

            //checking if the user is logged in or not to redirect them to the dashboard
            if (localStorage.getItem("customer_email")) {
              navigate("/signin?redirect=from_wix_integrations");
            } else {
              navigate("/integrations/wix");
            }

          })
          .catch((err) => {
            //if not then an error msg
            alert("Error Sending The Token!");

            console.log(err);
          });
      })
      .catch((err) => {
        //if not then an error msg
        alert("Error Sending The Token!");
        console.log(err);
      });
  };

  return (
    <>
      <div
        className=""
        style={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc" }}
      >
        <div className={styles.navBars + " " + "container"}>
          <div className="row m-0 text-center p-2 ">
            <div className="col-lg-3 col-md-2 col-sm-2 text-uppercase p-1">
              {/* <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Product catalog</button>
                            <div className={styles.dropdowncontent}> */}
              <Link to="/products" className={styles.navItem}>
                Product Catalog
              </Link>
              {/* <Link to="/product-page">Product page</Link> */}
              {/* </div>
                        </div> */}
            </div>

            <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
              {/* <div className={styles.dropdown}> */}
              <Link to="/design-tribe" className={styles.navItem}>
                Design Tribe
              </Link>

              {/* <button className={styles.dropbtn}>Design tribe</button> */}
              {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
              {/* </div> */}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
              <Link to="/" className={styles.navItem}>
                Services
              </Link>
              {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
              <Link to="/" className={styles.navItem}>
                How it works
              </Link>
              {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
              <Link to="/" className={styles.navItem}>
                Resources
              </Link>
              {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 text-uppercase p-1">
              <Link to="/" className={styles.navItem}>
                faq
              </Link>
              {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
            </div>
            <div className="col-lg-1 col-md-2 col-sm-2 text-uppercase p-1">
              <Link to="#" className={styles.navItem} onClick={wixIntegration}>
                Wix
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
