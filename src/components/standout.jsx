import React from 'react'
import styles from '../styles/home.module.css'

function Standout() {
    return (
        <>
            <div className="container mt-5 mb-5" style={{padding:"0 5%"}}>
                <h2 className={styles.fulfill_title}>What makes Printribe stand out</h2>
                <div className="row">
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>No sign up fee</b></p>
                        <p className='' style={{fontSize:"19px"}}>Printribe offers free signup with no charge or minimum deposit. Simply signup and start placing your orders.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>No order minimums</b></p>
                        <p>Avoid maintaining inventory and leftover stock. Order single products without any commitments.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>Quick dispatch</b></p>
                        <p className='' style={{fontSize:"19px"}}>Printribe offers quick dispatch of product orders within 3 - 4 working days.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>Lowest pricing</b></p>
                        <p>Competitive and affordable product pricing reflects into higher profits for you.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>Premium quality</b></p>
                        <p className='' style={{fontSize:"19px"}}>Printribe deploys industry-leading tech, quality eco-friendly inks and premium materials to ensure happy customers.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>White labelled</b></p>
                        <p className='' style={{fontSize:"19px"}}>All our products are white labelled so that your customers don't see our name attached to your products.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>Intuitive design tool</b></p>
                        <p className='' style={{fontSize:"19px"}}>Use our easy to use 'Design Tribe' to create unique products without any design experience.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>Partner dashboard</b></p>
                        <p className='' style={{fontSize:"19px"}}>Use Printribe dashboard to track your orders, save your design, meet your sales goal and do a lot of other things.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p style={{fontSize:"22px", fontWeight:"950"}}><b>Ecommerce integration</b></p>
                        <p className='' style={{fontSize:"19px"}}>Automate your orders by integrating your ecommerce stores into Printribe dashboard using our custom API.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Standout