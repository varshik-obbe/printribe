import React from 'react'
import styles from '../../styles/designTribe.module.css'


function hero(){
    return(<div className={styles.heroContainer}>
        <div style={{position:'absolute',left:0}}> <img src="https://static.cdn.printful.com/static/v838//images/layout/design-maker/design-maker-features-pattern.png" alt="" width="100%"/></div>
        <div className={styles.heroHeader}>Create designs in minutes with the Design Maker</div>
        <div className={styles.heroBody}>Your ultimate free tool for making product designs, mockups, and more</div>
        <button className={styles.herobtn}>Start Designing &nbsp; 
        &gt;
        </button>
    </div>)
}

export default hero;