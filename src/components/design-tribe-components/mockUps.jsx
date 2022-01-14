import React from 'react'
import styles from '../../styles/designTribe.module.css';

function mockUps(){
    return(<div>
        <div className={styles.mockUpContainer}>
                <div className={styles.mockUpTexts}>
                    <div className={styles.howToAdsText}>Showcase your designs with 1,400+ realistic mockups</div>
                    <div className={styles.howToAdsSubText}>Score diverse product images, from detail shots to themed photos, with the built-in Mockup Generator.</div>
                </div>
                <img src="https://static.cdn.printful.com/static/v838//images/layout/design-maker/showcase-designs-banner-img.png" alt="AD IMG" className={styles.mockUpsTileImg}/>
            </div>
    </div>)
}

export default mockUps;