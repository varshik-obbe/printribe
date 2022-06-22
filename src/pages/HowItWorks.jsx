import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

const HowItWorks = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row">
          <h4
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-3 text-left mx-auto"
            style={{ color: "#0D3B66", fontWeight: "500" }}
          >
            1: Signup and Join your eCommerce store with Printribe
          </h4>
          <h5 className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 text-left mx-auto" style={{ fontWeight: "400" }}>
            You can sign up for free with{" "}
            <span
              style={{ color: "#0D3B66", fontSize: "20px", fontWeight: "500" }}
            >
              Printribe
            </span>{" "}
            . Connect your Shopify, Woocommerce or any other store using our
            custom built Plugins or open APIs.
          </h5>
        </div>
        <div className="row">
          <h4
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-3 text-left mx-auto"
            style={{ color: "#0D3B66", fontWeight: "500" }}
          >
            2: Create products using your Design Tribe on the Printribe
            dashboard.
          </h4>
          <h5 className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 text-left mx-auto" style={{ fontWeight: "400" }}>
            You can upload your cool artworks / designs to{" "}
            <span
              style={{ color: "#0D3B66", fontSize: "20px", fontWeight: "500" }}
            >
              Printribe's Design Tribe
            </span>{" "}
            which is an art creation tool specially made for you
          </h5>
        </div>
        <div className="row">
          <h4
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-3 text-left mx-auto"
            style={{ color: "#0D3B66", fontWeight: "500" }}
          >
            3: Add products and Kickstart your Store
          </h4>
          <h5 className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 text-left mx-auto" style={{ fontWeight: "400" }}>
            Update your store with the products created in the{" "}
            <span
              style={{ color: "#0D3B66", fontSize: "20px", fontWeight: "500" }}
            >
              Printribe
            </span>{" "}
            dashboard.You are all set now ! Launch your store for your
            community.
          </h5>
        </div>
        <div className="row">
          <h4
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-3 text-left mx-auto"
            style={{ color: "#0D3B66", fontWeight: "500" }}
          >
            4: YOUR <span style={{ fontWeight: "900" }}>STORE</span>
          </h4>
          <h5 className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 text-left mx-auto" style={{ fontWeight: "400" }}>
            Your customer makes a purchase on your store
          </h5>
        </div>
        <div className="row">
          <h4
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-3 text-left mx-auto"
            style={{ color: "#0D3B66", fontWeight: "500" }}
          >
            5: PRINTRIBE FACTORY
          </h4>
          <h5 className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 text-left mx-auto" style={{ fontWeight: "400" }}>
            The order details are received by us and processed immediately
          </h5>
        </div>
        <div className="row">
          <h4
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-3 text-left mx-auto"
            style={{ color: "#0D3B66", fontWeight: "500" }}
          >
            6: HAPPY CUSTOMER
          </h4>
          <h5 className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 text-left mx-auto" style={{ fontWeight: "400" }}>
            We Print,Pack & Push the order to your customer’s doorstep under
            your brand name,packaging & tag.
          </h5>
        </div>
        <div className="row mb-5">
          <h4
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-3 text-left mx-auto"
            style={{ color: "#0D3B66", fontWeight: "500" }}
          >
            7: PROFIT WITH A SMILE
          </h4>
          <h5 className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 text-left mx-auto" style={{ fontWeight: "400" }}>
            You make a profit on the set margins by you and also have a smile
            for delivering a worthy quality product to your esteemed customer
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
