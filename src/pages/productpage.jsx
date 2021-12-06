import React from 'react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Join from '../components/join'
import Products from '../components/products'
import Recentlyview from '../components/recentlyview'
function Productpage() {
    return (
        <>
            <Layout>
                <Navbar/>
                <Products/>
                <Recentlyview/>
                <Join/>
            </Layout>
        </>
    )
}

export default Productpage
