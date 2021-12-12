import React from 'react'
import styles from '../styles/catalog.module.css'
import { Accordion } from 'react-bootstrap'
function Catagories() {
    return (
        <>

            <Accordion>
                <Accordion.Item eventKey="0" className={styles.accordin}>
                    <Accordion.Header><span className="fw-bold">Men's clothing</span></Accordion.Header>
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
                <Accordion.Item eventKey="1" className={styles.accordin}>
                    <Accordion.Header><span className="fw-bold">Women's clothing</span></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body>
                    <Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body><Accordion.Body>
                        Lorem ipsum
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
            </Accordion>

        </>
    )
}

export default Catagories
