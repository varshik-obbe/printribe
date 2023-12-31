import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/nano.min.css";
import axios from "axios";
import domtoimage from "dom-to-image";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useEffect, useRef, useState, useCallback, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import testImg from "../../assets/02-cat-training-NationalGeographic_1484324_3x4.jpg";
import img5 from "../../assets/fabricjs/imgs/quick-view/quick-view-02-2.jpg";
import img6 from "../../assets/fabricjs/imgs/quick-view/quick-view-02-3.jpg";
import canvasStyles from "../../styles/canvas.module.css";
import defaults from "../../styles/defaults.module.css";
import styles from "../../styles/home.module.css";
import "../../styles/scss/components/_theme.scss";
import "../../styles/scss/layout/_product.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import how1 from "../../assets/howItWorks/howitworks_1.jpg";
import how2 from "../../assets/howItWorks/howitworks_2.jpg";
import how3 from "../../assets/howItWorks/howitworks_3.jpg";
import how4 from "../../assets/howItWorks/howitworks_4.jpg";
import how5 from "../../assets/howItWorks/howitworks_5.jpg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const { prodid } = useParams();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [size, setSize] = useState("");
  const [product, setproduct] = useState({});
  const [sizePrices, setSizePrices] = useState();
  const [fabricInfo, setFabricInfo] = useState({});
  const [mainImg, setMainImg] = useState("");
  const [productName, setProductName] = useState("");
  const [designGst, setDesignGst] = useState("")

  const [handlingGst, setHandlingGst] = useState("")
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
  const [colorPick, setColorPick] = useState("");
  const [priceSet, setPriceSet] = useState(0);
  const [previousPrice, setPreviousPrice] = useState();
  const [addText, setAddText] = useState(false);
  const [widthInches, setWidthInches] = useState();
  const [designPriced, setDesignPrice] = useState();
  const [heightInches, setHeightInches] = useState();
  const [aop, setAop] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [cat, setCat] = useState();
  const [subCat, setSubCat] = useState();
  const [subCatCat, setSubCatCat] = useState();
  const [productColors, setProductColors] = useState();
  const [productImgsArr, setProductImgsArr] = useState();
  const [uploadedImgsArr, setuploadedImgsArr] = useState();
  const [savedImgsArr, setSavedImgsArr] = useState();
  const [cmsSizeChart, setCmsSizeChart] = useState();
  const [inchSizeChart, setInchSizeChart] = useState();
  const[otherImages,setOtherImages]=useState();
  const [frontPrice, setFrontPrice] = useState(0);
  const [backPrice, setBackPrice] = useState(0);
  const [leftPrice, setLeftPrice] = useState(0);
  const [rightPrice, setRightPrice] = useState(0);

  // const otherImages = [how1, how2, how3, how4, how5];
  const [catURL, setCatURL] = useState();
  const [subCatURL, setSubCatURL] = useState();
  const [imageDesignUploaded, setImageDesignUploaded] = useState();
  const [designSelected, setDesignSelected] = useState();
  const [retailPrice, setRetialPrice] = useState("")
  const [productGst, setProductGst] = useState("")
  const [showAnother, setShowAnother] = useState(false);
  const [canvasArr, setCanvasArr] = useState();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }


  const [show, setShow] = useState(false);
  const [showSize, setSizeShow] = useState(false);
  const [otherImg, setOtherImg] = useState()
  const [count, setCount] = useState(1)
  const handleNext = () => {

    setOtherImg(otherImages[count])
    setCount(count + 1)
    if (count > productImgsArr.length - 1) {
      setCount(0)
    }


  }
  useEffect(()=>{
    if (otherImages?.length) {
      setOtherImg(otherImages[0])

    }
  },[otherImages])
  const handleChangeImage = (data, letter) => {
    console.log(data,"data")
    setOtherImg(data)
    setSides(letter)

  }
  const handlePrevious = () => {
    console.log(count,"count",otherImages.length)
    setOtherImg(otherImages[count-1])
    if (count == 1) {
      setCount(otherImages.length)
    }
    setCount(count - 1)
   

  }
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleCloseSize = () => setSizeShow(false);

  const handleShowSize = () => setSizeShow(true);

  const handleSizeEntered = async () => {
    await axios
      .get(`/products/getProductSizeChartById/${prodid}`)
      .then(async ({ data }) => {
        if (Object.keys(data.productSizeChartData).length > 0) {
          let imgsArr = [];
          setCmsSizeChart(data.productSizeChartData.centimeters);
          setInchSizeChart(data.productSizeChartData.inches);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEntered = async () => {
    const customerId = localStorage.getItem("customerId");
    let imgsArr = [];
    if (customerId) {
      await axios
        .get(`/fabricDesigns/getSavedDesign/${customerId}`)
        .then(async ({ data }) => {
          if (data.designsSaved.length > 0) {
            await data.designsSaved.map((val, key) => {
              imgsArr.push(val.imgsArr);
            })
            setSavedImgsArr(imgsArr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // if (productColors && productColors.length > 0) {
    //   await productColors.map(async (val, key) => {
    //     if (val.imgs?.length > 0 && val.color == color) {
    //       await val.imgs.map((imgsVal, keyVal) => {
    //         imgsArr.push(imgsVal);
    //       });
    //     }
    //   });
    //   setProductImgsArr(imgsArr);
    // }

  };

  var left1 = 0;
  var top1 = 0;
  var scale1x = 0;
  var scale1y = 0;
  var width1 = 0;
  var height1 = 0;
  let maximumHeight = 0;
  let maximumWidth = 0;
  let canvasAddArr = [];

  const Basecanvas = new fabric.Canvas();
  const { editor, onReady } = useFabricJSEditor();

  const handleMydesginChange = (evt) => {
    setDesignSelected(evt.target.value);
  }

  // get fabric and product info
  const getProduct = async () => {
    if (checkLogin()) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }

    axios
      .get("/products/getProducts")
      .then(({ data }) => {
        console.log(data.maincat.categories);
        // setproducts(data.maincat.categories);
        data.maincat.categories.map((product) => {
          product.subCategories.map((subproduct) => {
            if (subproduct.products) {
              subproduct.products.map((productLast) => {
                if (productLast.id === prodid) {
                  setShowAnother(true);

                  setCat(product.name);
                  setSubCat(subproduct.name);

                  setCatURL(product.url + "/" + product.id);

                  setSubCatURL(subproduct.url + "/" + subproduct.id);
                }
              });
            }

            subproduct.subsubCategories.map((subsubproduct) => {
              if (subsubproduct.products) {
                subsubproduct.products.map((productLast) => {
                  if (productLast.id === prodid) {
                    setCat(product.name);
                    setSubCat(subproduct.name);
                    setSubCatCat(subsubproduct.name);

                    setCatURL(product.url + "/" + product.id);

                    setSubCatURL(subproduct.url + "/" + subproduct.id);
                  }
                });
              }
            });
          });
        });
      })
      .catch((resp) => {
        console.log(resp);
      });

    await axios
      .get(`/products/getProductSizeLinkById/${prodid}`)
      .then(async ({ data }) => {
        if (Object.keys(data.productSizeData).length > 0) {
          setSizePrices(data.productSizeData.size_link);
        }
      })
      .catch((err) => {
        console.log(err);
      });      

    await axios
      .get(`/products/getProductColorLinkById/${prodid}`)
      .then(async ({ data }) => {
        if (Object.keys(data.productColorData).length > 0) {
          let imgsArr = [];
          setOtherImages(data.productColorData.color_links[0].imgs)
          setProductColors(data.productColorData.color_links);
          await data.productColorData.color_links.map(async (val, key) => {
            if (val.imgs?.length > 0 && key == 0) {
              await val.imgs.map((imgsVal, keyVal) => {
                imgsArr.push(process.env.REACT_APP_IMAGE_BASE_URL + imgsVal);
              });
            }
          });
          setProductImgsArr(imgsArr);
          // setOtherImg(imgsArr[0])
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("product id is:" + prodid);
    await axios
      .get(`/products/getproduct/${prodid}`)
      .then(({ data }) => {
        console.log(data);
        console.log(data.product.productdata[0]);
        setproduct(data.product.productdata[0]);
        setRetialPrice(data.product.productdata[0].retail_price);
        setProductGst(data.product.productdata[0].gst);
        setProductName(data.product.productdata[0].title);
        setHandlingGst(data.product.productdata[0].handling_gst)
        setDesignGst(data.product.productdata[0].design_gst)
        setPriceSet(data.product.productdata[0].price);
        if (data.product.productdata[0].AOP == "true") {
          setAop(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .get(`/fabric/getFabricProductById/${prodid}`)
      .then(async ({ data }) => {
        console.log(data);
        if (data) {
          let imgsVariants = [];
          if (data.productData && Object.keys(data.productData).length > 0) {
            if (
              data.productData.variant[colorIndex].frontImgURL !== undefined
            ) {
              imgsVariants.push("front");
            }
            if (data.productData.variant[colorIndex].backImgURL !== undefined) {
              imgsVariants.push("back");
            }
            if (data.productData.variant[colorIndex].leftImgURL !== undefined) {
              imgsVariants.push("left");
            }
            if (
              data.productData.variant[colorIndex].rightImgURL !== undefined
            ) {
              imgsVariants.push("right");
            }
            setMainImg(
              process.env.REACT_APP_IMAGE_BASE_URL +
              data.productData.variant[colorIndex].frontImgURL
            );
            setColor(data.productData.variant[colorIndex].colorName);
            setImgVariants(imgsVariants);
            setFabricInfo(data.productData);
            setIsCustomizeable(true);
          }
        } else {
          setMainImg(
            process.env.REACT_APP_IMAGE_BASE_URL +
            "/" +
            data.product.productdata[0].img
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //check if a user is logged in
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

  useEffect(() => {
    if (addText) {
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
          setColorPick(colorSaved);
        }
      });
    }
  }, [addText]);

  useEffect(() => {
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    if(canvasArr) {
      const objE = canvasArr[no].getObjects();
      objE?.forEach((o) => {
        console.log("entering use effect");
        if (o.type === "i-text") {
          o.set("fill", colorPick.toString(2));
          canvasArr[no].bringToFront(o);
        } else if (o.type === "image") {
          canvasArr[no].sendToBack(o);
        }
      });
    }
  }, [colorPick]);
  const renderTooltip = props => (
    <Tooltip id="tooltip" style={{backgroundColor:'white'}} {...props}><div >{props.colorName +' '+ props.colorCode}</div></Tooltip>
  );
  //default function which runs when the dom is loaded the first time
  useEffect(() => {
    setImage(testImg);

    setSides("one");

    getProduct();

    // const canvasWidth = editor?.canvas.getWidth();
    // const canvasHeight = editor?.canvas.getHeight();
    // if (editor?.canvas) {
    //   editor.canvas.preserveObjectStacking = true;
    //   editor.canvas.controlsAboveOverlay = true;
    // }
    // editor?.canvas.setWidth(470);
    // editor?.canvas.setHeight(612);
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
    setWidthInches(0);
    setHeightInches(0);
  }, []);

  function getCoords(rect) {
    var coords = [];
    coords.push(rect.aCoords.tl);
    coords.push(rect.aCoords.tr);
    coords.push(rect.aCoords.br);
    coords.push(rect.aCoords.bl);
    coords.push(rect.aCoords.tl);
    return coords;
  }

  function inside(p, vs) {
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i].x,
        yi = vs[i].y;
      var xj = vs[j].x,
        yj = vs[j].y;
      var intersect =
        yi > p.y !== yj > p.y &&
        p.x < ((xj - xi) * (p.y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  //function which runs when the fabricInfo is changed and used to add the constraints inside canvas
  useEffect(() => {
    if (fabricInfo && Object.keys(fabricInfo).length > 0) {
      console.log(
        "fabric data dimensions:" +
        fabricInfo.variant[colorIndex].frontImgDimensions
      );

      //defining the Rectangle constraint for users designs
      var Rect = new fabric.Rect({
        width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
        height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
        top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
        left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
        selectable: false,
        hasControls: false,
        hasRotatingPoint: false,
        evented: false,
        strokeDashArray: [5, 2],
        stroke: "grey",
        fill: "transparent",
      });
      if (!aop) {
        //if a design is moved out of the constraint it gets clipped
        var clipPath = new fabric.Rect({
          selectable: false,
          hasControls: false,
          hasRotatingPoint: false,
          evented: false,
          width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
          height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
          top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
          left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
      }
      editor?.canvas.add(Rect);
      if (aop) {
        setMainImg(
          process.env.REACT_APP_IMAGE_BASE_URL +
          "/uploads/whiteBackgroundforAOP.png"
        );
        let urlTshirt =
          process.env.REACT_APP_IMAGE_BASE_URL +
          fabricInfo.variant[colorIndex].frontImgURL;
        var newImg = new Image();
        newImg.src = urlTshirt;
        fabric.Image.fromURL(urlTshirt, function (img) {
          img.scaleToHeight(612);
          img.scaleToWidth(417);
          img.selectable = false;
          img.hasControls = false;
          img.hasRotatingPoint = false;
          editor?.canvas.setBackgroundImage(img);
          editor.canvas.renderAll();
          //if a design is moved out of the constraint it gets clipped
          var clipPath = new fabric.Rect({
            selectable: false,
            hasControls: false,
            hasRotatingPoint: false,
            width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
            height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
            top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
            left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
          });
          if (editor?.canvas) {
            // let ctx = editor.canvas.getContext();
            // ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 470, 612);
            // clipPath.render(ctx);
            editor.canvas.clipPath = clipPath;
          }
        });
      }
      if (
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleWidth !== 0 &&
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleWidth !== "" &&
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleHeight !== 0 &&
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleHeight !== ""
      ) {
        // maximumHeight = (
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].heightInches
        //   ) /
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].scaleHeight
        //   )
        // ).toFixed(2);
        // maximumWidth = (
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].widthInches
        //   ) /
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].scaleWidth
        //   )
        // ).toFixed(2);
        maximumHeight = 0;
        maximumWidth = 0;
      } else {
        setWidthInches(
          fabricInfo.variant[colorIndex].frontCanvasPricing[0].widthInches
        );
        setHeightInches(
          fabricInfo.variant[colorIndex].frontCanvasPricing[0].heightInches
        );
      }


      const customerId = localStorage.getItem("customerId");
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      if (customerId && urlParams.has('edit')) {
        axios
          .get(
            `/fabricDesigns/getFabricDesign/${prodid}/${fabricInfo.variant[colorIndex].colorName}/${sides}/${customerId}`
          )
          .then((dataFabr) => {
            if (Object.keys(dataFabr.data).length > 0) {
              setDesignHistory(dataFabr.data.fabricData);
              fabric.Image.fromURL(
                process.env.REACT_APP_IMAGE_BASE_URL + dataFabr.data.fabricData.uploadedImgsArr[0],
                async function (img) {
                  console.log("saved data is ", dataFabr.data.fabricData.savedImgsInfo)
                  img.top = dataFabr.data.fabricData.savedImgsInfo[0].top;
                  img.left = dataFabr.data.fabricData.savedImgsInfo[0].left;
                  img.scaleX = dataFabr.data.fabricData.savedImgsInfo[0].scaleX;
                  img.scaleY = dataFabr.data.fabricData.savedImgsInfo[0].scaleY;
                  img.set({
                    scaleX: dataFabr.data.fabricData.savedImgsInfo[0].scaleX,
                    scaleY: dataFabr.data.fabricData.savedImgsInfo[0].scaleY
                  })
                  img.setControlsVisibility({
                    ml: false,
                    mt: false,
                    mr: false,
                    mb: false,
                  });
                  editor?.canvas.add(img);

                  if (localStorage.getItem("customizeProduct")) {
                    const customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
                    console.log("local storage info", customizeProduct);
                    setColor(customizeProduct[0].color.color_name);
                    setColorCode(customizeProduct[0].color.color_code);
                    setColorId(customizeProduct[0].color.colorId);
                    setSize(customizeProduct[0].size);
                    const color = document.getElementById(customizeProduct[0].size).style.backgroundColor;
                    for (var i = 0; i < product.productsizes.length; i++) {
                      document.getElementById(product.productsizes[i]).style.backgroundColor =
                        "white";
                      document.getElementById(product.productsizes[i]).style.color = "black";
                    }
                    if (color !== "black") {
                      document.getElementById(customizeProduct[0].size).style.backgroundColor = "black";
                      document.getElementById(customizeProduct[0].size).style.color = "white";
                    } else {
                      document.getElementById(customizeProduct[0].size).style.backgroundColor = "white";
                      document.getElementById(customizeProduct[0].size).style.color = "black";
                    }
                  }

                  await setEditImage();
                }
              )

              // editor?.canvas.loadFromJSON(
              //   JSON.parse(dataFabr.data.fabricData.data)
              // );
              // editor?.canvas.renderAll();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      //images moved inside the canvas
      editor?.canvas.on("object:moving", function (e) {
        if (!aop) {
          let parent;
          let objs = editor?.canvas.getObjects();
          let parentObj;
          objs.forEach((o) => {
            if (o.type === "rect") {
              parentObj = o;
            }
          });
          if (sides == "one") {
            parent = parentObj;
          } else if (sides == "two") {
            parent = parentObj;
          } else if (sides == "three") {
            parent = parentObj;
          } else if (sides == "four") {
            parent = parentObj;
          }
          // var cCoords = getCoords(parent);
          // var inBounds = inside(
          //   { x: e.target.left + 1, y: e.target.top + 1 },
          //   cCoords
          // );

          // if (inBounds) {
          //   e.target.setCoords();
          //   e.target.saveState();
          // } else {
          //   e.target.left = e.target._stateProperties.left;
          //   e.target.top = e.target._stateProperties.top;
          // }

          let movingBox = e.target;
          var top = movingBox.top;
          var bottom = top + movingBox.getScaledHeight();
          var left = movingBox.left;
          var right = left + movingBox.getScaledWidth();

          let boundingBox = parent;
          var topBound = boundingBox.top;
          var bottomBound = topBound + boundingBox.height;
          var leftBound = boundingBox.left;
          var rightBound = leftBound + boundingBox.width;
          movingBox.left = Math.min(
            Math.max(left, leftBound),
            rightBound - movingBox.getScaledWidth()
          );
          movingBox.top = Math.min(
            Math.max(top, topBound),
            bottomBound - movingBox.getScaledHeight()
          );

          objs = editor?.canvas.getObjects();

          let diffObjs = [];
          let ins = 0;
          objs.forEach((obj, i) => {
            if (obj.type === "image" || obj.type === "i-text") {
              diffObjs[ins] = obj;
              ins++;
            }
          });

          let totalWidth = 0;
          let totalHeight = 0;
          let intersect = false;
          let intersectArr = [];
          let notIntersectArr = [];
          diffObjs.forEach((ele, ind) => {
            for (let i = 0; i < diffObjs.length; i++) {
              if (i != ind) {
                if (
                  ((diffObjs[i].left < ele.left + ele.getScaledWidth() &&
                    diffObjs[i].left >= ele.left) ||
                    (ele.left <
                      diffObjs[i].left + diffObjs[i].getScaledWidth() &&
                      ele.left >= diffObjs[i].left)) &&
                  ((diffObjs[i].top < ele.top + ele.getScaledHeight() &&
                    diffObjs[i].top >= ele.top) ||
                    (ele.top <
                      diffObjs[i].top + diffObjs[i].getScaledHeight() &&
                      ele.top >= diffObjs[i].top))
                ) {
                  intersectArr.push(ele);
                } else {
                  notIntersectArr.push(ele);
                }
              }
            }
            if (intersectArr.length > 0) {
              let minvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left < curr.left ? prev : curr;
              });
              let maxvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left + prev.getScaledWidth() >
                  curr.left + curr.getScaledWidth()
                  ? prev
                  : curr;
              });
              let minvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top < curr.top ? prev : curr;
              });
              let maxvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top + prev.getScaledHeight() >
                  curr.top + curr.getScaledHeight()
                  ? prev
                  : curr;
              });
              totalWidth =
                maxvalWidth.left +
                maxvalWidth.getScaledWidth() -
                minvalWidth.left;
              totalHeight =
                maxvalHeight.top +
                maxvalHeight.getScaledHeight() -
                minvalHeight.top;
            }
            if (notIntersectArr.length > 0) {
              notIntersectArr.forEach((element) => {
                totalWidth = totalWidth + element.getScaledWidth();
                totalHeight = totalHeight + element.getScaledHeight();
              });
            }
            if (intersectArr.length == 0 && notIntersectArr.length == 0) {
              totalWidth = totalWidth + ele.getScaledWidth();
              totalHeight = totalHeight + ele.getScaledHeight();
            }
          });

          let widthInches = 0;
          let heightInches = 0;
          let scalePrice = 0;

          if (sides == "one") {
            fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth > val.width && totalHeight > val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          } else if (sides == "two") {
            fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth >= val.width && totalHeight >= val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          } else if (sides == "three") {
            fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth >= val.width && totalHeight >= val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          } else if (sides == "four") {
            fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth >= val.width && totalHeight >= val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          }
          let totPrice = 0;
          let newHeight = heightInches;
          let newWidth = widthInches;
          if (parseFloat(newWidth) >= 14) {
            setWidthInches(14.0);
          } else {
            setWidthInches(parseFloat(newWidth.toFixed(2)));
          }
          if (parseFloat(newHeight) >= 16) {
            setHeightInches(16.0);
          } else {
            setHeightInches(parseFloat(newHeight.toFixed(2)));
          }
          if (newWidth > maximumWidth) {
            maximumWidth = parseFloat(newWidth.toFixed(2));
          }
          if (newHeight > maximumHeight) {
            maximumHeight = parseFloat(newHeight.toFixed(2));
          }
          totPrice = parseInt(product.price, 10) + parseInt(scalePrice, 10);
          setPriceSet(totPrice);
          setDesignPrice(parseInt(scalePrice, 10));
          setFrontPrice(parseInt(scalePrice, 10));
        }
      });

      //images or fonts scaling inside rectangle
      editor?.canvas.on("object:scaling", (e) => {
        editor?.canvas.getActiveObjects().forEach((o) => {
          if (o.type == "image" || o.type == "i-text") {
            if (!aop) {
              let parent;
              let objs = editor?.canvas.getObjects();
              let parentObj;
              objs.forEach((o) => {
                if (o.type === "rect") {
                  parentObj = o;
                }
              });
              if (sides == "one") {
                parent = parentObj;
              } else if (sides == "two") {
                parent = parentObj;
              } else if (sides == "three") {
                parent = parentObj;
              } else if (sides == "four") {
                parent = parentObj;
              }

              var obj = e.target;
              obj.setCoords();
              var brNew = obj.getBoundingRect();

              if (
                brNew.width + brNew.left >
                parseFloat(parentObj.width) + parseFloat(parentObj.left) ||
                brNew.height + brNew.top >
                parseFloat(parentObj.height) + parseFloat(parentObj.top) ||
                brNew.left < parseFloat(parentObj.left) ||
                brNew.top < parseFloat(parentObj.top)
              ) {
                obj.left = left1;
                obj.top = top1;
                obj.scaleX = scale1x;
                obj.scaleY = scale1y;
                obj.width = width1;
                obj.height = height1;
              } else {
                left1 = obj.left;
                top1 = obj.top;
                scale1x = obj.scaleX;
                scale1y = obj.scaleY;
                width1 = obj.width;
                height1 = obj.height;
              }

              let totPrice = 0;
              let scalePrice = 0;
              let widthInches = 0;
              let heightInches = 0;
              if (sides == "one") {
                fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height)
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() > val.width &&
                          o.getScaledHeight() > val.height
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              } else if (sides == "two") {
                fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height)
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() >= val.width &&
                          o.getScaledHeight() >= val.height
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              } else if (sides == "three") {
                fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height)
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() >= val.width &&
                          o.getScaledHeight() >= val.height
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              } else if (sides == "four") {
                fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height)
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() >= val.width &&
                          o.getScaledHeight() >= val.height
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              }

              let newHeight = heightInches;
              let newWidth = widthInches;
              if (parseFloat(newWidth) >= 14) {
                setWidthInches(14.0);
              } else {
                setWidthInches(parseFloat(newWidth.toFixed(2)));
              }
              if (parseFloat(newHeight) >= 16) {
                setHeightInches(16.0);
              } else {
                setHeightInches(parseFloat(newHeight.toFixed(2)));
              }
              if (newWidth > maximumWidth) {
                maximumWidth = parseFloat(newWidth.toFixed(2));
              }
              if (newHeight > maximumHeight) {
                maximumHeight = parseFloat(newHeight.toFixed(2));
              }
              totPrice = parseInt(product.price, 10) + parseInt(scalePrice, 10);
              setPriceSet(totPrice);
              setDesignPrice(parseInt(scalePrice, 10));
              setFrontPrice(parseInt(scalePrice, 10));
            }
          }
          // console.log("scaled height ", o.getScaledHeight());
          // console.log("scaled width ", o.getScaledWidth());
        });
      });
    }
  }, [fabricInfo]);

  //get height and width of image
  const getUploadedFileDimensions = (file) =>
    new Promise((resolve, reject) => {
      try {
        let img = new Image();

        img.onload = () => {
          const width = img.naturalWidth,
            height = img.naturalHeight;

          window.URL.revokeObjectURL(img.src);

          return resolve({ width, height });
        };

        img.src = window.URL.createObjectURL(file);
      } catch (exception) {
        return reject(exception);
      }
    });

  //set edit image price and width and height
  const setEditImage = async () => {
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    let objs = canvasArr[no].getObjects();
    let diffObjs = [];
    let ins = 0;
    objs.forEach((obj, i) => {
      if (obj.type === "image" || obj.type === "i-text") {
        diffObjs[ins] = obj;
        ins++;
      }
    });
    let totalWidth = 0;
    let totalHeight = 0;

    let intersect = false;
    let intersectArr = [];
    let notIntersectArr = [];
    diffObjs.forEach((ele, ind) => {
      for (let i = 0; i < diffObjs.length; i++) {
        if (i != ind) {
          if (
            ((diffObjs[i].left < ele.left + ele.getScaledWidth() &&
              diffObjs[i].left >= ele.left) ||
              (ele.left <
                diffObjs[i].left + diffObjs[i].getScaledWidth() &&
                ele.left >= diffObjs[i].left)) &&
            ((diffObjs[i].top < ele.top + ele.getScaledHeight() &&
              diffObjs[i].top >= ele.top) ||
              (ele.top <
                diffObjs[i].top + diffObjs[i].getScaledHeight() &&
                ele.top >= diffObjs[i].top))
          ) {
            intersectArr.push(ele);
          } else {
            notIntersectArr.push(ele);
          }
        }
      }
      if (intersectArr.length > 0) {
        let minvalWidth = intersectArr.reduce(function (prev, curr) {
          return prev.left < curr.left ? prev : curr;
        });
        let maxvalWidth = intersectArr.reduce(function (prev, curr) {
          return prev.left + prev.getScaledWidth() >
            curr.left + curr.getScaledWidth()
            ? prev
            : curr;
        });
        let minvalHeight = intersectArr.reduce(function (prev, curr) {
          return prev.top < curr.top ? prev : curr;
        });
        let maxvalHeight = intersectArr.reduce(function (prev, curr) {
          return prev.top + prev.getScaledHeight() >
            curr.top + curr.getScaledHeight()
            ? prev
            : curr;
        });
        totalWidth =
          maxvalWidth.left +
          maxvalWidth.getScaledWidth() -
          minvalWidth.left;
        totalHeight =
          maxvalHeight.top +
          maxvalHeight.getScaledHeight() -
          minvalHeight.top;
      }
      if (notIntersectArr.length > 0) {
        notIntersectArr.forEach((element) => {
          totalWidth = totalWidth + element.getScaledWidth();
          totalHeight = totalHeight + element.getScaledHeight();
        });
      }
      if (intersectArr.length == 0 && notIntersectArr.length == 0) {
        totalWidth = totalWidth + ele.getScaledWidth();
        totalHeight = totalHeight + ele.getScaledHeight();
      }
    });

    let newHeight = 0;
    let newWidth = 0;
    canvasArr[no].getObjects().forEach((o) => {
      if (o.type === "image") {
        newHeight = o.getScaledHeight();
        newWidth = o.getScaledWidth();
        width1 = o.width;
        height1 = o.height;
        // o.lockScalingX = true;
        // o.lockScalingY = true;
      }
    });
    if (
      fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !==
      null &&
      fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !== 0
    ) {
      let heightInches = parseFloat(totalHeight) / 10;
      let widthInches = parseFloat(totalWidth) / 10;
      let lastPrice = 0;
      let totPrice = 0;
      let lastWidthInches = 0;
      let lastHeightInches = 0;
      if (sides == "one") {
        fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(heightInches) *
                  parseFloat(widthInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      } else if (sides == "two") {
        fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(widthInches) *
                  parseFloat(heightInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      } else if (sides == "three") {
        fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(widthInches) *
                  parseFloat(heightInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      } else if (sides == "four") {
        fabricInfo.variant[colorIndex].rightCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(widthInches) *
                  parseFloat(heightInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      }
      totPrice = parseInt(product.price, 10) + parseFloat(lastPrice);
      setPriceSet(parseFloat(totPrice.toFixed(2)));
      if (parseFloat(widthInches) >= 14) {
        setWidthInches(14.0);
      } else {
        setWidthInches(parseFloat(widthInches.toFixed(2)));
      }
      if (parseFloat(heightInches) >= 16) {
        setHeightInches(16.0);
      } else {
        setHeightInches(parseFloat(heightInches.toFixed(2)));
      }
      if (widthInches > maximumWidth) {
        maximumWidth = parseFloat(widthInches.toFixed(2));
      }
      if (heightInches > maximumHeight) {
        maximumHeight = parseFloat(heightInches.toFixed(2));
      }
      setDesignPrice(parseFloat(lastPrice.toFixed(2)));
      if (sides == "one") {
        setFrontPrice(parseFloat(lastPrice.toFixed(2)));
      }
      else if (sides == "two") {
        setBackPrice(parseFloat(lastPrice.toFixed(2)));
      }
      else if (sides == "three") {
        setLeftPrice(parseFloat(lastPrice.toFixed(2)));
      }
      else if (sides == "four") {
        setRightPrice(parseFloat(lastPrice.toFixed(2)));
      }
    }
  }

  //get height and width of image url
  const getUploadedDesignFileDimensions = (file) =>
    new Promise((resolve, reject) => {
      try {
        let img = new Image();

        img.onload = () => {
          const width = img.naturalWidth,
            height = img.naturalHeight;

          window.URL.revokeObjectURL(img.src);

          return resolve({ width, height });
        };

        img.src = file;
      } catch (exception) {
        return reject(exception);
      }
    });

  function getBase64Image(imgUrl) {
    return new Promise(
      function (resolve, reject) {

        var img = new Image();
        img.src = imgUrl;
        img.setAttribute('crossOrigin', 'anonymous');

        img.onload = function () {
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
        }
        img.onerror = function () {
          reject("The image could not be loaded.");
        }

      });

  }


  //function which excutes when saved image is uploaded  
  const uploadSavedDesign = async (event) => {
    if (!designSelected || designSelected === undefined) {
      return;
    }
    let imageUploaded = await getUploadedDesignFileDimensions(designSelected);
    let uploadedObj = {
      width: imageUploaded.width,
      height: imageUploaded.height
    }
    setImageDesignUploaded(uploadedObj);
    if (imageUploaded.width < 1000 && imageUploaded.height < 1000) {
      alert("please upload a higher resolution image");
      return;
    } else {
      let imageUloadedArr = [];
      if (uploadedImgsArr) {
        imageUloadedArr = uploadedImgsArr;
      }
      let base64data = getBase64Image(designSelected).then(function (base64image) {
        imageUloadedArr.push(base64image);
        setuploadedImgsArr(imageUloadedArr);
      }, function (reason) {
        console.log(reason); // Error!
      });
      let no = 0;
      if (sides == "one") {
        no = 0;
      }
      else if (sides == "two") {
        no = 1;
      }
      else if (sides == "three") {
        no = 2;
      }
      else if (sides == "four") {
        no = 3;
      }
      const objectUrl = designSelected;
      fabric.Image.fromURL(
        objectUrl,
        function (img) {
          // const objs = editor?.canvas.getObjects();
          // objs?.forEach((o) => {
          //   if (o.type === "image") {
          //     editor?.canvas.remove(o);
          //   }
          // });
          let topRect = 0;
          let leftRect = 0;
          let objHeight = 0;
          let objWidth = 0;
          const obj = canvasArr[no].getObjects();
          obj?.forEach((o) => {
            if (o.type === "rect") {
              topRect = o.top;
              leftRect = o.left;
              objWidth = o.width;
              objHeight = o.height;
            }
          });
          if (aop) {
            img.objectCaching = false;
            img.globalCompositeOperation = "source-atop";
            img.opacity = 0.8;
            let scaleX;
            scaleX = parseInt(470) / parseInt(img.width);
            let scaleY = 612 / parseInt(img.height);
            img.set({
              scaleX: scaleX,
              scaleY: scaleY,
            });
            img.setControlsVisibility({
              ml: false,
              mt: false,
              mr: false,
              mb: false,
            });
          } else {
            img.top = topRect;
            img.left = leftRect;
            left1 = leftRect;
            top1 = topRect;
            // let ih = img.height;
            // let iw = img.width;
            // let width_ratio =
            //   parseInt(fabricInfo.variant[colorIndex].frontImgDimensions.width) /
            //   parseInt(iw);
            // let height_ratio =
            //   parseInt(fabricInfo.variant[colorIndex].frontImgDimensions.height) /
            //   parseInt(ih);
            // let fw = 0;
            // let fh = 0;
            // if (width_ratio > height_ratio) {
            //   fw = parseInt(iw) * width_ratio;
            //   fh = (parseInt(ih) * parseInt(fw)) / parseInt(iw);
            // } else {
            //   fh = parseInt(ih) * height_ratio;
            //   fw = (parseInt(iw) * parseInt(fh)) / parseInt(ih);
            // }
            // img.set({
            //   width: fw,
            //   height: fh,
            // });

            
            let aspectRatioHeight = 0;

            let aspectRatioWidth = 0;

            aspectRatioHeight = imageUploaded.height / imageUploaded.width;

            aspectRatioWidth = imageUploaded.width/ imageUploaded.height;

            let adjHeight = 0;
            let adjWidth = 0;

            if (sides == "one") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].frontImgDimensions.width) * aspectRatioHeight;
              adjWidth = parseInt(
                  fabricInfo.variant[colorIndex].frontImgDimensions.height) * aspectRatioWidth;                
            } else if (sides == "two") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].backImgDimensions.width
              ) * aspectRatioHeight;
              adjWidth = parseInt(
                fabricInfo.variant[colorIndex].backImgDimensions.height
              ) * aspectRatioWidth;              
            } else if (sides == "three") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].leftImgDimensions.width
              ) * aspectRatioHeight;
              adjWidth = parseInt(
                fabricInfo.variant[colorIndex].leftImgDimensions.height
              ) * aspectRatioWidth;              
            } else if (sides == "four") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].rightImgDimensions.width
              ) * aspectRatioHeight;
              adjWidth = parseInt(
                fabricInfo.variant[colorIndex].rightImgDimensions.height
              ) * aspectRatioWidth;              
            }


            if((parseInt(imageUploaded.height) > parseInt(imageUploaded.width)  + 500) || (parseInt(imageUploaded.width) > parseInt(imageUploaded.height) + 500)) {
              adjWidth = adjWidth - 200;
              adjHeight = adjHeight - 200;              
            }
            else {
              adjWidth = adjWidth - 40;
              adjHeight = adjHeight - 40;
            }

            let scaleX;
            if (sides == "one") {
              scaleX =
                adjWidth / parseInt(img.width);
            } else if (sides == "two") {
              scaleX =
                adjWidth / parseInt(img.width);
            } else if (sides == "three") {
              scaleX =
                adjWidth / parseInt(img.width);
            } else if (sides == "four") {
              scaleX =
                adjWidth / parseInt(img.width);
            }
            // 160 / parseInt(img.height);
            let scaleY;
            if (sides == "one") {
              scaleY =
                adjHeight / parseInt(img.height);
            } else if (sides == "two") {
              scaleY =
                adjHeight / parseInt(img.height);
            } else if (sides == "three") {
              scaleY =
                adjHeight / parseInt(img.height);
            } else if (sides == "four") {
              scaleY =
                adjHeight / parseInt(img.height);
            }
            img.set({
              scaleX: scaleX,
              scaleY: scaleY,
            });
            scale1x = scaleX;
            scale1y = scaleY;
          }
          img.setControlsVisibility({
            ml: false,
            mt: false,
            mr: false,
            mb: false,
          });
          canvasArr[no].add(img);

          let objs = canvasArr[no].getObjects();
          let diffObjs = [];
          let ins = 0;
          objs.forEach((obj, i) => {
            if (obj.type === "image" || obj.type === "i-text") {
              diffObjs[ins] = obj;
              ins++;
            }
          });
          let totalWidth = 0;
          let totalHeight = 0;

          let intersect = false;
          let intersectArr = [];
          let notIntersectArr = [];
          diffObjs.forEach((ele, ind) => {
            for (let i = 0; i < diffObjs.length; i++) {
              if (i != ind) {
                if (
                  ((diffObjs[i].left < ele.left + ele.getScaledWidth() &&
                    diffObjs[i].left >= ele.left) ||
                    (ele.left <
                      diffObjs[i].left + diffObjs[i].getScaledWidth() &&
                      ele.left >= diffObjs[i].left)) &&
                  ((diffObjs[i].top < ele.top + ele.getScaledHeight() &&
                    diffObjs[i].top >= ele.top) ||
                    (ele.top <
                      diffObjs[i].top + diffObjs[i].getScaledHeight() &&
                      ele.top >= diffObjs[i].top))
                ) {
                  intersectArr.push(ele);
                } else {
                  notIntersectArr.push(ele);
                }
              }
            }
            if (intersectArr.length > 0) {
              let minvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left < curr.left ? prev : curr;
              });
              let maxvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left + prev.getScaledWidth() >
                  curr.left + curr.getScaledWidth()
                  ? prev
                  : curr;
              });
              let minvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top < curr.top ? prev : curr;
              });
              let maxvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top + prev.getScaledHeight() >
                  curr.top + curr.getScaledHeight()
                  ? prev
                  : curr;
              });
              totalWidth =
                maxvalWidth.left +
                maxvalWidth.getScaledWidth() -
                minvalWidth.left;
              totalHeight =
                maxvalHeight.top +
                maxvalHeight.getScaledHeight() -
                minvalHeight.top;
            }
            if (notIntersectArr.length > 0) {
              notIntersectArr.forEach((element) => {
                totalWidth = totalWidth + element.getScaledWidth();
                totalHeight = totalHeight + element.getScaledHeight();
              });
            }
            if (intersectArr.length == 0 && notIntersectArr.length == 0) {
              totalWidth = totalWidth + ele.getScaledWidth();
              totalHeight = totalHeight + ele.getScaledHeight();
            }
          });

          let newHeight = 0;
          let newWidth = 0;
          canvasArr[no].getObjects().forEach((o) => {
            if (o.type === "image") {
              newHeight = o.getScaledHeight();
              newWidth = o.getScaledWidth();
              width1 = o.width;
              height1 = o.height;
              // o.lockScalingX = true;
              // o.lockScalingY = true;
            }
          });
          if (
            fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !==
            null &&
            fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !== 0
          ) {
            let heightInches = parseFloat(totalHeight) / 10;
            let widthInches = parseFloat(totalWidth) / 10;
            let lastPrice = 0;
            let totPrice = 0;
            let lastWidthInches = 0;
            let lastHeightInches = 0;
            if (sides == "one") {
              fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(heightInches) *
                        parseFloat(widthInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            } else if (sides == "two") {
              fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(widthInches) *
                        parseFloat(heightInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            } else if (sides == "three") {
              fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(widthInches) *
                        parseFloat(heightInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            } else if (sides == "four") {
              fabricInfo.variant[colorIndex].rightCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(widthInches) *
                        parseFloat(heightInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            }
            totPrice = parseInt(product.price, 10) + parseFloat(lastPrice);
            setPriceSet(parseFloat(totPrice.toFixed(2)));
            if (parseFloat(widthInches) >= 14) {
              setWidthInches(14.0);
            } else {
              setWidthInches(parseFloat(widthInches.toFixed(2)));
            }
            if (parseFloat(heightInches) >= 16) {
              setHeightInches(16.0);
            } else {
              setHeightInches(parseFloat(heightInches.toFixed(2)));
            }
            if (widthInches > maximumWidth) {
              maximumWidth = parseFloat(widthInches.toFixed(2));
            }
            if (heightInches > maximumHeight) {
              maximumHeight = parseFloat(heightInches.toFixed(2));
            }
            
            setDesignPrice(parseFloat(lastPrice.toFixed(2)));
            if (sides == "one") {
              setFrontPrice(parseFloat(lastPrice.toFixed(2)));
            }
            else if (sides == "two") {
              setBackPrice(parseFloat(lastPrice.toFixed(2)));
            }
            else if (sides == "three") {
              setLeftPrice(parseFloat(lastPrice.toFixed(2)));
            }
            else if (sides == "four") {
              setRightPrice(parseFloat(lastPrice.toFixed(2)));
            }
          }
        },
        { crossOrigin: "anonymous" }
      );
      setImage(objectUrl);
      handleClose();
      return;
    }
  }

  //function which executes when an image is uploaded
  const changeHandler = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(event.target.files[0]);

    let imageUploaded = await getUploadedFileDimensions(event.target.files[0]);
    let uploadedObj = {
      width: imageUploaded.width,
      height: imageUploaded.height
    }

    setImageDesignUploaded(uploadedObj);

    if (imageUploaded.width < 1000 && imageUploaded.height < 1000) {
      alert("please upload a higher resolution image");
      return;
    } else {
      let imageUloadedArr = [];
      if (uploadedImgsArr) {
        imageUloadedArr = uploadedImgsArr;
      }
      let base64data;
      if (window.FileReader) {
        if (
          event.target.files[0] &&
          event.target.files[0].type.match("image.*")
        ) {
          var reader = new window.FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onloadend = function () {
            base64data = reader.result;
            imageUloadedArr.push(base64data.split(",")[1]);
            setuploadedImgsArr(imageUloadedArr);
          };
        } else {
          console.log(
            "file is not present or not image type",
            event.target.files[0]
          );
        }
      } else {
        console.log("filereader not present");
      }
      let no = 0;
      if (sides == "one") {
        no = 0;
      }
      else if (sides == "two") {
        no = 1;
      }
      else if (sides == "three") {
        no = 2;
      }
      else if (sides == "four") {
        no = 3;
      }
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      fabric.Image.fromURL(
        objectUrl,
        function (img) {
          // const objs = editor?.canvas.getObjects();
          // objs?.forEach((o) => {
          //   if (o.type === "image") {
          //     editor?.canvas.remove(o);
          //   }
          // });
          let topRect = 0;
          let leftRect = 0;
          let objHeight = 0;
          let objWidth = 0;
          const obj = canvasArr[no].getObjects();
          obj?.forEach((o) => {
            if (o.type === "rect") {
              topRect = o.top;
              leftRect = o.left;
              objWidth = o.width;
              objHeight = o.height;
            }
          });
          if (aop) {
            img.objectCaching = false;
            img.globalCompositeOperation = "source-atop";
            img.opacity = 0.8;
            let scaleX;
            scaleX = parseInt(470) / parseInt(img.width);
            let scaleY = 612 / parseInt(img.height);
            img.set({
              scaleX: scaleX,
              scaleY: scaleY,
            });
            img.setControlsVisibility({
              ml: false,
              mt: false,
              mr: false,
              mb: false,
            });
          } else {
            img.top = topRect;
            img.left = leftRect;
            left1 = leftRect;
            top1 = topRect;
            // let ih = img.height;
            // let iw = img.width;
            // let width_ratio =
            //   parseInt(fabricInfo.variant[colorIndex].frontImgDimensions.width) /
            //   parseInt(iw);
            // let height_ratio =
            //   parseInt(fabricInfo.variant[colorIndex].frontImgDimensions.height) /
            //   parseInt(ih);
            // let fw = 0;
            // let fh = 0;
            // if (width_ratio > height_ratio) {
            //   fw = parseInt(iw) * width_ratio;
            //   fh = (parseInt(ih) * parseInt(fw)) / parseInt(iw);
            // } else {
            //   fh = parseInt(ih) * height_ratio;
            //   fw = (parseInt(iw) * parseInt(fh)) / parseInt(ih);
            // }
            // img.set({
            //   width: fw,
            //   height: fh,
            // });

            let aspectRatioHeight = 0;

            let aspectRatioWidth = 0;

            aspectRatioHeight = imageUploaded.height / imageUploaded.width;

            aspectRatioWidth = imageUploaded.width/ imageUploaded.height;

            let adjHeight = 0;
            let adjWidth = 0;

            if (sides == "one") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].frontImgDimensions.width) * aspectRatioHeight;
              adjWidth = parseInt(
                  fabricInfo.variant[colorIndex].frontImgDimensions.height) * aspectRatioWidth;                
            } else if (sides == "two") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].backImgDimensions.width
              ) * aspectRatioHeight;
              adjWidth = parseInt(
                fabricInfo.variant[colorIndex].backImgDimensions.height
              ) * aspectRatioWidth;              
            } else if (sides == "three") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].leftImgDimensions.width
              ) * aspectRatioHeight;
              adjWidth = parseInt(
                fabricInfo.variant[colorIndex].leftImgDimensions.height
              ) * aspectRatioWidth;              
            } else if (sides == "four") {
              adjHeight = parseInt(
                fabricInfo.variant[colorIndex].rightImgDimensions.width
              ) * aspectRatioHeight;
              adjWidth = parseInt(
                fabricInfo.variant[colorIndex].rightImgDimensions.height
              ) * aspectRatioWidth;              
            }


            if((parseInt(imageUploaded.height) > parseInt(imageUploaded.width)  + 500) || (parseInt(imageUploaded.width) > parseInt(imageUploaded.height) + 500)) {
              adjWidth = adjWidth - 200;
              adjHeight = adjHeight - 200;              
            }
            else {
              adjWidth = adjWidth - 40;
              adjHeight = adjHeight - 40;
            }

            let scaleX;
            if (sides == "one") {
              scaleX =
                adjWidth / parseInt(img.width);
            } else if (sides == "two") {
              scaleX = adjWidth / parseInt(img.width);
            } else if (sides == "three") {
              scaleX =
                adjWidth / parseInt(img.width);
            } else if (sides == "four") {
              scaleX =
                adjWidth / parseInt(img.width);
            }
            // 160 / parseInt(img.height);
            let scaleY;
            if (sides == "one") {
              scaleY =
                adjHeight / parseInt(img.height);
            } else if (sides == "two") {
              scaleY =
                adjHeight / parseInt(img.height);
            } else if (sides == "three") {
              scaleY =
                adjHeight / parseInt(img.height);
            } else if (sides == "four") {
              scaleY =
                adjHeight / parseInt(img.height);
            }
            img.set({
              scaleX: scaleX,
              scaleY: scaleY,
            });
            scale1x = scaleX;
            scale1y = scaleY;
          }
          img.setControlsVisibility({
            ml: false,
            mt: false,
            mr: false,
            mb: false,
          });
          canvasArr[no].add(img);

          let objs = canvasArr[no].getObjects();
          let diffObjs = [];
          let ins = 0;
          objs.forEach((obj, i) => {
            if (obj.type === "image" || obj.type === "i-text") {
              diffObjs[ins] = obj;
              ins++;
            }
          });
          let totalWidth = 0;
          let totalHeight = 0;

          let intersect = false;
          let intersectArr = [];
          let notIntersectArr = [];
          diffObjs.forEach((ele, ind) => {
            for (let i = 0; i < diffObjs.length; i++) {
              if (i != ind) {
                if (
                  ((diffObjs[i].left < ele.left + ele.getScaledWidth() &&
                    diffObjs[i].left >= ele.left) ||
                    (ele.left <
                      diffObjs[i].left + diffObjs[i].getScaledWidth() &&
                      ele.left >= diffObjs[i].left)) &&
                  ((diffObjs[i].top < ele.top + ele.getScaledHeight() &&
                    diffObjs[i].top >= ele.top) ||
                    (ele.top <
                      diffObjs[i].top + diffObjs[i].getScaledHeight() &&
                      ele.top >= diffObjs[i].top))
                ) {
                  intersectArr.push(ele);
                } else {
                  notIntersectArr.push(ele);
                }
              }
            }
            if (intersectArr.length > 0) {
              let minvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left < curr.left ? prev : curr;
              });
              let maxvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left + prev.getScaledWidth() >
                  curr.left + curr.getScaledWidth()
                  ? prev
                  : curr;
              });
              let minvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top < curr.top ? prev : curr;
              });
              let maxvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top + prev.getScaledHeight() >
                  curr.top + curr.getScaledHeight()
                  ? prev
                  : curr;
              });
              totalWidth =
                maxvalWidth.left +
                maxvalWidth.getScaledWidth() -
                minvalWidth.left;
              totalHeight =
                maxvalHeight.top +
                maxvalHeight.getScaledHeight() -
                minvalHeight.top;
            }
            if (notIntersectArr.length > 0) {
              notIntersectArr.forEach((element) => {
                totalWidth = totalWidth + element.getScaledWidth();
                totalHeight = totalHeight + element.getScaledHeight();
              });
            }
            if (intersectArr.length == 0 && notIntersectArr.length == 0) {
              totalWidth = totalWidth + ele.getScaledWidth();
              totalHeight = totalHeight + ele.getScaledHeight();
            }
          });

          let newHeight = 0;
          let newWidth = 0;
          canvasArr[no].getObjects().forEach((o) => {
            if (o.type === "image") {
              newHeight = o.getScaledHeight();
              newWidth = o.getScaledWidth();
              width1 = o.width;
              height1 = o.height;
              // o.lockScalingX = true;
              // o.lockScalingY = true;
            }
          });
          // console.log("left1 val is",left1);
          // console.log("top1 val is",top1);
          // console.log("scalex val is",scale1x);
          // console.log("scaley val is",scale1y);
          // console.log("width val is",width1);
          // console.log("height val is",height1);
          if (
            fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !==
            null &&
            fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !== 0
          ) {
            let heightInches = parseFloat(totalHeight) / 10;
            let widthInches = parseFloat(totalWidth) / 10;
            let lastPrice = 0;
            let totPrice = 0;
            let lastWidthInches = 0;
            let lastHeightInches = 0;
            if (sides == "one") {
              fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(heightInches) *
                        parseFloat(widthInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            } else if (sides == "two") {
              fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(widthInches) *
                        parseFloat(heightInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            } else if (sides == "three") {
              fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(widthInches) *
                        parseFloat(heightInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            } else if (sides == "four") {
              fabricInfo.variant[colorIndex].rightCanvasPricing.forEach(
                (val, ind) => {
                  if (
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth !== "" &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== 0 &&
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight !== ""
                  ) {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        (parseFloat(heightInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        (parseFloat(widthInches) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                      widthInches =
                        parseFloat(widthInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(heightInches) /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  } else {
                    if (val.width && val.width !== null) {
                      lastPrice =
                        parseFloat(widthInches) *
                        parseFloat(heightInches) *
                        parseFloat(val.garment_price);
                      lastWidthInches = val.widthInches;
                      lastHeightInches = val.heightInches;
                    }
                  }
                }
              );
            }
            totPrice = parseInt(product.price, 10) + parseFloat(lastPrice);
            setPriceSet(parseFloat(totPrice.toFixed(2)));
            if (parseFloat(widthInches) >= 14) {
              setWidthInches(14.0);
            } else {
              setWidthInches(parseFloat(widthInches.toFixed(2)));
            }
            if (parseFloat(heightInches) >= 16) {
              setHeightInches(16.0);
            } else {
              setHeightInches(parseFloat(heightInches.toFixed(2)));
            }
            if (widthInches > maximumWidth) {
              maximumWidth = parseFloat(widthInches.toFixed(2));
            }
            if (heightInches > maximumHeight) {
              maximumHeight = parseFloat(heightInches.toFixed(2));
            }
            setDesignPrice(parseFloat(lastPrice.toFixed(2)));
            if (sides == "one") {
              setFrontPrice(parseFloat(lastPrice.toFixed(2)));
            }
            else if (sides == "two") {
              setBackPrice(parseFloat(lastPrice.toFixed(2)));
            }
            else if (sides == "three") {
              setLeftPrice(parseFloat(lastPrice.toFixed(2)));
            }
            else if (sides == "four") {
              setRightPrice(parseFloat(lastPrice.toFixed(2)));
            }
          }
        },
        { crossOrigin: "anonymous" }
      );
      setImage(objectUrl);
      event.target.value = null;
      handleClose();
      forceUpdate();
      return;
    }
  };

  //when save with product is clicked
  const handleSaveWithProd = (e) => {
    if (checkLogin()) {
      let no = 0;
      let sideName = "";
      let designPrice = 0;
      if (sides == "one") {
        no = 0;
        sideName = "front";
        designPrice = frontPrice;
      }
      else if (sides == "two") {
        no = 1;
        sideName = "back";
        designPrice = backPrice;
      }
      else if (sides == "three") {
        no = 2;
        sideName = "left";
        designPrice = leftPrice;
      }
      else if (sides == "four") {
        no = 3;
        sideName = "right";
        designPrice = rightPrice;
      }
      let url = "";
      let objRect;
      let configArr = [];
      let interText = false;
      let textdesignVal = "no";
      let objs = canvasArr[no].getObjects();
      objs.forEach((o) => {
        if (o.type === "rect") {
          objRect = o.getBoundingRect();
        }
        if (o.type === "image" || o.type == "i-text") {
          let spec = {
            "width": o.getScaledWidth(),
            "height": o.getScaledHeight(),
            "left": o.left,
            "top": o.top,
            "scaleX": o.scaleX,
            "scaleY": o.scaleY
          }
          configArr.push(spec);  
        }
        if (o.type == "i-text") {
          interText = true;
        }                    
      })
      let arrImages;
      if (uploadedImgsArr) {
        arrImages = uploadedImgsArr;
      }      
      if (interText) {
        arrImages.push(imgdata.replace(/^data:image\/(png|jpg);base64,/, ""));
        textdesignVal = "yes";
      }
      var jsonData = JSON.stringify(canvasArr[no].toJSON());      
      var node = imageref.current;
      var imgdata = canvasArr[no].toDataURL({
        multiplier: 1,
        left: objRect.left,
        top: objRect.top,
        width: objRect.width,
        height: objRect.height,
      });      
      const customerId = localStorage.getItem("customerId");
      if (uploadedImgsArr) {
        domtoimage
        .toJpeg(node, { quality: 0.95, bgcolor: "white" })
        .then(function (dataUrl) {
          axios
          .post(`/fabricDesigns/addProductWithDesign`, {
            data: {
              productId: prodid,
              customerId: customerId,
              name: product.title,
              description: product.description,
              color: color,
              side: sideName,
              size: size,
              category_id: product.category_id,
              price: priceSet,
              img: dataUrl,
              design_price: designPrice,
              design_img: imgdata,
              gst: productGst,
              design_gst: designGst,
              data: jsonData,
              imgsArr: arrImages,
              savedImgsInfo: configArr,
              textDesign: textdesignVal         
            },
          })
          .then(({ data }) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Product with design saved successfully",
            });
            console.log("data saved successfully");
          })
          .catch((err) => {
            console.log(err);
          });
        })
        .catch((err) => {
          console.log("error",err);
        })
      } else {
        console.log("nothing to save");
      }
    } else {
      window.location.href = "/signin";
    }
  }

  //when clicked on save design
  const handleSave = (e) => {
    if (checkLogin()) {
      let no = 0;
      if (sides == "one") {
        no = 0;
      }
      else if (sides == "two") {
        no = 1;
      }
      else if (sides == "three") {
        no = 2;
      }
      else if (sides == "four") {
        no = 3;
      }
      let url = "";
      const customerId = localStorage.getItem("customerId");
      var jsonData = JSON.stringify(canvasArr[no].toJSON());
      if (uploadedImgsArr) {
        axios
          .post(`/fabricDesigns/addSavedDesign`, {
            data: {
              productId: prodid,
              customerId: customerId,
              imgsArr: uploadedImgsArr,
            },
          })
          .then(({ data }) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Design saved successfully",
            });
            console.log("data saved successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("nothing to save");
      }
    } else {
      window.location.href = "/signin";
    }
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

    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }

    let objs;

    objs = canvasArr[no].getObjects();

    let diffObjs = [];
    let ins = 0;
    objs.forEach((obj, i) => {
      if (obj.type === "image" || obj.type === "i-text") {
        diffObjs[ins] = obj;
        ins++;
      }
    });

    let totalWidth = 0;
    let totalHeight = 0;
    let intersect = false;
    let intersectArr = [];
    let notIntersectArr = [];
    diffObjs.forEach((ele, ind) => {
      for (let i = 0; i < diffObjs.length; i++) {
        if (i != ind) {
          if (
            ((diffObjs[i].left < ele.left + ele.getScaledWidth() &&
              diffObjs[i].left >= ele.left) ||
              (ele.left <
                diffObjs[i].left + diffObjs[i].getScaledWidth() &&
                ele.left >= diffObjs[i].left)) &&
            ((diffObjs[i].top < ele.top + ele.getScaledHeight() &&
              diffObjs[i].top >= ele.top) ||
              (ele.top <
                diffObjs[i].top + diffObjs[i].getScaledHeight() &&
                ele.top >= diffObjs[i].top))
          ) {
            intersectArr.push(ele);
          } else {
            notIntersectArr.push(ele);
          }
        }
      }
      if (intersectArr.length > 0) {
        let minvalWidth = intersectArr.reduce(function (prev, curr) {
          return prev.left < curr.left ? prev : curr;
        });
        let maxvalWidth = intersectArr.reduce(function (prev, curr) {
          return prev.left + prev.getScaledWidth() >
            curr.left + curr.getScaledWidth()
            ? prev
            : curr;
        });
        let minvalHeight = intersectArr.reduce(function (prev, curr) {
          return prev.top < curr.top ? prev : curr;
        });
        let maxvalHeight = intersectArr.reduce(function (prev, curr) {
          return prev.top + prev.getScaledHeight() >
            curr.top + curr.getScaledHeight()
            ? prev
            : curr;
        });
        totalWidth =
          maxvalWidth.left +
          maxvalWidth.getScaledWidth() -
          minvalWidth.left;
        totalHeight =
          maxvalHeight.top +
          maxvalHeight.getScaledHeight() -
          minvalHeight.top;
      }
      if (notIntersectArr.length > 0) {
        notIntersectArr.forEach((element) => {
          totalWidth = totalWidth + element.getScaledWidth();
          totalHeight = totalHeight + element.getScaledHeight();
        });
      }
      if (intersectArr.length == 0 && notIntersectArr.length == 0) {
        totalWidth = totalWidth + ele.getScaledWidth();
        totalHeight = totalHeight + ele.getScaledHeight();
      }
    });

    let widthInches = 0;
    let heightInches = 0;
    let scalePrice = 0;

    if (
      fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !==
      null &&
      fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !== 0
    ) {
      let heightInches = parseFloat(totalHeight) / 10;
      let widthInches = parseFloat(totalWidth) / 10;
      let lastPrice = 0;
      let totPrice = 0;
      let lastWidthInches = 0;
      let lastHeightInches = 0;
      if (sides == "one") {
        fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(heightInches) *
                  parseFloat(widthInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      } else if (sides == "two") {
        fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(widthInches) *
                  parseFloat(heightInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      } else if (sides == "three") {
        fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(widthInches) *
                  parseFloat(heightInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      } else if (sides == "four") {
        fabricInfo.variant[colorIndex].rightCanvasPricing.forEach(
          (val, ind) => {
            if (
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleWidth !== "" &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== 0 &&
              fabricInfo.variant[colorIndex].frontImgDimensions
                .scaleHeight !== ""
            ) {
              if (val.width && val.width !== null) {
                lastPrice =
                  (parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    )) *
                  (parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    )) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
                widthInches =
                  parseFloat(widthInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleWidth
                  );
                heightInches =
                  parseFloat(heightInches) /
                  parseFloat(
                    fabricInfo.variant[colorIndex].frontImgDimensions
                      .scaleHeight
                  );
              }
            } else {
              if (val.width && val.width !== null) {
                lastPrice =
                  parseFloat(widthInches) *
                  parseFloat(heightInches) *
                  parseFloat(val.garment_price);
                lastWidthInches = val.widthInches;
                lastHeightInches = val.heightInches;
              }
            }
          }
        );
      }
      totPrice = parseInt(product.price, 10) + parseFloat(lastPrice);
      setPriceSet(parseFloat(totPrice.toFixed(2)));
      if (parseFloat(widthInches) >= 14) {
        setWidthInches(14.0);
      } else {
        setWidthInches(parseFloat(widthInches.toFixed(2)));
      }
      if (parseFloat(heightInches) >= 16) {
        setHeightInches(16.0);
      } else {
        setHeightInches(parseFloat(heightInches.toFixed(2)));
      }
      if (widthInches > maximumWidth) {
        maximumWidth = parseFloat(widthInches.toFixed(2));
      }
      if (heightInches > maximumHeight) {
        maximumHeight = parseFloat(heightInches.toFixed(2));
      }
      setDesignPrice(parseFloat(lastPrice.toFixed(2)));
      if (sides == "one") {
        setFrontPrice(parseFloat(lastPrice.toFixed(2)));
      }
      else if (sides == "two") {
        setBackPrice(parseFloat(lastPrice.toFixed(2)));
      }
      else if (sides == "three") {
        setLeftPrice(parseFloat(lastPrice.toFixed(2)));
      }
      else if (sides == "four") {
        setRightPrice(parseFloat(lastPrice.toFixed(2)));
      }
    }
  };

  //executes when add text is clicked
  const handleAddText = (event) => {
    setAddText(true);

    // Simple example, see optional options for more configuration.

    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }

    if(canvasArr) {
      const obj = canvasArr[no].getObjects();
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
      canvasArr[no].add(text);
      canvasArr[no].bringToFront(text);
      //sets the text objext as active and enters editing
      canvasArr[no].setActiveObject(text);
      canvasArr[no].getActiveObject().enterEditing();
      canvasArr[no].renderAll();
  
  
  
      let objs = canvasArr[no].getObjects();
      let diffObjs = [];
      let ins = 0;
      objs.forEach((obj, i) => {
        if (obj.type === "image" || obj.type === "i-text") {
          diffObjs[ins] = obj;
          ins++;
        }
      });
      let totalWidth = 0;
      let totalHeight = 0;
  
      let intersect = false;
      let intersectArr = [];
      let notIntersectArr = [];
      diffObjs.forEach((ele, ind) => {
        for (let i = 0; i < diffObjs.length; i++) {
          if (i != ind) {
            if (
              ((diffObjs[i].left < ele.left + ele.getScaledWidth() &&
                diffObjs[i].left >= ele.left) ||
                (ele.left <
                  diffObjs[i].left + diffObjs[i].getScaledWidth() &&
                  ele.left >= diffObjs[i].left)) &&
              ((diffObjs[i].top < ele.top + ele.getScaledHeight() &&
                diffObjs[i].top >= ele.top) ||
                (ele.top <
                  diffObjs[i].top + diffObjs[i].getScaledHeight() &&
                  ele.top >= diffObjs[i].top))
            ) {
              intersectArr.push(ele);
            } else {
              notIntersectArr.push(ele);
            }
          }
        }
        if (intersectArr.length > 0) {
          let minvalWidth = intersectArr.reduce(function (prev, curr) {
            return prev.left < curr.left ? prev : curr;
          });
          let maxvalWidth = intersectArr.reduce(function (prev, curr) {
            return prev.left + prev.getScaledWidth() >
              curr.left + curr.getScaledWidth()
              ? prev
              : curr;
          });
          let minvalHeight = intersectArr.reduce(function (prev, curr) {
            return prev.top < curr.top ? prev : curr;
          });
          let maxvalHeight = intersectArr.reduce(function (prev, curr) {
            return prev.top + prev.getScaledHeight() >
              curr.top + curr.getScaledHeight()
              ? prev
              : curr;
          });
          totalWidth =
            maxvalWidth.left +
            maxvalWidth.getScaledWidth() -
            minvalWidth.left;
          totalHeight =
            maxvalHeight.top +
            maxvalHeight.getScaledHeight() -
            minvalHeight.top;
        }
        if (notIntersectArr.length > 0) {
          notIntersectArr.forEach((element) => {
            totalWidth = totalWidth + element.getScaledWidth();
            totalHeight = totalHeight + element.getScaledHeight();
          });
        }
        if (intersectArr.length == 0 && notIntersectArr.length == 0) {
          totalWidth = totalWidth + ele.getScaledWidth();
          totalHeight = totalHeight + ele.getScaledHeight();
        }
      });
  
      let newHeight = 0;
      let newWidth = 0;
      canvasArr[no].getObjects().forEach((o) => {
        if (o.type === "i-text") {
          newHeight = o.getScaledHeight();
          newWidth = o.getScaledWidth();
          width1 = o.width;
          height1 = o.height;
          // o.lockScalingX = true;
          // o.lockScalingY = true;
        }
      });
      if (
        fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !==
        null &&
        fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !== 0
      ) {
        let heightInches = parseFloat(totalHeight) / 10;
        let widthInches = parseFloat(totalWidth) / 10;
        let lastPrice = 0;
        let totPrice = 0;
        let lastWidthInches = 0;
        let lastHeightInches = 0;
        if (sides == "one") {
          fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(heightInches) *
                    parseFloat(widthInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        } else if (sides == "two") {
          fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(widthInches) *
                    parseFloat(heightInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        } else if (sides == "three") {
          fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(widthInches) *
                    parseFloat(heightInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        } else if (sides == "four") {
          fabricInfo.variant[colorIndex].rightCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(widthInches) *
                    parseFloat(heightInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        }
        totPrice = parseInt(product.price, 10) + parseFloat(lastPrice);
        setPriceSet(parseFloat(totPrice.toFixed(2)));
        if (parseFloat(widthInches) >= 14) {
          setWidthInches(14.0);
        } else {
          setWidthInches(parseFloat(widthInches.toFixed(2)));
        }
        if (parseFloat(heightInches) >= 16) {
          setHeightInches(16.0);
        } else {
          setHeightInches(parseFloat(heightInches.toFixed(2)));
        }
        if (widthInches > maximumWidth) {
          maximumWidth = parseFloat(widthInches.toFixed(2));
        }
        if (heightInches > maximumHeight) {
          maximumHeight = parseFloat(heightInches.toFixed(2));
        }
        setDesignPrice(parseFloat(lastPrice.toFixed(2)));
        if (sides == "one") {
          setFrontPrice(parseFloat(lastPrice.toFixed(2)));
        }
        else if (sides == "two") {
          setBackPrice(parseFloat(lastPrice.toFixed(2)));
        }
        else if (sides == "three") {
          setLeftPrice(parseFloat(lastPrice.toFixed(2)));
        }
        else if (sides == "four") {
          setRightPrice(parseFloat(lastPrice.toFixed(2)));
        }
      }
    }
  };

  //executes when the add to cart button is clicked
  const customize = (evt) => {
    evt.preventDefault();

    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }

    var customizeProduct = [];

    console.log(localStorage.getItem("customizeProduct"));

    if (localStorage.getItem("customizeProduct")) {
      customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
    }

    if (checkColorAndSize()) {
      if (checkLogin()) {
        const customerId = localStorage.getItem("customerId");
        console.log("before", customizeProduct);

        var node = imageref.current;
        const designPrice =
          parseFloat(priceSet) * productQuantity -
          parseFloat(product.price) * productQuantity;
        axios
          .get(
            `/fabricDesigns/getFabricDesign/${prodid}/${fabricInfo.variant[colorIndex].colorName}/${sides}/${customerId}`
          )
          .then((dataFabr) => {
            const visitorId = localStorage.getItem("visitorId");
            if (!visitorId) {
              let visitorIdCalc = Math.floor(Math.random() * 1000000);
              localStorage.setItem("visitorId", visitorIdCalc);
            }
            if (Object.keys(dataFabr.data).length > 0) {
              domtoimage
                .toJpeg(node, { quality: 0.95 })
                .then(function (dataUrl) {
                  // var link = document.createElement("a");
                  // link.download = "my-image-name.jpeg";
                  // link.href = dataUrl;
                  // link.click();

                  customizeProduct.push({
                    product_id: product.id,
                    size,
                    quantity: productQuantity,
                    color: {
                      color_code: colorCode,
                      color_name: color,
                      colorId,
                    },
                    link: dataUrl,
                    title: productName,
                    handling_gst: handlingGst,
                    design_gst: designGst,
                    retail_price: retailPrice,
                    gst: productGst,
                    designId: dataFabr.data.fabricData._id,
                    front_price: frontPrice,
                    back_price: backPrice,
                    left_price: leftPrice,
                    right_price: rightPrice,
                    price: product.price,
                    productImg: `https://api.theprintribe.com/${product.img}`,
                  });

                  //storing all the customized product details in local storage
                  localStorage.setItem(
                    "customizeProduct",
                    JSON.stringify(customizeProduct)
                  );

                  console.log("after", customizeProduct);

                  window.location.href = "/cart";
                });
            } else {
              domtoimage
                .toJpeg(node, { quality: 0.95, bgcolor: "white" })
                .then(function (dataUrl) {
                  // var link = document.createElement("a");
                  // link.download = "my-image-name.jpeg";
                  // link.href = dataUrl;
                  // link.click();
                  var jsonData = JSON.stringify(canvasArr[no].toJSON());
                  let objRect;
                  let configArr = [];
                  let objs = canvasArr[no].getObjects();
                  let interText = false;
                  objs.forEach((o) => {
                    if (o.type === "rect") {
                      objRect = o.getBoundingRect();
                    }
                    if (o.type === "image" || o.type == "i-text") {
                      let spec = {
                        "width": o.getScaledWidth(),
                        "height": o.getScaledHeight(),
                        "left": o.left,
                        "top": o.top,
                        "scaleX": o.scaleX,
                        "scaleY": o.scaleY
                      }
                      configArr.push(spec);
                    }
                    if (o.type == "i-text") {
                      interText = true;
                    }
                  });
                  var imgdata = canvasArr[no].toDataURL({
                    multiplier: 1,
                    left: objRect.left,
                    top: objRect.top,
                    width: objRect.width,
                    height: objRect.height,
                  });
                  if (interText) {
                    let arrImages = [];
                    if (uploadedImgsArr) {
                      arrImages = uploadedImgsArr;
                    }
                    arrImages.push(imgdata.replace(/^data:image\/(png|jpg);base64,/, ""));
                    setuploadedImgsArr(arrImages);

                    axios
                      .post(`/fabricDesigns/addDesign`, {
                        data: {
                          productId: prodid,
                          customerId: customerId,
                          color: color,
                          side: sides,
                          data: jsonData,
                          url: dataUrl,
                          imgUrl: imgdata,
                          imgsArr: arrImages,
                          savedImgsInfo: configArr,
                          textDesign: "yes"
                        },
                      })
                      .then((datasavedFabr) => {
                        customizeProduct.push({
                          product_id: product.id,
                          size,
                          quantity: productQuantity,
                          color: {
                            color_code: colorCode,
                            color_name: color,
                            colorId,
                          },
                          link: dataUrl,
                          title: productName,
                          handling_gst: handlingGst,
                          design_gst: designGst,
                          retail_price: retailPrice,
                          gst: productGst,
                          designId: datasavedFabr.data.data._id,
                          front_price: frontPrice,
                          back_price: backPrice,
                          left_price: leftPrice,
                          right_price: rightPrice,
                          price: product.price,
                          productImg: `https://api.theprintribe.com/${product.img}`,
                        });

                        //storing all the customized product details in local storage
                        localStorage.setItem(
                          "customizeProduct",
                          JSON.stringify(customizeProduct)
                        );

                        console.log("after", customizeProduct);
                        window.location.href = "/cart";
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                  else {
                    axios
                      .post(`/fabricDesigns/addDesign`, {
                        data: {
                          productId: prodid,
                          customerId: customerId,
                          color: color,
                          side: sides,
                          data: jsonData,
                          url: dataUrl,
                          imgUrl: imgdata,
                          imgsArr: uploadedImgsArr,
                          savedImgsInfo: configArr,
                          textDesign: "no"
                        },
                      })
                      .then((datasavedFabr) => {
                        customizeProduct.push({
                          product_id: product.id,
                          size,
                          quantity: productQuantity,
                          color: {
                            color_code: colorCode,
                            color_name: color,
                            colorId,
                          },
                          link: dataUrl,
                          title: productName,
                          handling_gst: handlingGst,
                          design_gst: designGst,
                          retail_price: retailPrice,
                          gst: productGst,
                          designId: datasavedFabr.data.data._id,
                          front_price: frontPrice,
                          back_price: backPrice,
                          left_price: leftPrice,
                          right_price: rightPrice,
                          price: product.price,
                          productImg: `https://api.theprintribe.com/${product.img}`,
                        });

                        //storing all the customized product details in local storage
                        localStorage.setItem(
                          "customizeProduct",
                          JSON.stringify(customizeProduct)
                        );

                        console.log("after", customizeProduct);
                        window.location.href = "/cart";
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        window.location.href = "/signin";
      }
    } else {
      Swal.fire("Error", "Please Select all the options", "error");
    }
  };

  //removes the active object
  const handleRemoveText = (event) => {
    setAddText(false);
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    canvasArr[no].remove(canvasArr[no].getActiveObject());
    setWidthInches(0);
    setHeightInches(0);
    setPriceSet(product.price);
    var items1 = localStorage.getItem("firstCanvas"+prodid);
    if(items1) {
      localStorage.removeItem("firstCanvas"+prodid);
      setFrontPrice(0);
    }
    var items2 = localStorage.getItem("secondCanvas"+prodid);
    if(items2) {
      localStorage.removeItem("secondCanvas"+prodid);
      setBackPrice(0);
    }
    var items3 = localStorage.getItem("thirdCanvas"+prodid);
    if(items3) {
      localStorage.removeItem("thirdCanvas"+prodid);
      setLeftPrice(0);
    }
    var items4 = localStorage.getItem("fourthCanvas"+prodid);
    if(items4) {
      localStorage.removeItem("fourthCanvas"+prodid);
      setRightPrice(0);
    }

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
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    const obj = canvasArr[no].getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        console.log("font value is :" + event.target.value);
        exists = true;
        o.set("fontFamily", event.target.value);
        setFontValue(event.target.value);
        canvasArr[no].bringToFront(o);
      } else if (o.type === "image") {
        canvasArr[no].sendToBack(o);
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
          width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
          height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
          top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
          left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
          height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
          top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
          left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    } else if (letter == "two") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        var Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].backImgDimensions.width,
          height: fabricInfo.variant[colorIndex].backImgDimensions.height,
          top: fabricInfo.variant[colorIndex].backImgDimensions.top,
          left: fabricInfo.variant[colorIndex].backImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].backImgDimensions.width,
          height: fabricInfo.variant[colorIndex].backImgDimensions.height,
          top: fabricInfo.variant[colorIndex].backImgDimensions.top,
          left: fabricInfo.variant[colorIndex].backImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    } else if (letter == "three") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        var Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].leftImgDimensions.width,
          height: fabricInfo.variant[colorIndex].leftImgDimensions.height,
          top: fabricInfo.variant[colorIndex].leftImgDimensions.top,
          left: fabricInfo.variant[colorIndex].leftImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].leftImgDimensions.width,
          height: fabricInfo.variant[colorIndex].leftImgDimensions.height,
          top: fabricInfo.variant[colorIndex].leftImgDimensions.top,
          left: fabricInfo.variant[colorIndex].leftImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    } else if (letter == "four") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        var Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].rightImgDimensions.width,
          height: fabricInfo.variant[colorIndex].rightImgDimensions.height,
          top: fabricInfo.variant[colorIndex].rightImgDimensions.top,
          left: fabricInfo.variant[colorIndex].rightImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
        var clipPath = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].rightImgDimensions.width,
          height: fabricInfo.variant[colorIndex].rightImgDimensions.height,
          top: fabricInfo.variant[colorIndex].rightImgDimensions.top,
          left: fabricInfo.variant[colorIndex].rightImgDimensions.left,
        });
        if (editor?.canvas) {
          editor.canvas.clipPath = clipPath;
        }
        editor?.canvas.add(Rect);
      }
    }
  };

  //executes when an image is changed
  const changeImg = async (e, letter) => {
    console.log("eeeee", e, letter)
    e.preventDefault();
    if(canvasArr) {
      console.log("canvas array elements are in change", canvasArr)
      for (let i = 0; i < canvasArr.length; i++) {
        const obj = canvasArr[i].getObjects();
        obj?.forEach((o) => {
          if(o.type == "image" || o.type == "i-text") {
            if(i==0) {
              let jsonOfFirstCan = JSON.stringify(canvasArr[0].toDatalessJSON(['selectable', '_controlsVisibility', 'scaledWidth', 'scaledHeight','scaleX', 'scaleY']));
              localStorage.setItem("firstCanvas"+prodid, jsonOfFirstCan);
            }
          }
          if(o.type == "image" || o.type == "i-text") {
            if(i==1) {
              let jsonOfSecondCan = JSON.stringify(canvasArr[1].toDatalessJSON(['selectable', '_controlsVisibility', 'scaledWidth', 'scaledHeight','scaleX', 'scaleY']));
              localStorage.setItem("secondCanvas"+prodid, jsonOfSecondCan);
            }
          }
          if(o.type == "image" || o.type == "i-text") {
            if(i==2) {
              let jsonOfThirdCan = JSON.stringify(canvasArr[2].toDatalessJSON(['selectable', '_controlsVisibility', 'scaledWidth', 'scaledHeight','scaleX', 'scaleY']));
              localStorage.setItem("thridCanvas"+prodid, jsonOfThirdCan);
            }
          }
          if(o.type == "image" || o.type == "i-text") {
            if(i==3) {
              let jsonOfFourthCan = JSON.stringify(canvasArr[3].toDatalessJSON(['selectable', '_controlsVisibility', 'scaledWidth', 'scaledHeight','scaleX', 'scaleY']));
              localStorage.setItem("fourthCanvas"+prodid, jsonOfFourthCan);
            }
          }        
        })
      }
    }
    if (letter == "one") {
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL +
        fabricInfo.variant[colorIndex].frontImgURL
      );
      // obj?.forEach((o) => {
      //   editor?.canvas.remove(o);
      // });
      setSides("one");
      //changeCanvas(letter);
    } else if (letter == "two") {
      // obj?.forEach((o) => {
      //   editor?.canvas.remove(o);
      // });
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL +
        fabricInfo.variant[colorIndex].backImgURL
      );
      setSides("two");
      //changeCanvas(letter);
    } else if (letter == "three") {
      // obj?.forEach((o) => {
      //   editor?.canvas.remove(o);
      // });
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL +
        fabricInfo.variant[colorIndex].leftImgURL
      );
      setSides("three");
      // changeCanvas(letter);
    } else if (letter == "four") {
      // obj?.forEach((o) => {
      //   editor?.canvas.remove(o);
      // });
      setMainImg(
        process.env.REACT_APP_IMAGE_BASE_URL +
        fabricInfo.variant[colorIndex].rightImgURL
      );
      setSides("four");
      // changeCanvas(letter);
    }
   await setCanvasArrEditImg();
  };

  const fontChangeHover = (event) => {
    console.log("font value is :" + event.target.value);
  };

  //executes when the size of text is changed
  const fontsizeChange = (event) => {
    var exists = false;
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    const obj = canvasArr[no].getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        console.log("font size is :" + event.target.value);
        exists = true;
        o.set("fontSize", event.target.value);
        setFontSize(event.target.value);
        canvasArr[no].bringToFront(o);
      } else if (o.type === "image") {
        canvasArr[no].sendToBack(o);
      }
    });
  };

  const alignLeft = (event) => {
    var exists = false;
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    const obj = canvasArr[no].getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        exists = true;
        o.set("textAlign", "left");
        canvasArr[no].bringToFront(o);
      } else if (o.type === "image") {
        canvasArr[no].sendToBack(o);
      }
    });
  };

  const alignCenter = (event) => {
    var exists = false;
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    const obj = canvasArr[no].getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        exists = true;
        o.set("textAlign", "center");
        canvasArr[no].bringToFront(o);
      } else if (o.type === "image") {
        canvasArr[no].sendToBack(o);
      }
    });
  };

  const alignRight = (event) => {
    var exists = false;
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    const obj = canvasArr[no].getObjects();
    obj?.forEach((o) => {
      if (o.type === "i-text") {
        exists = true;
        o.set("textAlign", "right");
        canvasArr[no].bringToFront(o);
      } else if (o.type === "image") {
        canvasArr[no].sendToBack(o);
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
    if(sizePrices) {
      if (sides == "one") {
        if(frontPrice) {
          setPreviousPrice(parseInt(frontPrice) + parseInt(product.price));
        }
        else {
          setPreviousPrice(product.price);
        }
      }
      else if (sides == "two") {
        if(backPrice) {
          setPreviousPrice(parseInt(backPrice) + parseInt(product.price));
        }
        else {
          setPreviousPrice(product.price);
        }
      }
      else if (sides == "three") {
        if(leftPrice) {
          setPreviousPrice(parseInt(leftPrice) + parseInt(product.price));
        }
        else {
          setPreviousPrice(product.price);
        }
      }
      else if (sides == "four") {
        if(rightPrice) {
          setPreviousPrice(parseInt(rightPrice) + parseInt(product.price));
        }
        else {
          setPreviousPrice(product.price);
        }
      }
      sizePrices.map((item, index) => {
        if(item.size == e.target.id) {
          if(item.price == 0) {
            if(previousPrice) {
              setPriceSet(previousPrice);              
            }
          }
          else {
            if(previousPrice) {
              let total = parseInt(previousPrice) + parseInt(item.price);
              setPriceSet(total);
            }
            else {
              let total = parseInt(priceSet) + parseInt(item.price);
              setPriceSet(total);
            }
          }
        }
      })
    }
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

  const useFabric = (onChange) => {
    const fabricRef = useRef();
    const disposeRef = useRef();
    return useCallback((node) => {
      if (node) {
        fabricRef.current = new fabric.Canvas(node);
        if (onChange) {
          disposeRef.current = onChange(fabricRef.current);
        }
      }
      else if (fabricRef.current) {
        fabricRef.current.dispose();
        if (disposeRef.current) {
          disposeRef.current();
          disposeRef.current = undefined;
        }
      }
    }, []);
  };

  const ref = useFabric((fabricCanvas) => {
    canvasAddArr[0] = fabricCanvas;

    fabricCanvas.preserveObjectStacking = true;
    fabricCanvas.controlsAboveOverlay = true;
    fabricCanvas.setHeight(612);
    fabricCanvas.setWidth(470);


    setCanvasArr(canvasAddArr);
  });

  const refTwo = useFabric((fabricCanvas) => {
    canvasAddArr[1] = fabricCanvas;

    fabricCanvas.preserveObjectStacking = true;
    fabricCanvas.controlsAboveOverlay = true;
    fabricCanvas.setHeight(612);
    fabricCanvas.setWidth(470);


    setCanvasArr(prevArray => [...prevArray, fabricCanvas]);

    console.log("canvas array is :", canvasAddArr)
  });

  useEffect(() => {
    console.log("canvas array changed", canvasArr)
    if (canvasArr) {
      let no = 0;
      if (sides == "one") {
        no = 0;
      }
      else if (sides == "two") {
        no = 1;
      }
      else if (sides == "three") {
        no = 2;
      }
      else if (sides == "four") {
        no = 3;
      }
      console.log("no is :", no);
      var Rect;
      var clipPed;
      //defining the Rectangle constraint for users designs
      if (sides == "one") {
        if (fabricInfo && Object.keys(fabricInfo).length > 0) {
          Rect = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
            height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
            top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
            left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
            selectable: false,
            strokeDashArray: [5, 2],
            stroke: "grey",
            fill: "transparent",
          });
          clipPed = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
            height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
            top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
            left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
          });
        }
      } else if (sides == "two") {
        if (fabricInfo && Object.keys(fabricInfo).length > 0) {
          Rect = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].backImgDimensions.width,
            height: fabricInfo.variant[colorIndex].backImgDimensions.height,
            top: fabricInfo.variant[colorIndex].backImgDimensions.top,
            left: fabricInfo.variant[colorIndex].backImgDimensions.left,
            selectable: false,
            strokeDashArray: [5, 2],
            stroke: "grey",
            fill: "transparent",
          });
          clipPed = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].backImgDimensions.width,
            height: fabricInfo.variant[colorIndex].backImgDimensions.height,
            top: fabricInfo.variant[colorIndex].backImgDimensions.top,
            left: fabricInfo.variant[colorIndex].backImgDimensions.left,
          });
        }
      } else if (sides == "three") {
        if (fabricInfo && Object.keys(fabricInfo).length > 0) {
          Rect = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].leftImgDimensions.width,
            height: fabricInfo.variant[colorIndex].leftImgDimensions.height,
            top: fabricInfo.variant[colorIndex].leftImgDimensions.top,
            left: fabricInfo.variant[colorIndex].leftImgDimensions.left,
            selectable: false,
            strokeDashArray: [5, 2],
            stroke: "grey",
            fill: "transparent",
          });
          clipPed = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].leftImgDimensions.width,
            height: fabricInfo.variant[colorIndex].leftImgDimensions.height,
            top: fabricInfo.variant[colorIndex].leftImgDimensions.top,
            left: fabricInfo.variant[colorIndex].leftImgDimensions.left,
          });
        }
      } else if (sides == "four") {
        if (fabricInfo && Object.keys(fabricInfo).length > 0) {
          Rect = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].rightImgDimensions.width,
            height: fabricInfo.variant[colorIndex].rightImgDimensions.height,
            top: fabricInfo.variant[colorIndex].rightImgDimensions.top,
            left: fabricInfo.variant[colorIndex].rightImgDimensions.left,
            selectable: false,
            strokeDashArray: [5, 2],
            stroke: "grey",
            fill: "transparent",
          });
          clipPed = new fabric.Rect({
            width: fabricInfo.variant[colorIndex].rightImgDimensions.width,
            height: fabricInfo.variant[colorIndex].rightImgDimensions.height,
            top: fabricInfo.variant[colorIndex].rightImgDimensions.top,
            left: fabricInfo.variant[colorIndex].rightImgDimensions.left,
          });
        }
      }
      if (!aop) {
        //if a design is moved out of the constraint it gets clipped
        canvasArr[no].clipPath = clipPed;
      }
      canvasArr[no].add(Rect);
      if (aop) {
        setMainImg(
          process.env.REACT_APP_IMAGE_BASE_URL +
          "/uploads/whiteBackgroundforAOP.png"
        );
        let urlTshirt =
          process.env.REACT_APP_IMAGE_BASE_URL +
          fabricInfo.variant[colorIndex].frontImgURL;
        var newImg = new Image();
        newImg.src = urlTshirt;
        fabric.Image.fromURL(urlTshirt, function (img) {
          img.scaleToHeight(612);
          img.scaleToWidth(417);
          img.selectable = false;
          img.hasControls = false;
          img.hasRotatingPoint = false;
          canvasArr[no].setBackgroundImage(img);
          canvasArr[no].renderAll();
          //if a design is moved out of the constraint it gets clipped
          var clipPath = new fabric.Rect({
            selectable: false,
            hasControls: false,
            hasRotatingPoint: false,
            width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
            height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
            top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
            left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
          });
          canvasArr[no].clipPath = clipPath;
        });
      }
      if (
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleWidth !== 0 &&
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleWidth !== "" &&
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleHeight !== 0 &&
        fabricInfo.variant[colorIndex].frontImgDimensions.scaleHeight !== ""
      ) {
        // maximumHeight = (
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].heightInches
        //   ) /
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].scaleHeight
        //   )
        // ).toFixed(2);
        // maximumWidth = (
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].widthInches
        //   ) /
        //   parseFloat(
        //     fabricInfo.variant[colorIndex].frontCanvasPricing[0].scaleWidth
        //   )
        // ).toFixed(2);
        maximumHeight = 0;
        maximumWidth = 0;
      } else {
        setWidthInches(
          fabricInfo.variant[colorIndex].frontCanvasPricing[0].widthInches
        );
        setHeightInches(
          fabricInfo.variant[colorIndex].frontCanvasPricing[0].heightInches
        );
      }


      const customerId = localStorage.getItem("customerId");
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      if (customerId && urlParams.has('edit')) {
        axios
          .get(
            `/fabricDesigns/getFabricDesign/${prodid}/${fabricInfo.variant[colorIndex].colorName}/${sides}/${customerId}`
          )
          .then((dataFabr) => {
            if (Object.keys(dataFabr.data).length > 0) {
              setDesignHistory(dataFabr.data.fabricData);
              fabric.Image.fromURL(
                process.env.REACT_APP_IMAGE_BASE_URL + dataFabr.data.fabricData.uploadedImgsArr[0],
                async function (img) {
                  console.log("saved data is ", dataFabr.data.fabricData.savedImgsInfo)
                  img.top = dataFabr.data.fabricData.savedImgsInfo[0].top;
                  img.left = dataFabr.data.fabricData.savedImgsInfo[0].left;
                  img.scaleX = dataFabr.data.fabricData.savedImgsInfo[0].scaleX;
                  img.scaleY = dataFabr.data.fabricData.savedImgsInfo[0].scaleY;
                  img.set({
                    scaleX: dataFabr.data.fabricData.savedImgsInfo[0].scaleX,
                    scaleY: dataFabr.data.fabricData.savedImgsInfo[0].scaleY
                  })
                  img.setControlsVisibility({
                    ml: false,
                    mt: false,
                    mr: false,
                    mb: false,
                  });
                  canvasArr[no].add(img);

                  if (localStorage.getItem("customizeProduct")) {
                    const customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
                    console.log("local storage info", customizeProduct);
                    setColor(customizeProduct[0].color.color_name);
                    setColorCode(customizeProduct[0].color.color_code);
                    setColorId(customizeProduct[0].color.colorId);
                    setSize(customizeProduct[0].size);
                    const color = document.getElementById(customizeProduct[0].size).style.backgroundColor;
                    for (var i = 0; i < product.productsizes.length; i++) {
                      document.getElementById(product.productsizes[i]).style.backgroundColor =
                        "white";
                      document.getElementById(product.productsizes[i]).style.color = "black";
                    }
                    if (color !== "black") {
                      document.getElementById(customizeProduct[0].size).style.backgroundColor = "black";
                      document.getElementById(customizeProduct[0].size).style.color = "white";
                    } else {
                      document.getElementById(customizeProduct[0].size).style.backgroundColor = "white";
                      document.getElementById(customizeProduct[0].size).style.color = "black";
                    }
                  }

                  await setEditImage();
                }
              )

              // editor?.canvas.loadFromJSON(
              //   JSON.parse(dataFabr.data.fabricData.data)
              // );
              // editor?.canvas.renderAll();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      //images moved inside the canvas
      canvasArr[no].on("object:moving", function (e) {
        if (!aop) {
          let parent;
          let objs = canvasArr[no].getObjects();
          let parentObj;
          objs.forEach((o) => {
            if (o.type === "rect") {
              parentObj = o;
            }
          });
          if (sides == "one") {
            parent = parentObj;
          } else if (sides == "two") {
            parent = parentObj;
          } else if (sides == "three") {
            parent = parentObj;
          } else if (sides == "four") {
            parent = parentObj;
          }
          // var cCoords = getCoords(parent);
          // var inBounds = inside(
          //   { x: e.target.left + 1, y: e.target.top + 1 },
          //   cCoords
          // );

          // if (inBounds) {
          //   e.target.setCoords();
          //   e.target.saveState();
          // } else {
          //   e.target.left = e.target._stateProperties.left;
          //   e.target.top = e.target._stateProperties.top;
          // }

          let movingBox = e.target;
          var top = movingBox.top;
          var bottom = top + movingBox.getScaledHeight();
          var left = movingBox.left;
          var right = left + movingBox.getScaledWidth();

          let boundingBox = parent;
          var topBound = boundingBox.top;
          var bottomBound = topBound + boundingBox.height;
          var leftBound = boundingBox.left;
          var rightBound = leftBound + boundingBox.width;
          movingBox.left = Math.min(
            Math.max(left, leftBound),
            rightBound - movingBox.getScaledWidth()
          );
          movingBox.top = Math.min(
            Math.max(top, topBound),
            bottomBound - movingBox.getScaledHeight()
          );

          objs = canvasArr[no].getObjects();

          let diffObjs = [];
          let ins = 0;
          objs.forEach((obj, i) => {
            if (obj.type === "image" || obj.type === "i-text") {
              diffObjs[ins] = obj;
              ins++;
            }
          });

          let totalWidth = 0;
          let totalHeight = 0;
          let intersect = false;
          let intersectArr = [];
          let notIntersectArr = [];
          diffObjs.forEach((ele, ind) => {
            for (let i = 0; i < diffObjs.length; i++) {
              if (i != ind) {
                if (
                  ((diffObjs[i].left < ele.left + ele.getScaledWidth() &&
                    diffObjs[i].left >= ele.left) ||
                    (ele.left <
                      diffObjs[i].left + diffObjs[i].getScaledWidth() &&
                      ele.left >= diffObjs[i].left)) &&
                  ((diffObjs[i].top < ele.top + ele.getScaledHeight() &&
                    diffObjs[i].top >= ele.top) ||
                    (ele.top <
                      diffObjs[i].top + diffObjs[i].getScaledHeight() &&
                      ele.top >= diffObjs[i].top))
                ) {
                  intersectArr.push(ele);
                } else {
                  notIntersectArr.push(ele);
                }
              }
            }
            if (intersectArr.length > 0) {
              let minvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left < curr.left ? prev : curr;
              });
              let maxvalWidth = intersectArr.reduce(function (prev, curr) {
                return prev.left + prev.getScaledWidth() >
                  curr.left + curr.getScaledWidth()
                  ? prev
                  : curr;
              });
              let minvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top < curr.top ? prev : curr;
              });
              let maxvalHeight = intersectArr.reduce(function (prev, curr) {
                return prev.top + prev.getScaledHeight() >
                  curr.top + curr.getScaledHeight()
                  ? prev
                  : curr;
              });
              totalWidth =
                maxvalWidth.left +
                maxvalWidth.getScaledWidth() -
                minvalWidth.left;
              totalHeight =
                maxvalHeight.top +
                maxvalHeight.getScaledHeight() -
                minvalHeight.top;
            }
            if (notIntersectArr.length > 0) {
              notIntersectArr.forEach((element) => {
                totalWidth = totalWidth + element.getScaledWidth();
                totalHeight = totalHeight + element.getScaledHeight();
              });
            }
            if (intersectArr.length == 0 && notIntersectArr.length == 0) {
              totalWidth = totalWidth + ele.getScaledWidth();
              totalHeight = totalHeight + ele.getScaledHeight();
            }
          });

          let widthInches = 0;
          let heightInches = 0;
          let scalePrice = 0;

          if (sides == "one") {
            fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth > val.width && totalHeight > val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          } else if (sides == "two") {
            fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth >= val.width && totalHeight >= val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          } else if (sides == "three") {
            fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth >= val.width && totalHeight >= val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          } else if (sides == "four") {
            fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
              (val, index) => {
                if (
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleWidth !== "" &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== 0 &&
                  fabricInfo.variant[colorIndex].frontImgDimensions
                    .scaleHeight !== ""
                ) {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (
                      parseFloat(totalWidth) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      ) >
                      parseFloat(val.width) &&
                      parseFloat(totalHeight) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      ) >
                      parseFloat(val.height)
                    ) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        (widthnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          )) *
                        (heightnewInches /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          )) *
                        parseFloat(val.garment_price);
                      widthInches =
                        parseFloat(totalWidth) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleWidth
                        );
                      heightInches =
                        parseFloat(totalHeight) /
                        10 /
                        parseFloat(
                          fabricInfo.variant[colorIndex].frontImgDimensions
                            .scaleHeight
                        );
                    }
                  }
                } else {
                  if (val.width && val.width !== null) {
                    if (index == 0) {
                      widthInches = totalWidth / 10;
                      heightInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(val.widthInches) *
                        parseFloat(val.heightInches) *
                        parseFloat(val.garment_price);
                    }
                    if (totalWidth >= val.width && totalHeight >= val.height) {
                      let widthnewInches = totalWidth / 10;
                      let heightnewInches = totalHeight / 10;
                      scalePrice =
                        parseFloat(widthnewInches) *
                        parseFloat(heightnewInches) *
                        parseFloat(val.garment_price);
                      widthInches = parseFloat(totalWidth) / 10;
                      heightInches = parseFloat(totalHeight) / 10;
                    }
                  }
                }
              }
            );
          }
          let totPrice = 0;
          let newHeight = heightInches;
          let newWidth = widthInches;
          if (parseFloat(newWidth) >= 14) {
            setWidthInches(14.0);
          } else {
            setWidthInches(parseFloat(newWidth.toFixed(2)));
          }
          if (parseFloat(newHeight) >= 16) {
            setHeightInches(16.0);
          } else {
            setHeightInches(parseFloat(newHeight.toFixed(2)));
          }
          if (newWidth > maximumWidth) {
            maximumWidth = parseFloat(newWidth.toFixed(2));
          }
          if (newHeight > maximumHeight) {
            maximumHeight = parseFloat(newHeight.toFixed(2));
          }
          totPrice = parseInt(product.price, 10) + parseInt(scalePrice, 10);
          setPriceSet(totPrice);
          let totalDesign = 0;
          if(frontPrice != 0 && sides != "one") {
            totalDesign = totalDesign + parseInt(frontPrice) + parseInt(scalePrice, 10);
          }
          else if(frontPrice != 0 && sides == "one") {
            totalDesign = totalDesign + parseInt(frontPrice);
          }
          if(backPrice != 0 && sides != "two") {
            totalDesign = totalDesign + parseInt(backPrice) + parseInt(scalePrice, 10);
          }
          else if(backPrice != 0 && sides == "two") {
            totalDesign = totalDesign + parseInt(backPrice);
          }
          if(leftPrice != 0 && sides != "three") {
            totalDesign = totalDesign + parseInt(leftPrice) + parseInt(scalePrice, 10);
          }
          else if(leftPrice!= 0 && sides == "three") {
            totalDesign = totalDesign + parseInt(leftPrice);
          }
          if(rightPrice != 0 && sides != "four")
          {
            totalDesign = totalDesign + parseInt(rightPrice) + parseInt(scalePrice, 10);
          }
          else if(rightPrice != 0 && sides == "four") {
            totalDesign = totalDesign + parseInt(rightPrice);
          }
          else if(frontPrice == 0 && backPrice == 0 && leftPrice == 0 && rightPrice == 0) {
            totalDesign = totalDesign + parseInt(scalePrice, 10)
          }
          setDesignPrice(parseInt(totalDesign, 10));
          if (sides == "one") {
            setFrontPrice(parseInt(scalePrice, 10));
          }
          else if (sides == "two") {
            setBackPrice(parseInt(scalePrice, 10));
          }
          else if (sides == "three") {
            setLeftPrice(parseInt(scalePrice, 10));
          }
          else if (sides == "four") {
            setRightPrice(parseInt(scalePrice, 10));
          }
        }
      });

      //images or fonts scaling inside rectangle
      canvasArr[no].on("object:scaling", (e) => {
        canvasArr[no].getActiveObjects().forEach((o) => {
          if (o.type == "image" || o.type == "i-text") {
            if (!aop) {
              let parent;
              let objs = canvasArr[no].getObjects();
              let parentObj;
              objs.forEach((o) => {
                if (o.type === "rect") {
                  parentObj = o;
                }
              });
              if (sides == "one") {
                parent = parentObj;
              } else if (sides == "two") {
                parent = parentObj;
              } else if (sides == "three") {
                parent = parentObj;
              } else if (sides == "four") {
                parent = parentObj;
              }

              var obj = e.target;
              obj.setCoords();
              var brNew = obj.getBoundingRect();


              if (
                brNew.width + brNew.left >
                parseFloat(parentObj.width) + parseFloat(parentObj.left) ||
                brNew.height + brNew.top >
                parseFloat(parentObj.height) + parseFloat(parentObj.top) ||
                brNew.left < parseFloat(parentObj.left) ||
                brNew.top < parseFloat(parentObj.top)
              ) {
                obj.left = left1;
                obj.top = top1;
                obj.scaleX = scale1x;
                obj.scaleY = scale1y;
                obj.width = width1;
                obj.height = height1;
              } else {
                left1 = obj.left;
                top1 = obj.top;
                scale1x = obj.scaleX;
                scale1y = obj.scaleY;
                width1 = obj.width;
                height1 = obj.height;
              }

              let totPrice = 0;
              let scalePrice = 0;
              let widthInches = 0;
              let heightInches = 0;
              if (sides == "one") {
                fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      let widthmulval = o.getScaledWidth() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      );
                      let heightmulval = o.getScaledHeight() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      );
                      let basePrice = widthmulval * heightmulval;

                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height) || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      let widthmulval = o.getScaledWidth() / 10;
                      let heightmulval = o.getScaledHeight() / 10;
                      let basePrice = widthmulval * heightmulval;

                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() > val.width &&
                          o.getScaledHeight() > val.height  || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              } else if (sides == "two") {
                fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      let widthmulval = o.getScaledWidth() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      );
                      let heightmulval = o.getScaledHeight() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      );
                      let basePrice = widthmulval * heightmulval;

                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height)  || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      let widthmulval = o.getScaledWidth() / 10;
                      let heightmulval = o.getScaledHeight() / 10;
                      let basePrice = widthmulval * heightmulval;

                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() >= val.width &&
                          o.getScaledHeight() >= val.height  || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              } else if (sides == "three") {
                fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      let widthmulval = o.getScaledWidth() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      );
                      let heightmulval = o.getScaledHeight() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      );
                      let basePrice = widthmulval * heightmulval;

                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height)  || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      let widthmulval = o.getScaledWidth() / 10;
                      let heightmulval = o.getScaledHeight() / 10;
                      let basePrice = widthmulval * heightmulval;
                      
                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() >= val.width &&
                          o.getScaledHeight() >= val.height  || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              } else if (sides == "four") {
                fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
                  (val, index) => {
                    if (
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth !== "" &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== 0 &&
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight !== ""
                    ) {
                      let widthmulval = o.getScaledWidth() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      );
                      let heightmulval = o.getScaledHeight() / 10 / parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      );
                      let basePrice = widthmulval * heightmulval;

                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          parseFloat(o.getScaledWidth()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleWidth
                          ) >
                          parseFloat(val.width) &&
                          parseFloat(o.getScaledHeight()) /
                          parseFloat(
                            fabricInfo.variant[colorIndex].frontImgDimensions
                              .scaleHeight
                          ) >
                          parseFloat(val.height)  || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            (widthnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleWidth
                              )) *
                            (heightnewInches /
                              parseFloat(
                                fabricInfo.variant[colorIndex]
                                  .frontImgDimensions.scaleHeight
                              )) *
                            parseFloat(val.garment_price);
                          widthInches =
                            parseFloat(o.getScaledWidth()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleWidth
                            );
                          heightInches =
                            parseFloat(o.getScaledHeight()) /
                            10 /
                            parseFloat(
                              fabricInfo.variant[colorIndex].frontImgDimensions
                                .scaleHeight
                            );
                        }
                      }
                    } else {
                      let widthmulval = o.getScaledWidth() / 10;
                      let heightmulval = o.getScaledHeight() / 10;
                      let basePrice = widthmulval * heightmulval;

                      if (val.width && val.width !== null) {
                        if (index == 0) {
                          widthInches = o.getScaledWidth() / 10;
                          heightInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(val.widthInches) *
                            parseFloat(val.heightInches) *
                            parseFloat(val.garment_price);
                        }
                        if (
                          o.getScaledWidth() >= val.width &&
                          o.getScaledHeight() >= val.height  || basePrice > 49.00
                        ) {
                          let widthnewInches = o.getScaledWidth() / 10;
                          let heightnewInches = o.getScaledHeight() / 10;
                          scalePrice =
                            parseFloat(widthnewInches) *
                            parseFloat(heightnewInches) *
                            parseFloat(val.garment_price);
                          widthInches = parseFloat(o.getScaledWidth()) / 10;
                          heightInches = parseFloat(o.getScaledHeight()) / 10;
                        }
                      }
                    }
                  }
                );
              }

              let newHeight = heightInches;
              let newWidth = widthInches;
              if (parseFloat(newWidth) >= 14) {
                setWidthInches(14.0);
              } else {
                setWidthInches(parseFloat(newWidth.toFixed(2)));
              }
              if (parseFloat(newHeight) >= 16) {
                setHeightInches(16.0);
              } else {
                setHeightInches(parseFloat(newHeight.toFixed(2)));
              }
              if (newWidth > maximumWidth) {
                maximumWidth = parseFloat(newWidth.toFixed(2));
              }
              if (newHeight > maximumHeight) {
                maximumHeight = parseFloat(newHeight.toFixed(2));
              }
              totPrice = parseInt(product.price, 10) + parseInt(scalePrice, 10);
              setPriceSet(totPrice);
              let totalDesign = 0;
              if(frontPrice != 0 && sides != "one") {
                totalDesign = totalDesign + parseInt(frontPrice) + parseInt(scalePrice, 10);
              }
              else if(frontPrice != 0 && sides == "one") {
                totalDesign = totalDesign + parseInt(frontPrice);
              }
              if(backPrice != 0 && sides != "two") {
                totalDesign = totalDesign + parseInt(backPrice) + parseInt(scalePrice, 10);
              }
              else if(backPrice != 0 && sides == "two") {
                totalDesign = totalDesign + parseInt(backPrice);
              }
              if(leftPrice != 0 && sides != "three") {
                totalDesign = totalDesign + parseInt(leftPrice) + parseInt(scalePrice, 10);
              }
              else if(leftPrice!= 0 && sides == "three") {
                totalDesign = totalDesign + parseInt(leftPrice);
              }
              if(rightPrice != 0 && sides != "four")
              {
                totalDesign = totalDesign + parseInt(rightPrice) + parseInt(scalePrice, 10);
              }
              else if(rightPrice != 0 && sides == "four") {
                totalDesign = totalDesign + parseInt(rightPrice);
              }
              else if(frontPrice == 0 && backPrice == 0 && leftPrice == 0 && rightPrice == 0) {
                totalDesign = totalDesign + parseInt(scalePrice, 10)
              }
              setDesignPrice(parseInt(totalDesign, 10));
              if (sides == "one") {
                setFrontPrice(parseInt(scalePrice, 10));
              } else if (sides == "two") {
                setBackPrice(parseInt(scalePrice, 10));
              } else if (sides == "three") {
                setLeftPrice(parseInt(scalePrice, 10));
              } else if (sides == "four") {
                setRightPrice(parseInt(scalePrice, 10));
              }
            }
          }
          // console.log("scaled height ", o.getScaledHeight());
          // console.log("scaled width ", o.getScaledWidth());
        });
      });

      canvasArr[no].on('object:modified', function(event) {
        if(event.target.type == "i-text") {
          // if(o.type == "i-text") {
          //   console.log("font size is", o.getCurrentCharFontSize().toString())
          //   if(o.getCurrentCharFontSize().toString() == "10") {
          //     console.log("changed font size to 10")
          //     setFontSize(o.getCurrentCharFontSize().toString());
          //   }
          // }          
          if (event.target) {
            event.target.fontSize *= event.target.scaleX;
            event.target.fontSize = event.target.fontSize.toFixed(0);
            event.target.scaleX = 1;
            event.target.scaleY = 1;
            event.target._clearCache();
            if(event.target.fontSize.toString() >9 && event.target.fontSize.toString() < 20) {
              setFontSize("10");
            }
            if(event.target.fontSize.toString() >19 && event.target.fontSize.toString() < 30) {
              setFontSize("20");
            }
            if(event.target.fontSize.toString() >29 && event.target.fontSize.toString() < 40) {
              setFontSize("30");
            }
            if(event.target.fontSize.toString() >39 && event.target.fontSize.toString() < 50) {
              setFontSize("40");
            }
            if(event.target.fontSize.toString() >49 && event.target.fontSize.toString() < 60) {
              setFontSize("50");
            }
            // $("textarea#add-text-value").val(event.target.text);
            // $("#text-font-size").val(event.target.fontSize);
          }
        }
      });

      if(no == 0) {
        let jsonLoad = localStorage.getItem("firstCanvas"+prodid);
        if(jsonLoad) {
          canvasArr[0].loadFromJSON(jsonLoad, function () {
            canvasArr[0].renderAll();
          });
          let parsedJSon = JSON.parse(jsonLoad)
          parsedJSon.objects.forEach((obj) => {
            if(obj.type === "image" || obj.type === "i-text") {
              left1 = obj.left;
              top1 = obj.top;
              scale1x = obj.scaleX;
              scale1y = obj.scaleY;
              width1 = obj.width;
              height1 = obj.height; 
            }
          });
          setCanvasArrEditImg();
        }
      }
      if(no == 1) {
        let jsonLoad = localStorage.getItem("secondCanvas"+prodid);
        if(jsonLoad) {
          canvasArr[1].loadFromJSON(jsonLoad, function () {
            canvasArr[1].renderAll();
          });
          let parsedJSon = JSON.parse(jsonLoad)
          parsedJSon.objects.forEach((obj) => {
            if(obj.type === "image" || obj.type === "i-text") {
              left1 = obj.left;
              top1 = obj.top;
              scale1x = obj.scaleX;
              scale1y = obj.scaleY;
              width1 = obj.width;
              height1 = obj.height; 
            }
          });
          setCanvasArrEditImg();
        }
      }
    }
  }, [canvasArr])

  //updating the price width and height after canvas load from localstorage
  const setCanvasArrEditImg = async () => {
    let no = 0;
    let jsonLoad;    
    if (sides == "one") {
      no = 0;
      jsonLoad = localStorage.getItem("firstCanvas"+prodid);
    }
    else if (sides == "two") {
      no = 1;
      jsonLoad = localStorage.getItem("secondCanvas"+prodid);
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }
    if(jsonLoad) {
      let parsedJSon = JSON.parse(jsonLoad)
      let objs = canvasArr[no].getObjects();
      let diffObjs = [];
      let ins = 0;
      parsedJSon.objects.forEach((obj, i) => {
        if (obj.type === "image" || obj.type === "i-text") {
          diffObjs[ins] = obj;
          ins++;
        }
      });
      let totalWidth = 0;
      let totalHeight = 0;
  
      let intersect = false;
      let intersectArr = [];
      let notIntersectArr = [];
      diffObjs.forEach((ele, ind) => {
        for (let i = 0; i < diffObjs.length; i++) {
          let scaledWidth = ele.width * ele.scaleX;
          let scaledHeight = ele.height * ele.scaleY;
          if (i != ind) {
            if (
              ((diffObjs[i].left < ele.left + scaledWidth &&
                diffObjs[i].left >= ele.left) ||
                (ele.left <
                  diffObjs[i].left + diffObjs[i].width * diffObjs[i].scaleX &&
                  ele.left >= diffObjs[i].left)) &&
              ((diffObjs[i].top < ele.top + scaledHeight &&
                diffObjs[i].top >= ele.top) ||
                (ele.top <
                  diffObjs[i].top + diffObjs[i].height * diffObjs[i].scaleY &&
                  ele.top >= diffObjs[i].top))
            ) {
              intersectArr.push(ele);
            } else {
              notIntersectArr.push(ele);
            }
          }
        }
        if (intersectArr.length > 0) {
          let minvalWidth = intersectArr.reduce(function (prev, curr) {
            return prev.left < curr.left ? prev : curr;
          });
          let maxvalWidth = intersectArr.reduce(function (prev, curr) {
            return prev.left + prev.width * prev.scaleX >
              curr.left + curr.width * curr.scaleX
              ? prev
              : curr;
          });
          let minvalHeight = intersectArr.reduce(function (prev, curr) {
            return prev.top < curr.top ? prev : curr;
          });
          let maxvalHeight = intersectArr.reduce(function (prev, curr) {
            return prev.top + prev.height * prev.scaleY >
              curr.top + curr.height * curr.scaleY
              ? prev
              : curr;
          });
          totalWidth =
            maxvalWidth.left +
            maxvalWidth.width * maxvalWidth.scaleX -
            minvalWidth.left;
          totalHeight =
            maxvalHeight.top +
            maxvalHeight.height * maxvalHeight.scaleY -
            minvalHeight.top;
        }
        if (notIntersectArr.length > 0) {
          notIntersectArr.forEach((element) => {
            let scaledWidth = element.width * element.scaleX;
            let scaledHeight = element.height * element.scaleY;
            totalWidth = totalWidth + scaledWidth;
            totalHeight = totalHeight + scaledHeight;
          });
        }
        if (intersectArr.length == 0 && notIntersectArr.length == 0) {
          let scaledWidth = ele.width * ele.scaleX;
          let scaledHeight = ele.height * ele.scaleY;
          totalWidth = totalWidth + scaledWidth;
          totalHeight = totalHeight + scaledHeight;
        }
      });
  
      let newHeight = 0;
      let newWidth = 0;
      parsedJSon.objects.forEach((o) => {
        if (o.type === "image" || o.type === "i-text") {
          newHeight = o.height * o.scaleY;
          newWidth = o.width * o.scaleX;
          width1 = o.width;
          height1 = o.height;
          // o.lockScalingX = true;
          // o.lockScalingY = true;
        }
      });
      if (
        fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !==
        null &&
        fabricInfo.variant[colorIndex].frontCanvasPricing[0].width !== 0
      ) {
        let heightInches = parseFloat(totalHeight) / 10;
        let widthInches = parseFloat(totalWidth) / 10;
        let lastPrice = 0;
        let totPrice = 0;
        let lastWidthInches = 0;
        let lastHeightInches = 0;
        if (sides == "one") {
          fabricInfo.variant[colorIndex].frontCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(heightInches) *
                    parseFloat(widthInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        } else if (sides == "two") {
          fabricInfo.variant[colorIndex].backCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(widthInches) *
                    parseFloat(heightInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        } else if (sides == "three") {
          fabricInfo.variant[colorIndex].leftCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(widthInches) *
                    parseFloat(heightInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        } else if (sides == "four") {
          fabricInfo.variant[colorIndex].rightCanvasPricing.forEach(
            (val, ind) => {
              if (
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleWidth !== "" &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== 0 &&
                fabricInfo.variant[colorIndex].frontImgDimensions
                  .scaleHeight !== ""
              ) {
                if (val.width && val.width !== null) {
                  lastPrice =
                    (parseFloat(heightInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleHeight
                      )) *
                    (parseFloat(widthInches) /
                      parseFloat(
                        fabricInfo.variant[colorIndex].frontImgDimensions
                          .scaleWidth
                      )) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                  widthInches =
                    parseFloat(widthInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleWidth
                    );
                  heightInches =
                    parseFloat(heightInches) /
                    parseFloat(
                      fabricInfo.variant[colorIndex].frontImgDimensions
                        .scaleHeight
                    );
                }
              } else {
                if (val.width && val.width !== null) {
                  lastPrice =
                    parseFloat(widthInches) *
                    parseFloat(heightInches) *
                    parseFloat(val.garment_price);
                  lastWidthInches = val.widthInches;
                  lastHeightInches = val.heightInches;
                }
              }
            }
          );
        }
        totPrice = parseInt(product.price, 10) + parseFloat(lastPrice);
        setPriceSet(parseFloat(totPrice.toFixed(2)));
        if (parseFloat(widthInches) >= 14) {
          setWidthInches(14.0);
        } else {
          setWidthInches(parseFloat(widthInches.toFixed(2)));
        }
        if (parseFloat(heightInches) >= 16) {
          setHeightInches(16.0);
        } else {
          setHeightInches(parseFloat(heightInches.toFixed(2)));
        }
        if (widthInches > maximumWidth) {
          maximumWidth = parseFloat(widthInches.toFixed(2));
        }
        if (heightInches > maximumHeight) {
          maximumHeight = parseFloat(heightInches.toFixed(2));
        }
        let totalDesign = 0;
        if(frontPrice != 0 && sides != "one") {
          totalDesign = totalDesign + parseInt(frontPrice) + parseInt(lastPrice, 10);
        }
        else if(frontPrice != 0 && sides == "one") {
          totalDesign = totalDesign + parseInt(frontPrice);
        }
        if(backPrice != 0 && sides != "two") {
          totalDesign = totalDesign + parseInt(backPrice) + parseInt(lastPrice, 10);
        }
        else if(backPrice != 0 && sides == "two") {
          totalDesign = totalDesign + parseInt(backPrice);
        }
        if(leftPrice != 0 && sides != "three") {
          totalDesign = totalDesign + parseInt(leftPrice) + parseInt(lastPrice, 10);
        }
        else if(leftPrice!= 0 && sides == "three") {
          totalDesign = totalDesign + parseInt(leftPrice);
        }
        if(rightPrice != 0 && sides != "four")
        {
          totalDesign = totalDesign + parseInt(rightPrice) + parseInt(lastPrice, 10);
        }
        else if(rightPrice != 0 && sides == "four") {
          totalDesign = totalDesign + parseInt(rightPrice);
        }
        if(frontPrice == 0 && backPrice == 0 && leftPrice == 0 && rightPrice == 0) {
          totalDesign = totalDesign + parseInt(lastPrice, 10)
        }
        setDesignPrice(parseFloat(totalDesign.toFixed(2)));
        if (sides == "one") {
          setFrontPrice(parseFloat(lastPrice.toFixed(2)));
        }
        else if (sides == "two") {
          setBackPrice(parseFloat(lastPrice.toFixed(2)));
        }
        else if (sides == "three") {
          setLeftPrice(parseFloat(lastPrice.toFixed(2)));
        }
        else if (sides == "four") {
          setRightPrice(parseFloat(lastPrice.toFixed(2)));
        }
      }
    }
  }

  const handleLeftAlignDesign = (e) => {
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }

    var Rect;

    if (sides == "one") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
          height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
          top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
          left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "two") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].backImgDimensions.width,
          height: fabricInfo.variant[colorIndex].backImgDimensions.height,
          top: fabricInfo.variant[colorIndex].backImgDimensions.top,
          left: fabricInfo.variant[colorIndex].backImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "three") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].leftImgDimensions.width,
          height: fabricInfo.variant[colorIndex].leftImgDimensions.height,
          top: fabricInfo.variant[colorIndex].leftImgDimensions.top,
          left: fabricInfo.variant[colorIndex].leftImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "four") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].rightImgDimensions.width,
          height: fabricInfo.variant[colorIndex].rightImgDimensions.height,
          top: fabricInfo.variant[colorIndex].rightImgDimensions.top,
          left: fabricInfo.variant[colorIndex].rightImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    }

    var object = canvasArr[no].getActiveObject();
    if(object) {
      object.set({
        left: parseInt(Rect.left) + 1 
      });
  
      object.setCoords();
      canvasArr[no].renderAll();
    }
    else {
      alert("please select a design");
    }
  }

  const handleCenterAlignDesign = (e) => {
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }

    var Rect;

    if (sides == "one") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
          height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
          top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
          left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "two") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].backImgDimensions.width,
          height: fabricInfo.variant[colorIndex].backImgDimensions.height,
          top: fabricInfo.variant[colorIndex].backImgDimensions.top,
          left: fabricInfo.variant[colorIndex].backImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "three") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].leftImgDimensions.width,
          height: fabricInfo.variant[colorIndex].leftImgDimensions.height,
          top: fabricInfo.variant[colorIndex].leftImgDimensions.top,
          left: fabricInfo.variant[colorIndex].leftImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "four") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].rightImgDimensions.width,
          height: fabricInfo.variant[colorIndex].rightImgDimensions.height,
          top: fabricInfo.variant[colorIndex].rightImgDimensions.top,
          left: fabricInfo.variant[colorIndex].rightImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    }

    var object = canvasArr[no].getActiveObject();

    if(object) {
      const rectCenter = parseInt(Rect.width) / 2;

      object.set({
        left: parseInt(rectCenter) + parseInt(Rect.left) - parseInt(object.getScaledWidth()) / 2
      });
  
      object.setCoords();
      canvasArr[no].renderAll();
    }
    else {
      alert("please select a design");
    }

  }

  const handleRightAlignDesign = (e) => {
    let no = 0;
    if (sides == "one") {
      no = 0;
    }
    else if (sides == "two") {
      no = 1;
    }
    else if (sides == "three") {
      no = 2;
    }
    else if (sides == "four") {
      no = 3;
    }

    var Rect;

    if (sides == "one") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].frontImgDimensions.width,
          height: fabricInfo.variant[colorIndex].frontImgDimensions.height,
          top: fabricInfo.variant[colorIndex].frontImgDimensions.top,
          left: fabricInfo.variant[colorIndex].frontImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "two") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].backImgDimensions.width,
          height: fabricInfo.variant[colorIndex].backImgDimensions.height,
          top: fabricInfo.variant[colorIndex].backImgDimensions.top,
          left: fabricInfo.variant[colorIndex].backImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "three") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].leftImgDimensions.width,
          height: fabricInfo.variant[colorIndex].leftImgDimensions.height,
          top: fabricInfo.variant[colorIndex].leftImgDimensions.top,
          left: fabricInfo.variant[colorIndex].leftImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    } else if (sides == "four") {
      if (fabricInfo && Object.keys(fabricInfo).length > 0) {
        Rect = new fabric.Rect({
          width: fabricInfo.variant[colorIndex].rightImgDimensions.width,
          height: fabricInfo.variant[colorIndex].rightImgDimensions.height,
          top: fabricInfo.variant[colorIndex].rightImgDimensions.top,
          left: fabricInfo.variant[colorIndex].rightImgDimensions.left,
          selectable: false,
          strokeDashArray: [5, 2],
          stroke: "grey",
          fill: "transparent",
        });
      }
    }

    var object = canvasArr[no].getActiveObject();

    if(object) {
      object.set({
        left: parseInt(Rect.width) + parseInt(Rect.left) - parseInt(object.getScaledWidth()) - 1
      });
  
      object.setCoords();
      canvasArr[no].renderAll();
    }
    else {
      alert("please select a design");
    }
  }

  document.onkeydown = function(e) {
       if(e.key == "Delete") {
        let no = 0;
        if (sides == "one") {
          no = 0;
        }
        else if (sides == "two") {
          no = 1;
        }
        else if (sides == "three") {
          no = 2;
        }
        else if (sides == "four") {
          no = 3;
        }
        var object = canvasArr[no].getActiveObject();

        if(object) {
          canvasArr[no].remove(object);
        }
        else {
          alert("please select a design to delete");
        }
       }
  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {cat && (
        <>
          {showAnother ? (
            <div
              className="col-12 mx-4 my-2 py-4"
              style={{ paddingLeft: "14%" }}
            >
              <span
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => navigate("/products")}
              >
                Products
              </span>{" "}
              /{" "}
              <span
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => navigate(`/products${catURL}`)}
              >
                {cat && cat}
              </span>{" "}
              / <span>{subCat && subCat}</span>
            </div>
          ) : (
            <div
              className="col-12 mx-4 my-2 py-4"
              style={{ paddingLeft: "14%" }}
            >
              <span
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => navigate("/products")}
              >
                Products
              </span>{" "}
              /{" "}
              <span
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => navigate(`/products${catURL}`)}
              >
                {cat && cat}
              </span>{" "}
              /{" "}
              <span
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => navigate(`/products${subCatURL}`)}
              >
                {subCat && subCat}
              </span>{" "}
              / <span>{subCatCat && subCatCat}</span>
            </div>
          )}
        </>
      )}
      {/* <div className="row mx-0">
        <div className="col-12">
          <div className={"mx-4 my-2 py-4 breadCrumbs"}>
            <a href="/products">Product catalog</a> /{" "}
            <a href="/products">Men's Clothing</a> /{product.title}
          </div>
        </div>
      </div> */}
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
                              fabricInfo.variant[colorIndex].frontImgURL;
                          } else if (index == 1) {
                            letterNumber = "two";
                            urlImg =
                              process.env.REACT_APP_IMAGE_BASE_URL +
                              fabricInfo.variant[colorIndex].backImgURL;
                          } else if (index == 2) {
                            letterNumber = "three";
                            urlImg =
                              process.env.REACT_APP_IMAGE_BASE_URL +
                              fabricInfo.variant[colorIndex].leftImgURL;
                          } else if (index == 3) {
                            letterNumber = "four";
                            urlImg =
                              process.env.REACT_APP_IMAGE_BASE_URL +
                              fabricInfo.variant[colorIndex].rightImgURL;
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
                    </div>{" "}

                  </nav>
                 {otherImages?.length&& <div style={{ position: 'relative' }} className="other-images d-flex align-items-center w-img">
                    <div style={{ position: 'absolute', left: -10, cursor: 'pointer' }} onClick={() => handlePrevious()}>
                      <BiChevronLeft />{" "}
                    </div>{" "}

                    <img
                      width={90}
                      height={100}
                      src={ process.env.REACT_APP_IMAGE_BASE_URL +otherImg}
                      onClick={() => handleChangeImage(otherImg, 'otherImage')}
                      alt=""
                    />
                    <div style={{ position: 'absolute', right: -10, cursor: 'pointer' }} onClick={() => handleNext()}>
                      <BiChevronRight />
                    </div>
                  </div>}
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
                        imgVariants.map((item, index) => {
                          let urlImg = "";
                          if (index == 0) {
                            if (sides == 'otherImage') {
                              return (
                                <img
                                  style={{ height: "612px", width: "470px" }}
                                  src={process.env.REACT_APP_IMAGE_BASE_URL +otherImg}
                                  alt=""
                                />
                              );
                            }
                            if (sides == "one") {
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[colorIndex].frontImgURL;
                              return (
                                <img
                                  style={{ height: "612px", width: "470px" }}
                                  src={urlImg}
                                  alt=""
                                />
                              );
                            } else if (sides == "two") {
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[colorIndex].backImgURL;
                              return (
                                <img
                                  style={{ height: "612px", width: "470px" }}
                                  src={urlImg}
                                  alt=""
                                />
                              );
                            } else if (sides == "three") {
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[colorIndex].leftImgURL;
                              return (
                                <img
                                  style={{ height: "612px", width: "470px" }}
                                  src={urlImg}
                                  alt=""
                                />
                              );
                            } else if (sides == "four") {
                              urlImg =
                                process.env.REACT_APP_IMAGE_BASE_URL +
                                fabricInfo.variant[colorIndex].rightImgURL;
                              return (
                                <img
                                  style={{ height: "612px", width: "470px" }}
                                  src={urlImg}
                                  alt=""
                                />
                              );
                            }
                          }
                        })
                      ) : (
                        <img
                          style={{ height: "612px", width: "470px" }}
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
                          id="canvasEle"
                          ref={designRef}
                          class={canvasStyles["canvas-container"]}
                        >
                          {fabricInfo && fabricInfo.productId !== undefined && sides === "one" ? (
                            <canvas id="canvasOne" ref={ref} width={470} height={612} className={canvasStyles.canvasSet} />
                            ) : (
                              <></>
                            )
                          }
                          {fabricInfo && fabricInfo.productId !== undefined && sides === "two" ? (
                            <canvas id="canvasTwo" ref={refTwo} width={470} height={612} className={canvasStyles.canvasSet} />                            
                            ) : (
                              <></>
                            )
                          }
                          {/* <FabricJSCanvas
                            onReady={onReady}
                            className={canvasStyles.canvasSet}
                          /> */}
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

              <div className="product__modal-content-2">
                <div className="row">

                  <Modal
                    show={show}
                    onHide={handleClose}
                    onEntered={handleEntered}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>{color}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab style={{ textAlign: "center" }} eventKey="home" title="Upload">
                          <span className={"btn btn-primary " + styles.fileUploadBtn}>
                            Browse{" "}
                            <input
                              type="file"
                              id="fileUp"
                              name="fileUp"
                              onChange={changeHandler}
                            />
                          </span>
                        </Tab>
                        <Tab eventKey="profile" title="My Designs">
                          <div class="rowImg">
                            <div class="columnImg">
                              {savedImgsArr && savedImgsArr !== undefined
                                ? savedImgsArr.map((val, key) => {
                                  return (
                                    <label>
                                      <input type="radio" name="myDesigns" value={process.env.REACT_APP_IMAGE_BASE_URL + val} checked={designSelected === process.env.REACT_APP_IMAGE_BASE_URL + val} onChange={handleMydesginChange} />
                                      <img src={process.env.REACT_APP_IMAGE_BASE_URL + val} height={100} width={100} />
                                    </label>
                                  )
                                })
                                : null
                              }
                            </div>
                          </div>
                          <div className="rowImg">
                            <div className="columnImg" style={{ textAlign: "center" }}>
                              {savedImgsArr && savedImgsArr ? (
                                <Button variant="primary" onClick={uploadSavedDesign}>Upload</Button>
                              ) : (<></>)}
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <hr />
              {/* <Button variant="primary" onClick={handleShow}>
                Other Images
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="rowImg"> 
                    <div class="columnImg">
                      <img src="/w3images/wedding.jpg" style="width:100%">
                      <img src="/w3images/rocks.jpg" style="width:100%">
                      <img src="/w3images/falls2.jpg" style="width:100%">
                      <img src="/w3images/paris.jpg" style="width:100%">
                      <img src="/w3images/nature.jpg" style="width:100%">
                      <img src="/w3images/mist.jpg" style="width:100%">
                      <img src="/w3images/paris.jpg" style="width:100%">
                    </div>
                    <div class="column">
                      <img src="/w3images/underwater.jpg" style="width:100%">
                      <img src="/w3images/ocean.jpg" style="width:100%">
                      <img src="/w3images/wedding.jpg" style="width:100%">
                      <img src="/w3images/mountainskies.jpg" style="width:100%">
                      <img src="/w3images/rocks.jpg" style="width:100%">
                      <img src="/w3images/underwater.jpg" style="width:100%">
                    </div>  
                    <div class="column">
                      <img src="/w3images/wedding.jpg" style="width:100%">
                      <img src="/w3images/rocks.jpg" style="width:100%">
                      <img src="/w3images/falls2.jpg" style="width:100%">
                      <img src="/w3images/paris.jpg" style="width:100%">
                      <img src="/w3images/nature.jpg" style="width:100%">
                      <img src="/w3images/mist.jpg" style="width:100%">
                      <img src="/w3images/paris.jpg" style="width:100%">
                    </div>
                    <div class="column">
                      <img src="/w3images/underwater.jpg" style="width:100%">
                      <img src="/w3images/ocean.jpg" style="width:100%">
                      <img src="/w3images/wedding.jpg" style="width:100%">
                      <img src="/w3images/mountainskies.jpg" style="width:100%">
                      <img src="/w3images/rocks.jpg" style="width:100%">
                      <img src="/w3images/underwater.jpg" style="width:100%">
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal> */}
              {widthInches ? (
                <div className="product__modal-content-2">
                  <div className="row">
                    <div className="col-md-6">Width(inches)</div>
                    <div className="col-md-3">{widthInches}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">Height(inches)</div>
                    <div className="col-md-3">{heightInches}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">Print Charges</div>
                    <div className="col-md-3">{designPriced}</div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {imageDesignUploaded ? (
                <div className="product__modal-content-2">
                  <div className="row">
                    <div className="col-md-6">Uploaded Image(pixels)</div>
                    <div className="col-md-3">{imageDesignUploaded.width}px x {imageDesignUploaded.height}px</div>
                  </div>
                </div>
              ) : null}
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
                  <p style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                    {product.description}
                  </p>
                </div>
                <p className="mt-3 fw-bold choosingStyle">Choose color</p>
                <div className="row">
                  <div className="d-flex mb-3">
                    {product && product.productcolors !== undefined
                      ? product.productcolors.map((item, index) => {
                        return (
                          <OverlayTrigger placement="top" overlay={renderTooltip(item)}>

                          <div
                            id={item.colorName}
                            className="mx-1 colors shadow-lg border"
                            style={{
                              height: "20px",
                              width: "20px",
                              borderRadius: "5px",
                              backgroundColor: item.colorCode,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onClick={(e) => {
                              setColorIndex(index);
                              handleColorsclick(e);
                              setColor(item.colorName);
                              setColorId(index + 1);
                              setColorCode(item.colorCode);
                              changeImg(e, sides);
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
                          </div></OverlayTrigger>
                        );
                      })
                      : null}
                  </div>
                </div>
                <p className="mt-3 fw-bold choosingStyle">Alignment</p>
                <div className="row">
                  <div className="d-flex mb-3">
                    <div className="mx-2" style={{cursor: "pointer"}}>
                      <FontAwesomeIcon onClick={handleLeftAlignDesign} icon={faAlignLeft} />
                    </div>
                    <div className="mx-2" style={{cursor: "pointer"}}>
                      <FontAwesomeIcon onClick={handleCenterAlignDesign} icon={faAlignCenter} />
                    </div>
                    <div className="mx-2" style={{cursor: "pointer"}}>
                      <FontAwesomeIcon onClick={handleRightAlignDesign} icon={faAlignRight} />
                    </div>
                  </div>
                </div>                
                <div className="d-flex mt-3 mb-3 ">
                  <div className="me-5 fw-bold choosingStyle">Choose size</div>
                  <div className="mx-5 px-5 choosingSize">
                    <a href="#" onClick={handleShowSize}>
                      Size chart
                    </a>
                  </div>
                  <Modal
                    show={showSize}
                    onHide={handleCloseSize}
                    onEntered={handleSizeEntered}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Sizes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                      >
                        <Tab eventKey="home" title="Centimeters">
                          <Table bordered hover>
                            <thead>
                              <tr>
                                <th>Size Label</th>
                                <th>Length</th>
                                <th>Chest</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cmsSizeChart && cmsSizeChart !== undefined
                                ? cmsSizeChart.map((item, index) => {
                                  return (
                                    <tr>
                                      <td>{item.size}</td>
                                      <td>{item.length}</td>
                                      <td>{item.chest}</td>
                                    </tr>
                                  );
                                })
                                : null}
                            </tbody>
                          </Table>
                        </Tab>
                        <Tab eventKey="profile" title="Inches">
                          <Table bordered hover>
                            <thead>
                              <tr>
                                <th>Size Label</th>
                                <th>Length</th>
                                <th>Chest</th>
                              </tr>
                            </thead>
                            <tbody>
                              {inchSizeChart && inchSizeChart !== undefined
                                ? inchSizeChart.map((item, index) => {
                                  return (
                                    <tr>
                                      <td>{item.size}</td>
                                      <td>{item.length}</td>
                                      <td>{item.chest}</td>
                                    </tr>
                                  );
                                })
                                : null}
                            </tbody>
                          </Table>
                        </Tab>
                      </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseSize}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
                  <div className="col-md-3">
                    {/* <span className={"btn btn-primary " + styles.fileUploadBtn}>
                      Browse{" "}
                      <input
                        type="file"
                        id="fileUp"
                        name="fileUp"
                        onChange={changeHandler}
                      />
                    </span> */}

                    <Button variant="primary" onClick={handleShow}>
                      Browse
                    </Button>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="d-flex mb-3">
                    <div className="pe-3">
                      <button
                        onClick={handleAddText}
                        className={
                          "btn" +
                          " " +
                          styles.startSellingBtn +
                          "  px-4 py-2 avenier"
                        }
                      >
                        Add Text
                      </button>
                    </div>
                    <div className="ps-3">
                      <a href="#">
                        <button
                          onClick={handleRemoveText}
                          className={
                            "btn" + " " + styles.orderNowBtn + "  px-4 py-2"
                          }
                        >
                          Remove
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                {addText ? (
                  <div
                    className="row"
                    style={{ "background-color": "LightGray" }}
                  >
                    <div className="col-md-6 mt-2">
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
                        <option value="Helvetica">Helvetica</option>
                        <option value="Arial"> Arial </option>
                        <option value="Arial Black"> Arial Black</option>
                        <option value="Verdana"> Verdana</option>
                        <option value="Tahoma"> Tahoma</option>
                        <option value="Trebuchet MS"> Trebuchet MS</option>
                        <option value="Impact"> Impact</option>
                        <option value="Gill Sans"> Gill Sans</option>
                        <option value="Times New Roman"> Times New Roman</option>
                        <option value="Georgia"> Georgia</option>
                        <option value="Palatino"> Palatino</option>
                        <option value="Baskerville"> Baskerville</option>
                        <option value="Andalé Mono"> Andalé Mono</option>
                        <option value="Courier"> Courier</option>
                        <option value="Lucida"> Lucida</option>
                        <option value="Monaco"> Monaco</option>
                        <option value="Bradley Hand"> Bradley Hand</option>
                        <option value="Brush Script MT"> Brush Script MT</option>
                        <option value="Luminari"> Luminari</option>
                        <option value="Comic Sans MS"> Comic Sans MS</option>
                      </select>
                    </div>
                    {/* <div className="col-md-6 mt-2">
                      <select
                        id="selFontSize"
                        name="selFontSize"
                        className="form-select form-select-sm selectpicker col-md-3"
                        title="font size"
                        onChange={fontsizeChange}
                        value={fontSize}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">
                          40
                        </option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                      </select>
                    </div> */}
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
                    <div className="col-md-12">
                      <div className="color-picker"></div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {/* <div className="row">
                  <div className="col-md-12">
                    <input
                      type="button"
                      className="btn btn-dark btn-sm"
                      value="Add"
                      id="sbmText"
                      name="sbmText"
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
                </div> */}
                {/* <br />
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
                </div> */}
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
                  ₹{priceSet !== 0 && priceSet}
                </p>

                <div className="d-flex mt-4 mb-4">
                  <div className="d-flex mb-3">
                    <p style={{ cursor: "pointer" }}>
                      <i className="fas fa-save"></i>
                      <u onClick={handleSave}>Save design</u>
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-4 mb-4">
                  <div className="d-flex mb-3">
                    <p style={{ cursor: "pointer" }}>
                      <i className="fas fa-save"></i>
                      <u onClick={handleSaveWithProd}>Save design with product</u>
                    </p>
                  </div>
                </div>
                {isCustomizeable ? (
                  <button
                    className={
                      "btn" +
                      " " +
                      styles.startSellingBtn +
                      "  px-4 py-2 avenier"
                    }
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
