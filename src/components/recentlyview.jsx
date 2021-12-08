import React from 'react'
import img from '../assets/tshirtblue.PNG'
function Recentlyview() {
    return (
        <>
            <div className="container mt-4 mb-4">
                <div className="row ">
                    <p className="h3 fw-bold mt-3 mb-3">Recently viewed</p>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img} />
                            <div className="card-body">
                                <p className="card-text ">
                                    Unisex Round Neck Cotton T-shirt</p>
                                <p>₹175.00</p>
                                <div className="d-flex mb-3">
                                <div className="border  bg-black mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-light mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-danger mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-warning mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-info mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                                    <p>+14 colors</p>
                                </div>
                                <p>XS - XXL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={img} />
                            <div className="card-body">
                                <p className="card-text ">
                                    Unisex Round Neck Cotton T-shirt</p>
                                <p>₹175.00</p>
                                <div className="d-flex mb-3">
                                <div className="border  bg-black mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-light mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-danger mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-warning mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                            <div className="border  bg-info mx-1 " style={{ height: "20px", width: "20px", borderRadius: "5px" }}></div>
                                    <p>+14 colors</p>
                                </div>
                                <p>XS - XXL</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Recentlyview
