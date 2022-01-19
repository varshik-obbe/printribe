import Script from "@gumgum/react-script-tag";
import axios from "axios";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/customize.module.css";

export default class customizer extends React.Component {
  state = {
    config: {
      tokenoauth: "",
      mobileversion: false,
      cartbuttontext: "Add to cart",
      shoppingcarturl:
        "https://api.theprintribe.com/api/zakekeCustomize/cartUrl",
      // "shoppingcartcallback": {javascript function object},
      editshoppingcarturl:
        "https://api.theprintribe.com/api/zakekeCustomize/cartUrl",
      // "editshoppingcartcallback": {javascript function object},
      // "savedesigncallback": {javascript function object},
      productinfourl:
        "https://api.theprintribe.com/api/zakekeCustomize/productinfo",
      additionaldata: {
        mainProductid: "",
        customerUniqueId: "",
      },
      canSaveDesign: false,
      culture: "en-US",
      currency: "INR",
      designid: "",
      pricetaxincluded: true,
      labeltax: "hidden",
      quantity: 1,
      sides: [],
      selectedattributes: {
        color: "",
        VariantName: "",
        SideName: "Front",
        AreaName: "Front Area",
      },
    },
  };
  componentDidMount() {
    // Code for componentWillMount here
    // This code is called only one time before intial render
    axios
      .get("/zakekeCustomize/getToken")
      .then(({ data }) => {
        console.log(data);
        this.state.config.tokenoauth = data.returndata.access_token;
        console.log("data recieved:", this.state.config);
        var config = this.state.config;
        const queryParams = new URLSearchParams(window.location.search);
        const productid = queryParams.get("productid");
        const quantity = queryParams.get("quantity");
        const masterProductId = queryParams.get("masterProductId");
        const colorName = queryParams.get("color");
        const colorId = queryParams.get("colorId");
        const title = queryParams.get("title");
        console.log(productid, quantity, masterProductId, colorName);
        config.quantity = quantity;
        config.selectedattributes.VariantName = colorName;
        config.selectedattributes.color = colorId;
        config.additionaldata.customerUniqueId =
          "" + (Math.floor(Math.random() * 89999) + 100000);
        console.log("config:", config);
        config.additionaldata.mainProductid = masterProductId;
        var productJson = { id: masterProductId, name: title };
        var customizer = new window.zakekeDesigner(config, productJson);
      })
      .catch((resp) => {
        console.error(resp);
      });
  }

  render() {
    return (
      <>
        <Script
          src="https://portal.zakeke.com/scripts/config.js"
          type="text/javascript"
          onLoad={this._onMyScriptLoad}
          onError={this._onMyScriptError}
          async
        />
        <Script
          src="https://portal.zakeke.com/scripts/integration/api/customizer.js"
          type="text/javascript"
          onLoad={this._onMyScriptLoad}
          onError={this._onMyScriptError}
          async
        />
        <Header />
        <div className="container">
          <div
            id="zakeke-container"
            className={styles.zakekeContainer}
            style={{ height: "100vh", width: "100%" }}
          ></div>
        </div>

        <Footer />
      </>
    );
  }
}
