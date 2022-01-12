import React from 'react'
import styles from '../../styles/designTribe.module.css';

function signUpTile(){
    return(<div>
        <div className={styles.signUpTile}>
                <div>
                    <div className={styles.howToAdsText} style={{color:'white'}}>Sign up to access all of the Design Maker's free features</div>
                    <div className={styles.signUpSubText} style={{margin:'3% 0%'}}>Set up your Printful account in seconds</div>
                    <div>
                        <div className={styles.whyUsBox}><div className={styles.whyUsTick} style={{paddingRight:15}}>&#10003;</div> Save designs and product templates</div>
                        <div className={styles.whyUsBox}><div className={styles.whyUsTick} style={{paddingRight:15}}>&#10003;</div> Download product mockups</div>
                        <div className={styles.whyUsBox}><div className={styles.whyUsTick} style={{paddingRight:15}}>&#10003;</div> Add mockups to your store</div>
                    </div>
                    <button className={styles.herobtn} style={{padding:'2% 10% 2% 5%',textAlign:'left'}}> Sign Up &nbsp; &nbsp; &gt;</button>
                </div>
                <div style={{backgroundColor:'white',borderRadius:10,textAlign:'center'}}><img src="https://static.cdn.printful.com/static/v838//images/layout/design-maker/cta-image-square.svg" alt="AD IMG" width="90%"/></div>
            </div>
    </div>)
}

export default signUpTile;