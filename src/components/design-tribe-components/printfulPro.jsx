import React from 'react'
import styles from '../../styles/designTribe.module.css';

function printful(){
    return(<div>
        <div className={styles.proTile}>
        <img src="https://static.cdn.printful.com/static/v838//images/layout/design-maker/printful-pro-banner-img.png" alt="AD IMG"/>
                <div className={styles.proTexts}>
                    <div className={styles.proHeadText}>Get exclusive design tools with Printful Pro</div>
                    <div className={styles.proSubText} style={{margin:'3% 0%'}}>Remove image backgrounds, make custom mockups, and more</div>
                    <button className={styles.proBtn}> Try Printful Pro &nbsp; &nbsp; &gt;</button>
                </div>
            </div>
    </div>)
}

export default printful;