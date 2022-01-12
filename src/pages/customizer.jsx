import Footer from '../components/footer';
import Header from '../components/header';
import React from 'react';
import Script from '@gumgum/react-script-tag';

export default class customizer extends React.Component {
    // componentDidMount() {
    //     var config = {config};
    //     var productJson = { "id": "[productid]", "name": "[productname]" };
    //     var customizer = zakekeDesigner(config, productJson);
    // }
    _onMyScriptLoad = () => {
        var config = { config };
        var productJson = { "id": "Blue61d5bb7d1ed8c4d5cbb9d162", "name": "visa" };
        var customizer = new window.zakekeDesigner(config, productJson);
    };
    _onMyScriptError = () => {/* ... */ };


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
