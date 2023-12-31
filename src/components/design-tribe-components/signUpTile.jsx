import React from 'react'
import styles from '../../styles/designTribe.module.css';
import { Nav, Navbar } from "react-bootstrap";

function signUpTile(){
    const goToSignUp = () =>{
        const token = localStorage.getItem('token');
        const customerId = localStorage.getItem('customerId');
        if(token!="" & token!=null & token!=undefined & customerId!="" & customerId!=null & customerId!=undefined ){
            window.location.href="/";
        }else{
            window.location.href="/signup";
        }
    }
    return(<div>
        <div className={styles.signUpTile}>
                <div className={styles.signUpTextContainer}>
                    <div className={styles.signUpText} style={{color:'white'}}>Sign up to access all of the Design Tribe's free features</div>
                    <div className={styles.signUpSubText} style={{margin:'3% 0%'}}>Set up your Printful account in seconds</div>
                    <div>
                        <div className={styles.signUpTickBox}>
                        <span className={styles.signUpTickStyle}><i class="fa fa-check" aria-hidden="true"></i></span> Save designs and product templates</div>
                        <div className={styles.signUpTickBox}><span className={styles.signUpTickStyle}><i class="fa fa-check" aria-hidden="true"></i></span> Download product mockups</div>
                        <div className={styles.signUpTickBox}><span className={styles.signUpTickStyle}><i class="fa fa-check" aria-hidden="true"></i></span> Add mockups to your store</div>
                    </div>
                    <div><button className={styles.signUpBtn} onClick={goToSignUp}>Sign Up &nbsp; &nbsp; &gt;</button></div>
                </div>
                <div className={styles.signUpImgCointer}>
                    <img src="https://static.cdn.printful.com/static/v838//images/layout/design-maker/cta-image-square.svg" alt="AD IMG" className={styles.signUpImg}/>
                </div>
            </div>
    </div>)
}

export default signUpTile;