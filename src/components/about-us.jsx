import React from "react";
import Layout from "./layout";
import Navbar from "./navbar";

function About() {
  return (
    <>
      <Layout>
        {" "}
        <Navbar />
        <div className="row g-0 about-main">
          <div className="d-flex align-items-center  justify-content-center">
            <h1 className="text-white 		d-none d-sm-block">
              Turning your ideas into brands and products
            </h1>
          </div>
        </div>
        <h1 className="text-black g-0	py-2	d-block d-sm-none">
          Turning your ideas into brands and products
        </h1>
        <div className="container">
        <div className="about-section row g-0 d-flex justify-content-around py-5">
          <div className="col-lg-5 float-end">
            <h1 className="">We’re here for you and your brand</h1>
            <p>
              Welcome to Printribe!
              
              We're a print on demand and order fulfillment company that can help anyone who wants to sell products online without inventory, custom printing, processing and logistics hurdles. We enable anyone to signup on theprintribe.com and start selling products online.

              People without resources for inventory and without knowledge for merchandising can simply design and sell products online with custom printing and custom branding.
            </p>
          </div>
          <div className="col-lg-5 ">
            <img
            className="rounded"
              style={{ height: "100%", width: "100%" }}
              src="https://static.cdn.printful.com/s/dist-pf/image-assets/ideas-into-brands-1.7b1a42139c69714e130f63870dcac2c3.jpg"
            />
          </div>
        </div></div>
      </Layout>
    </>
  );
}

export default About;
