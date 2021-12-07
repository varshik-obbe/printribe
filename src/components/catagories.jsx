import React from 'react'
import styles from '../styles/catalog.module.css'
import { Accordion } from 'react-bootstrap'
function Catagories() {
    return (
        <>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Men's clothing</Accordion.Header>
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
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Women's clothing</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body>
                    <Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body><Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accessories</Accordion.Header>
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
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Home & living</Accordion.Header>
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
