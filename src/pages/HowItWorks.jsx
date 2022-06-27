import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import how1 from "../assets/howitworks_1.png";
import how2 from "../assets/howitworks_2.jpg";
import how3 from "../assets/howitworks_3.png";
import how4 from "../assets/howitworks_4.png";
import how5 from "../assets/howitworks_5.png";
import how6 from "../assets/howitworks_6.png";
import how7 from "../assets/howitworks_7.png";
import logo from "../assets/Printibe-logo1.png";
import styles from "../styles/howitworks.module.css";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  const [clicked, setClicked] = useState(false);

  return (
    <h3
      style={{
        color: "#0d3b66",
        fontWeight: "600",
        fontSize: "24px",
        backgroundColor: "none",
        cursor: "pointer",
        color: "#ee3c2f",
        userSelect: "none",
        display:'flex',
        alignItems: 'center',
      }}
      onClick={() => {decoratedOnClick(); setClicked(!clicked); }}
    >
      {clicked ? (
        <svg style={{ width: "24px", height: "24px",marginRight:'5px' }} viewBox="0 0 24 24">
          <path fill="gray" d="M20 14H4V10H20" />
        </svg>
      ) : (
        <svg style={{ width: "24px", height: "24px",marginRight:'5px' }} viewBox="0 0 24 24">
          <path fill="gray" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
        </svg>
      )}
      {children}
    </h3>
  );
}

