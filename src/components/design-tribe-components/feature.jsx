import React from 'react'
import styles from '../../styles/designTribe.module.css'

const features = [{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Preview and download realistic mockups',body:'Save time and money on photoshoots with 1,400+ polished product images'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Finalize designs you’ve made elsewhere',body:'Pick the perfect spot and size for your own image'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Find free clipart for every occasion',body:'Start from scratch or put the finishing touch on your design with 3,000+ clipart graphics sorted by themes'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Compose eye-catching messages with 250+ fonts',body:'Enhance your text with professional typography, shadows, and arcs'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Make seamless patterns for all-over print products',body:'Don’t waste hours piecing together patterns—all it takes is one click'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Add vibrant background colors and graphics',body:'Pick from 230+ colors and patterns that guarantee high-quality, consistent prints'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Turn nearly-there images into crisp designs',body:'Automatically upscale graphics that almost meet our printing requirements'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Choose from 80M+ Premium Images',body:'Use ready-for-design images from Getty Images’ pro photographers for just $1'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Add luxury to your designs with embroidery',body:'Easily customize products like hats with embroidery-ready fonts, thread color recognition, and stitching mode preview'}]


function feature(){
    return(<div className={styles.featureContainer}>
    <div className={styles.featureHeader}>Design your dream product with free, easy-to-use features</div>
    <div className={styles.featureSubHeader}>Transform your 2D design into a 3D product with a few clicks</div>
    <div className={styles.featuresSection}>
    {features.map((item)=>(
    <div className={styles.featureBox}>
    <img src={item.IMG}/>
    <div className={styles.featureTitle}>{item.title}</div>
    <div>{item.body}</div>
    </div>
    ))}
    </div>
    </div>)
}


export default feature;