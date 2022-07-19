import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import servicesimg_1 from "../assets/servicesimg_1.png";
import servicesimg_2 from "../assets/servicesimg_2.png";
import servicesimg_3 from "../assets/servicesimg_3.png";
import servicesimg_4 from "../assets/servicesimg_4.png";

const Services = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row d-flex flex-column justify-content-center">
          <h1 className="col-12 my-5 text-center" style={{ color: "#0D3B66" }}>
            Custom Branding Services
          </h1>
          <h1 className='col-12 mb-5 text-center' style={{color:'#EE3C2F'}}>COMING SOON!</h1>
          {/* <h3
            className="col-xl-5 col-lg-10 col-md-12 col-sm-12 col-12 mb-4 text-center mx-auto"
            style={{ color: "#0D3B66" }}
          >
            We are wholehearted about your brand. We support you in achieving
            it.
          </h3>
          <p className="col-xl-5 col-lg-10 col-md-12 col-sm-12 col-12 mb-4 mx-auto" style={{ color: "#0D3B66" }}>
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
            <br />
            <br /> Note: If you are using custom branding services, upload the
            respective artworks in your profile page. So that the dispatch team
            places the exact artworks on your products and packets.
          </p>
        </div>
        <div className="row d-flex flex-column justify-content-center">
          <h1
            className="col-12 my-5 text-center"
            style={{ color: "#0D3B66", fontWeight: "300" }}
          >
            INSIDE NECK LABEL
          </h1>
          <img
            src={servicesimg_1}
            alt="services img"
            className="col-xl-3 col-lg-5 col-md-5 col-sm-10 col-10 mx-auto img-fluid mb-4"
          />
          <p className="col-xl-5 col-lg-10 col-md-12 col-sm-12 col-12 my-5 mx-auto" style={{ color: "#0D3B66" }}>
            This is for T-Shirts, Polos, and Sweatshirts. People don’t prefer
            unbranded shirts, do they?. So, brand your shirts with your own
            custom designed label with brand name, wash care and what not!. Sell
            Custom branded T-Shirts with Printribe at ease.
          </p>
          <ul className="col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 mx-auto">
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Max. Print Size: 3 x 3 Inch
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              MOQ: 500 Labels
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Design File: Png or Pdf format.
            </li>
          </ul>
        </div>
        <div className="row d-flex flex-column justify-content-center">
          <button
            className="col-5 mt-5 my-2 mx-auto rounded"
            style={{
              color: "#fff",
              backgroundColor: "#FF6653",
              cursor: "pointer",
              width: "100px",
            }}
          >
            Order now
          </button>
          <h1
            className="col-12 my-5 text-center"
            style={{ color: "#0D3B66", fontWeight: "300" }}
          >
            Custom Pack-Ins
          </h1>
          <img
            src={servicesimg_2}
            alt="services img"
            className="col-xl-3 col-lg-5 col-md-5 col-sm-10 col-10 mx-auto img-fluid mb-4"
          />
          <p className="col-xl-5 col-lg-10 col-md-12 col-sm-12 col-12 my-5 mx-auto" style={{ color: "#0D3B66" }}>
            Personalise your orders with custom pack-ins of your choice. Be
            creative in designing and creating a pack in. We can create one and
            add to your orders as per your design as well. A personalised 6 x 4
            Inch Thank you/Coupon Card/Gift Certificate will create a personal
            touch. For us to create Pack-Ins, use the following specs.
          </p>
          <ul className="col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 mx-auto">
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Max. Print Size: 6 x 4 Inch
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Design Colour: Multi-Colour
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Print Sides: Single Side Only.
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              MOQ: 500 Pcs
            </li>

            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Design File: Place designs in a pdf or png file.
            </li>
          </ul>
        </div>
        <div className="row d-flex flex-column justify-content-center">
          <button
            className="col-5 mt-5 my-2 mx-auto rounded"
            style={{
              color: "#fff",
              backgroundColor: "#4CADC9",
              cursor: "pointer",
              width: "250px",
            }}
          >
            Order Custom Printed Pack Ins
          </button>
          <h1
            className="col-12 my-5 text-center"
            style={{ color: "#0D3B66", fontWeight: "300" }}
          >
            Custom Hang Tags
          </h1>
          <img
            src={servicesimg_3}
            alt="services img"
            className="col-xl-2 col-lg-4 col-md-4 col-sm-8 col-8 mx-auto img-fluid mb-4"
          />
          <p className="col-xl-5 col-lg-10 col-md-12 col-sm-12 col-12 my-5 mx-auto" style={{ color: "#0D3B66" }}>
            Make your apparels more branded by decorating with a custom hang
            tag. You can order tags with us with a minimum of 500 pcs. Its been
            custom printed with a 300 GSM board with your design. We will store
            them and use for all your apparel orders.
          </p>
          <ul className="col-xl-4 col-lg-8 col-md-10 col-sm-10 col-10 mx-auto">
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Max. Print Size: 2 x 3.5 Inch
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Design Colour: Multi-Colour
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Print Sides: Front and Back
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              MOQ: 500 Pcs
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              Design File: Place front and back designs in one pdf file
            </li>
          </ul>
        </div>
        <div className="row d-flex flex-column justify-content-center">
          <button
            className="col-5 mt-5 my-2 mx-auto rounded"
            style={{
              color: "#fff",
              backgroundColor: "#4CADC9",
              cursor: "pointer",
              width: "200px",
            }}
          >
            Order Custom Hang Tags
          </button>
          <button
            className="col-5 mt-5 my-2 mx-auto rounded"
            style={{
              color: "#fff",
              backgroundColor: "#FF6653",
              cursor: "pointer",
              width: "100px",
            }}
          >
            Order now
          </button>
          <h1
            className="col-12 mt-4 text-center"
            style={{ color: "#0D3B66", fontWeight: "300" }}
          >
            TAMPER-PROOF <span style={{ fontWeight: "500" }}>POLY BAGS</span>
          </h1>
          <h4
            className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12 my-3 text-center mx-auto"
            style={{ color: "#0D3B66",fontWeight: "500" }}
          >
            Sleek feeling and minimal design, custom made tamper proof bags are
            best to create the ideal experience for your customers.
          </h4>
          <ul className="col-xl-5 col-lg-6 col-md-9 col-sm-11 col-11 mt-3 mx-auto">
            <li className='my-3' style={{ color: "#0D3B66", listStyleType: "disc" }}>
              <h4 style={{ color: "#0D3B66",fontWeight: "500" }}>
                Three different sizes starting from 10 by 12 inches, 12 by 16
                inches, 14 by 18 inches
              </h4>
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              <h4 style={{ color: "#0D3B66",fontWeight: "500" }}>
                With a printable area of 8×10 inches, your design will stand out
                on the polybag
              </h4>
            </li>
            <li className='my-3' style={{ color: "#0D3B66", listStyleType: "disc" }}>
              <h4 style={{ color: "#0D3B66",fontWeight: "500" }}>
                To place an order you need to order a minimum of 1000 polybags
                (used only for t-shirts, phone cases, pop grips, button badge
                and notebook)
              </h4>
            </li>
            <li style={{ color: "#0D3B66", listStyleType: "disc" }}>
              <h4 style={{ color: "#0D3B66",fontWeight: "500" }}>
                The material used is 60 micron polybag which costs Rs.
                11/16.5/22 per bag for different sizes
              </h4>
            </li>
          </ul>
          <button
            className="col-5 mt-5 my-2 mx-auto rounded"
            style={{
              color: "#fff",
              backgroundColor: "#FF6653",
              cursor: "pointer",
              width: "100px",
            }}
          >
            Order now
          </button>
        </div>
        <div className="row">
        <img
            src={servicesimg_4}
            alt="services img"
            className="col-xl-5 col-lg-5 col-md-6 col-sm-8 col-8 mx-auto img-fluid my-5"
          />
        </div> */}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
