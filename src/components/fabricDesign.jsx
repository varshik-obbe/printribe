import React from "react";
import Hero from "../components/fabric-components/hero";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

function FabricDesign() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      {/* <div className='container'>
            <Feature />
        </div> */}
      <Footer />
      {/* <HowTo/>
    <WhyUs/>
    <MockUps/>
    <PrintfulPro/>
    </div>
    <OthersDesign/>
    <SignUpTile/> */}
    </>
  );
}

export default FabricDesign;
