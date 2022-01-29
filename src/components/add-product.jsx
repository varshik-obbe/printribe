import { Step, StepLabel, Stepper } from "@mui/material";
import React,{useEffect,useState} from "react";
import Products from "./components/products";
import ReviewOrder from "./components/review-order";
import Shipping from "./components/Shipping";
import Footer from "./footer";
import Header from "./header";
import axios from "axios";
const steps = ["Products", "Shipping", "Review Order"];




function AddProduct() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [products, setproducts] = useState([]);
  const getCart =async () => {
    const visitorId = localStorage.getItem("visitorId");
    
    if (visitorId) {
     let data = await axios.get(`https://api.theprintribe.com/api/zakekeCustomize/getCartInfo/${visitorId}`)
      data = data.data
      data = data.designInfo
      data = data.products_info
      const printFile = data.printFile
      var productInfo = []
    data.map(async(product) => {
      const productDetails = await axios.get(`http://103.235.106.235:500/api/products/getproduct/${product.ProductId}`)
      var data = productDetails.data
      data = data.product
      const prod = data.productdata[0]
      const productDetail = {}
      productDetail.qty = data.count
      productDetail.name = prod.title
      productDetail.price = prod.price
      productDetail.retail =  productDetail.qty*productDetail.price
      productDetail.image =  prod.img
      productInfo.push(productDetail)
    })
    console.log(productInfo)
    setproducts(productInfo)
    }
  }
  
 
 
  useEffect(() => {
    getCart()
  }, [])


  const renderComp = () => {
    switch (activeStep) {
      case 0:
        return <Products products={products}  handleNext={() => setActiveStep(activeStep + 1)} />;
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
