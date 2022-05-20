import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/nano.min.css";
import axios from "axios";
import domtoimage from "dom-to-image";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import testImg from "../../assets/02-cat-training-NationalGeographic_1484324_3x4.jpg";
import img5 from "../../assets/fabricjs/imgs/quick-view/quick-view-02-2.jpg";
import img6 from "../../assets/fabricjs/imgs/quick-view/quick-view-02-3.jpg";
import canvasStyles from "../../styles/canvas.module.css";
import defaults from "../../styles/defaults.module.css";
import "../../styles/scss/components/_theme.scss";
import "../../styles/scss/layout/_product.scss";

function Hero() {
  const { prodid } = useParams();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [size, setSize] = useState("");
  const [product, setproduct] = useState({});
  const [fabricInfo, setFabricInfo] = useState({});
  const [mainImg, setMainImg] = useState("");
  const [productName, setProductName] = useState("");
  const [color, setColor] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [colorId, setColorId] = useState("0");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [fontValue, setFontValue] = useState("select");
  const [fontSize, setFontSize] = useState("20");
  const imageref = useRef();
  const designRef = useRef();
  const [imgVariants, setImgVariants] = useState([]);
  const [isCustomizeable, setIsCustomizeable] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const [classActive, setClassActive] = useState("active");
  const [sides, setSides] = useState("one");
  const [designHistory, setDesignHistory] = useState({});

  const { editor, onReady } = useFabricJSEditor();

  // get fabric and product info
  const getProduct = async () => {
    // if (checkLogin()) {
    //   setIsLogged(true);
    // } else {
    //   setIsLogged(false);
    // }
    console.log("product id is:" + prodid);
    await axios
      .get(`/products/getproduct/${prodid}`)
      .then(({ data }) => {
        console.log(data);
        console.log(data.product.productdata[0]);
        setproduct(data.product.productdata[0]);
        setProductName(data.product.productdata[0].title);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .get(`/fabric/getFabricProductById/${prodid}`)
      .then(async ({ data }) => {
        console.log(data);
        let imgsVariants = [];
        if (data.productData && Object.keys(data.productData).length > 0) {
          if (data.productData.variant[0].frontImgURL !== undefined) {
            imgsVariants.push("front");
          }
          if (data.productData.variant[0].backImgURL !== undefined) {
            imgsVariants.push("back");
          }
          if (data.productData.variant[0].leftImgURL !== undefined) {
            imgsVariants.push("left");
          }
          if (data.productData.variant[0].rightImgURL !== undefined) {
            imgsVariants.push("right");
          }
          setMainImg(
            process.env.REACT_APP_IMAGE_BASE_URL +
              data.productData.variant[0].frontImgURL
          );
          setColor(data.productData.variant[0].colorName);
          setImgVariants(imgsVariants);
          setFabricInfo(data.productData);
          setIsCustomizeable(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //check if a user is logged in
  const checkLogin = () => {
    // const token = localStorage.getItem("token");
    // const customerId = localStorage.getItem("customerId");
    // if (
    //   (token !== "") &
    //   (token !== null) &
    //   (token !== undefined) &
    //   (customerId !== "") &
    //   (customerId !== null) &
    //   (customerId !== undefined)
    // ) {
    //   return true;
    // } else {
    //   return false;
    // }

    return true;
  };

  //check if the user has selected a color
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

  //default function which runs when the dom is loaded the first time
  useEffect(() => {
    setImage(testImg);

    getProduct();

    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
      el: ".color-picker",
      theme: "nano", // or 'monolith', or 'nano'

      swatches: null,

      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });

    pickr.on("init", (instance) => {
      pickr.setColor("#000000");
    });

    pickr.on("save", (color, instance) => {
      let colorSaved = color.toRGBA();
      if (colorSaved) {
        console.log('Event: "show"', color, instance);
        colorChange(colorSaved);
      }
    });

    const canvasWidth = editor?.canvas.getWidth();
    const canvasHeight = editor?.canvas.getHeight();
    if (editor?.canvas) {
      editor.canvas.preserveObjectStacking = true;
      editor.canvas.controlsAboveOverlay = true;
    }
    editor?.canvas.setWidth(470);
    editor?.canvas.setHeight(612);
    setIsSubmitted(true);

    // fabric.Image.fromURL(image, function (img) {
    //   // const objs = editor?.canvas.getObjects();
    //   // objs?.forEach((o) => {
    //   //   if (o.type === "image") {
    //   //     editor?.canvas.remove(o);
    //   //   }
    //   // });
    //   editor?.canvas.add(img);
    //   const obj = editor?.canvas.getObjects();
    //   obj?.forEach((o) => {
    //     if (o.type === "image") {
    //       console.log("canvas width is :" + canvasWidth);
    //       console.log("canvas height is :" + canvasHeight);
    //       o.scaleToHeight(470);
    //       o.scaleToHeight(612);
    //     }
    //   });
    //   editor?.canvas.centerObject(img);
    //   setIsSubmitted(true);
    // });
  }, []);

  const colorChange = (colorSaved) => {
    const objE = editor?.canvas.getObjects();
    objE?.forEach((o) => {
      if (o.type === "i-text") {
        o.set("fill", colorSaved.toString(2));
        editor?.canvas.bringToFront(o);
      } else if (o.type === "image") {
        editor?.canvas.sendToBack(o);
      }
    });
  };

  //function which runs when the fabricInfo is changed and used to add the constraints inside canvas
  useEffect(() => {
    if (fabricInfo && Object.keys(fabricInfo).length > 0) {
      console.log(
        "fabric data dimensions:" + fabricInfo.variant[0].frontImgDimensions
      );

      axios
        .get(
          `/fabricDesigns/getFabricDesign/${prodid}/${fabricInfo.variant[0].colorName}/${sides}`
        )
        .then((dataFabr) => {
          if (dataFabr) {
            setDesignHistory(dataFabr.data.fabricData);

            editor?.canvas.loadFromJSON(
              JSON.parse(dataFabr.data.fabricData.data)
            );
            editor?.canvas.renderAll();
          }
        })
        .catch((err) => {
          console.log(err);
        });

      //defining the Rectangle constraint for users designs
      var Rect = new fabric.Rect({
        width: fabricInfo.variant[0].frontImgDimensions.width,
        height: fabricInfo.variant[0].frontImgDimensions.height,
        top: fabricInfo.variant[0].frontImgDimensions.top,
        left: fabricInfo.variant[0].frontImgDimensions.left,
        selectable: false,
        strokeDashArray: [5, 2],
        stroke: "grey",
        fill: "transparent",
      });
      //if a design is moved out of the constraint it gets clipped
      var clipPath = new fabric.Rect({
        width: fabricInfo.variant[0].frontImgDimensions.width,
        height: fabricInfo.variant[0].frontImgDimensions.height,
        top: fabricInfo.variant[0].frontImgDimensions.top,
        left: fabricInfo.variant[0].frontImgDimensions.left,
      });
      if (editor?.canvas) {
        editor.canvas.clipPath = clipPath;
      }
      editor?.canvas.add(Rect);
    }
  }, [fabricInfo]);

  //function which executes when an image is uploaded
  const changeHandler = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(event.target.files[0]);
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    fabric.Image.fromURL(objectUrl, function (img) {
      // const objs = editor?.canvas.getObjects();
      // objs?.forEach((o) => {
      //   if (o.type === "image") {
      //     editor?.canvas.remove(o);
      //   }
      // });
      let topRect = 0;
      let leftRect = 0;
      const obj = editor?.canvas.getObjects();
      obj?.forEach((o) => {
        if (o.type === "rect") {
          topRect = o.top;
          leftRect = o.left;
        }
      });
      img.top = topRect;
      img.left = leftRect;
      editor?.canvas.add(img);
      obj?.forEach((o) => {
        if (o.type === "image") {
          o.scaleToHeight(612);
          o.scaleToWidth(470);
        }
      });
    });
    setImage(objectUrl);
    return;
  };

  const handleSave = (e) => {
    var jsonData = JSON.stringify(editor?.canvas.toJSON());
    axios
      .post(`/fabricDesigns/addDesign`, {
        data: {
          productId: prodid,
          color: color,
          side: sides,
          data: jsonData,
        },
      })
      .then(({ data }) => {
        console.log("data saved successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //executes when a color is selected
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

  //executes when add text is clicked
  const handleAddText = (event) => {
    const obj = editor?.canvas.getObjects();
    let topRect = 0;
    let leftRect = 0;
    obj?.forEach((o) => {
      if (o.type === "rect") {
        topRect = o.top;
        leftRect = o.left;
      }
    });
    var text = new fabric.IText("Demo \n Text", {
      left: leftRect + 10,
      top: topRect + 10,
      fontSize: fontSize,
    });
    editor?.canvas.add(text);
    editor?.canvas.bringToFront(text);
    //sets the text objext as active and enters editing
    editor?.canvas.setActiveObject(text);
    editor?.canvas.getActiveObject().enterEditing();
    editor?.canvas.renderAll();
  };

  //executes when the add to cart button is clicked
  const customize = (evt) => {
    evt.preventDefault();

    var customizeProduct = [];

    console.log(localStorage.getItem("customizeProduct"));

    if (localStorage.getItem("customizeProduct")) {
      customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
    }

    if (checkColorAndSize()) {
      if (checkLogin()) {
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
      } else {
        window.location.href = "/signin";
      }
    } else {
      Swal.fire("Error", "Please Select all the options", "error");
    }
  };

  //removes the active object
  const handleRemoveText = (event) => {
    editor?.canvas.remove(editor?.canvas.getActiveObject());

    // const obj = editor?.canvas.getObjects();
    // obj?.forEach((o) => {
    //   if (o.type === "text") {
    //     editor?.canvas.remove(o);
    //   }
    // });
  };

  //changes the font family of the text
  const fontChange = (event) => {
    var exists = false;
    const obj = editor?.canvas.getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        console.log("font value is :" + event.target.value);
        exists = true;
        o.set("fontFamily", event.target.value);
        setFontValue(event.target.value);
        editor?.canvas.bringToFront(o);
      } else if (o.type === "image") {
        editor?.canvas.sendToBack(o);
      }
    });
    // if (exists) {
    //   editor?.canvas.renderAll();
    // }
  };

  //executes when a different image is selected and new canvas constraints are set
  const changeCanvas = (letter) => {
    if (letter == "one") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        var Rect = new fabric.Rect({
          width: fabricInfo.variant[0].frontImgDimensions.width,
          height: fabricInfo.variant[0].frontImgDimensions.height,
          top: fabricInfo.variant[0].frontImgDimensions.top,
          left: fabricInfo.variant[0].frontImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[0].frontImgDimensions.width,
          height: fabricInfo.variant[0].frontImgDimensions.height,
          top: fabricInfo.variant[0].frontImgDimensions.top,
          left: fabricInfo.variant[0].frontImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    } else if (letter == "two") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        var Rect = new fabric.Rect({
          width: fabricInfo.variant[0].backImgDimensions.width,
          height: fabricInfo.variant[0].backImgDimensions.height,
          top: fabricInfo.variant[0].backImgDimensions.top,
          left: fabricInfo.variant[0].backImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[0].backImgDimensions.width,
          height: fabricInfo.variant[0].backImgDimensions.height,
          top: fabricInfo.variant[0].backImgDimensions.top,
          left: fabricInfo.variant[0].backImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    } else if (letter == "three") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        var Rect = new fabric.Rect({
          width: fabricInfo.variant[0].leftImgDimensions.width,
          height: fabricInfo.variant[0].leftImgDimensions.height,
          top: fabricInfo.variant[0].leftImgDimensions.top,
          left: fabricInfo.variant[0].leftImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[0].leftImgDimensions.width,
          height: fabricInfo.variant[0].leftImgDimensions.height,
          top: fabricInfo.variant[0].leftImgDimensions.top,
          left: fabricInfo.variant[0].leftImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    } else if (letter == "four") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        var Rect = new fabric.Rect({
          width: fabricInfo.variant[0].rightImgDimensions.width,
          height: fabricInfo.variant[0].rightImgDimensions.height,
          top: fabricInfo.variant[0].rightImgDimensions.top,
          left: fabricInfo.variant[0].rightImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[0].rightImgDimensions.width,
          height: fabricInfo.variant[0].rightImgDimensions.height,
          top: fabricInfo.variant[0].rightImgDimensions.top,
          left: fabricInfo.variant[0].rightImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    }
  };

  //executes when an image is changed
  const changeImg = (e, letter) => {
    e.preventDefault();
    const obj = editor?.canvas.getObjects();
    if (letter == "one") {
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL + fabricInfo.variant[0].frontImgURL
      );
      obj?.forEach((o) => {
        editor?.canvas.remove(o);
      });
      setSides("one");
      changeCanvas(letter);
    } else if (letter == "two") {
      obj?.forEach((o) => {
        editor?.canvas.remove(o);
      });
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL + fabricInfo.variant[0].backImgURL
      );
      setSides("two");
      changeCanvas(letter);
    } else if (letter == "three") {
      obj?.forEach((o) => {
        editor?.canvas.remove(o);
      });
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL + fabricInfo.variant[0].leftImgURL
      );
      setSides("three");
      changeCanvas(letter);
    } else if (letter == "four") {
      obj?.forEach((o) => {
        editor?.canvas.remove(o);
      });
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL + fabricInfo.variant[0].rightImgURL
      );
      setSides("four");
      changeCanvas(letter);
    }
  };

  const fontChangeHover = (event) => {
    console.log("font value is :" + event.target.value);
  };

  //executes when the size of text is changed
  const fontsizeChange = (event) => {
    var exists = false;
    const obj = editor?.canvas.getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        console.log("font size is :" + event.target.value);
        exists = true;
        o.set("fontSize", event.target.value);
        setFontSize(event.target.value);
        editor?.canvas.bringToFront(o);
      } else if (o.type === "image") {
        editor?.canvas.sendToBack(o);
      }
    });
  };

  const alignLeft = (event) => {
    var exists = false;
    const obj = editor?.canvas.getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        exists = true;
        o.set("textAlign", "left");
        editor?.canvas.bringToFront(o);
      } else if (o.type === "image") {
        editor?.canvas.sendToBack(o);
      }
    });
  };

  const alignCenter = (event) => {
    var exists = false;
    const obj = editor?.canvas.getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        exists = true;
        o.set("textAlign", "center");
        editor?.canvas.bringToFront(o);
      } else if (o.type === "image") {
        editor?.canvas.sendToBack(o);
      }
    });
  };

  const alignRight = (event) => {
    var exists = false;
    const obj = editor?.canvas.getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        exists = true;
        o.set("textAlign", "right");
        editor?.canvas.bringToFront(o);
      } else if (o.type === "image") {
        editor?.canvas.sendToBack(o);
      }
    });
  };

  const goToDesign = () => {
    const token = localStorage.getItem("token");
    // console.log(token)
    const customerId = localStorage.getItem("customerId");
    navigate("/products");

    // if(token!="" && token!=null && token!=undefined && customerId!="" && customerId!=null && customerId!=undefined ){
    //    navigate("/products");
    // }else{
    //    navigate("/signin");
    //   }
  };

  const handleDownload = (event) => {
    var node = imageref.current;

    domtoimage.toJpeg(node, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

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

  const checkQty = (e) => {
    if (e.target.value < 1 || e.target.value === "") {
      setProductQuantity(1);
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

  const handleSecondDown = (event) => {
    var node = designRef.current;

    domtoimage.toJpeg(node, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-design-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <>
      <div className="row mx-0">
        <div className="col-12">
          <div className={"mx-4 my-2 py-4 breadCrumbs"}>
            <a href="/products">Product catalog</a> /{" "}
            <a href="/products">Men's Clothing</a> /{product.title}
          </div>
        </div>
      </div>
      <section className={"product-details " + defaults["pb-50"]}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="product__modal-box d-flex">
                <div className={"product__modal-nav " + defaults["mr-20"]}>
                  <nav>
                    <div
                      className="nav nav-tabs"
                      id="product-details"
                      role="tablist"
                    >
                      {fabricInfo && fabricInfo.productId !== undefined
                        ? imgVariants.map((item, index) => {
                            let letterNumber = "";
                            let urlImg = "";
                            if (index == 0) {
                              letterNumber = "one";
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[0].frontImgURL;
                            } else if (index == 1) {
                              letterNumber = "two";
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[0].backImgURL;
                            } else if (index == 2) {
                              letterNumber = "three";
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[0].leftImgURL;
                            } else if (index == 3) {
                              letterNumber = "four";
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[0].rightImgURL;
                            }
                            return (
                              <a
                                className={`nav-item nav-link` + classActive}
                                id={`pro-` + letterNumber + `-tab`}
                                data-bs-toggle="tab"
                                href={`#pro-` + letterNumber}
                                onClick={(e) => {
                                  changeImg(e, letterNumber);
                                }}
                                role="tab"
                                aria-controls={`pro-` + letterNumber}
                                aria-selected="true"
                              >
                                <div className="product__nav-img w-img">
                                  <img
                                    width={90}
                                    height={115}
                                    src={urlImg}
                                    alt=""
                                  />
                                </div>
                              </a>
                            );
                          })
                        : null}
                    </div>
                  </nav>
                </div>
                <div
                  className={"tab-content " + defaults["mb-20"]}
                  id="product-detailsContent"
                >
                  <div
                    className="tab-pane fade active show"
                    id="pro-one"
                    role="tabpanel"
                    aria-labelledby="pro-one-tab"
                  >
                    <div
                      ref={imageref}
                      className="product__modal-img product__thumb w-img"
                    >
                      {fabricInfo && fabricInfo.productId !== undefined ? (
                        <img src={mainImg} alt="" />
                      ) : (
                        <img
                          src={
                            process.env.REACT_APP_IMAGE_BASE_URL +
                            "/" +
                            product.img
                          }
                          alt=""
                        />
                      )}
                      <div
                        id="drawingArea"
                        className={canvasStyles["drawing-area"]}
                      >
                        <div
                          ref={designRef}
                          class={canvasStyles["canvas-container"]}
                        >
                          <FabricJSCanvas
                            onReady={onReady}
                            className={canvasStyles.canvasSet}
                          />
                        </div>
                      </div>
                      {/* <div className="product__sale ">
                      <span className="new">new</span>
                      <span className="percent">-20%</span>
                    </div> */}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pro-two"
                    role="tabpanel"
                    aria-labelledby="pro-two-tab"
                  >
                    <div className="product__modal-img product__thumb w-img">
                      <img src={img5} alt="" />
                      <div className="product__sale ">
                        <span className="new">new</span>
                        <span className="percent">-13%</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pro-three"
                    role="tabpanel"
                    aria-labelledby="pro-three-tab"
                  >
                    <div className="product__modal-img product__thumb w-img">
                      <img src={img6} alt="" />
                      <div className="product__sale ">
                        <span className="new">new</span>
                        <span className="percent">-15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="product__modal-content-2">
                <h4>
                  <a href="product-details.html">{product.title}</a>
                </h4>
                {/* <div className="rating rating-shop mb-15">
                  <ul>
                    <li>
                      <span>
                        <i
                          className={fontAwes.fas + " " + fontAwes["fa-star"]}
                        ></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className={fontAwes.fas + " " + fontAwes["fa-star"]}
                        ></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className={fontAwes.fas + " " + fontAwes["fa-star"]}
                        ></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className={fontAwes.fas + " " + fontAwes["fa-star"]}
                        ></i>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className={fontAwes.fal + " " + fontAwes["fa-star"]}
                        ></i>
                      </span>
                    </li>
                  </ul>
                  <span class="rating-no ml-10 rating-left">3 rating(s)</span>
                  <span class="review rating-left">
                    <a href="#">Add your Review</a>
                  </span>
                </div> */}
                {/* <div className="product__price mb-25">
                  <span>$96.00</span>
                  <span className="old-price">$96.00</span>
                </div> */}
                <div class="product__modal-des mb-30">
                  <p>{product.description}</p>
                </div>
                <p className="mt-3 fw-bold choosingStyle">Choose color</p>
                <div className="row">
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
                <div className="row">
                  <input
                    type="file"
                    id="fileUp"
                    name="fileUp"
                    onChange={changeHandler}
                  />
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <select
                      id="selFont"
                      name="selFont"
                      className="form-select form-select-sm selectpicker col-md-3"
                      title="fonts"
                      onChange={fontChange}
                      value={fontValue}
                    >
                      <option value="select">Select a Font</option>
                      <option value="Comic Sans">Comic Sans</option>
                      <option value="Times New Roman">Times New Roman</option>
                      <option value="Georgia">Georgia</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select
                      id="selFontSize"
                      name="selFontSize"
                      className="form-select form-select-sm selectpicker col-md-3"
                      title="font size"
                      onChange={fontsizeChange}
                      value={fontSize}
                    >
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option onMouseOver={fontChangeHover} value="40">
                        40
                      </option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <i
                      className="fa fa-align-left shadow rounded"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                      onClick={alignLeft}
                    ></i>
                    <i
                      className="fa fa-align-center"
                      style={{ marginLeft: 10, cursor: "pointer" }}
                      aria-hidden="true"
                      onClick={alignCenter}
                    ></i>
                    <i
                      className="fa fa-align-right"
                      style={{ marginLeft: 10, cursor: "pointer" }}
                      aria-hidden="true"
                      onClick={alignRight}
                    ></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="color-picker"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="button"
                      className="btn btn-dark btn-sm"
                      value="Add"
                      id="sbmText"
                      name="sbmText"
                      onClick={handleAddText}
                    />
                    <input
                      type="button"
                      className="btn btn-danger btn-sm"
                      value="Remove"
                      id="sbmTextrem"
                      name="sbmTextrem"
                      onClick={handleRemoveText}
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="button"
                      className="btn btn-dark btn-sm"
                      value="Download"
                      id="sbmDown"
                      name="sbmDown"
                      onClick={handleDownload}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="button"
                      className="btn btn-danger btn-sm"
                      value="Download2"
                      id="sbmDown2"
                      name="sbmDown2"
                      onClick={handleSecondDown}
                    />
                  </div>
                </div>
                <br />
                <br />
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

                <div className="d-flex mt-4 mb-4">
                  <div className="d-flex mb-3">
                    <p style={{ cursor: "pointer" }}>
                      <i className="fas fa-save"></i>
                      <u onClick={handleSave}>Save design</u>
                    </p>
                  </div>
                </div>
                {isCustomizeable ? (
                  <button
                    className="fw-bold h3 text-light btn px-5 py-2 descriptionBtn"
                    id="btnCustomize"
                    // onClick={(e) => {customize(e); customize(e);}}
                    onClick={(e) => customize(e)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="fw-bold h3 text-light btn px-5 py-2 descriptionBtn"
                    id="btnCustomize"
                  >
                    Add to cart
                  </button>
                )}
                {/* <div class="product__details-color d-sm-flex align-items-center mb-25">
                  <span>Color:</span>
                  <ul>
                    <li>
                      <a href="#" class="black"></a>
                    </li>
                    <li>
                      <a href="#" class="active brown"></a>
                    </li>
                    <li>
                      <a href="#" class="blue"></a>
                    </li>
                    <li>
                      <a href="#" class="red"></a>
                    </li>
                    <li>
                      <a href="#" class="white"></a>
                    </li>
                  </ul>
                </div>
                <div class="product__details-size d-sm-flex align-items-center mb-30">
                  <span>Size: </span>
                  <ul class="mr-30">
                    <li>
                      <a href="#" class="unavailable">
                        S
                      </a>
                    </li>
                    <li>
                      <a href="#">M</a>
                    </li>
                    <li>
                      <a href="#">L</a>
                    </li>
                    <li>
                      <a href="#">XL</a>
                    </li>
                    <li>
                      <a href="#">2XL</a>
                    </li>
                    <li>
                      <a href="#">3XL</a>
                    </li>
                  </ul>
                </div>
                <div class="pro-quan-area d-sm-flex align-items-center">
                  <div class="product-quantity-title mb-20">
                    <label>Quantity</label>
                  </div>
                  <div class="product-quantity mr-20 mb-20">
                    <div class="cart-plus-minus">
                      <input type="text" value="1" />
                      <div class="dec qtybutton">-</div>
                      <div class="inc qtybutton">+</div>
                    </div>
                  </div>
                  <div class="pro-cart-btn">
                    <a href="cart.html" class="add-cart-btn mb-20">
                      + Add to Cart
                    </a>
                  </div>
                </div>
                <div class="product__tag mb-25">
                  <span class="ct mr-20">Category:</span>
                  <span>
                    <a href="#">Accessories,</a>
                  </span>
                  <span>
                    <a href="#">Gaming,</a>
                  </span>
                  <span>
                    <a href="#">PC Computers,</a>
                  </span>
                  <span>
                    <a href="#">Ultrabooks</a>
                  </span>
                </div>
                <div class="product__share">
                  <span>Share :</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div class="row mt-70">
                <div class="col-xl-12">
                    <div class="product__details-tab">
                        <div class="product__details-tab-nav text-center mb-45">
                            <nav>
                                <div class="nav nav-tabs justify-content-start justify-content-sm-center" id="pro-details" role="tablist">
                                    <a class="nav-item nav-link active" id="des-tab" data-bs-toggle="tab" href="#des" role="tab" aria-controls="des" aria-selected="true">Description</a>
                                    <a class="nav-item nav-link" id="add-tab" data-bs-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">Additional Information</a>
                                    <a class="nav-item nav-link" id="review-tab" data-bs-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (3)</a>
                                </div>
                            </nav>
                        </div>
                        <div class="tab-content" id="pro-detailsContent">
                            <div class="tab-pane fade active show" id="des" role="tabpanel">
                                <div class="product__details-des mb-20">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                    
                                    <div class="product__details-des-list mb-20">
                                        <ul>
                                            <li><span>Claritas est etiam processus dynamicus.</span></li>
                                            <li><span>Qui sequitur mutationem consuetudium lectorum.</span></li>
                                            <li><span>Claritas est etiam processus dynamicus.</span></li>
                                            <li><span>Qui sequitur mutationem consuetudium lectorum.</span></li>
                                            <li><span>Claritas est etiam processus dynamicus.</span></li>
                                            <li><span>Qui sequitur mutationem consuetudium lectorum.</span></li>
                                        </ul>
                                    </div>
                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="add" role="tabpanel">
                                <div class="product__desc-info mb-35">
                                    <ul>
                                       <li>
                                          <h6>Weight</h6>
                                          <span>2 lbs</span>
                                       </li>
                                       <li>
                                          <h6>Dimensions</h6>
                                          <span>12 × 16 × 19 in</span>
                                       </li>
                                       <li>
                                          <h6>Product</h6>
                                          <span>Purchase this product on rag-bone.com</span>
                                       </li>
                                       <li>
                                          <h6>Color</h6>
                                          <span>Gray, Black</span>
                                       </li>
                                       <li>
                                          <h6>Size</h6>
                                          <span>S, M, L, XL</span>
                                       </li>
                                       <li>
                                          <h6>Model</h6>
                                          <span>Model	</span>
                                       </li>
                                       <li>
                                          <h6>Shipping</h6>
                                          <span>Standard shipping: $5,95</span>
                                       </li>
                                       <li>
                                          <h6>Care Info</h6>
                                          <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                                       </li>
                                       <li>
                                          <h6>Brand</h6>
                                          <span>Kazen</span>
                                       </li>
                                    </ul>
                                 </div>
                            </div>
                            <div class="tab-pane fade" id="review" role="tabpanel">
                                <div class="product__details-review mb-35">
                                    <div class="postbox__comments">
                                        <div class="postbox__comment-title mb-30">
                                            <h3>Reviews (03)</h3>
                                        </div>
                                        <div class="latest-comments mb-30">
                                            <ul>
                                                <li>
                                                    <div class="comments-box">
                                                        <div class="comments-avatar">
                                                            <img src="assets/img/author/avater-1.png" alt="">
                                                        </div>
                                                        <div class="comments-text">
                                                            <div class="avatar-name">
                                                                <h5>Siarhei Dzenisenka</h5>
                                                                <span> - 3 months ago </span>
                                                            </div>
                                                            <div class="user-rating">
                                                                <ul>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fal fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                                            <a class="reply-2" href="#">Leave Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="children">
                                                    <div class="comments-box">
                                                        <div class="comments-avatar">
                                                            <img src="assets/img/author/avater-2.png" alt="">
                                                        </div>
                                                        <div class="comments-text">
                                                            <div class="avatar-name">
                                                                <h5>Julias Roy</h5>
                                                                <span> - 6 months ago </span>
                                                            </div>
                                                            <div class="user-rating">
                                                                <ul>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fal fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. </p>
                                                            <a class="reply-2" href="#">Leave Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="comments-box">
                                                        <div class="comments-avatar">
                                                            <img src="assets/img/author/avater-3.png" alt="">       
                                                        </div>
                                                        <div class="comments-text">
                                                            <div class="avatar-name">
                                                                <h5>Arista Williamson</h5>
                                                                <span> - 6 months ago </span> 
                                                            </div>
                                                            <div class="user-rating">
                                                                <ul>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i class="fal fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                                            <a class="reply-2" href="#">Leave Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="post-comments-form">
                                        <div class="post-comments-title mb-30">
                                            <h3>Your Review</h3>
                                            <div class="post-rating">
                                                <span>Your Rating :</span>
                                                <ul class="ml-5">
                                                    <li>
                                                        <a href="#">
                                                            <i class="fal fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fal fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fal fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fal fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="fal fa-star"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <form id="contacts-form" class="conatct-post-form" action="#">
                                            <div class="row">
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="contact-icon p-relative contacts-name">
                                                        <input type="text" placeholder="Name">
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="contact-icon p-relative contacts-name">
                                                        <input type="email" placeholder="Email">
                                                    </div>
                                                </div>
                                                <div class="col-xl-12">
                                                    <div class="contact-icon p-relative contacts-email">
                                                        <input type="text" placeholder="Subject">
                                                    </div>
                                                </div>
                                                <div class="col-xl-12">
                                                    <div class="contact-icon p-relative contacts-message">
                                                        <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12">
                                                    <button class="add-cart-btn" type="submit">Post comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-50">
                <div class="col-xl-12">
                    <div class="trending__info text-center">
                        <h5>Trending Products</h5>
                        <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                    </div>
                </div>
            </div>
            <div class="row mt-40">
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="product__item mb-20">
                        <div class="product__thumb w-img fix">
                            <a href="product-details.html">
                                <img src="assets/img/products/product-2/product-3.jpg" alt="">
                            </a>
                            <div class="product__flash-4">
                                <span>20%</span>
                            </div>
                            <div class="product__action transition-3">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <g>
                                                <path d="M18,19H6c-0.5,0-0.92-0.37-0.99-0.86L3.13,5H1C0.45,5,0,4.55,0,4s0.45-1,1-1h3c0.5,0,0.92,0.37,0.99,0.86L6.87,17h10.39
                                                l2.4-8H11c-0.55,0-1-0.45-1-1s0.45-1,1-1h10c0.32,0,0.61,0.15,0.8,0.4c0.19,0.25,0.25,0.58,0.16,0.88l-3,10
                                                C18.83,18.71,18.44,19,18,19z"></path>
                                            </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M20.26,11.3c2.31-2.36,2.31-6.18-0.02-8.53C19.11,1.63,17.6,1,16,1c0,0,0,0,0,0c-1.57,0-3.05,0.61-4.18,1.71c0,0,0,0,0,0
                                            L11,3.41l-0.81-0.69c0,0,0,0,0,0C9.06,1.61,7.58,1,6,1C4.4,1,2.89,1.63,1.75,2.77c-2.33,2.35-2.33,6.17-0.02,8.53
                                            c0,0,0,0.01,0.01,0.01l0.01,0.01c0,0,0,0,0,0c0,0,0,0,0,0L11,20.94l9.25-9.62c0,0,0,0,0,0c0,0,0,0,0,0L20.26,11.3
                                            C20.26,11.31,20.26,11.3,20.26,11.3z M3.19,9.92C3.18,9.92,3.18,9.92,3.19,9.92C3.18,9.92,3.18,9.91,3.18,9.91
                                            c-1.57-1.58-1.57-4.15,0-5.73C3.93,3.42,4.93,3,6,3c1.07,0,2.07,0.42,2.83,1.18C8.84,4.19,8.85,4.2,8.86,4.21
                                            c0.01,0.01,0.01,0.02,0.03,0.03l1.46,1.25c0.07,0.06,0.14,0.09,0.22,0.13c0.01,0,0.01,0.01,0.02,0.01c0.13,0.06,0.27,0.1,0.41,0.1
                                            c0.08,0,0.16-0.03,0.25-0.05c0.03-0.01,0.07-0.01,0.1-0.02c0.07-0.03,0.13-0.07,0.2-0.11c0.03-0.02,0.07-0.03,0.1-0.06l1.46-1.24
                                            c0.01-0.01,0.02-0.02,0.03-0.03c0.01-0.01,0.03-0.01,0.04-0.02C13.93,3.42,14.93,3,16,3c0,0,0,0,0,0c1.07,0,2.07,0.42,2.83,1.18
                                            c1.56,1.58,1.56,4.15,0,5.73c0,0,0,0.01-0.01,0.01c0,0,0,0,0,0L11,18.06L3.19,9.92z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#productModalId">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M11,19c-6.53,0-10.42-7.23-10.58-7.53L0.17,11l0.25-0.47C0.58,10.23,4.47,3,11,3s10.42,7.23,10.58,7.53L21.83,11l-0.25,0.47
                                            C21.42,11.77,17.53,19,11,19z M2.46,11c0.92,1.49,4.08,6,8.54,6c4.48,0,7.63-4.51,8.54-6C18.62,9.52,15.46,5,11,5
                                            C6.52,5,3.37,9.51,2.46,11z M11,15c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S13.21,15,11,15z M11,9c-1.1,0-2,0.9-2,2s0.9,2,2,2
                                            s2-0.9,2-2S12.1,9,11,9z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product__content">
                            <div class="product__tag product__tag-4">
                                <span>
                                    <a href="shop.html">Furniture</a>
                                </span>
                            </div>
                            <h3 class="product__title">
                                <a href="product-details.html">Wooden Single Drawer</a>
                            </h3>
                            <div class="product__price product__price-4 mb-10">
                                <span class="price">$125.00</span>
                            </div>
                            <div class="product__select-button">
                                <a href="product-details.html" class="select-btn w-100">Select Options</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="product__item mb-20">
                        <div class="product__thumb w-img fix">
                            <a href="product-details.html">
                                <img src="assets/img/products/product-2/product-1.jpg" alt="">
                            </a>
                            <div class="product__action transition-3">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <g>
                                                <path d="M18,19H6c-0.5,0-0.92-0.37-0.99-0.86L3.13,5H1C0.45,5,0,4.55,0,4s0.45-1,1-1h3c0.5,0,0.92,0.37,0.99,0.86L6.87,17h10.39
                                                l2.4-8H11c-0.55,0-1-0.45-1-1s0.45-1,1-1h10c0.32,0,0.61,0.15,0.8,0.4c0.19,0.25,0.25,0.58,0.16,0.88l-3,10
                                                C18.83,18.71,18.44,19,18,19z"></path>
                                            </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M20.26,11.3c2.31-2.36,2.31-6.18-0.02-8.53C19.11,1.63,17.6,1,16,1c0,0,0,0,0,0c-1.57,0-3.05,0.61-4.18,1.71c0,0,0,0,0,0
                                            L11,3.41l-0.81-0.69c0,0,0,0,0,0C9.06,1.61,7.58,1,6,1C4.4,1,2.89,1.63,1.75,2.77c-2.33,2.35-2.33,6.17-0.02,8.53
                                            c0,0,0,0.01,0.01,0.01l0.01,0.01c0,0,0,0,0,0c0,0,0,0,0,0L11,20.94l9.25-9.62c0,0,0,0,0,0c0,0,0,0,0,0L20.26,11.3
                                            C20.26,11.31,20.26,11.3,20.26,11.3z M3.19,9.92C3.18,9.92,3.18,9.92,3.19,9.92C3.18,9.92,3.18,9.91,3.18,9.91
                                            c-1.57-1.58-1.57-4.15,0-5.73C3.93,3.42,4.93,3,6,3c1.07,0,2.07,0.42,2.83,1.18C8.84,4.19,8.85,4.2,8.86,4.21
                                            c0.01,0.01,0.01,0.02,0.03,0.03l1.46,1.25c0.07,0.06,0.14,0.09,0.22,0.13c0.01,0,0.01,0.01,0.02,0.01c0.13,0.06,0.27,0.1,0.41,0.1
                                            c0.08,0,0.16-0.03,0.25-0.05c0.03-0.01,0.07-0.01,0.1-0.02c0.07-0.03,0.13-0.07,0.2-0.11c0.03-0.02,0.07-0.03,0.1-0.06l1.46-1.24
                                            c0.01-0.01,0.02-0.02,0.03-0.03c0.01-0.01,0.03-0.01,0.04-0.02C13.93,3.42,14.93,3,16,3c0,0,0,0,0,0c1.07,0,2.07,0.42,2.83,1.18
                                            c1.56,1.58,1.56,4.15,0,5.73c0,0,0,0.01-0.01,0.01c0,0,0,0,0,0L11,18.06L3.19,9.92z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#productModalId">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M11,19c-6.53,0-10.42-7.23-10.58-7.53L0.17,11l0.25-0.47C0.58,10.23,4.47,3,11,3s10.42,7.23,10.58,7.53L21.83,11l-0.25,0.47
                                            C21.42,11.77,17.53,19,11,19z M2.46,11c0.92,1.49,4.08,6,8.54,6c4.48,0,7.63-4.51,8.54-6C18.62,9.52,15.46,5,11,5
                                            C6.52,5,3.37,9.51,2.46,11z M11,15c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S13.21,15,11,15z M11,9c-1.1,0-2,0.9-2,2s0.9,2,2,2
                                            s2-0.9,2-2S12.1,9,11,9z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product__content">
                            <div class="product__tag product__tag-4">
                                <span>
                                    <a href="shp.html">LIVING ROOM</a>
                                </span>
                            </div>
                            <h3 class="product__title">
                                <a href="product-details.html">Smart Watches Wood</a>
                            </h3>
                            <div class="product__price product__price-4 mb-10">
                                <span class="price"><del>$155.00</del>  $140.00</span>
                            </div>
                            <div class="product__select-button">
                                <a href="product-details.html" class="select-btn w-100">Select Options</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="product__item mb-20">
                        <div class="product__thumb w-img fix">
                            <a href="product-details.html">
                                <img src="assets/img/products/product-2/product-2.jpg" alt="">
                            </a>
                            <div class="product__action transition-3">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <g>
                                                <path d="M18,19H6c-0.5,0-0.92-0.37-0.99-0.86L3.13,5H1C0.45,5,0,4.55,0,4s0.45-1,1-1h3c0.5,0,0.92,0.37,0.99,0.86L6.87,17h10.39
                                                l2.4-8H11c-0.55,0-1-0.45-1-1s0.45-1,1-1h10c0.32,0,0.61,0.15,0.8,0.4c0.19,0.25,0.25,0.58,0.16,0.88l-3,10
                                                C18.83,18.71,18.44,19,18,19z"></path>
                                            </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M20.26,11.3c2.31-2.36,2.31-6.18-0.02-8.53C19.11,1.63,17.6,1,16,1c0,0,0,0,0,0c-1.57,0-3.05,0.61-4.18,1.71c0,0,0,0,0,0
                                            L11,3.41l-0.81-0.69c0,0,0,0,0,0C9.06,1.61,7.58,1,6,1C4.4,1,2.89,1.63,1.75,2.77c-2.33,2.35-2.33,6.17-0.02,8.53
                                            c0,0,0,0.01,0.01,0.01l0.01,0.01c0,0,0,0,0,0c0,0,0,0,0,0L11,20.94l9.25-9.62c0,0,0,0,0,0c0,0,0,0,0,0L20.26,11.3
                                            C20.26,11.31,20.26,11.3,20.26,11.3z M3.19,9.92C3.18,9.92,3.18,9.92,3.19,9.92C3.18,9.92,3.18,9.91,3.18,9.91
                                            c-1.57-1.58-1.57-4.15,0-5.73C3.93,3.42,4.93,3,6,3c1.07,0,2.07,0.42,2.83,1.18C8.84,4.19,8.85,4.2,8.86,4.21
                                            c0.01,0.01,0.01,0.02,0.03,0.03l1.46,1.25c0.07,0.06,0.14,0.09,0.22,0.13c0.01,0,0.01,0.01,0.02,0.01c0.13,0.06,0.27,0.1,0.41,0.1
                                            c0.08,0,0.16-0.03,0.25-0.05c0.03-0.01,0.07-0.01,0.1-0.02c0.07-0.03,0.13-0.07,0.2-0.11c0.03-0.02,0.07-0.03,0.1-0.06l1.46-1.24
                                            c0.01-0.01,0.02-0.02,0.03-0.03c0.01-0.01,0.03-0.01,0.04-0.02C13.93,3.42,14.93,3,16,3c0,0,0,0,0,0c1.07,0,2.07,0.42,2.83,1.18
                                            c1.56,1.58,1.56,4.15,0,5.73c0,0,0,0.01-0.01,0.01c0,0,0,0,0,0L11,18.06L3.19,9.92z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#productModalId">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M11,19c-6.53,0-10.42-7.23-10.58-7.53L0.17,11l0.25-0.47C0.58,10.23,4.47,3,11,3s10.42,7.23,10.58,7.53L21.83,11l-0.25,0.47
                                            C21.42,11.77,17.53,19,11,19z M2.46,11c0.92,1.49,4.08,6,8.54,6c4.48,0,7.63-4.51,8.54-6C18.62,9.52,15.46,5,11,5
                                            C6.52,5,3.37,9.51,2.46,11z M11,15c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S13.21,15,11,15z M11,9c-1.1,0-2,0.9-2,2s0.9,2,2,2
                                            s2-0.9,2-2S12.1,9,11,9z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product__content">
                            <div class="product__tag product__tag-4">
                                <span>
                                    <a href="shop.html">Wooden</a>
                                </span>
                            </div>
                            <h3 class="product__title">
                                <a href="product-details.html">Panton Tunior Chair</a>
                            </h3>
                            <div class="product__price product__price-4 mb-10">
                                <span class="price">$199.00</span>
                            </div>
                            <div class="product__select-button">
                                <a href="product-details.html" class="select-btn w-100">Select Options</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-sm-6">
                    <div class="product__item mb-20">
                        <div class="product__thumb w-img fix">
                            <a href="product-details.html">
                                <img src="assets/img/products/product-2/product-4.jpg" alt="">
                            </a>
                            <div class="product__action transition-3">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <g>
                                                <path d="M18,19H6c-0.5,0-0.92-0.37-0.99-0.86L3.13,5H1C0.45,5,0,4.55,0,4s0.45-1,1-1h3c0.5,0,0.92,0.37,0.99,0.86L6.87,17h10.39
                                                l2.4-8H11c-0.55,0-1-0.45-1-1s0.45-1,1-1h10c0.32,0,0.61,0.15,0.8,0.4c0.19,0.25,0.25,0.58,0.16,0.88l-3,10
                                                C18.83,18.71,18.44,19,18,19z"></path>
                                            </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M20.26,11.3c2.31-2.36,2.31-6.18-0.02-8.53C19.11,1.63,17.6,1,16,1c0,0,0,0,0,0c-1.57,0-3.05,0.61-4.18,1.71c0,0,0,0,0,0
                                            L11,3.41l-0.81-0.69c0,0,0,0,0,0C9.06,1.61,7.58,1,6,1C4.4,1,2.89,1.63,1.75,2.77c-2.33,2.35-2.33,6.17-0.02,8.53
                                            c0,0,0,0.01,0.01,0.01l0.01,0.01c0,0,0,0,0,0c0,0,0,0,0,0L11,20.94l9.25-9.62c0,0,0,0,0,0c0,0,0,0,0,0L20.26,11.3
                                            C20.26,11.31,20.26,11.3,20.26,11.3z M3.19,9.92C3.18,9.92,3.18,9.92,3.19,9.92C3.18,9.92,3.18,9.91,3.18,9.91
                                            c-1.57-1.58-1.57-4.15,0-5.73C3.93,3.42,4.93,3,6,3c1.07,0,2.07,0.42,2.83,1.18C8.84,4.19,8.85,4.2,8.86,4.21
                                            c0.01,0.01,0.01,0.02,0.03,0.03l1.46,1.25c0.07,0.06,0.14,0.09,0.22,0.13c0.01,0,0.01,0.01,0.02,0.01c0.13,0.06,0.27,0.1,0.41,0.1
                                            c0.08,0,0.16-0.03,0.25-0.05c0.03-0.01,0.07-0.01,0.1-0.02c0.07-0.03,0.13-0.07,0.2-0.11c0.03-0.02,0.07-0.03,0.1-0.06l1.46-1.24
                                            c0.01-0.01,0.02-0.02,0.03-0.03c0.01-0.01,0.03-0.01,0.04-0.02C13.93,3.42,14.93,3,16,3c0,0,0,0,0,0c1.07,0,2.07,0.42,2.83,1.18
                                            c1.56,1.58,1.56,4.15,0,5.73c0,0,0,0.01-0.01,0.01c0,0,0,0,0,0L11,18.06L3.19,9.92z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#productModalId">
                                            <svg viewBox="0 0 22 22">
                                            <path d="M11,19c-6.53,0-10.42-7.23-10.58-7.53L0.17,11l0.25-0.47C0.58,10.23,4.47,3,11,3s10.42,7.23,10.58,7.53L21.83,11l-0.25,0.47
                                            C21.42,11.77,17.53,19,11,19z M2.46,11c0.92,1.49,4.08,6,8.54,6c4.48,0,7.63-4.51,8.54-6C18.62,9.52,15.46,5,11,5
                                            C6.52,5,3.37,9.51,2.46,11z M11,15c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S13.21,15,11,15z M11,9c-1.1,0-2,0.9-2,2s0.9,2,2,2
                                            s2-0.9,2-2S12.1,9,11,9z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product__content">
                            <div class="product__tag product__tag-4">
                                <span>
                                    <a href="shp.html">LIVING ROOM</a>
                                </span>
                            </div>
                            <h3 class="product__title">
                                <a href="product-details.html">Smart Watches Wood</a>
                            </h3>
                            <div class="product__price product__price-4 mb-10">
                                <span class="price"><del>$155</del>  $140.00</span>
                            </div>
                            <div class="product__select-button">
                                <a href="product-details.html" class="select-btn w-100">Select Options</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;