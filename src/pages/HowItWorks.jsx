import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import styles from "../styles/howitworks.module.css";

const HowItWorks = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row1">
          <h1>Custom Branding Services</h1>
          <h2>
            We are wholehearted about your brand. We support you in achieving
            it.
          </h2>
          <p>
            Printribe prints on demand and delivers orders to your customers.
            We're sure that you want to create a wow experience for your
            community. We exactly understand that and make it happen in every
            sole delivery. We believe your brand should be loud enough to be
            better experienced by your customers. We create unique branding
            options to be used by your brand. You can design and sell T-shirts
            and various other products from Printribe, it will be printed
            on-demand and fulfilled with your own brand displayed brightly on
            the product or the package. Explore our custom branding services
            below.
            <br /> Note: If you are using custom branding services, upload the
            respective artworks in your profile page. So that the dispatch team
            places the exact artworks on your products and packets.
          </p>
        </div>
        <div className="row2"></div>
        <div className="row3"></div>
        <div className="row4"></div>
        <div className="row5"></div>
        <div className="row6"></div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
