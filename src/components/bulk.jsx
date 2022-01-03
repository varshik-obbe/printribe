import React from 'react'
import bulk from '../assets/bulk.PNG'

function Bulk() {
    return (
        <>
            <div className="container-fluid" style={{ background: "rgb(255 241 201)" }}>
                <div className="container ">
                    <div className="row p-3 ">
                        <div className="col-lg-6 col-md-12">
                            <p className="fw-bold h3 mt-5">
                                Need Help with Bulk Orders ?</p>
                            <div className="mt-5" style={{ background: "rgb(29 103 205)", padding: "30px", borderRadius: "20px"}}>
                                {/* <p className="h5">Box 1:</p> */}
                                <form>
                                    <div class="form-group">
                                        <label className='text-light fw-bold m-2' for="exampleInputName">Full name</label>
                                        <input type="email" class="form-control" id="exampleInputName"  />
                                    </div>
                                    <div class="form-group">
                                        <label className='text-light fw-bold m-2' for="exampleInputEmail">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail"/>
                                    </div>
                                    <div class="form-group">
                                        <label className='text-light fw-bold m-2' for="exampleInputEmail">Message</label>
                                        <textarea type="email" class="form-control" id="exampleInputEmail"/>
                                    </div>
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
