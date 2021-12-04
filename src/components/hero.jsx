import React from 'react'
import img from '../assets/hero.PNG'

function Hero() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 p-5">
                        <div>
                        <p className="h1">Create and sell custom <div className="text-left">products</div></p>
                        </div>
                        <p className="h4 mt-5 mb-5">
                        Turn your design ideas into premium products and drop ship to your customers under your brand
                        </p>
                        <div className="d-flex">
                            <div className="p-3">
                                <button className="btn btn-danger">Start Selling</button>
                            </div>
                            <div className="p-3">
                                <button className="btn btn-primary">Order now</button>
                            </div>
                        </div>
                        <p>No sign up fee. No minimums. Fast fulfillment.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center">
                        <img src={img} style={{ maxWidth: "100%", maxHeight:"60vh" }}></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
