import React from 'react'
import img from '../assets/mensclothing.PNG'
import img1 from '../assets/womensclothing.PNG'
import styles from '../styles/catalog.module.css'
function Catalog() {
    return (
        <>
            <div className={`container `}>
                <div className="row mt-3 mb-3 mx-0">
                    <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div className={`card ${styles.catalogcontainer}`} >
                            <img class="card-img-top" src={img} alt="mensclothing"/>
                            <div class ="card-body">
                            <p class ="card-text fw-bold">Men's Clothing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div className={`card ${styles.catalogcontainer}`}>
                            <img class="card-img-top" src={img1} alt="womensclothing"/>
                            <div class ="card-body">
                            <p class ="card-text fw-bold">Women's Clothing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div className={`card ${styles.catalogcontainer}`}>
                            <img class="card-img-top" src={img} alt="mensclothing"/>
                            <div class ="card-body">
                            <p class ="card-text fw-bold">Men's Clothing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-2">
                        <div className={`card ${styles.catalogcontainer}`}>
                            <img class="card-img-top" src={img1} alt="womensclothing"/>
                            <div class ="card-body">
                            <p class ="card-text fw-bold">Women's Clothing</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Catalog
