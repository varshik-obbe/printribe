import React from 'react'
import hustler from '../assets/hustler.PNG'

function Hustler() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row py-3 px-sm-5">
                    <div className="col-lg-6 col-md-6 pe-sm-0">
                    <div className="h-100 w-100 bg-dark" style={{borderRadius:"30px", borderBottomRightRadius:"0"}}></div>
                    </div>
                    <div className="col-lg-6 col-md-6 text-start ps-sm-0">
                        <img src={hustler} style={{ maxWidth: "100%", maxHeight: "60vh", height:"90%", marginTop:"10%", borderTopRightRadius:"30px", borderBottomRightRadius:"30px"}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hustler
