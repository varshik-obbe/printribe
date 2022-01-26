import Catagories from '../components/catagories'
import Catalog from '../components/catalog'
import Custom from '../components/custom'
import Footer from '../components/footer'
import Header from '../components/header'
import Join from '../components/join'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import React from 'react'
import SubCatalog from '../components/subcategories'

function Productataloglayout() {
    return (
        <>
            <Layout>
            
            <div className="row mx-0">
            <Navbar />
            <Custom />
                <div className="col-md-3 col-lg-3 d-flex align-items-end flex-column">
                    <Catagories/>
                </div>
                
                <div className="col-md-9 col-lg-8">
                    <Catalog />
                </div>
                <Join />
            </div>
            </Layout>
        </>
    )
}

export default Productataloglayout
