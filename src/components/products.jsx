import React from 'react'

function Products() {
    return (
        <>
            <div className="container ">
                <div className="row ">
                    <div className="col-lg-6 col-md-12 ">
                        <div className="col-lg-3 col-md-0">

                        </div>
                        <div className="col-lg-9 col-md-12">

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-5">
                        <p className="h4 fw-bold mb-5">Unisex Round Neck Cotton T-shirt</p>
                        <p className="mt-3 fw-bold">Choose technique</p>
                        <p className="btn btn-md btn-light fw-bold  mb-3 border-dark">Printing (DTG)</p>
                        <p className="mt-3 fw-bold">Choose color</p>
                        <div className="d-flex mb-3">
                            <div className="border border-dark bg-danger mx-2 " style={{height:"2.4vh", width:"1.4vw"}}></div>
                            <div className="border border-dark bg-warning mx-2 " style={{height:"2.4vh", width:"1.4vw"}}></div>
                            <div className="border border-dark bg-black mx-2 " style={{height:"2.4vh", width:"1.4vw"}}></div>
                            <div className="border border-dark bg-light mx-2 " style={{height:"2.4vh", width:"1.4vw"}}></div>
                            <div className="border border-dark bg-info mx-2 " style={{height:"2.4vh", width:"1.4vw"}}></div>
                            <div className="border border-dark bg-warning mx-2 " style={{height:"2.4vh", width:"1.4vw"}}></div>
                            <div className="border border-dark bg-success mx-2 " style={{height:"2.4vh", width:"1.4vw"}}></div>
                        </div>
                        <div className="d-flex mt-3 mb-3">
                            <div className="me-5 fw-bold">Choose size</div>
                            <div className="mx-5 text-info">Size chart</div>
                        </div>
                        <div className="">

                        </div>
                        <p className="fw-bold h3 mt-3 mb-3">₹155.00</p>
                        <button className="fw-bold h3 text-light btn btn-danger px-3">Start Designing</button>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
