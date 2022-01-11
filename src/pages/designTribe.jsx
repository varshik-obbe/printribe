import React from 'react';
import Header from '../components/header';
import Footer from "../components/footer";
import Navbar from '../components/navbar';
import Hero from "../components/design-tribe-components/hero"
import Feature from '../components/design-tribe-components/feature'
import HowTo from '../components/design-tribe-components/howTo'
import WhyUs from '../components/design-tribe-components/whyUs'
import MockUps from '../components/design-tribe-components/mockUps'
import PrintfulPro from '../components/design-tribe-components/printfulPro'
import OthersDesign from '../components/design-tribe-components/othersDesign'
import SignUpTile from '../components/design-tribe-components/signUpTile';

function designTribe(){
    return(<>
    <Header/>
    <div className='container'>
    <Navbar/>
    <Hero/>
    <Feature/>
    <HowTo/>
    <WhyUs/>
    <MockUps/>
    <PrintfulPro/>
    <OthersDesign/>
    <SignUpTile/>
    </div>
    <Footer/>
    </>)
}

export default designTribe;