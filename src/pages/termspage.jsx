import React from 'react'
import Header from '../components/header'
import Footer from "../components/footer"
import Navbar from '../components/navbar'
import PPHeader from "../components/privacy-policy-components/header"
import Body from '../components/terms-conditions-components/body'

function termspage(){
    return(
        <>
        <Header/>
        <Navbar/>
        <PPHeader title="​TERMS OF SERVICE"/>
        <Body/>
        <Footer/>
        </>
    )
}

export default termspage