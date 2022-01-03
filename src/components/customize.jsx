import React from 'react'
import img1 from '../assets/tshirtblack.PNG'
import img2 from '../assets/tshirtblue.PNG'
import img3 from '../assets/tshirtwhite.PNG'

function Customize() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="h2 fw-bold text-center mb-3">
                Customize and sell premium products
                </div>
                <p className="h5 mb-5 text-center">
                Print and stitch on demand with your brand name
                        </p>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ maxWidth: "100%" }}>
                            <img className="card-img-top" src={img1} alt="img1" style={{height:"37vh", maxWidth:"100%" }}/>
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img2}  style={{height:"37vh", maxWidth:"100%" }} />
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img3}  style={{height:"37vh", maxWidth:"100%" }}/>
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img1}  style={{height:"37vh", maxWidth:"100%" }} />
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img2} alt="img1"  style={{height:"37vh", maxWidth:"100%" }}/>
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img1}  style={{height:"37vh", maxWidth:"100%" }}/>
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img3}  style={{height:"37vh", maxWidth:"100%" }}/>
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 p-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img1}  style={{height:"37vh", maxWidth:"100%" }}/>
                            <div className="card-body">
                                <p className="card-text fw-bold">T-shirts</p>
                                <p>
                                    Starting from ₹175 only</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="text-center mt-4 mb-4">
                <button className="btn btn-danger">All Products</button>
                </div>
            </div>
        </>
    )
}

export default Customize
