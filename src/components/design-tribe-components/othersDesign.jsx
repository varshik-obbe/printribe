import React from 'react'
import styles from '../../styles/designTribe.module.css';

const designsIMG = ["https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/mschibious.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/beatrizlina1.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/birdskeptnorth.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/instagram/yourpassport.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/becomfynyc.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/beatrizlina2.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/giuliogroebert.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/momonthebeats.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/peaceloverclothing.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/annarolskaya.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/eldiariode_marlen.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/hustleandloveco.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/itsmaryamsalam.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/thelittleredballoonshop.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/tallrealitees.jpg",
"https://static.cdn.printful.com/static/v839/images/layout/design-maker/instagram/katarinaarriagamusic.jpg"]

function othersDesign(){
    return(
        <div className={styles.othersDesignContainer}>
        <div className={styles.othersHeader}>See what other creatives have made with the Design Tribe</div>
        <div className={styles.featureSubHeader}>Get inspiration for your own daring designs</div>
        <div>
            {designsIMG.map(item=>(<img src={item} className={styles.othersImg}/>))}
        </div>
        </div>)
}

export default othersDesign;