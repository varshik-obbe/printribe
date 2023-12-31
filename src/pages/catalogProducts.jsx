import Catagories from '../components/catagories'
import Catalog from '../components/catalog'
import Catalogproducts from '../components/catalog-products'
import Custom from '../components/custom'
import Footer from '../components/footer'
import Header from '../components/header'
import Join from '../components/join'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import React from 'react'

function CatalogsubProducts() {
    return (
        <>
            <Layout>
            
            <div className="row mx-0">
            <Navbar />
            <Custom />        
                 <div className="col-sm-4 col-lg-3 d-flex align-items-sm-end flex-column d-none d-sm-flex">

                    <Catagories/>
                </div>
               <div className="col-sm-8 col-lg-8">
                    <Catalogproducts />
                </div>
                <Join />
            </div>
            </Layout>
        </>
    )
}

export default CatalogsubProducts;