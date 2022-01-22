import { Nav, Navbar } from "react-bootstrap";
import React,{useState} from "react";
import logo from "../assets/Printribe-logo.png";
import styles from '../styles/home.module.css';

function Header() {
  return (
    <div style={{ fontFamily:"Avenir Light"}}>
    <div className="pt-1 pb-2" style={{backgroundColor:"#ffd680",position:'relative'}}>
      <div className="text-center" style={{maxWidth:'60%',margin:'auto'}}>* Message to be edited from admin panel </div> 
      <div className="" style={{position:'absolute',right:'10%',top:'5px'}}>X</div>
    </div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className=" col-lg-3 col-12 logo text-center mb-3 mb-sm-0 py-2">
            <a href="/">
              <img
                src={logo}
                alt=""
                style={{ height: "35px", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="col-lg-5 col-8 px-4 py-2">
            <input className={styles.searchBox} size="40" placeholder="&#xF002;   Search..."  ></input>
          </div>
          <div className="col-4">
            <Navbar expand="lg" className="">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto justify-content-evenly w-100">
                  {localStorage.getItem("customerId") ? (
                    <>
                      <Nav.Link href="/my-account">
                      <span style={{fontSize:20,fontWeight:500,color:'black',marginLeft:'10px'}}>My Account</span>
                      </Nav.Link>
                      <Nav.Link
                        href="/"
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("customerId");
                        }}
                      >
                        <span style={{fontSize:20,fontWeight:500,color:'black',marginLeft:'10px'}}>Logout</span>
                      </Nav.Link>
                      <Nav.Link href="/cart">
                        
                      <span style={{fontSize:20,fontWeight:500,color:'black',marginLeft:'10px'}}>My Cart</span>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link href="/signup">
                      <i class='fas fa-user-plus' style={{fontSize:24}}></i>
                      <span style={{fontSize:20,fontWeight:500,color:'black',marginLeft:'10px'}}>Sign up</span>
                      </Nav.Link>
                      <Nav.Link href="/signin">
                      <i class='fas fa-user-alt' style={{fontSize:24}}></i>
                      <span style={{fontSize:20,fontWeight:500,color:'black',marginLeft:'10px'}}>Sign in</span>
                      </Nav.Link>
                      <Nav.Link href="#">
                      {/* <i class="fa fa-shopping-cart" style={{fontSize:24}}></i> */}
                      <span style={{fontSize:20,fontWeight:500,color:'black',marginLeft:'10px'}}>My Cart</span>
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
