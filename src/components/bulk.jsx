import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Api from '../api/api'
import bulk from '../assets/bulk.PNG'

function Bulk() {
    const[fullName,setFullName]=useState("")
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")
    const formData={
        "mailData": {
            "name": fullName,
            "emailId": email,
            "message_received": message
        }
    }
    
    const handleBulkOrder=async(e)=>{
        e.preventDefault()
await axios.post(Api.users.BULK,formData).then(res=> {   Swal.fire({
    position: "center",
    icon: "success",
    title: "Thank you for reaching us, We will Get in touch shortly",
    showConfirmButton: true,
  })
setFullName("")
setEmail("")
setMessage("")
}).catch(error=>Swal.fire({
    position: "center",
    icon: "danger",
    title: 'Something went wrong',
    showConfirmButton: true,
  }))


    }
    return (
        <>
            <div className="container-fluid" style={{ background: "rgb(255 241 201)" }}>
                <div className="container " style={{padding:"2% 8%"}}>
                    <div className="row p-sm-3 ">
                        <div className="col-lg-6 col-md-12 px-sm-4">
                        <h2 className="mt-3 mb-3" style={{fontFamily:"ProximaNW01-Reg, sans-serif", fontWeight:"700",color:"#064378"}}>
                                Need Help with Bulk Orders?</h2>
                            <div className="mt-4" style={{ background: "rgb(29 103 205)", padding: "30px", borderRadius: "15px"}}>
                                {/* <p className="h5">Box 1:</p> */}
                                <form onSubmit={(e)=>handleBulkOrder(e)}>
                                    <div class="form-group" style={{paddingBottom:"12px"}}>
                                        <label className='text-light  m-2' for="exampleInputName" style={{fontSize:"18px", fontWeight:"600"}}>Full name</label>
                                        <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} class="form-control" id="exampleInputName" required  />
                                    </div>
                                    <div class="form-group" style={{paddingBottom:"12px"}}>
                                        <label className='text-light  m-2' for="exampleInputEmail" style={{fontSize:"18px" , fontWeight:"600"}}>Email</label>
                                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail" required/>
                                    </div>
                                    <div class="form-group" style={{paddingBottom:"12px"}}>
                                        <label className='text-light  m-2' for="exampleInputMessage" style={{fontSize:"18px" , fontWeight:"600"}}>Message</label>
                                        <textarea class="form-control"value={message} onChange={(e)=>setMessage(e.target.value)} rows="4" id="exampleInputMessage" required style={{resize:"none"}}/>
                                    </div>
                                    <div className="w-100 text-center mt-4">
                                        {/* <div className="btn btn-warning py-2 px-4">Send</div> */}
                                       <button className="btn btn-danger px-4 py-2" style={{backgroundColor:"#EE3C2F",fontFamily:"Avenir,sans-serif",fontSize:"16px",letterSpacing:"1.6px",fontWeight:"700"}} >Send</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-0 px-4">
                            <img src={bulk} style={{height:"100%", width:"100%", objectFit:"contain"}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bulk
