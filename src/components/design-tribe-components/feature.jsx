import React,{useState} from 'react'
import styles from '../../styles/designTribe.module.css'

const features = [{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/fb/fb052ddaae4b75e8669059e5cc5d04c8',title:'Preview and download realistic mockups',body:'Save time and money on photoshoots with 1,400+ polished product images'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/82/82f9ddc3387bee27d25caff5bd9fad67',title:'Finalize designs you’ve made elsewhere',body:'Pick the perfect spot and size for your own image'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/c0/c0007687f0e10056348f4d542e3c0299',title:'Find free clipart for every occasion',body:'Start from scratch or put the finishing touch on your design with 3,000+ clipart graphics sorted by themes'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/4e/4e89bb428e55c59f64156d2fd0053b7f',title:'Compose eye-catching messages with 250+ fonts',body:'Enhance your text with professional typography, shadows, and arcs'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/c2/c20834595ec11720fc7ed6ec1ef228b8',title:'Make seamless patterns for all-over print products',body:'Don’t waste hours piecing together patterns—all it takes is one click'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/eb/eb74f78f990b364fbb9c61a2ebfb831c',title:'Add vibrant background colors and graphics',body:'Pick from 230+ colors and patterns that guarantee high-quality, consistent prints'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/84/8443c4d88a8c6c0654556c83d3e24b44',title:'Turn nearly-there images into crisp designs',body:'Automatically upscale graphics that almost meet our printing requirements'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/28/280886513d40ded00d04eff11c0ac0f8',title:'Choose from 80M+ Premium Images',body:'Use ready-for-design images from Getty Images’ pro photographers for just $1'},
{IMG:'https://files.cdn.printful.com/upload/icons-item-svg-file/d4/d42307657cdf39e6f584df3a90ee8e74',title:'Add luxury to your designs with embroidery',body:'Easily customize products like hats with embroidery-ready fonts, thread color recognition, and stitching mode preview'}]


function Feature(){
    const [currentFeature,setCurrentFeature] = useState(0);
    return(<div className={styles.featureContainer}>
    <div className={styles.featureHeader}>Design your dream product with free, easy-to-use features</div>
    <div className={styles.featureSubHeader}>Transform your 2D design into a 3D product with a few clicks</div>
    <div className={styles.featuresSection}>
    {features.map((item)=>(
    <div className={styles.featureBox}>
    <img src={item.IMG}/>
    <div className={styles.featureTitle}>{item.title}</div>
    <div className={styles.featureBody}>{item.body}</div>
    </div>
    ))}
    </div>

    <div className={styles.featuresSectionMobile}>
    <div className={styles.featureBox}>
    <img src={features[currentFeature].IMG}/>
    <div className={styles.featureTitle}>{features[currentFeature].title}</div>
    <div className={styles.featureBody}>{features[currentFeature].body}</div>
    </div>
    <div>
        <button onClick={()=>setCurrentFeature(0)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==0?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(1)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==1?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(2)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==2?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(3)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==3?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(4)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==4?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(5)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==5?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(6)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==6?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(7)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==7?"gray":"white"}}></button>
        <button onClick={()=>setCurrentFeature(8)} className={styles.featureMobileBtn} style={{backgroundColor:currentFeature==8?"gray":"white"}}></button>
    </div>
    </div>

    </div>)
}


export default Feature;