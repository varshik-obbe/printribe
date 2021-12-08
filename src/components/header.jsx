
import { faCartPlus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Nav, Navbar } from 'react-bootstrap';
import React from 'react'
import logo from '../assets/Printribe-logo.png'

function Header() {
    return (
        <>
            <div className="container-fluid p-3">
                <div className="row">

                    <div className=" col-lg-4 col-12 logo text-center mb-3 mb-sm-0 py-2">
                        <img src={logo} alt="" style={{ height: "35px", maxWidth: "100%" }} />

                    </div>
                    <div className="col-lg-5 col-8 px-3 py-2">
                        <input className="form-control" placeholder="search"></input>
                    </div>
                    <div className="col-lg-3 col-4">
                        
                        <Navbar expand="lg" className="">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto justify-content-evenly w-100">
                                    <Nav.Link href="#">Sign up</Nav.Link>
                                    <Nav.Link href="#">Sign In</Nav.Link>
                                    <Nav.Link href="#">My Cart</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

                    </div>
                </div>
        </div>
        </>
    )
}

export default Header;