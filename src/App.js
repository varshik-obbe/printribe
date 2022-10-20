import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./components/account";
import Cart from "./components/add-product";
import FabricDesign from "./components/fabricDesign";
import ForgotPassword from "./components/forgotPassword";
import Signin from "./components/signin";
import Signup from "./components/signup";
import UpdatePassword from "./components/updatePassword.jsx";
import WixDashboard from "./components/wixDashboard";
import CatalogsubProducts from "./pages/catalogProducts";
import Customizer from "./pages/customizer";
import DesignTribe from "./pages/designTribe";
import Homelayout from "./pages/homelayout";
import PrivacyPolicy from "./pages/privacypolicy";
import Productataloglayout from "./pages/productcataloglayout";
import Productpage from "./pages/productpage";
import ReturnRefund from "./pages/returnrefund";
import SubCatMen from "./pages/SubCatMen";
import SubSubCat from "./pages/SubSubCat";
import TermsPage from "./pages/termspage";
import FAQ from "./pages/FAQ.jsx";
import FAQ_Questions from "./pages/FAQ_Questions"
import FAQ_Ans from "./pages/FAQ_Ans.jsx"
import Services from "./pages/Services.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import OTPpage from "./components/OTPpage";
import About from "./components/about-us";
import Integrations from "./components/integrations";


// import SubCatWomen from "./pages/SubCatWomen";

function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homelayout />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/integrations" element={<Integrations />} />

          <Route exact path="/products" element={<Productataloglayout />} />
          {/* <Route exact path="/products/:category" element={<Productataloglayout />} /> */}
          <Route
            exact
            path="/products/:category/:subcatid"
            element={<SubCatMen />}
          />
          <Route
            exact
            path="/products/:category/:subcatid/:id"
            element={<SubSubCat />}
          />
          <Route
            exact
            path="/products/:productid"
            element={<CatalogsubProducts />}
          />
          {/* <Route exact path="/products/:category/:subCat" element={<Productataloglayout />} />
          <Route exact path="/products/:category/:subCat/:subSubCat" element={<Productataloglayout />} /> */}

          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:prodid" element={<Productpage />} />
          <Route exact path="/design-tribe" element={<DesignTribe />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms-conditions" element={<TermsPage />} />
          <Route exact path="/return-refund" element={<ReturnRefund />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/my-account" element={<Account />} />
          <Route exact path="/customizer" element={<Customizer />} />
          <Route
            exact
            path="/forgotPass/:tokenId"
            element={<UpdatePassword />}
          />
          <Route exact path="/integrations/wix" element={<WixDashboard />} />
          <Route
            exact
            path="/fabricDesign/:prodid"
            element={<FabricDesign />}
          />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route exact path="/FAQ/:id/questions" element={<FAQ_Questions />} />
          <Route exact path="/FAQ/:id/:text_id/answer" element={<FAQ_Ans />} />

          <Route exact path="/services" element={<Services />} />
          <Route exact path="/howitworks" element={<HowItWorks />} />
          <Route exact path="/verify/:id" element={<OTPpage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
