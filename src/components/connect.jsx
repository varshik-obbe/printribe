import React from 'react'
import img1 from '../assets/logo.webp'
import img2 from '../assets/shopify-logo.webp'
import img3 from '../assets/Woo_logo.webp'
import img4 from '../assets/API_Logo.webp'
import img5 from '../assets/wix_logo.webp'
import styles from '../styles/home.module.css'

function Connect() {
    return (
        <>
            <div className="container mt-5 mb- 5">
                <h1 className="pt-3 mb-3 text-center" style={{ fontFamily: "ProximaNW01-Reg, sans-serif", fontWeight: "700" }}>Connect Printribe to major e-commerce platforms and marketplaces</h1>
                <div className={styles.connectContainer}>
                    <div className={styles.img1pos}>
                        <img src={img1} className={styles.img1} />
                    </div>
                    <div className={styles.img2pos}>
                        <img src={img2} className={styles.img2} />
                    </div>
                    <div className={styles.img3pos}>
                        <img src={img3} className={styles.img3} />
                    </div>
                    <div className={styles.img4pos}>
                        <img src={img4} className={styles.img4} />
                        <h1>API</h1>
                    </div>
                    <div className={styles.img5pos}>
                        <img src={img5} className={styles.img5} />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Connect
