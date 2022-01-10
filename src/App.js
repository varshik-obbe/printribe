import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./components/account";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Homelayout from "./pages/homelayout";
import Productataloglayout from "./pages/productcataloglayout";
import Productpage from "./pages/productpage";
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
          <Route
            exact
            path="/product-catalog"
            element={<Productataloglayout />}
          />
          <Route exact path="/product-page" element={<Productpage />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/my-account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
