import React from 'react'
import styles from '../../styles/designTribe.module.css';

const designsIMG = ["https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/mschibious.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/beatrizlina1.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/birdskeptnorth.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/yourpassport.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/mschibious.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/beatrizlina1.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/birdskeptnorth.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/yourpassport.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/mschibious.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/beatrizlina1.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/birdskeptnorth.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/yourpassport.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/mschibious.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/beatrizlina1.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/birdskeptnorth.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/yourpassport.jpg",]

function othersDesign(){
    return(
        <div className={styles.othersDesignContainer}>
        <div className={styles.howToHeader}>See what other creatives have made with the Design Maker</div>
        <div className={styles.featureSubHeader}>Get inspiration for your own daring designs</div>
        <div>
            {designsIMG.map(item=>(<img src={item} width="12.5%"/>))}
        </div>
        </div>)
}

export default othersDesign;