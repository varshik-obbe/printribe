import React from 'react'
import img1 from '../assets/tshirtblack.PNG'
import img2 from '../assets/tshirtblue.PNG'
import img3 from '../assets/tshirtwhite.PNG'
import styles from '../styles/home.module.css'

function Customize() {

    return (
        <>
            <div className="container pt-5 pb-5">
            <h2 className={styles.fulfill_title}>
                    Customize and sell premium products
                </h2>
                <p className="h5 mb-4 text-center">
                    Print and stitch on demand with your brand name
                </p>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 p-3 mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img1} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3  mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img2} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3  mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img3} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3  mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img1} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3  mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img2} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3  mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img3} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3  mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img1} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3  mb-4">
                        <div className="card" style={{ maxWidth: "100%", height: "100%" }}>
                            <img className="card-img-top" src={img2} alt="img1" style={{ height: "75%", maxWidth: "100%", objectFit: "contain" }} />
                            <div className="card-body" style={{ height: "25%" }}>
                                <p className="card-text fw-bold mb-1" id={styles.card_product_title} >T-shirts</p>
                                <span style={{ fontWeight: "300" }}>
                                    Starting from ₹175 only</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="text-center mt-4 mb-4">
                  <a href="/products"> <button className="btn btn-danger px-4 py-2" style={{backgroundColor:"#EE3C2F"}}><h5 class="m-0">All Products</h5></button></a> 
                </div>
                {/* <Script src="https://portal.zakeke.com/scripts/config.js"></Script> */}
                {/* <Script src="https://portal.zakeke.com/scripts/integration/api/customizer.js"></Script> */}
                {/* <Script src="./design-tribe-components/script.js"></Script> */}
            </div>
        </>
    )
}

export default Customize
