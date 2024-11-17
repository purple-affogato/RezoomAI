import { useState } from 'react'
import { Button, Dropdown,Form } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';



function ContactEntry() {
    const [type, setType] = useState("Select Contact Method ");

    return(
        <>
        <Form>
        <InputGroup>
             <Form.Group className="mb-3" controlId="contactImput.ControlInput1">
             <Form.Control type="text" placeholder="Contact"/>
             </Form.Group>

         <Form.Group className="dropdown">
         <Dropdown as="div" className="contactType">
             <Dropdown.Toggle
             split
             id="dropdown-split-basic">
            {type}
             </Dropdown.Toggle>
             
          <Dropdown.Menu>

            <Dropdown.Item eventKey="1" onClick={() => setType("Tel ")}>
              Telephone
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => setType("Email ")}>
              Email
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => setType("URL ")}>
              Website
            </Dropdown.Item>



          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      

      </InputGroup>
      </Form>
    </>
  )
}

export default ContactEntry
  