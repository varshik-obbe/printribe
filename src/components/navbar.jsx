import React from 'react'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'
function Navbar() {
    return (
        <>
            <div className="container">
                <div className="row text-center p-2 fw-bold" style={{ borderTop: "1px solid grey", borderBottom: "1px solid grey" }}>

                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Product catalog</button>
                            <div className={styles.dropdowncontent}>
                                <Link to="/product-catalog">Product Catalog</Link>
                                <Link to="/product-page">Product page</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Design tribe</button>
                            {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <button className={styles.dropbtn}>Services</button>
                            {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <button className={styles.dropbtn}>How it works</button>
                            {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <button className={styles.dropbtn}>Resources</button>
                            {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <button className={styles.dropbtn}>faq</button>
                            {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
