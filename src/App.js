import React from "react";
import reactDom from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homelayout from "./pages/homelayout";
import Productataloglayout from "./pages/productcataloglayout";
import Productpage from "./pages/productpage";
function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homelayout/>}/>
          <Route exact path="/product-catalog" element={<Productataloglayout/>}/>
          <Route exact path="/product-catalog" element={<Productataloglayout/>}/>
          <Route exact path="/product-page" element={<Productpage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
