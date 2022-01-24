import React from 'react'
import bulk from '../assets/bulk.PNG'

function Bulk() {
    return (
        <>
            <div className="container-fluid" style={{ background: "rgb(255 241 201)" }}>
                <div className="container " style={{padding:"2% 8%"}}>
                    <div className="row p-sm-3 ">
                        <div className="col-lg-6 col-md-12 px-sm-4">
                        <h2 className="mt-3 mb-3" style={{fontFamily:"ProximaNW01-Reg, sans-serif", fontWeight:"700",color:"#064378"}}>
                                Need Help with Bulk Orders ?</h2>
                            <div className="mt-4" style={{ background: "rgb(29 103 205)", padding: "20px", borderRadius: "15px"}}>
                                {/* <p className="h5">Box 1:</p> */}
                                <form>
                                    <div class="form-group">
                                        <label className='text-light fw-bold m-2' for="exampleInputName">Full name</label>
                                        <input type="text" class="form-control" id="exampleInputName"  />
                                    </div>
                                    <div class="form-group">
                                        <label className='text-light fw-bold m-2' for="exampleInputEmail">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail"/>
                                    </div>
                                    <div class="form-group">
                                        <label className='text-light fw-bold m-2' for="exampleInputMessage">Message</label>
                                        <textarea class="form-control" rows="4" id="exampleInputMessage" style={{resize:"none"}}/>
                                    </div>
                                    <div className="w-100 text-center mt-4">
                                        <div className="btn btn-warning py-2 px-4">Send</div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-0 px-4">
                            <img src={bulk} style={{height:"100%", maxWidth:"100%", objectFit:"contain"}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bulk
