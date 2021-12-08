import React from 'react'
import bulk from '../assets/bulk.PNG'

function Bulk() {
    return (
        <>
            <div className="container-fluid" style={{ background: "rgb(255 241 201)" }}>
                <div className="container ">
                    <div className="row p-3 text-center">
                        <div className="col-lg-6 col-md-12">
                            <p className="fw-bold h3 mt-5">
                                Need Help with Bulk Orders ?</p>
                            <div className="mt-5" style={{ background: "rgb(29 103 205)", padding: "50px", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {/* <p className="h5">Box 1:</p> */}
                                <form>
                                    <div class="form-group">
                                        <input type="email" class="form-control " style={{width:"100%"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <button className="btn btn-danger m-2">Submit</button>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-0">
                            <img src={bulk} width="80%" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bulk
