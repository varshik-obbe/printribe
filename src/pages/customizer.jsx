import Footer from '../components/footer';
import Header from '../components/header';
import React from 'react'
import Script from '@gumgum/react-script-tag';
import axios from 'axios'
import styles from "../styles/customize.module.css"

export default class customizer extends React.Component {
    state = {
        config: {
            "tokenoauth": "",
            "mobileversion": false,
            "cartbuttontext": "Add to cart",
            "shoppingcarturl": "https://api.theprintribe.com/api/zakekeCustomize/cartUrl",
            // "shoppingcartcallback": {javascript function object},
            "editshoppingcarturl": "https://api.theprintribe.com/api/zakekeCustomize/cartUrl",
            // "editshoppingcartcallback": {javascript function object},
            // "savedesigncallback": {javascript function object},
            "productinfourl": "https://api.theprintribe.com/api/zakekeCustomize/productinfo",
            "additionaldata": {
                "mainProductid": "61e1a843536bb33f542ec69d",
                "customerUniqueId": "2131412"
            },
            "canSaveDesign": false,
            "culture": "en-US",
            "currency": "INR",
            "designid": "",
            "pricetaxincluded": true,
            "labeltax": "hidden",
            "quantity": 1,
            "sides": ['Front', 'Back'],
            "selectedattributes": {
                "color": "1",
                "VariantName": "Red",
                "SideName": "Front",
                "AreaName": "Front Area"
            }
        }
    };
    componentDidMount() {
        // Code for componentWillMount here
        // This code is called only one time before intial render
        axios.get('/zakekeCustomize/getToken')
            .then(({ data }) => {
                console.log(data);
                this.state.config.tokenoauth = data.returndata.access_token;
                console.log(this.state.config);
                var config = this.state.config;
                var productJson = { "id": "61e1a843536bb33f542ec69d", "name": "test2" };
                var customizer = new window.zakekeDesigner(config, productJson);
            })
            .catch((resp) => {
                console.error(resp);
            })


    }



    render() {
        return (<>
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
                <div id="zakeke-container" className={styles.zakekeContainer} style={{ height:"100vh", width:"100%" }}></div>
            </div>

            <Footer />
        </>)

    }
}
