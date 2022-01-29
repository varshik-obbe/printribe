import React from 'react'
import img1 from '../assets/fulfill1.PNG'
import img2 from '../assets/fullfill2.webp'
import img3 from '../assets/fulfill3.webp'
import styles from '../styles/home.module.css'

function Fullfill() {
    return (
        <div style={{background:"rgb(255 241 201)"}}>
            <div className="container mt-5 mb-5" >
               <div className='pt-5 mb-5'>
               <p className={styles.fulfill_title}>How you can fulfill your products using Printribe</p>
               </div>
                <div className="row m-0" style={{padding:"0 3%"}}>
                    {/* <div className="row m-0"> */}
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className={styles.imgcontainer} >
                                <div className="p-3">
                                <img className={`card-img-top img-fluid  ${styles.img}`} src={img1}/>
                                </div>
                                <div className="card-body text-center">
                                    <p className={styles.card_text}>Create custom products</p>
                                    <p className={`px-lg-4 px-0 ${styles.avenir}`}>Use design tribe to create designs and add them to a wide range of products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className={styles.imgcontainer} >
                           
                            <div className="p-3">
                                <img className={`card-img-top img-fluid  ${styles.img}`} src={img2}/>
                                </div>
                                <div className="card-body text-center">
                                    <p  className={styles.card_text}>Sell on your own terms</p>
                                    <p className={`px-lg-4 px-0 ${styles.avenir}`}>Choose the products, market your designs, set price and make a sale</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className={styles.imgcontainer} >
                            <div className="p-3">
                                <img className={`card-img-top img-fluid  ${styles.img}`} src={img3}/>
                                </div>
                                <div className="card-body text-center">
                                    <p  className={styles.card_text}>We handle the fulfillment</p>
                                    <p className={`px-lg-4 px-0 ${styles.avenir}`}>We take care of printing and shipping the order directly to your customer</p>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
            
        </div>
    )
}

export default Fullfill
