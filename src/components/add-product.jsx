import React, { useEffect, useRef, useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";

import Footer from "./footer";
import Header from "./header";
import Products from "./components/products";
import ReviewOrder from "./components/review-order";
import Shipping from "./components/Shipping";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Delayed from "./Delayed";
import Loader from "./Loader/Loader";

const steps = ["Products", "Shipping", "Review Order"];
const AddProduct = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [products, setProducts] = useState(null);

  const navigate = useNavigate();

  // const activeStep=0;
  // let products=[]
  // useRef(products)
  useEffect(() => {
    console.log("useEffect called");
    // getCartData()
    const visitorId = localStorage.getItem("visitorId");
    console.log(visitorId);

    if (visitorId) {
      var productInfo = [];
      var zekekeData = [];
      axios
        .get(`/zakekeCustomize/getCartInfo/${visitorId}`)
        .then(({ data }) => {
          console.log("data", data);

          // var zekekeImage = tempPreviewImageUrl
          zekekeData = data.designInfo.products_info;
          localStorage.setItem("zekekeData", JSON.stringify(zekekeData));

          data.designInfo.products_info.forEach((product) => {
            axios
              .get(`/products/getproduct/${product.ProductId}`)
              .then(({ data }) => {
                // var data2 = data;
                // data2 = data2.product
                var prod = data.product.productdata[0];
                console.log("product", prod);

                var zekekeImage;

                zekekeData.forEach((curr) => {
                  if (curr.ProductId === product.ProductId)
                    zekekeImage = curr.tempPreviewImageUrl;
                });

                //if api product id is already present in productInfo array then update

                let productDetail = {
                  name: prod.title,
                  price: prod.price,
                  image: `https://api.theprintribe.com/${prod.img}`,
                  prodId: prod.id,
                  zekekeImage,
                };

                productInfo.push(productDetail);

                //updating quantities of same products
                // var customizeProduct = 
                

                //storing cart products in local storage
                var cartItems = [];

                if (localStorage.getItem("cartItems") === null) {
                  cartItems.push(productDetail);
                } else {
                  cartItems = JSON.parse(localStorage.getItem("cartItems"));

                  var itemPresent = cartItems.find(
                    (curr) => curr.prodId === prod.id
                  );

                  if (itemPresent) {
                    cartItems = cartItems.map((curr) =>
                      curr.prodId === prod.id ? productDetail : curr
                    );
                  } else {
                    cartItems.push(productDetail);
                  }
                }

                console.log(cartItems);

                localStorage.setItem("cartItems", JSON.stringify(cartItems));
              });
          });

          setProducts(productInfo);
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Cart Is Empty!",
        showConfirmButton: true,
      }).then(() => {
        navigate(-1);
      });
    }
    //  console.log(products)
    // console.log(+new Date());
    // this.setState({
  }, []);

  const renderComp = () => {
    switch (activeStep) {
      case 0: {
        return (
          products && (
            <Delayed delay={2000} loader={<Loader />}>
              <Products
                handleNext={() => setActiveStep(activeStep + 1)}
              />
            </Delayed>
          )
        );
      }

      case 1:
        return <Shipping handleNext={() => setActiveStep(activeStep + 1)} />;
      case 2:
        return (
          products && (
            <ReviewOrder
              products={products}
              handleNext={() => setActiveStep(activeStep - 2)}
            />
          )
        );
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
          <div class="mt-5">{products && renderComp()}</div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AddProduct;

// function AddProduct() {
//   // state = {
//   //   activeStep: 0,
//   //   products: [],
//   // }
//   const [activeStep, setActiveStep] = useState(0);
//   const [products, setProducts] = useState([]);

//   // const activeStep=0;
//   // let products=[]

//   useEffect(() => {
//     console.log('useEffect called');
//     // getCartData()
//     const visitorId = localStorage.getItem("visitorId");
//     console.log(visitorId);
//     if (visitorId) {

//       axios.get(`/zakekeCustomize/getCartInfo/${visitorId}`)
//         .then(({ data }) => {
//           var productInfo = []
//           data.designInfo.products_info.map((product) => {
//             axios.get(`/products/getproduct/${product.ProductId}`)
//               .then(({ data }) => {

//                 // var data2 = data;
//                 // data2 = data2.product
//                 const prod = data.product.productdata[0]
//                 const productDetail = {}
//                 productDetail.qty = prod.quantity
//                 productDetail.name = prod.title
//                 productDetail.price = prod.price
//                 productDetail.retail = productDetail.qty * productDetail.price
//                 productDetail.image = prod.img
//                 productInfo.push(productDetail)
//               })
//           })
//           console.log(productInfo);
//           // this.setState({
//           setProducts(productInfo)
//           console.log(products);
//           // })
//         })
//     }
//     //    console.log(products)
//   },[])

//   // render() {
//   // const setActiveStep = (step) => {
//   //   this.setState({
//   //     activeStep: step
//   //   })
//   // }
//   const renderComp = () => {

//     switch (activeStep) {
//       case 0:
//         return <Products products={products} handleNext={() => setActiveStep(activeStep + 1)} />;
//       case 1:
//         return <Shipping handleNext={() => setActiveStep(activeStep + 1)} />;
//       case 2:
//         return <ReviewOrder handleNext={() => setActiveStep(activeStep - 2)} />;
//       default:
//         return null;
//     }
//   };
//   return (
//     <React.Fragment>
//       <Header />
//       <div style={{ background: "#F8F8F8" }}>
//         <div class="container-lg py-5">
//           <div class="d-flex w-100 justify-content-center">
//             <div class="col-12 col-md-8 px-1">
//               <Stepper activeStep={activeStep}>
//                 {steps.map((label, index) => {
//                   const stepProps = {};
//                   const labelProps = {};
//                   return (
//                     <Step key={label} {...stepProps}>
//                       <StepLabel {...labelProps}>{label}</StepLabel>
//                     </Step>
//                   );
//                 })}
//               </Stepper>
//             </div>
//           </div>
//           <div class="mt-5">{products && renderComp()}</div>
//         </div>
//       </div>
//       <Footer />
//     </React.Fragment>
//   );
//   // }
// }

// export default AddProduct
