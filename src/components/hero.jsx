import React from 'react'
import img from '../assets/hero.PNG'
import styles from '../styles/home.module.css';

function Hero() {
    return (
        <>
            <div className="container mt-5 mb-5" style={{padding:"0 8%"}}>
                <div className="row">
                    <div className="col-lg-6 col-md-12 p-3">
                        <div>
                        <p className={styles.heroTitle}>Create and sell custom <div className="text-left">products</div></p>
                        </div>
                        <p className="h4 mt-5 mb-5">
                        Turn your design ideas into premium products and drop ship to your customers under your brand
                        </p>
                        <div className="d-flex mb-3">
                            <div className="pe-3">
                                <button className="btn btn-danger px-4 py-2">Start Selling</button>
                            </div>
                            <div className="ps-3">
                                <button className="btn btn-primary px-4 py-2">Order now</button>
                            </div>
                        </div>
                        <p>No sign up fee. No minimums. Fast fulfillment.</p>
                    </div>
                    <div className="col-lg-6 pt-4 col-md-12 text-center">
                        <img src={img} style={{ maxWidth: "100%", maxHeight:"450px" }}></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
