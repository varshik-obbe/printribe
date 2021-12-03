import React from "react";
import reactDom from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Fullfill from "./components/fullfill";
import Standout from './components/standout'
import Customize from "./components/customize";
import Connect from "./components/connect";
import Bulk from "./components/bulk";
import Hustler from "./components/hustler";
function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Fullfill/>
    <Standout/>
    <Customize/>
    <Bulk/>
    <Connect/>
    <Hustler/>
    <Footer/>
    </>
  );
}

export default App;
