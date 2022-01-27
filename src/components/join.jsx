import React from 'react'

function Join() {
    return (
        <>
            <div className="container-fluid mt-3 mb-3" style={{background:"rgb(255 241 201)"}}>
                <div className="container text-center p-4">
                    <p className="text-center h2 fw-bold" style={{fontFamily:"roboto-bold,roboto,sans-serif",fontSize:"32px",marginBottom:"20px"}}>Ready to join Printribe ?</p>
                    <button className="text-center btn btn-danger" style={{fontFamily:"roboto-bold,roboto,sans-serif",backgroundColor:"#EE3C2F",fontSize:"16px",fontWeight:"600"}}> Get Started  {' > '} </button>
                </div>
            </div>
        </>
    )
}

export default Join