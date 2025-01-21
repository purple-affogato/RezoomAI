import { useState, useImperativeHandle, forwardRef, useRef } from 'react'
import { Button, Dropdown,Form } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';



const ContactEntry = forwardRef(({}, ref) => {
    const [type, setType] = useState("Select Contact Method ");
    const input = useRef();

    useImperativeHandle(
        ref,
        () => ({
            getInputValue: () => input.current.value
        })
    );

    return(
        <>
        <Form>
        <InputGroup>
             <Form.Group className="mb-3" controlId="contactInput.ControlInput1">
             <Form.Control type="text" placeholder="Contact" ref={input}/>
             </Form.Group>

         <Form.Group className="dropdown">
         <Dropdown as="div" className="contactType">
             <Dropdown.Toggle
             split
             variant="outline-secondary"
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
});

export default ContactEntry
  