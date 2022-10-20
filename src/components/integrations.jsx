import React from "react";
import Layout from "./layout";
import Navbar from "./navbar";
import { IoIosArrowForward } from "react-icons/io";
import { FaShopify, FaEtsy } from "react-icons/fa";
import IntegrationCard from "./integration-card";

function Integrations() {
  const integrationData = [
    {
      name: "Shopify",
      image:'https://files.cdn.printful.com/upload/integration-comp/32/327fc0741e5bdbf0e6eaa126d1ab0e4c_t?v=1661240229',
      type: "Platform",
      details: {
        setupTime: "Very Fast",
        bestFor: "Small businesses",
        price: "20$",
        productPushedToStore: "Yes",
        displayNotice: "Yes",
        openSource: "No",
        productPersonaliZation: "Yes",
        socialMediaSale: "Yes",
      },
      description:
        "Shopify is an easy to use platform. It has a quick and intuitive setup, user-friendly interface, and it comes with hosting. Our integration also has a product personalization tool that lets your customers personalize your designs.",
    },
    {
      name: "Etsy",
      image:'https://files.cdn.printful.com/upload/integration-comp/9c/9c76a020b9ae1fb4e5e6071057ea4023_t?v=1661240229',
      type: "Marketplace",
      details: {
        setupTime: "Very Fast",
        bestFor: "Artists,Beginners",
        price: "30$",
        productPushedToStore: "Yes",
        displayNotice: "Yes",
        openSource: "No",
        productPersonaliZation: "Yes",
      },
      description: `Etsy is a trusted, well-known marketplace that's ideal for creatives looking to reach a large audience. 

        *The term ‘Etsy' and other Etsy graphics are trademarks of Etsy, Inc. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.`,
    },
  ];
  return (
    <>
      <Layout>
        <Navbar />
        <div className="container-fluid integrations-main">
          <div className="py-5 row g-0 d-flex align-items-center justify-content-center">
            <div className="col-lg-6 ">
              <h1 className="py-2">
                Ecommerce platform & online marketplace comparison
              </h1>
              <h3 className="text-muted py-2">
                Find the best Printful integration for your store
              </h3>
              <button className="btn btn-danger mt-4 p-3">
                Take a quiz <IoIosArrowForward />
              </button>
            </div>
            <div
              className="col-lg-4 "
              style={{ position: "relative", overflow: "hidden" }}
            >
              <div
                style={{ width: "fit-content" }}
                className="FaShopify  bg-white integration-icon1 rounded-circle p-2"
              >
                <FaShopify color="#95BF47" size={45} />
              </div>
              <div
                style={{ width: "fit-content" }}
                className="FaEtsy bg-white  integration-icon2 rounded-circle m-4 p-4"
              >
                <FaEtsy color="#F37122" size={45} />
              </div>
            </div>
          </div>
        </div>
        <div className="container integration-card-section py-5">
          <div className="row">
            {integrationData.map((data) => (
              <div className="col-lg-3">
                <IntegrationCard data={data}/>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Integrations;
