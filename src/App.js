import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./components/account";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Homelayout from "./pages/homelayout";
import Productataloglayout from "./pages/productcataloglayout";
import Productpage from "./pages/productpage";
import DesignTribe from './pages/designTribe'
import PrivacyPolicy from './pages/privacypolicy';
import ReturnRefund from './pages/returnrefund';
import TermsPage from './pages/termspage';
import Customizer from './pages/customizer';

function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homelayout />} />
          <Route
            exact
            path="/product-catalog"
            element={<Productataloglayout />}
          />
          <Route exact path="/product-page" element={<Productpage />} />
          <Route exact path="/design-tribe" element={<DesignTribe />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms-conditions" element={<TermsPage />} />
          <Route exact path="/return-refund" element={<ReturnRefund />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/my-account" element={<Account />} />
          <Route exact path="/customizer" element={<Customizer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
