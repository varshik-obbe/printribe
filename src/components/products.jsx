import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React, { useEffect, useRef, useState } from "react";
import { default as img1, default as img3 } from "../assets/tshirtblack.PNG";

import Swal from "sweetalert2";
import axios from "axios";
import img2 from "../assets/tshirtblue.PNG";
import style from "../styles/style.css";
import { useParams } from "react-router-dom";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";

const Products = () => {
  const { prodid } = useParams();
  const [product, setproduct] = useState({});
  const [color, setColor] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [size, setSize] = useState("");
  const [productName, setProductName] = useState("");
  const [colorId, setColorId] = useState("0");
  const [isLogged, setIsLogged] = useState(false);
  const [isCustomizeable, setIsCustomizeable] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [productImageArray, setProductImageArray] = useState();

  // const [customizeProduct, setCustomizeProduct] = useState([]);
  const [displayImage, setDisplayImage] = useState("");

  const getProduct = () => {
    if (checkLogin()) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    console.log(prodid);
    axios
      .get(`/products/getproduct/${prodid}`)
      .then(({ data }) => {
        console.log(data);
        console.log(data.product.productdata[0]);
        setproduct(data.product.productdata[0]);
        setProductName(data.product.productdata[0].title);
        setProductImageArray(data.product.productdata[0].extra_imgs);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/zakekeVariant/isZakekeProduct/${prodid}`)
      .then(({ data }) => {
        if (
          data.success !== undefined &&
          data.success !== null &&
          data.success
        ) {
          setIsCustomizeable(true);
          console.log(data.success);
        }
      })
      .catch(({ err }) => console.log(err));
  };

  const checkColorAndSize = () => {
    if (
      color !== "" &&
      color !== null &&
      color !== undefined &&
      size !== "" &&
      size !== null &&
      size !== undefined
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    const customerId = localStorage.getItem("customerId");
    if (
      (token !== "") &
      (token !== null) &
      (token !== undefined) &
      (customerId !== "") &
      (customerId !== null) &
      (customerId !== undefined)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const customize = (evt) => {
    evt.preventDefault();

    var customizeProduct = []

    console.log(localStorage.getItem("customizeProduct"))

    if (localStorage.getItem("customizeProduct")) {
      customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"))
    }

    if (checkColorAndSize()) {
      if (checkLogin()) {
       
        var formCustomizer = document.getElementById("frmCustomizer");
        // var formProductPage = document.getElementById("{ idFormProduct }");
        formCustomizer.elements["productid"].value = color + product.id;
        console.log(formCustomizer.elements["productid"].value);
        formCustomizer.elements["quantity"].value = productQuantity;
        formCustomizer.elements["masterProductId"].value = product.id;
        formCustomizer.elements["color"].value = color;
        formCustomizer.elements["colorId"].value = colorId;
        formCustomizer.elements["title"].value = productName;
        // localStorage.setItem("product_color",color);
        // localStorage.setItem("product_quantity",quantity);

        // var flag = false;
        //if product is already present in LS , we will update the quantity
        // customizeProduct.map((curr, index) => {
        //   if (
        //     curr.product_id === product.id &&
        //     curr.size === size &&
        //     curr.color.color_code === colorCode
        //   ) {
        //     var currQty = 0;
        //     console.log(curr)
        //     console.log(curr["quantity"])

        //     currQty = parseInt(curr.quantity);
        //     console.log("currQty",currQty)

        //     console.log("productQuantity",productQuantity)

        //     currQty += parseInt(productQuantity);
        //     console.log("currQty",currQty)

        //     curr.quantity = currQty

        //     flag = true;
        //   }
        // });

        // if (flag === false) {
        //   //customized product details object
        //   customizeProduct.push({
        //     product_id: product.id,
        //     size,
        //     quantity: productQuantity,
        //     color: {
        //       color_code: colorCode,
        //       color_name: color,
        //       colorId,
        //     },
        //     title: productName,
        //   });
        // }

        console.log("before", customizeProduct);

        customizeProduct.push({
          product_id: product.id,
          size,
          quantity: productQuantity,
          color: {
            color_code: colorCode,
            color_name: color,
            colorId,
          },
          title: productName,
        });

        //storing all the customized product details in local storage
        localStorage.setItem(
          "customizeProduct",
          JSON.stringify(customizeProduct)
        );

        console.log("after", customizeProduct);
       
          formCustomizer.submit();
        
      } else {
        window.location.href = "/signin";
      }
    } else {
      Swal.fire("Error", "Please Select all the options", "error");
    }
  };

  const handleSizeChange = (e) => {
    console.log(e.target.id);
    setSize(e.target.id);
    const color = document.getElementById(e.target.id).style.backgroundColor;
    for (var i = 0; i < product.productsizes.length; i++) {
      document.getElementById(product.productsizes[i]).style.backgroundColor =
        "white";
      document.getElementById(product.productsizes[i]).style.color = "black";
    }
    if (color !== "black") {
      document.getElementById(e.target.id).style.backgroundColor = "black";
      document.getElementById(e.target.id).style.color = "white";
    } else {
      document.getElementById(e.target.id).style.backgroundColor = "white";
      document.getElementById(e.target.id).style.color = "black";
    }
  };

  const handleColorsclick = (e) => {
    const color = document.getElementById(e.target.id).style.border;

    for (var i = 0; i < product.productcolors.length; i++) {
      document.getElementById(product.productcolors[i].colorName).style.border =
        "none";
    }

    if (color === "none") {
      console.log(e.target.id);
      console.log(color);
      document.getElementById(e.target.id).style.border = "2px solid black";
      //  document.getElementById(e.target.id).style.color ="white"
    } else {
      console.log(e.target.id);
      console.log(color);
      document.getElementById(e.target.id).style.border = "1px solid black";
      // document.getElementById(e.target.id).style.color ="black"
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleChangeQty = (task) => {
    if (task === "increase") {
      setProductQuantity(parseInt(productQuantity) + 1);

      // customizeProduct[index].quantity = (parseInt(quantity) + 1).toString();

      // localStorage.setItem(
      //   "customizeProduct",
      //   JSON.stringify(customizeProduct)
      // );
    } else if (task === "decrease") {
      if (productQuantity == 1) return;

      setProductQuantity(parseInt(productQuantity) - 1);

      // customizeProduct[index].quantity = (parseInt(quantity) - 1).toString();

      // localStorage.setItem(
      //   "customizeProduct",
      //   JSON.stringify(customizeProduct)
      // );
    }
  };

  const checkQty = (e) =>{
    if(e.target.value < 1 || e.target.value === ""){
      setProductQuantity(1)
    }
  }

  var settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // vertical: true,
    rows: 4,
    // slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  return (
    <>
      <div>
        <div className="row mx-0">
          <div className="col-12">
            <div className={"mx-4 my-2 py-4 breadCrumbs"}>
              <a href="/products">Product catalog</a> /{" "}
              <a href="/products">Men's Clothing</a> / {productName}
            </div>
          </div>
        </div>
        <div className="row mx-0">
          <div className={"col-lg-6 col-md-12 imgSection"}>
            <div className="row h-100">
              <div className="prodContainer">
                <div className="ti me-2">
                  <Slick {...settings} className="carouselContainer">
                    {productImageArray &&
                      productImageArray.map((curr, index) => (
                        <div
                          className="product_imgs"
                          key={index}
                          onMouseEnter={() =>
                            setDisplayImage(
                              `${process.env.REACT_APP_IMAGE_BASE_URL}/${curr}`
                            )
                          }
                          onMouseLeave={() => setDisplayImage(null)}
                        >
                          <img
                            draggable="false"
                            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${curr}`}
                          />
                        </div>
                      ))}
                    {/* <div className="product_imgs">
                      <img
                        draggable="false"
                        src={
                          "https://static.wixstatic.com/media/f1c4b5_d94a53ee5bb24e5d9ec1abff8caa0f3f~mv2.png/v1/fill/w_77,h_115,al_c,q_85,usm_0.66_1.00_0.01/Product%20Catalog_Mens%20clothing_2.webp"
                        }
                      />
                    </div>
                    <div className="product_imgs">
                      <img
                        draggable="false"
                        src={
                          "https://static.wixstatic.com/media/f1c4b5_85c4b674adc54b63ad52bcd285ec879b~mv2.png/v1/crop/x_302,y_0,w_1002,h_1544/fill/w_75,h_115,al_c,q_85,usm_0.66_1.00_0.01/Product%20Catalog_Womens%20clothing_3.webp"
                        }
                      />
                    </div>
                    <div className="product_imgs">
                      <img
                        draggable="false"
                        src={
                          "https://static.wixstatic.com/media/f1c4b5_4c020413427d41948ae2e7295ee7c056~mv2.png/v1/fill/w_137,h_115,al_c,q_85,usm_0.66_1.00_0.01/Product%20Catalog_Mens%20clothing_4.webp"
                        }
                      />
                    </div>
                    <div className="product_imgs">
                      <img
                        draggable="false"
                        src={
                          "https://static.wixstatic.com/media/f1c4b5_cd214bda508445329ef088347211ab2b~mv2.png/v1/fill/w_85,h_115,al_c,q_85,usm_0.66_1.00_0.01/Main%20Strip%20Mockup.webp"
                        }
                      />
                    </div>
                    <div className="product_imgs">
                      <img
                        draggable="false"
                        src={
                          "https://static.wixstatic.com/media/f1c4b5_cd214bda508445329ef088347211ab2b~mv2.png/v1/fill/w_85,h_115,al_c,q_85,usm_0.66_1.00_0.01/Main%20Strip%20Mockup.webp"
                        }
                      />
                    </div> */}
                    {/* <div className="product_imgs">
                    <img draggable="false" src={"https://static.wixstatic.com/media/f1c4b5_cd214bda508445329ef088347211ab2b~mv2.png/v1/fill/w_85,h_115,al_c,q_85,usm_0.66_1.00_0.01/Main%20Strip%20Mockup.webp"} />
                  </div> */}
                  </Slick>
                </div>

                <div className="mainProdImgContainer">
                  {product && (
                    <img
                      draggable="false"
                      src={
                        displayImage
                          ? displayImage
                          : process.env.REACT_APP_IMAGE_BASE_URL +
                            "/" +
                            product.img
                      }
                      alt={product && product.title}
                    />
                  )}

                  {/* <img draggable="false" src={"https://static.wixstatic.com/media/f1c4b5_f1f33ab2c3584186b83a0276b11f19c1~mv2.png/v1/fill/w_418,h_565,al_c,q_85,usm_0.66_1.00_0.01/Product%20Catalog_Mens%20clothing_3.webp"} className="mainImgs h-100" alt={product.title} /> */}
                  {/* {console.log(process.env.REACT_APP_IMAGE_BASE_URL + product.img)} */}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 ">
            <div className="desciptionSection">
              <p className="h4 fw-bold mb-3 descriptionTitle">
                {product && product.title}
              </p>
              <p className="mt-3 fw-bold">{product && product.description}</p>
              {/* <p className="btn btn-md btn-light fw-bold  mb-3 border-dark">
                Printing (DTG)
              </p> */}
              <p className="mt-3 fw-bold choosingStyle">Choose color</p>

              <div className="d-flex mb-3">
                {product && product.productcolors !== undefined
                  ? product.productcolors.map((item, index) => {
                      return (
                        <div
                          id={item.colorName}
                          className="mx-1 colors shadow-lg border"
                          style={{
                            height: "20px",
                            width: "20px",
                            borderRadius: "5px",
                            backgroundColor: item.colorName,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={(e) => {
                            handleColorsclick(e);
                            setColor(item.colorName);
                            setColorId(index + 1);
                            setColorCode(item.colorCode);
                          }}
                        >
                          {
                            // console.log(color,item.colorName)
                            color === item.colorName ? (
                              <i class="fa fa-check" aria-hidden="true"></i>
                            ) : (
                              <></>
                            )
                          }
                        </div>
                      );
                    })
                  : null}
              </div>
              <div className="d-flex mt-3 mb-3 ">
                <div className="me-5 fw-bold choosingStyle">Choose size</div>
                <div className="mx-5 px-5 choosingSize">Size chart</div>
              </div>
              <div className="d-flex mt-4 mb-4">
                <div className="d-flex mb-3">
                  {product && product.productsizes !== undefined ? (
                    product.productsizes.map((item) => (
                      <div
                        id={item}
                        className="border p-2 fw-bold text-center mx-1 sizes"
                        onClick={(e) => handleSizeChange(e)}
                      >
                        {item}
                      </div>
                    ))
                  ) : (
                    <>Sizes Not Found</>
                  )}
                </div>
              </div>

              <div className="d-flex mt-3 mb-3 fw-bold">
                <label htmlFor="quantity">Quantity</label>
                <button
                  onClick={() => handleChangeQty("decrease")}
                  style={{
                    marginLeft: "10px",
                    marginRight: "-12.5px",
                    border: "none",
                  }}
                >
                  -
                </button>
                <input
                  className="border"
                  style={{
                    textAlign: "center",
                    marginLeft: "15px",
                    borderRadius: "5px",
                    width: "50px",
                    height: "30px",
                  }}
                  onBlur={(e) => checkQty(e)}
                  name=""
                  id=""
                  cols="50"
                  rows="1"
                  type="tel"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                />
                <button
                  onClick={() => handleChangeQty("increase")}
                  style={{ marginLeft: "2px", border: "none" }}
                >
                  +
                </button>
              </div>
              <p className="fw-bold h3 mt-5 mb-4 productPrice">
                ₹{product && product.price}
              </p>
              {isLogged ? (
                isCustomizeable ? (
                  <button
                    className="fw-bold h3 text-light btn px-5 py-2 descriptionBtn"
                    id="btnCustomize"
                    // onClick={(e) => {customize(e); customize(e);}}
                    onClick={(e) => customize(e)}
                  >
                    Start designing
                  </button>
                ) : (
                  <button
                    className="fw-bold h3 text-light btn px-5 py-2 descriptionBtn"
                    id="btnCustomize"
                  >
                    Add to cart
                  </button>
                )
              ) : (
                <button
                  className="fw-bold h3 text-light btn px-5 py-2 descriptionBtn"
                  id="btnCustomize"
                  onClick={(e) => customize(e)}
                >
                  Start designing
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="greyArea"></p>
      <div>
        <form id="frmCustomizer" action='/customizer'>
          <input type="hidden" name="quantity" value={1} />
          <input type="hidden" name="productid" value={"object123"} />
          <input type="hidden" name="masterProductId" value={"object123"} />
          <input type="hidden" name="color" value={1} />
          <input type="hidden" name="colorId" value={1} />
          <input type="hidden" name="title" value={1} />
        </form>
      </div>
    </>
  );
};

export default Products;
