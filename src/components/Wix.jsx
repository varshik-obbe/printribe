import { Rating, Step, StepContent, StepLabel, Stepper } from "@mui/material";
import { FaWix } from "react-icons/fa";
import Layout from "./layout";
import Navbar from "./navbar";
const data=[
    {
        title:"Connect your Wix store",
        description:"Get the Printful app from the Wix App Store and follow the instructions to install it"
    },
    {
        title:"Choose products",
        description:"Pick from 439 products and try out our Design Maker to create designs for your merchandise"
    },
    {
        title:"Make sales",
        description:"Once an order comes in, it's automatically sent for production to one of Printful's fulfillment centers"
    },
    {
        title:"Relax while we ship your orders",
        description:"We fulfill and ship products directly to your customers under your brand"
    }
]
const Wix = () => {
  return (
    <>
      {" "}
      <Layout>
        <Navbar />
        <div className="Wix-container">
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-md-6 ">
                <h1>Sell on Wix—build your ecommerce business</h1>
                <h5>
                  Dropship personalized products with Printful, all under your
                  brand
                </h5>
                <div className="mt-4">
                  {" "}
                  <FaWix color="#95BF47" size={45} />
                  <span className="fs-5">Wix</span> app store
                </div>
                <div className="d-flex  mt-3">
                  <h3>4.5</h3>
                  <Rating name="read-only" value={4} readOnly />
                  <h3 className="ms-5">#1</h3>
                </div>
                <div className="d-flex  mt-3">
                  <p>4094 total reviews</p>
                  <p className="ms-5">POD app by Wix users</p>
                </div>
                <div className="d-flex ">
                  <button className="btn btn-primary">Connect now</button>
                  <button className="btn btn-secondary ms-5">
                    Sell on social media
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 ">
                <img
                  className="img-fluid"
                  src="https://static.wixstatic.com/media/311dce_b4cfae2ed907459aaa4f47897d49e3df~mv2.jpg/v1/crop/x_0,y_1,w_640,h_500/fill/w_560,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/311dce_b4cfae2ed907459aaa4f47897d49e3df~mv2.jpg"
                />
              </div>
            </div>
            <div className="row">
              <h2 className="text-center my-5">
                Sell print-on-demand products on Wix
              </h2>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>Why sell on Wix?</h3>
                <p>
                  Wix is easy to set up and it has an intuitive interface,
                  making it perfect for both beginners and experienced sellers.
                  Since there’s no time to waste when it comes to business,
                  Wix store themes are tailored for ecommerce
                  needs—fast-loading and mobile-friendly.
                </p>
                <p>
                  Offer your customers more freedom with products that are
                  uniquely theirs. Let the shoppers create personalized products
                  right on your storefront with the personalization tool and
                  boost your sales.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 lh-2">
                <div>
                  <h6 className="d-inline">Type</h6>:{" "}
                  <span className="d-inline">Ecommerce platform</span>
                </div>
                <hr></hr>
                <div>
                  <h6 className="d-inline">Setup time</h6>:{" "}
                  <span className="d-inline">Very fast</span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Price</h6>:{" "}
                  <span className="d-inline">
                    {" "}
                    14-day free trial, subscription starting at $29/mo. +
                    percentage-based transaction fee per order
                  </span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Best for </h6>:{" "}
                  <span className="d-inline">Small businesses</span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Products pushed to store </h6>:{" "}
                  <span className="d-inline">Yes</span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Displays "out of stock" </h6>:{" "}
                  <span className="d-inline">Yes</span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Live shipping rates </h6>:{" "}
                  <span className="d-inline">Yes</span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Open source </h6>:{" "}
                  <span className="d-inline">No</span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Product personalization tool </h6>:{" "}
                  <span className="d-inline">Yes</span>
                </div>{" "}
                <hr></hr>
                <div>
                  <h6 className="d-inline">Sell on social media </h6>:{" "}
                  <span className="d-inline">Yes</span>
                </div>{" "}
                <hr></hr>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="container">
            <h2 className="my-5 text-center">
              Get started with Wix right away
            </h2>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://printful.s3-accelerate.amazonaws.com/upload/lpg-svg-upload/81/81c7deea1126a9df6d1144a968e1d3bb"
                />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://printful.s3-accelerate.amazonaws.com/upload/lpg-svg-upload/05/055bfd35525e82abf1a7f3aef3a1ac68"
                />
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://printful.s3-accelerate.amazonaws.com/upload/lpg-svg-upload/7b/7bc2f801faa20425cf695c65130d17ee"
                />
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://printful.s3-accelerate.amazonaws.com/upload/lpg-svg-upload/0d/0dd7d1c11c90f22750d42371c7c6ac24"
                />
              </div>
            </div>
            <Stepper activeStep={""} className="my-3">
        {data.map((item, index) => {
 
          return (
            <Step key={item.title}>
              <StepLabel ><h6>{item.title}</h6>{item.description}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="row my-5">
        <h2 className="text-center">Be where your customers are—sell on social media
</h2>
<h4 className="text-muted text-center">Connect your Wix store to social media channels

</h4>
              <div className="col-lg-6 col-sm-12 col-md-6 mt-5">
                <h5>Reach more customers
</h5>
<p>Sell your goodies directly on social media! The entire shopping experience, from product discovery to the checkout process, happens within the same social app. By selling directly on social media, you offer a streamlined and mobile-friendly user experience. Customers are looking for the easiest and fastest way to shop, and with social commerce, you give them what they ask for.

</p>
<p>Are you ready to explore social media channels?

</p>
<button className="btn btn-secondary">Explore now</button>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 mt-5">
                <img
                  className="img-fluid"
                  src="https://i.pcmag.com/imagery/reviews/00Z1mnZCcGR9r9D5hNbsFbW-36.fit_scale.size_760x427.v1612863800.jpg"
                />
              </div>
            </div>
          </div>
          <div className=" bg-dark d-flex justify-content-center align-items-center p-5 ">
            <div className="lh-4">     <h3 className="text-white text-center">Your Wix print-on-demand business is just a click away
</h3>
            <h6  className="text-white text-center">Connect your store and begin your journey today
</h6>
<div className="d-flex justify-content-center">            <button className="btn btn-primary ">Connect now</button></div>
</div>
       
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Wix;
