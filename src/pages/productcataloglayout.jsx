import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Custom from '../components/custom'
import Catalog from '../components/catalog'
import Join from '../components/join'
import Layout from '../components/layout'
function Productataloglayout() {
    return (
        <>
            <Layout>
            
            <div className="row">
            <Navbar />
            <Custom />
                <div className="col-lg-3 border border-danger">

                </div>
                <div className="col-lg-9 ">
                    <Catalog />
                </div>
                <Join />
            </div>
            </Layout>
        </>
    )
}

export default Productataloglayout
