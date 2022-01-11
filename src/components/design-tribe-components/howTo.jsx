import React from 'react'
import styles from '../../styles/designTribe.module.css';

const imgs = ['https://static.cdn.printful.com/static/v838/images/layout/design-maker/how-to-use-design-maker-block/pick-a-product.svg',
'https://static.cdn.printful.com/static/v838/images/layout/design-maker/how-to-use-design-maker-block/create-a-design.svg',
'https://static.cdn.printful.com/static/v838/images/layout/design-maker/how-to-use-design-maker-block/generate-mockups.svg',
'https://static.cdn.printful.com/static/v838/images/layout/design-maker/how-to-use-design-maker-block/order-add-product.svg']

const steps = [{title:"Pick a product",body:"Choose from 270+ premium products"},
{title:"Create a design",body:"Use built-in tools to design directly on your product"},
{title:"Generate mockups",body:"Preview and download product images"},
{title:"Order or add the product to your store",body:"Get the product for yourself or sell online"}]

const adIMGs = ['https://static.cdn.printful.com/static/v838/images/layout/design-maker/no-time-to-design-block/valentines-socks.jpg',
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/no-time-to-design-block/valentines-card.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/no-time-to-design-block/valentines-shirt.jpg",
"https://static.cdn.printful.com/static/v838/images/layout/design-maker/no-time-to-design-block/valentines-mug.jpg"]

function howTo(){
    return(
        <div className={styles.howToContainer}>
            <div className={styles.howToHeader} style={{marginBottom:'4%'}}>How to use the Design Maker</div>
            <div className={styles.howToImgSection}>
            {imgs.map(item=>(<img src={item} width="180px"/>))}
            </div>
            <div className={styles.howToSteps}>
            <div className={styles.howToStepsCircle}>1</div><div className={styles.howToStepsLine}> </div><div className={styles.howToStepsCircle}>2</div>
            <div className={styles.howToStepsLine}> </div><div className={styles.howToStepsCircle}>3</div><div className={styles.howToStepsLine}> </div><div className={styles.howToStepsCircle}>4</div>
            </div>
            <div className={styles.howToAboutSteps}>
                {steps.map(item=>(
                    <div className={styles.howToAboutStepsContainer}>
                    <div className={styles.howToAboutStepsHeader}>{item.title}</div>
                    <div className={styles.howToAboutStepsBody}>{item.body}</div>
                    </div>
                ))}
            </div>
            <button className={styles.howtobtn}>Design Now &nbsp; &nbsp; &gt; </button>
            <div className={styles.howToAds}>
                <img src="https://static.cdn.printful.com/static/v838//images/layout/design-maker/no-time-to-design-banner-img.png" alt="AD IMG" width="40%"/>
                <div className={styles.howToAdsTexts}>
                    <div className={styles.howToAdsText}>No time to design?</div>
                    <div className={styles.howToAdsSubText}>Choose one of our pre-made Quick Designs and make it yours! Edit the text, graphics, and colors, and order straight away.</div>
                </div>
            </div>
            <div className={styles.adIMGs}>
                {adIMGs.map(item=>(<img src={item} width="22%" className={styles.adIMG}/>))}
            </div>
        </div>
    )
}

export default howTo;