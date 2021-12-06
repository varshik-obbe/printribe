import React from 'react'
import { Accordion } from 'react-bootstrap'
function Catagories() {
    return (
        <>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Item 1</Accordion.Header>
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
                    <Accordion.Header>Item 2</Accordion.Header>
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
                    <Accordion.Header>Item 2</Accordion.Header>
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
                    <Accordion.Header>Item 3</Accordion.Header>
                   <Accordion.Body>
                        Lorem ipsum
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}

export default Catagories
