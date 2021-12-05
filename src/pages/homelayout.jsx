import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Fullfill from '../components/fullfill'
import Standout from '../components/standout'
import Customize from '../components/customize'
import Connect from "../components/connect";
import Bulk from "../components/bulk";
import Hustler from "../components/hustler";
import Footer from '../components/footer'
import Layout from '../components/layout'
function Homelayout() {
    return (
        <>
        <Layout>
            <Navbar />
            <Hero />
            <Fullfill />
            <Standout />
            <Customize />
            <Bulk />
            <Connect />
            <Hustler />
            </Layout>
        </>
    )
}

export default Homelayout
