import React from 'react'
import Header from '../components/header'
import Footer from "../components/footer"
import Navbar from '../components/navbar'
import PPHeader from "../components/privacy-policy-components/header"
import PPBody from "../components/privacy-policy-components/body"

function privacypolicy(){
    return(
        <>
        <Header/>
        <Navbar/>
        <PPHeader title="PRIVACY POLICY"/>
        <PPBody/>
        <Footer/>
        </>
    )
}

export default privacypolicy;