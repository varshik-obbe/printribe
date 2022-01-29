import Feature from '../components/design-tribe-components/feature'
import Footer from "../components/footer";
import Header from '../components/header';
import Hero from "../components/design-tribe-components/hero"
import HowTo from '../components/design-tribe-components/howTo'
import MockUps from '../components/design-tribe-components/mockUps'
import Navbar from '../components/navbar';
import OthersDesign from '../components/design-tribe-components/othersDesign'
import PrintfulPro from '../components/design-tribe-components/printfulPro'
import React from 'react';
import SignUpTile from '../components/design-tribe-components/signUpTile';
import WhyUs from '../components/design-tribe-components/whyUs'

function designTribe(){
    return(<>
    <Header/>
    <Navbar/>
    <Hero/>
    <div className='container'>
    <Feature/>
    </div>
    {/* <HowTo/>
    <WhyUs/>
    <MockUps/>
    <PrintfulPro/>
    </div>
    <OthersDesign/>
    <SignUpTile/>
    <Footer/> */}
    </>)
}

export default designTribe;