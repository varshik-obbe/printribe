import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import Products from "./components/products";
import ReviewOrder from "./components/review-order";
import Shipping from "./components/Shipping";
import Footer from "./footer";
import Header from "./header";

const steps = ["Products", "Shipping", "Review Order"];

function AddProduct() {
  const [activeStep, setActiveStep] = React.useState(0);

  const renderComp = () => {
    switch (activeStep) {
      case 0:
        return <Products handleNext={() => setActiveStep(activeStep + 1)} />;
      case 1:
        return <Shipping handleNext={() => setActiveStep(activeStep + 1)} />;
      case 2:
        return <ReviewOrder handleNext={() => setActiveStep(activeStep - 2)} />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div style={{ background: "#F8F8F8" }}>
        <div class="container-lg py-5">
          <div class="d-flex w-100 justify-content-center">
            <div class="col-12 col-md-8 px-1">
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
          </div>
          <div class="mt-5">{renderComp()}</div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AddProduct;
