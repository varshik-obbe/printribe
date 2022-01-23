import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import styles from '../styles/home.module.css'

function Navbar() {
    return (
        <>
            <div className="" style={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc"}}>
                <div className={styles.navBars+' '+"container"}>
                <div className="row m-0 text-center p-2 fw-bold " >

                    <div className="col-lg-3 col-md-2 col-sm-2 text-uppercase p-1">
                        {/* <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>Product catalog</button>
                            <div className={styles.dropdowncontent}> */}
                                <Link to="/products" className={styles.navLink}>Product Catalog</Link>
                                {/* <Link to="/product-page">Product page</Link> */}
                            {/* </div>
                        </div> */}
                    </div>
                   
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                        {/* <div className={styles.dropdown}> */}
                        <Link to="/design-tribe" className={styles.navLink}>Design Tribe</Link>

                        {/* <button className={styles.dropbtn}>Design tribe</button> */}
                        {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                        {/* </div> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <Link to="/"  className={styles.navLink}>Services</Link>
                        {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <Link to="/"  className={styles.navLink}>How it works</Link>
                        {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 text-uppercase p-1">
                    <Link to="/"  className={styles.navLink}>Resources</Link>
                        {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-2 text-uppercase p-1">
                    <Link to="/"  className={styles.navLink}>faq</Link>
                        {/* <div className={styles.dropdowncontent}>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