const AccordionFunc = ({ title, para }) => {
  return (
    <Accordion>
      <Card style={{ border: "none" }}>
        <Card.Header style={{ backgroundColor: "#fff", border: "none" }}>
          <CustomToggle eventKey="0">{title}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body
            style={{
              color: "#5f727f",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "0.8px",
              lineHeight: "35px",
            }}
          >
            {para}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const HowItWorks = () => {

  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row border-bottom pb-4">
          <h3
            className="col-xl-8 col-lg-10 col-md-11 col-sm-11 col-12 mt-5 mb-4 text-center mx-auto"
            style={{ color: "#0d3b66", fontWeight: "600", fontSize: "24px" }}
          >
            How Printribe Works
          </h3>
          <h4
            className="col-xl-7 col-lg-9 col-md-10 col-sm-10 col-12 text-center mx-auto"
            style={{ fontWeight: "400" }}
          >
            Learn how does print on demand and drop shipping works with
            Printribe. Plan your business accordingly and start you sales in
            profit.
          </h4>
        </div>

        <div
          className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12 text-center mr-5"
          style={{ marginTop: "60px" }}
        >
          <svg style={{ width: "48px", height: "48px" }} viewBox="0 0 24 24">
            <path
              fill="#91a0ac"
              d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M14,15H16V5H12V7H14M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
            />
          </svg>
        </div>
        <div
          className="row d-flex justify-content-around"
          style={{ marginTop: "40px" }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 d-flex justify-content-end">
            <img src={how1} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
            <h4
              className="mt-5 mb-3"
              style={{
                color: "#0d3b66",
                fontWeight: "500",
                letterSpacing: "0.8px",
                fontSize: "18px",
              }}
            >
              Signup and Connect your eCommerce store with Printribe
            </h4>
            <h5
              className=""
              style={{
                color: "#5f727f",
                fontWeight: "400",
                letterSpacing: "normal",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              You can signup for free business account with Printribe. Connect your
              Shopify, Woocommerce or any other store using our custom built
              Plugins or open APIs.
            </h5>
          </div>
        </div>

        <div
          className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12 text-center mr-5"
          style={{ marginTop: "60px" }}
        >
          <svg style={{ width: "48px", height: "48px" }} viewBox="0 0 24 24">
            <path
              fill="#91a0ac"
              d="M17,13H13V11H15A2,2 0 0,0 17,9V7C17,5.89 16.1,5 15,5H11V7H15V9H13A2,2 0 0,0 11,11V15H17M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
            />
          </svg>
        </div>
        <div
          className="row d-flex justify-content-around flex-row-reverse"
          style={{ marginTop: "40px" }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 d-flex justify-content-start">
            <img src={how2} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
            <h4
              className="mt-5 mb-3"
              style={{
                color: "#0d3b66",
                fontWeight: "500",
                letterSpacing: "0.8px",
                fontSize: "18px",
              }}
            >
              Create products using your designs at Printribe Dashboard
            </h4>
            <h5
              className=""
              style={{
                color: "#5f727f",
                fontWeight: "400",
                letterSpacing: "normal",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              You can upload your designs to Printribe dashboard. Use them to
              create products with Printribe product creation tool.
            </h5>
          </div>
        </div>

        <div
          className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12 text-center mr-5"
          style={{ marginTop: "60px" }}
        >
          <svg style={{ width: "48px", height: "48px" }} viewBox="0 0 24 24">
            <path
              fill="#91a0ac"
              d="M17,13V11.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5V7C17,5.89 16.1,5 15,5H11V7H15V9H13V11H15V13H11V15H15A2,2 0 0,0 17,13M3,5H1V21A2,2 0 0,0 3,23H19V21H3M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1Z"
            />
          </svg>
        </div>
        <div
          className="row d-flex justify-content-around"
          style={{ marginTop: "40px" }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 d-flex justify-content-end">
            <img src={how3} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
            <h4
              className="mt-5 mb-3"
              style={{
                color: "#0d3b66",
                fontWeight: "500",
                letterSpacing: "0.8px",
                fontSize: "18px",
              }}
            >
              Update and Launch your Store
            </h4>
            <h5
              className=""
              style={{
                color: "#5f727f",
                fontWeight: "400",
                letterSpacing: "normal",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              Update your store with the products created in the Printribe
              dashboard. Launch the filled store for your audience.
            </h5>
          </div>
        </div>

        <div
          className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12 text-center mr-5"
          style={{ marginTop: "60px" }}
        >
          <svg style={{ width: "48px", height: "48px" }} viewBox="0 0 24 24">
            <path
              fill="#91a0ac"
              d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M15,15H17V5H15V9H13V5H11V11H15M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
            />
          </svg>
        </div>
        <div
          className="row d-flex justify-content-around flex-row-reverse"
          style={{ marginTop: "40px" }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 d-flex justify-content-start">
            <img src={how4} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
            <h4
              className="mt-5 mb-3"
              style={{
                color: "#0d3b66",
                fontWeight: "500",
                letterSpacing: "0.8px",
                fontSize: "18px",
              }}
            >
              Promote your store with your strength
            </h4>
            <h5
              className=""
              style={{
                color: "#5f727f",
                fontWeight: "400",
                letterSpacing: "normal",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              This is the time to spread the word out using innovative ways.
              Build the brand for lifetime and play it to your strengths.
            </h5>
          </div>
        </div>

        <div
          className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12 text-center mr-5"
          style={{ marginTop: "60px" }}
        >
          <svg style={{ width: "48px", height: "48px" }} viewBox="0 0 24 24">
            <path
              fill="#91a0ac"
              d="M17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H11V11H15V13H11V15H15A2,2 0 0,0 17,13M3,5H1V21A2,2 0 0,0 3,23H19V21H3M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1Z"
            />
          </svg>
        </div>
        <div
          className="row d-flex justify-content-around"
          style={{ marginTop: "40px" }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 d-flex justify-content-end">
            <img src={how5} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
            <h4
              className="mt-5 mb-3"
              style={{
                color: "#0d3b66",
                fontWeight: "500",
                letterSpacing: "0.8px",
                fontSize: "18px",
              }}
            >
              Check the orders
            </h4>
            <h5
              className=""
              style={{
                color: "#5f727f",
                fontWeight: "400",
                letterSpacing: "normal",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              Check the orders coming in for shipping, contact data errors. Also
              keep personal communication with the customer until delivery. This
              reduces COD cancellations and improves repeat orders.
            </h5>
          </div>
        </div>

        <div
          className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12 text-center mr-5"
          style={{ marginTop: "60px" }}
        >
          <svg style={{ width: "48px", height: "48px" }} viewBox="0 0 24 24">
            <path
              fill="#91a0ac"
              d="M13,11H15V13H13M13,15H15A2,2 0 0,0 17,13V11C17,9.89 16.1,9 15,9H13V7H17V5H13A2,2 0 0,0 11,7V13C11,14.11 11.9,15 13,15M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
            />
          </svg>
        </div>
        <div
          className="row d-flex justify-content-around flex-row-reverse"
          style={{ marginTop: "40px" }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 d-flex justify-content-start">
            <img src={how6} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
            <h4
              className="mt-5 mb-3"
              style={{
                color: "#0d3b66",
                fontWeight: "500",
                letterSpacing: "0.8px",
                fontSize: "18px",
              }}
            >
              Printribe custom prints and delivers the orders
            </h4>
            <h5
              className=""
              style={{
                color: "#5f727f",
                fontWeight: "400",
                letterSpacing: "normal",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              Once the order is received, Printribe does custom printing, branding,
              packing with accessories and delivers to your customers.
            </h5>
          </div>
        </div>

        <div
          className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12 text-center mr-5"
          style={{ marginTop: "60px" }}
        >
          <svg style={{ width: "48px", height: "48px" }} viewBox="0 0 24 24">
            <path
              fill="#91a0ac"
              d="M13,15L17,7V5H11V7H15L11,15M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z"
            />
          </svg>
        </div>
        <div
          className="row d-flex justify-content-around mb-5"
          style={{ marginTop: "40px" }}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 d-flex justify-content-end">
            <img src={how7} alt="howitworks" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-12">
            <h4
              className="mt-5 mb-3"
              style={{
                color: "#0d3b66",
                fontWeight: "500",
                letterSpacing: "0.8px",
                fontSize: "18px",
              }}
            >
              COD Amount Settlement
            </h4>
            <h5
              className=""
              style={{
                color: "#5f727f",
                fontWeight: "400",
                letterSpacing: "normal",
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              Upon delivery of every COD order, Printribe collects your COD amount
              and deposits in your wallet/bank in 4-5 working days. Invoices are
              raised at the end of each month.
            </h5>
          </div>
        </div>
      </div>

      <hr />
      <div className="col-12 d-flex justify-content-center flex-column py-5">
        <button
          className={`btn p-3 col-10 mx-auto ${styles.whyPrintribeBtn}`}
          style={{
            backgroundColor: "#EE3C2F",
            color: "#fff",
            borderRadius: "40px",
          }}
        >
          Why Printribe?
        </button>

        <h4
          className="col-xl-7 col-lg-9 col-md-10 col-sm-10 col-12 text-center mx-auto mt-5"
          style={{ fontWeight: "400", color: "#080226", fontSize: "18px" }}
        >
          Learn more about the differences of working with Printribe from the link
          above.
        </h4>
      </div>
      <hr />

      <div className={`col-12 mt-5 mx-auto ${styles.signup}`}>
        <img
          src={logo}
          alt="logo"
          className="img-fluid col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5"
        />
        <div>
          <h3 style={{ color: "#fff" }}>
            Signup Now and grow your brand with us.
          </h3>
          <button onClick={() => navigate('/signup')}>Signup</button>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <AccordionFunc
            title="What is Print on Demand?"
            para="Print on demand (POD) is a printing technology and business process in which T-Shirts and other garments are printed only when an order is received. Manufacturer holds plain t-shirts in stock on various styles, colours and sizes. When a customer orders a design, printer prints it and dispatches to the customer. It reduces the unsold inventory risk for the brand owners. Any T-Shirt Brand can have an account with Printribe, when an order is received on the website, it is passed to the Printribe's system, where it is been printed and dispatched to the end customer with custom Brand Name and packaging."
          />
          <hr />
          <AccordionFunc
            title="What is Drop Shipping?"
            para="Dropshipping is a retail fulfillment method where a store doesn't keep the products it sells in stock. Instead, when a store sells a product, it purchases the item from a third party and has it shipped directly to the customer. As a result, the merchant never sees or handles the product. The biggest difference between dropshipping and the standard retail model is that the selling merchant doesn't stock or own inventory. Instead, the merchant purchases inventory as needed from a third party - usually a wholesaler or manufacturer - to fulfill orders."
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HowItWorks;
