import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Products from "./components/products";
import ReviewOrder from "./components/review-order";
import Shipping from "./components/Shipping";



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
      <div class="container-lg">
        <div class="d-flex w-100 justify-content-center mt-4">
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
      <Footer />
    </React.Fragment>
  );
}

export default AddProduct;
