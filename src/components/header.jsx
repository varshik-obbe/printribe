import { Nav, Navbar } from "react-bootstrap";
import React,{useState} from "react";

import logo from "../assets/Printribe-logo.png";
import styles from '../styles/home.module.css';

function Header() {
  const [messageVisible,setMessageVisible] = useState(true);
  return (
    <div style={{ fontFamily:"Avenir"}}>
    {messageVisible?(<div style={{backgroundColor:"#ffd680",position:'relative', padding:"7px 0 12px 0"}}>
      <div className="text-center" style={{maxWidth:'60%',margin:'auto', fontSize:"14px"}}>* Message to be edited from admin panel </div> 
      <div className="" style={{position:'absolute',right:'17%',top:'5px'}} onClick={()=>setMessageVisible(!messageVisible)}><i className={styles.crossIcon+' '+"fa fa-times"}></i></div>
    </div>):(<></>)}
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-10 col-sm-9 col-md-3 logo mb-3 mb-sm-0 py-2 text-center text-lg-end ps-sm-5 ps-lg-2 pe-lg-5" style={{lineHeight:"45px"}}>
            <a href="/">
              <img
                src={logo}
                alt=""
                style={{ height: "40px",width:"206px", maxWidth: "100%" }}
              />
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-5 px-4 py-2 ps-sm-5 ps-lg-2 order-2 order-md-1">
            <div className={styles.searchBox}>
            <i className={"fas fa-search "+styles.searchIcon} ></i>
            <input className={styles.searchInput} placeholder="Search..." style={{border:'0px solid black', width:"80%"}}></input>
            </div>
            
          </div>
          <div className="col-2 col-sm-3 col-md-3 col-lg-4 order-1 order-md-2">
            <Navbar expand="lg" className="">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="px-2" style={{width:"45px"}}/>
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
