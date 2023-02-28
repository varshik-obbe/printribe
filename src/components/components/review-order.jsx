import React, { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import PaymentComp from "./payment-comp";
import axios from "axios";
import classes from "../../styles/add-product.module.css";
import { useNavigate } from "react-router-dom";
import CartItems from "./cartItems";
import Swal from "sweetalert2";
import useRazorpay from "react-razorpay";

function ReviewOrder({ handleNext,handleBack }) {
  const [mess, setMess] = React.useState(false);
  const [giftCard, setGiftCard] = React.useState(false);
  const [fulfillment, setFulfillment] = React.useState(false);
  const [filDig, setFilDig] = React.useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [total_quantity, setTotal_Quantity] = useState(0);
  const [walletAmount, setWalletAmount] = useState(0);
  const [razorPayInitData, setRazorPayInitData] = useState();
  const [totalBillingAmount, setTotalBillingAmount] = useState(0);
  const[totalRetailAmount,setTotalRetailAmount]=useState(0);
  const [designPrice,setDesignPrice] = useState([])
  var customizeProduct = JSON.parse(localStorage.getItem("customizeProduct"));
  
  const data =customizeProduct.reduce((n, {design_gst}) => n + Number(design_gst)/2, 0)
    const cgst =(Number(customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price)*Number(data))/100
    const[designGst,setDesignGst]=useState((cgst*2).toFixed(2))

  var customerShippingId = localStorage.getItem("customerShipping_id");
  var shippingType = JSON.parse(localStorage.getItem("shipping_data"));
  // var total_quantity = localStorage.getItem("total_quantity");
  var shipping_charges = JSON.parse(
    localStorage.getItem("shipping_data")
  ).shipping_charges;
  var customerId = localStorage.getItem("customerId");
  var visitor_id = localStorage.getItem("visitorId");
  var zekekeData = JSON.parse(localStorage.getItem("zekekeData"));
  var courierId = localStorage.getItem("courier_id");
  var customerEmail = localStorage.getItem("customer_email");
  var zekekeTotal = localStorage.getItem("zekekeTotal");
  var paymentRef = "";
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState();
  const [cartEmpty, setCartEmpty] = useState(
    !customizeProduct || customizeProduct.length === 0 ? true : false
  );

  const [gstArr, setGSTArr] = useState([]);
  const [sgstArr, setSGSTArr] = useState([]);
  const [cgstArr, setCGSTArr] = useState([]);
  const [igstArr, setIGSTArr] = useState([]);

  const productData = [];
  var productInfo = [];

  const Razorpay = useRazorpay();

  const apiCall = (walletAmount, totalBillingAmount) => {
    //to remove duplicate items in productInfo array
    var temp = [];

    for (var i = 0; i < productInfo.length; i++) {
      if (temp.length == 0) {
        temp.push(productInfo[i]);
      } else {
        var added = false;

        for (var j = 0; j < temp.length; j++) {
          if (
            temp[j].product_id === productInfo[i].product_id &&
            temp[j].productsize === productInfo[i].productsize &&
            temp[j].productcolor === productInfo[i].productcolor
          ) {
            added = true;
          }
        }

        if (!added) {
          temp.push(productInfo[i]);
        }
      }
    }
    //setting customizeProduct with unique elements present in temp by id,size ,color & cumulated quanitities of similar products
    productInfo = temp;

    let gst_details;
    let shipping_data = JSON.parse(localStorage.getItem("shipping_data"));

    //calculating igst ,cgst ,gst ,sgst values as per the shipping state
    let sgstPercentage;
    let sgstValue;

    let cgstPercentage;
    let cgstValue;

    let igstPercentage;
    let igstValue;

    gstArr &&
      gstArr.map((curr, itemIndex) => {
        if (
          JSON.parse(localStorage.getItem("shipping_data")).state ===
          "Karnataka"
        ) {
          sgstPercentage = sgstArr[itemIndex].percentage;
          sgstValue = (
            (sgstArr[itemIndex].percentage * getTotalPrice()) /
            100
          ).toFixed(2);

          cgstPercentage = cgstArr[itemIndex].percentage;
          cgstValue = (
            (cgstArr[itemIndex].percentage * getTotalPrice()) /
            100
          ).toFixed(2);
        } else {
          igstPercentage = igstArr[itemIndex].percentage;
          igstValue = (
            (igstArr[itemIndex].percentage * getTotalPrice()) /
            100
          ).toFixed(2);
        }
      });
   
    // console.log(sgstPercentage)
    // console.log(sgstValue)
    // console.log(cgstPercentage)
    // console.log(cgstValue)
    // console.log(igstPercentage)
    // console.log(igstValue)

    if (shipping_data.state === "Karnataka") {
      gst_details = [
        {
          gst_percent: String(sgstPercentage),
          gst_amount: String((Number(sgstPercentage)*getproductPrice())/100),
          gst_type: "sgst",
        },
        {
          gst_percent: String(cgstPercentage),
          gst_amount: String((Number(cgstPercentage)*getproductPrice())/100),
          gst_type: "cgst",
        },
      ];
    } else {
      gst_details = [
        {
          gst_percent: String(igstPercentage),
          gst_amount: String((Number(igstPercentage)*getproductPrice())/100),
          gst_type: "igst",
        },
      ];
    }

    let totalDesignPrice = 0;

    designPrice.map((curr) => {
      totalDesignPrice += curr.totalDesignPrice
    })
    console.log(totalDesignPrice)

    const payData = {
      orderData: {
        customerShipping_id: customerShippingId,
        product_info: productInfo,
        total_quantity: String(total_quantity),
        total_price: getFinalPrice(),
        shipping_charges: String(shipping_charges),
        payment_type: "cash on delivery",
        design_gst:shipping_data.state === "Karnataka"?[
          {
            gst_percent: String(customizeProduct.reduce((n, {design_gst}) => n + Number(design_gst)/2, 0)),
            gst_amount: String(Number(designGst)/2),
            gst_type: "cgst",
          },
          {
            gst_percent: String(customizeProduct.reduce((n, {design_gst}) => n + Number(design_gst)/2, 0)),
            gst_amount: String(Number(designGst)/2),
            gst_type: "sgst",
          },
        ]:[
          {
            gst_percent: String(customizeProduct.reduce((n, {design_gst}) => n + Number(design_gst)/2, 0)),
            gst_amount: String(Number(designGst)),
            gst_type: "igst",
          },
         
        ],
        payment_ref_id: "23451AAX",
        customer_email: customerEmail,
        visitor_id: visitor_id,
        courier_id: courierId,
        shipping_type:shippingType.shipping_type,
        customer_id: customerId,
        gst_details,
        design_price:totalDesignPrice.toFixed(2)
      },
    };
console.log(payData,"pydata")
    axios
      .post("https://api.theprintribe.com/api/orders/addOrder", payData, {
        "Content-Type": "application/json",
      })
      .then(({ data }) => {
        Swal.fire("Order Accepted", "Transaction complete!", "success").then(
          () => {
            setWalletAmount(
              walletAmount - totalBillingAmount > 0
                ? (walletAmount - totalBillingAmount).toFixed(2)
                : 0
            );
            window.location.href = "https://partner.theprintribe.com/";
          }
        );
      })

      .catch((err) => {
        Swal.fire("Error!", "Please Try Again", "error");
      });
  };

  const setData = () => {
    productData.forEach((curr) => {
      customizeProduct.forEach((ele) => {
        if (curr.id === ele.product_id) {
          var dataObject = {
            product_id: curr.id,
            title: curr.title,
            description: curr.description,
            price: curr.price,
            productsize: ele.size,
            productcolor: ele.color.color_name,
            product_img: `https://api.theprintribe.com/${curr.img}`,
            category_id: curr.category_id,
            quantity: String(ele.quantity),
            designID: ele.designId,
            zakeke_price: "0",
            retail_price:ele.retail_price,
            handling_gst:ele.handling_gst,
            design_gst:ele.design_gst
          };
          productInfo.push(dataObject);

          // if (productInfo.length > 0) {
          //   apiCall();
          // }
        }
      });
    });
  };

  var visitorId = JSON.parse(localStorage.getItem("visitorId"));
  const [ShippingTo, setShippingTo] = useState();
const getEstimatedDate=()=>{
  return ShippingTo?.expectedDelivery
}
  //setting cartempty state to true if cart is empty , else setting cart items & shipping data
  useEffect(() => {
    if (localStorage.getItem("customizeProduct") === null) {
      setCartEmpty(true);
    } else {
      setCartItems(JSON.parse(localStorage.getItem("customizeProduct")));
      setShippingTo(JSON.parse(localStorage.getItem("shipping_data")));
    }
  }, []);

  //cart empty prompt
  useEffect(() => {
    if (
      (!customizeProduct ||
        customizeProduct.length === 0 ||
        !customizeProduct ||
        customizeProduct.length === 0) &&
      cartEmpty
    ) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Cart Is Empty!",
        showConfirmButton: true,
      }).then(() => {
        setCartEmpty(true);
        navigate("/products");
      });
    }
  }, [cartEmpty, customizeProduct, cartItems]);

  //adding wallet amount
  useEffect(() => {
    axios
      .get(`/customerWallet/getWalletbyid/${customerId}`)
      .then(({ data }) => {
        setWalletAmount(parseFloat(data.wallet.amount).toFixed(2));
      })
      .catch((err) => console.log(err));
  }, [walletAmount, setWalletAmount]);

  const handleDeleteCartItem = (prod_id, prod_size, prod_colorCode) => {
    let temp1 = [];
    customizeProduct.forEach((curr) => {
      if (
        curr.product_id === prod_id &&
        curr.size === prod_size &&
        curr.color.color_code === prod_colorCode
      ) {
        // temp.push(curr);
      } else {
        temp1.push(curr);
      }
    });

    customizeProduct = temp1;

    localStorage.setItem("customizeProduct", JSON.stringify(customizeProduct));
    // refresh()

    if (customizeProduct.length === 0) {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("visitorId");
      localStorage.removeItem("customizeProduct");
      localStorage.removeItem("zekekeData");
      // localStorage.removeItem("subTotal");
      // localStorage.removeItem("total_quantity");
      localStorage.removeItem("zekekeTotal");
      localStorage.removeItem("shipping_charges");
      localStorage.removeItem("courier_id");
      localStorage.removeItem("customerShipping_id");

      navigate("/products");
    }

    window.location.reload();
  };

  const handleEdit = (editProduct) => {
    zekekeData.forEach((ele) => {
      customizeProduct.forEach((curr) => {
        if (
          editProduct.product_id === curr.product_id &&
          editProduct.product_id === ele.ProductId
        )
          navigate(
            `/customizer?productid=${
              curr.color.color_name + curr.product_id
            }&masterProductId=${curr.product_id}&quantity=${
              curr.quantity
            }&designId=${ele.designId}&colorId=${curr.color.colorId}&color=${
              curr.color.color_name
            }&title=${curr.title}`
          );
      });
    });
  };

  //calculating subtotal ,total_quantity & total billing amount for the cart
  useEffect(() => {
    var tempsubTotal = 0;
    var temptotal_quantity = 0;
    let design_price = []

    customizeProduct &&
      customizeProduct.forEach((curr) => {
        tempsubTotal += Number(curr.quantity) * Number(curr.price);
        temptotal_quantity += Number(curr.quantity);
        design_price.push({designPrice:Number(curr.left_price+curr.right_price+curr.front_price+curr.back_price),totalDesignPrice:Number(curr.quantity)*Number(curr.left_price+curr.right_price+curr.front_price+curr.back_price)})

        //setting gst,igst,cgst,sgst arrays
        addProduct(curr);
      });
    // setCartValue(tempsubTotal)
    setSubTotal(tempsubTotal);
    setTotal_Quantity(temptotal_quantity);
    console.log(design_price,"design_price")
    setDesignPrice(design_price)
    // setTotalBillingAmount(
    //   tempsubTotal + Number(localStorage.getItem("shipping_charges"))
    // );
    localStorage.setItem("subTotal", tempsubTotal);
    localStorage.setItem("total_quantity", temptotal_quantity);
  }, []);

  const handlePay = () => {
    console.log("====>>>>>>>>>>>>>>>>>>",customizeProduct);
    customizeProduct.forEach((prod) => {
      axios
        .get(`/products/getproduct/${prod.product_id}`)
        .then(({ data }) => {
          data.product.productdata.map((ele) => {
            productData.push(ele);
          });
          if (productData.length === customizeProduct.length) {
            setData();
          }
        })
        .catch((err) => console.log(err));
    });

    payAmount();
  };

  const deductAmount = (walletAmount, totalBillingAmount) => {
    axios
      .post(`/customerWallet/debitWallet`, {
        customer_data: {
          customer_id: customerId,
          amount: totalBillingAmount,
        },
      })
      .then(({ data }) => {
        apiCall(walletAmount, totalBillingAmount);
      });
  };

  const addAmount = (amountToBeAdded, purpose) => {
    let amount = amountToBeAdded * 100;

    let razorPayData = {
      insdata: {
        customer_id: customerId,
        currency: "INR",
        amount: amount,
      },
    };

    axios
      .post(`/customerWallet/razorPayInstantiate`, razorPayData)
      .then(({ data }) => {
        setRazorPayInitData(data.savedhistoryData);
        razorPayCheckout(
          amountToBeAdded,
          data.savedhistoryData.payment_order_id,
          purpose
        );
      })
      .catch((resp) => {
        console.log(resp);
        Swal.fire({
          title: "Error!",
          text: "Some error occurred while adding amount. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  const razorPayCheckout = (amountToBeAdded, payment_order_id, purpose) => {
    let amount = parseFloat(amountToBeAdded).toFixed(2) * 100;

    var options = {
      key: "rzp_test_aAHglk8OS8HPRk", // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: customerEmail,
      // image: "https://example.com/your_logo",
      order_id: payment_order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        paymentRef = response.razorpay_payment_id;

        let addWalletData = {
          walletData: {
            customer_id: customerId,
            currency: "INR",
            amount: parseFloat(amountToBeAdded).toFixed(2),
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          },
        };
        axios
          .post("/customerWallet/addWalletAmount", addWalletData)
          .then(({ data }) => {
            // localStorage.setItem("walletAmount")

            //only while paying
            if (purpose === "addRemainingAmount") {
              // console.log("hello")
              deductAmount(walletAmount, totalBillingAmount);
            } else {
              setWalletAmount(
                parseFloat(walletAmount).toFixed(2) +
                  parseFloat(amountToBeAdded).toFixed(2)
              );
            }
          })
          .catch((resp) => {
            Swal.fire({
              title: "Error!",
              text: "Error adding amount to wallet. Please contact support for help",
              icon: "error",
              confirmButtonText: "Close",
            }).then(() => {});
          });
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      Swal.fire({
        title: "Error!",
        text: response.error.description,
        icon: "error",
        confirmButtonText: "Close",
      });
    });
    rzp1.open();
  };

  const payAmount = () => {
    axios
      .get(`/customerWallet/getWalletbyid/${customerId}`)
      .then(({ data }) => {
        // console.log(parseFloat(data.wallet.amount.toFixed(2)));
        // console.log(parseFloat(totalBillingAmount.toFixed(2)));

        if (
          parseFloat(data?.wallet?.amount.toFixed(2)) >=
          parseFloat(totalBillingAmount.toFixed(2))
        ) {
          Swal.fire({
            title: "Pay from wallet",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Pay",
          }).then((result) => {
            if (result.isConfirmed) {
              deductAmount(data.wallet.amount, totalBillingAmount);
            }
          });
        } else {
          let remainingAmount =
            parseFloat(totalBillingAmount).toFixed(2) -
            parseFloat(data?.wallet?.amount).toFixed(2);

          Swal.fire({
            title: "Add remaining amount to wallet and pay?",
            text: "Wallet amount insufficient",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add amount and pay",
          }).then((result) => {
            if (result.isConfirmed) {
              addAmount(
                parseFloat(remainingAmount).toFixed(2),
                "addRemainingAmount"
              );
            }
          });
        }
      });
  };

  //initializing gst , igst, cgst,sgst arrays
  const getFinalPrice=()=>{
    const price =getTotalPrice()
    const data =gstArr &&
    gstArr.map((curr, itemIndex) =>{
      
        return ((cgstArr[itemIndex].percentage * getproductPrice()) /100+(sgstArr[itemIndex].percentage * getproductPrice()) /100+ price+shipping_charges).toFixed(2)
    
    })

    return data && data.length ? data[0]: 0
  }
  const addProduct = (cartItem) => {
    // console.log(cartItem)

    let cartItemGST;

    //fetching gst value of that product
    axios
      .get(
        `https://api.theprintribe.com/api/products/getproduct/${cartItem.product_id}`
      )
      .then((res) => {
        // console.log(res.data.product.productdata[0].gst)
        cartItemGST = res.data.product.productdata[0].gst;

        let tempGSTArr = gstArr;
        let tempSGSTArr = sgstArr;
        let tempIGSTArr = igstArr;
        let tempCGSTArr = cgstArr;

        // set gst
        if (tempGSTArr.length > 0) {
          let flag = false;

          tempGSTArr.forEach((item, i) => {
            let gstPercentage = Number(item.gst) / 2;

            if (item.gst == cartItemGST) {
              item.products++;

              let sgstVal =
                Math.round(
                  Number(cartItem.price) *
                    Number(cartItem.quantity) *
                    (gstPercentage / 100) *
                    100
                ) / 100;

              let igstVal =
                Math.round(
                  Number(cartItem.price) *
                    Number(cartItem.quantity) *
                    (Number(item.gst) / 100) *
                    100
                ) / 100;

              tempSGSTArr[i].value = Number(tempSGSTArr[i].value) + sgstVal;
              tempCGSTArr[i].value = Number(tempCGSTArr[i].value) + sgstVal;
              tempIGSTArr[i].value = Number(tempIGSTArr[i].value) + igstVal;

              setSGSTArr(tempSGSTArr);
              setCGSTArr(tempCGSTArr);
              setIGSTArr(tempIGSTArr);

              flag = true;
            }
          });

          if (!flag) {
            tempGSTArr.push({
              gst: cartItemGST,
              products: 1,
            });

            let gstPercentage = Number(cartItemGST) / 2;

            let sgstVal =
              Math.round(
                Number(cartItem.price) *
                  Number(cartItem.quantity) *
                  (gstPercentage / 100) *
                  100
              ) / 100;

            let igstVal =
              Math.round(
                Number(cartItem.price) *
                  Number(cartItem.quantity) *
                  (Number(cartItemGST) / 100) *
                  100
              ) / 100;

            tempSGSTArr.push({
              percentage: Number(cartItemGST) / 2,
              value: sgstVal,
            });

            tempCGSTArr.push({
              percentage: Number(cartItemGST) / 2,
              value: sgstVal,
            });

            tempIGSTArr.push({
              percentage: Number(cartItemGST),
              value: igstVal,
            });

            setGSTArr(tempGSTArr);
            setSGSTArr(tempSGSTArr);
            setCGSTArr(tempCGSTArr);
            setIGSTArr(tempIGSTArr);
          }
        } else {
          tempGSTArr.push({
            gst: cartItemGST,
            products: 1,
          });

          let gstPercentage = Number(cartItemGST) / 2;

          let sgstVal =
            Math.round(
              Number(cartItem.price) *
                Number(cartItem.quantity) *
                (gstPercentage / 100) *
                100
            ) / 100;

          let igstVal =
            Math.round(
              Number(cartItem.price) *
                Number(cartItem.quantity) *
                (Number(cartItemGST) / 100) *
                100
            ) / 100;

          tempSGSTArr.push({
            percentage: Number(cartItemGST) / 2,
            value: sgstVal,
          });

          tempCGSTArr.push({
            percentage: Number(cartItemGST) / 2,
            value: sgstVal,
          });

          tempIGSTArr.push({
            percentage: Number(cartItemGST),
            value: igstVal,
          });

          setGSTArr(tempGSTArr);
          setSGSTArr(tempSGSTArr);
          setCGSTArr(tempCGSTArr);
          setIGSTArr(tempIGSTArr);
        }

        console.log("cartItemGST", cartItemGST);
        console.log("cartItem.price", cartItem.price);
        console.log("cartItem.quantity", cartItem.quantity);
        console.log("tempGSTArr", tempGSTArr);
        console.log("tempCGSTArr", tempCGSTArr);
        console.log("tempIGSTArr", tempIGSTArr);
        console.log("tempSGSTArr", tempSGSTArr);

        getTotalValue();
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = (i) => {
    // reduce total weight
    this.totalWeight =
      Number(this.totalWeight) -
      Number(this.productsData[i].weight) *
        Number(this.productsData[i].quantity);

    // reduce total height
    this.dimensions.height =
      Number(this.dimensions.height) -
      Number(this.productsData[i].dimensions.height) *
        Number(this.productsData[i].quantity);

    // reduce total length
    if (
      Number(this.productsData[i].dimensions["length"]) ===
      Number(this.dimensions["length"])
    ) {
      let maxLength = 0;
      this.productsData.forEach((prod, j) => {
        if (Number(prod.dimensions["length"]) > maxLength && i == j) {
          maxLength = Number(prod.dimensions["length"]);
        }
      });
      this.dimensions["length"] = maxLength;
    }
    // reduce total width
    if (
      Number(this.productsData[i].dimensions["width"]) ===
      Number(this.dimensions["width"])
    ) {
      let maxWidth = 0;
      this.productsData.forEach((prod, j) => {
        if (Number(prod.dimensions["width"]) > maxWidth && i == j) {
          maxWidth = Number(prod.dimensions["width"]);
        }
      });
      this.dimensions["width"] = maxWidth;
    }

    // reduce total quantity
    this.totalQuantity =
      Number(this.totalQuantity) - Number(this.productsData[i].quantity);

    // reduce total price
    subTotal =
      Number(this.totalPrice) -
      Number(this.productsData[i].price) *
        Number(this.productsData[i].quantity);

    // reduce gst
    let index = this.form.gst.indexOf();

    this.form.gst.forEach((item, j) => {
      if (item.gst == this.productsData[i].gst) {
        index = j;
      }
    });
    if (--this.form.gst[index].products == 0) {
      console.log("index", index);
      this.$delete(this.form.gst, index);
    }
    console.log(this.form.gst);
    // reduce sgst, cgst and igst
    this.form.sgst = [];
    this.form.cgst = [];
    this.form.igst = [];
    this.form.gst.forEach((item) => {
      let gstPercentage = Number(item.gst) / 2;
      let sgstVal =
        Math.round(Number(this.totalPrice) * (gstPercentage / 100) * 100) / 100;
      let igstVal =
        Math.round(Number(this.totalPrice) * (Number(item.gst) / 100) * 100) /
        100;
      this.form.sgst.push({ percentage: gstPercentage, value: sgstVal });
      this.form.cgst.push({ percentage: gstPercentage, value: sgstVal });
      this.form.igst.push({ percentage: Number(item.gst), value: igstVal });
    });

    this.$delete(this.productsData, i);
    this.invoiceProductsTableKey++;
  };
const getTotalPrice=()=>{
  const data1 =customizeProduct.reduce((n, {design_gst}) => n + Number(design_gst), 0)
    const cgst =(Number(customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price)*Number(data1))/100
  const data =   customizeProduct &&
    customizeProduct.length !== 0 && customizeProduct.map(curr=>(curr.quantity * curr.price)+(curr.quantity *(curr.left_price+curr.right_price+curr.front_price+curr.back_price)))
    console.log(data[0],"data",cgst)
   return Number(data[0])+Number(cgst)
}
const getproductPrice=()=>{
  
  const data =   customizeProduct &&
    customizeProduct.length !== 0 && customizeProduct.map(curr=>(curr.quantity * curr.price))
   return data
}
  const getTotalValue = () => {
    let result = 0;
    let totalSgst = 0;
    let totalCgst = 0;
    let totalIgst = 0;

    let tempSGSTArr = sgstArr;
    let tempIGSTArr = igstArr;

    let shipping_data = JSON.parse(localStorage.getItem("shipping_data"));

    let tempsubTotal = 0;
    let tempSubRetail=0
    customizeProduct &&
      customizeProduct.forEach((curr) => {
        tempSubRetail+=(Number(curr.retail_price))
        tempsubTotal += (Number(curr.quantity) * Number(curr.price)) + (Number(curr.quantity) * Number(curr.left_price+curr.right_price+curr.front_price+curr.back_price));
      });

      localStorage.setItem("subTotal",tempsubTotal);
      
    if (shipping_data.state === "Karnataka") {
      tempSGSTArr.forEach((item) => {
        totalSgst += Number(item.value);
      });

      totalCgst = totalSgst;

      result =
        Math.round(
          (Number(tempsubTotal) +
            Number(shipping_data.shipping_charges) +
            totalCgst +
            totalSgst) *
            100
        ) / 100;
    } else {
      tempIGSTArr.forEach((item) => {
        totalIgst += Number(item.value);
      });

      // console.log(totalIgst);

      // console.log(tempsubTotal);
      // console.log(shipping_data.shipping_charges);

      result =
        Math.round(
          (Number(tempsubTotal) +
            Number(shipping_data.shipping_charges) +
            totalIgst) *
            100
        ) / 100;
    }

    console.log("result", tempSubRetail);
    setTotalRetailAmount(tempSubRetail)
    const a=(
      (sgstArr[0].percentage * getTotalPrice()) /
      100
    ).toFixed(2)
    setTotalBillingAmount(tempsubTotal+Number(designGst)+shipping_data.shipping_charges+a*2);
  };
  const getDesignCGST=()=>{
    const data =customizeProduct.reduce((n, {design_gst}) => n + Number(design_gst)/2, 0)
    console.log(data,"==================.........")
    const cgst =(Number(customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price)*Number(data))/100

    return cgst.toFixed(2)
  }
  const getDesignSGST=()=>{
    const data =customizeProduct.reduce((n, {design_gst}) => n + Number(design_gst)/2, 0)
    const cgst =(Number(customizeProduct[0].left_price+customizeProduct[0].right_price+customizeProduct[0].front_price+customizeProduct[0].back_price)*Number(data))/100

    return cgst.toFixed(2)
  }

  return (
    <>
      <React.Fragment>
        <div
          class="w-100"
          style={{
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "8px",
            background: "#FFF",
          }}
        >
          <div class="mb-3">
            <b class="fs-4 px-0">Order Items</b>
            <button
              style={{
                background: "transparent",
                border: "0",
                color: "blue",
                padding: "0",
                marginLeft: "15px",
              }}
            >
              Edit
            </button>
          </div>
          <div class="">
            {customizeProduct &&
              customizeProduct.length !== 0 &&
              customizeProduct.map(
                (curr, index) =>
                  !cartEmpty && (
                    <CartItems
                      cartProduct={curr}
                      customizeProduct={customizeProduct}
                      cartItems={customizeProduct}
                      handleDeleteCartItem={handleDeleteCartItem}
                      handleEdit={handleEdit}
                      DesignPrice={designPrice}
                    />
                  )
              )}
            <div
              class="col-12 px-0 d-flex justify-content-center align-content-center"
              style={{ height: "50px" }}
            >
              <button
                class="btn btn-secondary"
                style={{
                  height: "40px",
                  backgroundColor: "#EE3C2F",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                }}
                onClick={() => navigate("/products")}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
        <div
          class="w-100 mt-4"
          style={{
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "8px",
            background: "#FFFFFF",
          }}
        >
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={mess}
                id="flexCheckChecked"
                onClick={() => setMess(!mess)}
              />
              <label class="form-check-label" for="flexCheckChecked">
                Include a personalized message
              </label>
            </div>
          </div>
          {mess && (
            <React.Fragment>
              <div class="col-12 mt-4">
                <label for="basic-url" class="form-label mb-2">
                  <b>Subject (optional)</b>
                </label>
                <div class="input-group mb-2">
                  <input
                    type="email"
                    class="form-control"
                    style={{ maxWidth: "400px" }}
                  />
                </div>
              </div>
              <div class="col-12 mt-4">
                <label for="basic-url" class="form-label mb-2">
                  <b>Message (optional)</b>
                </label>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    style={{
                      maxWidth: "600px",
                      padding: "10px",
                      height: "auto",
                    }}
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
        <div
          class="w-100 mt-4"
          style={{
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "8px",
            background: "#FFFFFF",
          }}
        >
          <b class="fs-4">Shipping</b>
          <div class="row mt-4">
            <div class="col-12 col-md-4 d-flex flex-column">
              <b class="fs-6">Shipping From</b>
              <span class="mt-2">India</span>
            </div>
            <div
              className={[
                "col-12 col-md-4 d-flex flex-column",
                classes.shippingGrid2,
              ].join(" ")}
            >
              <div class="mb-2">
                <b class="fs-6">Shipping to</b>
                <button
                  style={{
                    background: "transparent",
                    border: "0",
                    color: "blue",
                  }}
                  onClick={() => handleBack()}
                >
                  Edit
                </button>
              </div>
              <span class="">{ShippingTo && ShippingTo.fullname}</span>
              <span class="">{ShippingTo && ShippingTo.address1}</span>
              <span class="">{ShippingTo && ShippingTo.address2}</span>
              <span class="">{ShippingTo && ShippingTo.city}</span>
              <span class="">{ShippingTo && ShippingTo.zip_code}</span>
              <span class="">{ShippingTo && ShippingTo.country}</span>
            </div>
            <div
              class={[
                "col-12 col-md-4 d-flex flex-column",
                classes.shippingGrid2,
              ].join(" ")}
            >
              <div class="mb-2">
                <b class="fs-6">Shipping Method</b>
                <button
                  style={{
                    background: "transparent",
                    border: "0",
                    color: "blue",
                  }}
                >
                  Edit
                </button>
              </div>
              <span class="text-break">
                Flat Rate (Estimated delivery: {getEstimatedDate()} days)
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-100 mt-4"
          style={{
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "8px",
            background: "#FFFFFF",
          }}
        >
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={mess}
                id="flexCheckChecked"
                onClick={() => setGiftCard(!giftCard)}
              />
              <label class="form-check-label" for="flexCheckChecked">
                Apply a discount or gift card code to your order
              </label>
            </div>
          </div>
          {giftCard && (
            <React.Fragment>
              <div class="col-12 mt-4">
                <label for="basic-url" class="form-label mb-2">
                  <b>Discount or gift card code</b>
                </label>
                <div class="input-group mb-2">
                  <input
                    type="email"
                    class="form-control"
                    style={{ maxWidth: "400px" }}
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
        <React.Fragment>
          <PaymentComp addAmount={addAmount} walletAmount={walletAmount} />
        </React.Fragment>
        <div
          class="w-100 mt-4"
          style={{
            padding: "30px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "8px",
            background: "#FFFFFF",
          }}
        >
          <div class="d-flex justify-content-center align-items-center">
            <div style={{ width: "350px" }}>
              <div class="row">
                <div class="col-12">
                  <b class="fs-5">Order breakdown</b>
                </div>
                <div class="col-12 mt-3">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          onClick={() => setFulfillment(!fulfillment)}
                          style={{ height: "40px" }}
                        >
                          Fulfillment
                        </button>
                      </h2>
                      <div
                        class={
                          fulfillment
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse hide"
                        }
                        style={{ padding: "20px", color: "#000" }}
                      >
                        <b class="fs-6">Fulfilled in India</b>
                        <div class="d-flex justify-content-between mt-2 ms-3">
                          <span>Products and fulfillment</span>
                          <b></b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-3">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          onClick={() => setFilDig(!filDig)}
                          style={{ height: "40px" }}
                        >
                          File digitization
                        </button>
                      </h2>
                      <div
                        class={
                          filDig
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse hide"
                        }
                        style={{ padding: "20px" }}
                      >
                        <div class="d-flex justify-content-between">
                          <span>
                            {total_quantity > 1
                              ? `Subtotal (${total_quantity} items)`
                              : `Subtotal (${total_quantity} item)`}
                          </span>
                          <b>{`₹${zekekeTotal}`}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-3" style={{ height: "1px", width: "100%" }} />

                <div class="col-12 d-flex  mt-4 justify-content-between">
                  <b class="fs-4">Product Price</b>
                  <b class="fs-4">{`₹${getproductPrice()}`}</b>
                </div>
                <hr class="my-3" style={{ height: "1px", width: "100%" }} />

                {gstArr &&
                  gstArr.map((curr, itemIndex) =>
                    JSON.parse(localStorage.getItem("shipping_data")).state ===
                    "Karnataka" ? (
                      <>
                        <div class="col-12 mt-3 d-flex justify-content-between">
                          <b>{`SGST (${sgstArr[itemIndex].percentage}%)`}</b>
                          <b>{`₹${(
                            (sgstArr[itemIndex].percentage * getproductPrice()) /
                            100
                          ).toFixed(2)}`}</b>
                        </div>
                        <div class="col-12 mt-3 d-flex justify-content-between">
                          <b>{`CGST (${cgstArr[itemIndex].percentage}%)`}</b>
                          <b>{`₹${(
                            (cgstArr[itemIndex].percentage * getproductPrice()) /
                            100
                          ).toFixed(2)}`}</b>
                        </div>
                      </>
                    ) : (
                      <div class="col-12 mt-3 d-flex justify-content-between">
                        <b>{`Shipping IGST (${igstArr[itemIndex].percentage}%)`}</b>
                        <b>{`₹${(
                          (igstArr[itemIndex].percentage * getproductPrice()) /
                          100
                        ).toFixed(2)}`}</b>
                      </div>
                    )
                  )}
                <div class="col-12 d-flex  mt-4 justify-content-between">
                  <b class="fs-4">Design Price</b>
                  <b class="fs-4">{`₹${designPrice[0]?.designPrice}`}</b>
                </div>
             {   shippingType.state ===
                    "Karnataka" ?<>
                      <div class="col-12 mt-3 d-flex justify-content-between">
                  <b >Design CGST</b>
                  <b >{`₹${getDesignCGST()}`}</b>
                </div>
                <div class="col-12 mt-3 d-flex justify-content-between">
                  <b >Design SGST</b>
                  <b >{`₹${getDesignSGST()}`}</b>
                </div></> :
               
                <div class="col-12 mt-3 d-flex justify-content-between">
                  <b >Design IGST</b>
                  <b >{`₹${2*getDesignSGST()}`}</b>
                </div>}
              
                <hr class="my-3" style={{ height: "1px", width: "100%" }} />

                <div class="col-12 mt-3 d-flex justify-content-between">
                  <b class="fs-4">Shipping Price</b>
                  <b class="fs-4">{`₹${shipping_charges}`}</b>
                </div>
                
                <hr class="my-3" style={{ height: "1px", width: "100%" }} />
                <div class="col-12 d-flex justify-content-between">
                  <b class="fs-4">Total</b>
                  <b class="fs-4">{`₹${getFinalPrice()}`}</b>
                </div>
                <div class="col-12 mt-3 d-flex justify-content-between">
                  <b >Retail</b>
                  <b >{`₹${totalRetailAmount}`}</b>
                </div>
                <div class="col-12 mt-3 d-flex justify-content-between">
                  <b >{(totalRetailAmount-getFinalPrice()).toFixed(2)<0?"Loss":"profit"}</b>
                  <b >{`₹${(totalRetailAmount-getFinalPrice()).toFixed(2)}`}</b>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-center mt-5 mb-3">
                <button
                  class="btn btn-lg btn-danger w-100"
                  onClick={() => {
                    // handleNext();
                    handlePay();
                  }}
                >
                  Pay Securely Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default ReviewOrder;
