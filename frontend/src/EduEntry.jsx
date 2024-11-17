import { useState } from 'react'
import { Button, Dropdown,Form } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';


function EduEntry() {

return(


    <>

<Form>
    <InputGroup className="mb-3">
      <InputGroup.Text>Education</InputGroup.Text>
      <Form.Control type="text" placeholder="Institution"/>
      <Form.Control type="text" placeholder="Degree"/>
      <Form.Control type="number" placeholder="Grad Year"/>
    </InputGroup>
</Form>
        
    </>
)


}
export default EduEntry