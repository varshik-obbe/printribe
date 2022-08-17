import React from 'react'
import {useNavigate} from "react-router-dom"

function Join({title="",buttonTitle=""}) {
    const navigate = useNavigate()

     const goToDesign=()=>{   
    const token = localStorage.getItem('token');
    console.log(token)
    const customerId = localStorage.getItem('customerId');
    if(token!="" & token!=null & token!=undefined & customerId!="" & customerId!=null & customerId!=undefined ){
       navigate("/products")
    }else{
        navigate("/signin")
      }
    }
    return (
        <>
            <div className="container-fluid mt-3 mb-3" style={{background:"rgb(255 241 201)"}}>
                <div className="container text-center p-4">
                    <p className="text-center h2 fw-bold" style={{fontFamily:"roboto-bold,roboto,sans-serif",fontSize:"32px",marginBottom:"20px"}}>{title === "" ? "Ready to join Printribe ?": title}</p>
                    <button className="text-center btn btn-danger" onClick={goToDesign} style={{fontFamily:"roboto-bold,roboto,sans-serif",backgroundColor:"#EE3C2F",fontSize:"16px",fontWeight:"600"}}> {buttonTitle === "" ?"Get Started >" : buttonTitle}  </button>
                </div>
            </div>
        </>
    )
}

export default Join