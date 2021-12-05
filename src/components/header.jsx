import { faCartPlus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
    return (
        <>
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-lg-3 fw-bold h2 text-uppercase">
                        printribe
                    </div>
                    <div className="col-lg-6 px-3">
                        <input className="form-control" placeholder="Search"></input>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col text-center fw-bold h5">
                                <FontAwesomeIcon icon={faUserPlus}/> Sign up
                            </div>
                            <div className="col text-center fw-bold h5">
                                <FontAwesomeIcon icon={faUser}/> Sign in
                            </div><div className="col text-center fw-bold h5">
                                <FontAwesomeIcon icon={faCartPlus}/> My cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header