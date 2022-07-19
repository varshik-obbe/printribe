import React, { useEffect, useState } from 'react'

import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from '../styles/catalog.module.css'

function Catagories() {

    const [products, setproducts] = useState([])

    const getPost = () => {
        axios.get('/categories/getCategories')
            .then(({ data }) => {
                setproducts(data.maincat.categories)
            })
            .catch(resp => {
                console.log(resp);
            })
    }

    useEffect(() => {
        getPost()
        //    console.log(products)
    }, [])
    return (
        <>

            {
                products.map((product) => {
                    return <Accordion className={styles.accordin}>
                        <Accordion.Item eventKey="0" style={{ border: "none" }}>
                            <Accordion.Header> <Link style={{ textDecoration: "none", fontWeight:"600" }} to={`/products${product.url}/${product.id}`} ><span>{product.name}</span></Link></Accordion.Header>

                            <Accordion.Body>
                                {product.subCategories ? product.subCategories.map((subproduct) => {
                                    if (subproduct.subsubCategories.length !== 0) {
                                        {/* {console.log(subproduct)} */}
                                        return subproduct.visible !== "false" && <Accordion style={{ border: "none" }}>
                                            <Accordion.Item eventKey="1" style={{ border: "none" }}>
                                                <Accordion.Header style={{ border: "none" }}> <Link className='Link' style={{ textDecoration: "none", fontWeight:"600" }} to={`/products${subproduct.url}/${subproduct.id}`}><span>{subproduct.name}</span></Link></Accordion.Header>

                                                <Accordion.Body style={{ border: "none" ,padding:"0px" }}>
                                                    {
                                                        subproduct.subsubCategories ? subproduct.subsubCategories.map((subsubproduct) => {
                                                            return <Accordion.Body><Link className='Link' to={`/products/${subsubproduct.id}`} style={{ textDecoration: "none", fontWeight:"600", color: "black" }} >  <span style={{ colorL: "black" }}>{subsubproduct.name}</span> </Link></Accordion.Body>
                                                        }) : null
                                                    }
                                                </Accordion.Body>

                                            </Accordion.Item>
                                        </Accordion>
                                    }

                                    return <Accordion.Body> <Link className='Link' style={{ textDecoration: "none", fontWeight:"600" }} to={`/products/${subproduct.id}`}><span>{subproduct.name}</span></Link></Accordion.Body>
                                }) : null
                                }
                            </Accordion.Body>


                        </Accordion.Item>
                    </Accordion>
                })
            }

            {/* <Accordion>
                <Accordion.Item eventKey="0" className={styles.accordin}>
                 <Accordion.Header><span className="fw-bold">Mens Clothing</span></Accordion.Header>
                    <Accordion.Body>
                         <Accordion>
                             <Accordion.Item eventKey="" className={styles.accordin} >
                                 <Accordion.Header><span className="fw-bold">All-shirts</span></Accordion.Header>
                                 <Accordion.Body>
                                     
                                 </Accordion.Body>
                             </Accordion.Item>
                         </Accordion>
                          <Accordion>
                             <Accordion.Item eventKey="" className={styles.accordin} >
                                 <Accordion.Header><span className="fw-bold"> Jackets</span></Accordion.Header>
                                 <Accordion.Body>
                                    
                                 </Accordion.Body>
                             </Accordion.Item>
                         </Accordion>
                          <Accordion>
                             <Accordion.Item eventKey="" className={styles.accordin} >
                                 <Accordion.Header><span className="fw-bold"> Socks</span></Accordion.Header>
                                 <Accordion.Body>
                                   
                                 </Accordion.Body>
                             </Accordion.Item>
                         </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className={styles.accordin}>
                    <Accordion.Header><span className="fw-bold">Women's clothing</span></Accordion.Header>
                    <Accordion.Body>
                         <Accordion>
                             <Accordion.Item eventKey="" className={styles.accordin} >
                                 <Accordion.Header><span className="fw-bold">All-shirts</span></Accordion.Header>
                                 <Accordion.Body>
                                     
                                 </Accordion.Body>
                             </Accordion.Item>
                         </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className={styles.accordin}>
                    <Accordion.Header><span className="fw-bold">Accessories</span></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body>
                    <Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body><Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body><Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className={styles.accordin}>
                    <Accordion.Header><span className="fw-bold">Home & living</span></Accordion.Header>
                   <Accordion.Body>Mugs</Accordion.Body>
                   <Accordion.Body>Water Bottles</Accordion.Body>
                   <Accordion.Body>Mouse pads</Accordion.Body>
                   <Accordion.Body>Throw pillows</Accordion.Body>
                   <Accordion.Body>Flags</Accordion.Body>

                </Accordion.Item>
            </Accordion> */}

        </>
    )
}

export default Catagories
