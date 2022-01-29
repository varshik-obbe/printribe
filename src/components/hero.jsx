import React from 'react'
import img from '../assets/hero.PNG'
import styles from '../styles/home.module.css';

function Hero() {
   
    return (
        <>
            <div className="container mb-5" id={styles.padStyle}>
                <div className="row">
                    <div className="col-lg-6 col-md-12 p-3">
                        <div>
                            <p className={styles.heroTitle}>Create and sell custom products</p>
                        </div>
                        <p className={styles.heroSubTitle}>
                            Turn your design ideas into premium products and drop ship to your customers under your brand
                        </p>
                        <div className="d-flex mb-3">
                            <div className="pe-3">
                                <button className={"btn" + " " + styles.startSellingBtn + "  px-4 py-2 avenier"}>Start selling</button>
                            </div>
                            <div className="ps-3">
                                <a href="/products"><button className={"btn" + " " + styles.orderNowBtn + "  px-4 py-2"}>Order now</button></a>
                            </div>
                        </div>
                        <p style={{fontSize:"15px", fontFamily:"ProximaNW01-Reg", letterSpacing:"normal"}}>No sign up fee. No minimums. Fast fulfillment.</p>
                    </div>
                    <div className="col-lg-6 pt-4 col-md-12 text-center">
                        <img src={img} className={styles.heroImage} ></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
