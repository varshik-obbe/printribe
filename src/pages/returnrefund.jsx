import React from 'react'
import Header from '../components/header'
import Footer from "../components/footer"
import Navbar from '../components/navbar'
import PPHeader from "../components/privacy-policy-components/header"
import RRBody from "../components/return-refund-components/body"

function returnrefund(){
    return(
        <>
        <Header/>
        <Navbar/>
        <PPHeader title="RETURN &amp; REFUND"/>
        <RRBody/>
        <Footer/>
        </>
    )
}

export default returnrefund;