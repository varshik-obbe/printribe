import React from 'react'
import hustler from '../assets/hustler.PNG'
import styles from '../styles/home.module.css'

function Hustler() {
    return (
        <>
            <div className="container mt-5 mb-5" style={{ padding: "0 8%" }}>
                <div className="row py-3 px-sm-5">
                    <div className="col-lg-6 pe-lg-0">
                        <div className="p-sm-4" className={styles.hustlerContainer} style={{ background: "#151C29", borderRadius: "30px", borderBottomRightRadius: "0" }}>
                            <div className="px-5 py-4">
                            <h2 className="mt-3 mb-3 text-light px-sm-3" style={{fontFamily:"roboto-bold,roboto,sans-serif", fontWeight:"700", fontSize:"30px"}}>
                                Start Your Side Hustle Today</h2>
                                <p className="text-light px-sm-4 mb-4">Pay only when you make a sale</p>
                                <div className="text-light p-0 p-sm-4" style={{ background: "#2B3953", borderRadius: "10px" }}>
                                    <div className={`row p-1`}>
                                        <div className="col-9 mt-3">
                                            <p className={styles.text}>You sell a t-shirt </p>
                                        </div>
                                        <div className="col-3 mt-3">
                                            <p className={styles.text}>₹499</p>
                                        </div>
                                        <div className="col-9">
                                            <p className={styles.text}>You pay for its production</p>
                                        </div>
                                        <div className="col-3">
                                            <p className={styles.text}>₹299</p>
                                        </div>
                                    </div>
                                    <div className={styles.line} />
                                    <div className="row mt-3">
                                        <div className="col-9">
                                            <p className={styles.text}><b>Your profit</b>  </p>
                                        </div>
                                        <div className="col-3">
                                            <p className={styles.text}><b>₹200</b></p>
                                        </div>
                                    </div>

                                </div>
                                <button className="btn btn-danger mt-4 mx-4  mb-3 px-4" style={{backgroundColor:"#EE3C2F"}}>Start Selling</button>
                                <p className="text-light mx-4">No sign up fee. No minimums.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 text-start ps-lg-0 d-lg-flex justify-content-end align-items-end">
                        <img src={hustler} className={styles.hustler} style={{ objectFit: "cover", maxWidth: "100%" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hustler
