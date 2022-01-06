import Bulk from "../components/bulk";
import Connect from "../components/connect";
import Customize from '../components/customize'
import Footer from '../components/footer'
import Fullfill from '../components/fullfill'
import Header from '../components/header'
import Hero from '../components/hero'
import Hustler from "../components/hustler";
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import React from 'react'
import Standout from '../components/standout'

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
