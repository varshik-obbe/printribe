import React from 'react'
import styles from '../styles/home.module.css'
function Standout() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <p className="mt-3 mb-3 h2 text-center fw-bold">What makes Printribe stand out</p>
                <div className="row">
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">No sign up fee</p>
                        <p className='pe-5'>Printribe offers free signup with no charge or minimum deposit. Simply signup and start placing your orders.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">No order minimums</p>
                        <p>Avoid maintaining inventory and leftover stock. Order single products without any commitments.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">Quick dispatch</p>
                        <p className='pe-5'>Printribe offers quick dispatch of product orders within 3 - 4 working days.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">Lowest pricing</p>
                        <p>Competitive and affordable product pricing reflects into higher profits for you.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">Premium quality</p>
                        <p className='pe-5'>Printribe deploys industry-leading tech, quality eco-friendly inks and premium materials to ensure happy customers.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">White labelled</p>
                        <p className='pe-5'>All our products are white labelled so that your customers don't see our name attached to your products.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">Intuitive design tool</p>
                        <p className='pe-5'>Use our easy to use 'Design Tribe' to create unique products without any design experience.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">Partner dashboard</p>
                        <p className='pe-5'>Use Printribe dashboard to track your orders, save your design, meet your sales goal and do a lot of other things.</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 p-4 ${styles.standoutText}` }>
                        <p className="h4 fw-bold">Ecommerce integration</p>
                        <p className='pe-5'>Automate your orders by integrating your ecommerce stores into Printribe dashboard using our custom API.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Standout