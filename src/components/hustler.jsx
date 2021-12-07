import React from 'react'
import hustler from '../assets/hustler.PNG'

function Hustler() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row py-3 px-sm-5">
                    <div className="col-lg-6 col-md-6 pe-sm-0">
                        <div className="h-100 w-100 bg-dark" style={{ borderRadius: "30px", borderBottomRightRadius: "0" }}>
                            <div className="p-5 ">
                                <p className="h2 fw-bold mt-3 mb-3 text-light">Start Your Side Hustle Today</p>
                                <p className="text-light">Pay only when you make a sale</p>
                                <div className="bg-secondary text-light p-1 p-lg-4" style={{borderRadius:"20px"}}>
                                    <div className="row" style={{borderBottom:"1px solid white"}}>
                                        <div className="col-9 mt-3">
                                            <p className="h5">You sell a t-shirt </p>
                                        </div>
                                        <div className="col-3 mt-3">
                                            <p className="fw-bold h5">₹ 499</p>
                                        </div>
                                        <div className="col-9">
                                            <p className="h5">You pay for its production</p>
                                        </div>
                                        <div className="col-3">
                                            <p className="fw-bold h5">₹ 499</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                    <div className="col-9">
                                            <p className="h5">Your profit  </p>
                                        </div>
                                        <div className="col-3">
                                            <p className="fw-bold h5">₹200</p>
                                        </div>
                                    </div>

                                </div>
                                <button className="btn btn-danger mt-4 mx-4  mb-3 px-4">Start Selling</button>
                                <p className="text-light mx-4">No sign up fee. No minimums.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-start ps-sm-0">
                        <img src={hustler} style={{ maxWidth: "100%", maxHeight: "60vh", height: "90%", marginTop: "10%", borderTopRightRadius: "30px", borderBottomRightRadius: "30px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hustler
