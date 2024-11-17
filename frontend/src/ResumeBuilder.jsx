import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './assets/ContactEntry'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form, Button } from 'react-bootstrap';
import './App.css'

function ResumeBuilder() {
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    setEntries((prevEntries) => [
      ...prevEntries,
      <ContactEntry key={prevEntries.length} />, 
    ]);
  };
  const removeEntry = () => {
    setEntries((prevEntries) => [
      ...prevEntries,
      <ContactEntry key={prevEntries.length} />, 
    ]);
  };

  return(
    <>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">name</InputGroup.Text>
      <Form.Control type="text" placeholder="Name"/>
    </InputGroup>
    <InputGroup className="mb-3">
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" placeholder="Describe yourself"/>
      </InputGroup>
      

    
    {/*<Routes>
        <Route path="/" element={<ContactEntry />}>
          {/* <Route path="" element={}/> 
        </Route>
      </Routes>*/}
      
     
      <Button className="mb-3" variant="outline-secondary" id="button-addon1" onClick={
        addEntry
      }>
      More Contact info
      </Button>



         <div>
        {entries} 
      </div>
      
      
      </>
)
}

export default ResumeBuilder
