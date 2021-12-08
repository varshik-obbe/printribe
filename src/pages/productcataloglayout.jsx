import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Custom from '../components/custom'
import Catalog from '../components/catalog'
import Join from '../components/join'
import Layout from '../components/layout'
import Catagories from '../components/catagories'
function Productataloglayout() {
    return (
        <>
            <Layout>
            
            <div className="row mx-0">
            <Navbar />
            <Custom />
                <div className="col-lg-2">
                    <Catagories/>
                </div>
                <div className="col-lg-10 ">
                    <Catalog />
                </div>
                <Join />
            </div>
            </Layout>
        </>
    )
}

export default Productataloglayout
