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
              Printful is an on-demand printing and fulfillment company that
              helps people turn their ideas into brands and products. Whether
              you wish to create your own online brand or gift someone a
              personalized t-shirt, we can help you get it done. Whenever
              someone—you or your customer—makes a purchase, we'll automatically
              receive the order, fulfill, and ship it.
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
