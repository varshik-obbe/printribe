import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/navbar.module.css'
function Navbar() {
    return (
        <>
            <div className="container">
                <div className="row text-center p-2 fw-bold" style={{borderTop:"1px solid grey", borderBottom:"1px solid grey"}}>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        <Link to="/product-catalog" className="text-decoration-none text-black">Product catalog</Link>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <Link to="/product-page" className="text-decoration-none text-black">Product Page</Link>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        Services
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        How it works
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        Resources
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        faq
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
