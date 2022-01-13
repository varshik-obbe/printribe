import Footer from '../components/footer';
import Header from '../components/header';
import React from 'react'
import Script from '@gumgum/react-script-tag';
import axios from 'axios'

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
                "mainProductid": "12324",
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
                "VariantName": "Blue",
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
                var productJson = { "id": "Blue61d5bb7d1ed8c4d5cbb9d162", "name": "[productname]" };
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
                <div id="zakeke-container"></div>
            </div>

            <Footer />
        </>)

    }
}
