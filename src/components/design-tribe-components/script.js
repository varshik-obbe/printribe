const config = {
    "tokenoauth": "Token Oauth",
    "mobileversion": false,
    "cartbuttontext": "Add to cart",
    "shoppingcarturl": "[url-endpoint-add-to-cart]",
    // "shoppingcartcallback": {javascript function object},
    "editshoppingcarturl": "[url-endpoint-edit-product-into-cart]",
    // "editshoppingcartcallback": {javascript function object},
    // "savedesigncallback": {javascript function object},
    "productinfourl": "[url-endpoint-info-product]",
    "additionaldata":  {},
    "canSaveDesign": false,
    "culture": "en-US",
    "currency": "USD",
    "designid": "",
    "pricetaxincluded": true,
    "labeltax": "hidden",
    "quantity": 1,
    "sides": ['codeSide1','codeSiden'],
  }

var config = {config};
var productJson = {"id":"[productid]", "name":"[productname]"};
var customizer = new zakekeDesigner(config, productJson);