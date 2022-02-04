import React from 'react'
import styles from '../../styles/designTribe.module.css'
import {useNavigate} from "react-router-dom"

function Hero(){
    const navigate = useNavigate()

    const goToDesign = () => {   
    const token = localStorage.getItem('token');
    // console.log(token)
    const customerId = localStorage.getItem('customerId');
    navigate("/products");
    
    // if(token!="" && token!=null && token!=undefined && customerId!="" && customerId!=null && customerId!=undefined ){
    //    navigate("/products");
    // }else{
    //    navigate("/signin");
    //   }
    }

    return(
    <div className={styles.heroContainer}>
        <div style={{position:'absolute',left:0,padding:'5% 0%'}} className={styles.heroImgContainer}> 
        <img src="https://static.cdn.printful.com/static/v838//images/layout/design-maker/design-maker-features-pattern.png" alt="" width="90%"/>
        </div>
        <div className={styles.heroTextContainer}>
        <div className={styles.heroHeader}>Create designs in minutes with the Design Tribe</div>
        <div className={styles.heroBody}>Your ultimate free tool for making product designs, mockups, and more</div>
        <button className={styles.herobtn} onClick={goToDesign}>Start Designing &nbsp; 
        &gt;
        </button>
        
        </div>
    </div>
    )
}

export default Hero;