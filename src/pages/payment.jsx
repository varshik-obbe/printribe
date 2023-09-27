import React, {  useState } from "react";
import { pay } from "../api/ccavRequestHandler";
function PaymentComponent() {
  const [orderId, setOrderId] = useState();
  const [amount, setAmount]=useState()

  const handleCheckoutClick = async(e) => {
    e.preventDefault();
    // const data = {
    //   merchant_id: "2777089",
    //   order_id: "dfg5678",
    //   currency: "INR",
    //   amount: amount,
    //   redirect_url: "http://localhost:3000",
    //   cancle_url: "http://localhost:3000",
    //   integration_type: "iframe_normal",
    //   language: "en",
    // };

    const formData = new FormData();
    formData.append("merchant_id", "2777089");
    formData.append("order_id", orderId);
    formData.append("currency", "INR");
    formData.append("amount", amount);
    formData.append("redirect_url", "http://localhost:3000");
    formData.append("cancle_url", "http://localhost:3000");
    formData.append("integration_type", "iframe_normal");
    formData.append("language", "en");
    let queryString = new URLSearchParams(formData).toString();
    console.log(queryString, "querystring");
const data = await pay(queryString)
console.log(data)
        document.querySelector("#paydiv").innerHTML = data;

    // fetch("../api/ccavRequestHandler", {
    //   method: "POST",
    //   body: queryString,
    // })
    //   .then((response) => response.text())
    //   .then((data) => {
    //     document.querySelector("#paydiv").innerHTML = data;
    //   });
  };

  // useEffect(() => {
  //   const iframe = document.querySelector("iframe#paymentFrame");

  //   iframe.addEventListener("load", function () {
  //     window.addEventListener("message", function (e) {
  //       setIframeHeight(e.data.newHeight + "px");
  //     });
  //   });
  // }, []);

  return (
    <div>
      <h1>welcome</h1>
      <input type="text" placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>

      <input type="text" placeholder="Order id" onChange={(e)=>setOrderId(e.target.value)}/>
      <div id="paydiv"></div>
      <div id="paymentDiv"></div>
      {/* <iframe
        width="482"
        height={iframeHeight}
        scrolling="No"
        frameBorder="0"
        id="paymentFrame"
        src=""
      ></iframe> */}
      <button id="checkout" onClick={handleCheckoutClick}>
        Checkout
      </button>
    </div>
  );
}

export default PaymentComponent;
