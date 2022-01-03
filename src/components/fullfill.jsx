import React from 'react'
import img1 from '../assets/fulfill1.PNG'
import img2 from '../assets/fullfill2.webp'
import img3 from '../assets/fulfill3.webp'
import styles from '../styles/home.module.css'
function Fullfill() {
    return (
        <div style={{background:"rgb(255 241 201)"}}>
            <div className="container mt-5 mb-5" >
               <div className='pt-5'>
               <p className=" mb-3 h2 text-center fw-bold">How you can fulfill your products using Printribe</p>
               </div>
                <div className="row">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                            <div className={styles.imgcontainer} >
                                <div className=" p-3" style={{height:"55%"}}>
                                <img className={`card-img-top img-fluid  ${styles.img}`} src={img1}/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="card-text fw-bold">Create custom products</p>
                                    <p>Use design tribe to create designs and add them to a wide range of products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className={styles.imgcontainer} >
                            <div className=" p-3" style={{height:"55%"}}>
                                <img className={`card-img-top img-fluid  ${styles.img}`} src={img2}/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="card-text fw-bold">Sell on your own terms</p>
                                    <p>Choose the products, market your designs, set price and make a sale</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3">
                            <div className={styles.imgcontainer} >
                            <div className=" p-3"style={{height:"55%"}} >
                                <img className={`card-img-top img-fluid  ${styles.img}`} src={img3}/>
                                </div>
                                <div className="card-body text-center">
                                    <p className="card-text fw-bold">We handle the fulfillment</p>
                                    <p>We take care of printing and shipping the order directly to your customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Fullfill
