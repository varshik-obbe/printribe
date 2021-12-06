import React from 'react'
import styles from '../styles/fulfill.module.css'
import img from '../assets/tshirtblue.PNG'
function Fullfill() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <p className="mt-3 mb-3 h2 text-center fw-bold">How you can fulfill your products using Printribe</p>
                <div className="row">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className=" p-3" style={{ width: "100%" }}>
                                <img className="card-img-top" src={img} />
                                <div className="card-body text-center">
                                    <p className="card-text fw-bold">Create custom products</p>
                                    <p>Use design tribe to create designs and add them to a wide range of products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className=" p-3" style={{ width: "100%" }}>
                                <img className="card-img-top" src={img} />
                                <div className="card-body text-center">
                                    <p className="card-text fw-bold">Sell on your own terms</p>
                                    <p>Choose the products, market your designs, set price and make a sale</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className="p-3" style={{ width: "100%" }}>
                                <img className="card-img-top" src={img} />
                                <div className="card-body text-center">
                                    <p className="card-text fw-bold">We handle the fulfillment</p>
                                    <p>We take care of printing and shipping the order directly to your customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fullfill
