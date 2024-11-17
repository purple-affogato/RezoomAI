import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './assets/ContactEntry'
import EduEntry from './EduEntry'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form, Button,Badge } from 'react-bootstrap';
import './App.css'

function ResumeBuilder() {
  const [contactEntries, setContactEntries] = useState([]);
  const [EduEntries, setEduEntries] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addContactEntry = () => {
    setContactEntries((prevEntries) => {
      if (prevEntries.length >= 4) {
        alert("You can't add more than 4 contact entries."); 
        return prevEntries;
      }
      return [
        ...prevEntries,
        <ContactEntry key={prevEntries.length} />, 
      ];
    });
  };

  const addEduEntry = () => {
    setEduEntries((prevEntries) => {
        if (prevEntries.length >= 5) {
            alert("You can't add more than 4 edu entries."); 
            return prevEntries;
          }
        return [
         ...prevEntries,
         <EduEntry key={prevEntries.length} />
     ];
    });
  };
 


  return(
    <>
    <Form>
        <h1>
        Resume Builder <Badge bg="secondary">Profile</Badge>
        </h1>
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
        addContactEntry
      }>
      More Contact info
      </Button>
         <div>
        {contactEntries} 
      </div>
      
      <Button className="mb-3" variant="outline-secondary" id="button-addon2" onClick={
        addEduEntry
      }>
      More education info
      </Button>
      <div>
        {EduEntries} 
      </div>
      </Form>
      


      
      </>
)
}

export default ResumeBuilder
