import React from 'react'

function Header() {
    return (
        <>
            <div className="container-fluid px-3 py-3">
                <div className="row">
                    <div className=" col-lg-3 logo">
                        printribe
                    </div>
                    <div className="col-lg-6 px-3">
                        <input className="form-control" placeholder="search"></input>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col text-center">
                                sign up
                            </div>
                            <div className="col text-center">
                                sign up
                            </div><div className="col text-center">
                                sign up
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header