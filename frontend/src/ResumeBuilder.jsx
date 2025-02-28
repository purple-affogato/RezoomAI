import { createRef, useReducer, useState, useRef } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './ContactEntry'
import EduEntry from './EduEntry'
import ExperienceEntry from './ExperienceEntry'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form, Button,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
// import logo from "/RezoomAI.png"

import './App.css'

function ResumeBuilder() {
  const [contactEntries, setContactEntries] = useState([]);
  const [EduEntries, setEduEntries] = useState([]);
  const [ExpEntries, setExpEntries] = useState([]);
  const [ProjEntries, setProjEntries] = useState([]);
  const [VolEntries, setVolEntries] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const contactRefs = useRef([]);
  const eduRefs = useRef([]);
  const expRefs = useRef([]);

  const addContactEntry = () => {
    setContactEntries((prevEntries) => {
      if (prevEntries.length >= 4) {
        alert("You can't add more than 4 contact entries."); 
        return prevEntries;
      }
      const newRef = createRef();
      contactRefs.current.push(newRef);
      return [
        ...prevEntries,
        <ContactEntry key={prevEntries.length} ref={newRef}/>, 
      ];
    });
  };

    const addEduEntry = () => {
        setEduEntries((prevEntries) => {
            if (prevEntries.length >= 5) {
                alert("You can't add more than 5 edu entries."); 
                return prevEntries;
            }
            const newRef = createRef();
            eduRefs.current.push(newRef);
            return [
                ...prevEntries,
                <EduEntry key={prevEntries.length} ref={newRef}/>
            ];
        });
    };
  
  const addExpEntry = () => {
    setExpEntries((prevEntries) => {
      if (prevEntries.length >= 5) {
        alert("You can't add more than 5 experience entries."); 
        return prevEntries;
      }
      const newRef = createRef();
      expRefs.current.push(newRef);
      return [
        ...prevEntries,
        <ExperienceEntry name = "Position" key={prevEntries.length} ref={newRef}/>, 
      ];
    });
  };

  const addProjEntry = () => {
    setProjEntries((prevEntries) => {
      if (prevEntries.length >= 5) {
        alert("You can't add more than 5 project entries."); 
        return prevEntries;
      }
      return [
        ...prevEntries,
        <ExperienceEntry name = "Project Name" key={prevEntries.length} />, 
      ];
    });
  };

  const addVolEntry = () => {
    setVolEntries((prevEntries) => {
      if (prevEntries.length >= 5) {
        alert("You can't add more than 5 volunteering entries."); 
        return prevEntries;
      }
      return [
        ...prevEntries,
        <ExperienceEntry name = "Volunteer Work" key={prevEntries.length} />, 
      ];
    });
  };



  return(
    <>

      {/* <div>
        <header className = "header">
          <img src = {image1}></img>
          <h1 style="color: red;">My Heading</h1>
        </header>
      </div> */}

      <div>
        <Link to="/">
          <Button className="mb-3" variant="outline-secondary">Sign Out</Button>
        </Link>
      </div>
    
      <Form>
        <div>
          <h1>
            Resume Builder <Badge bg="secondary">Profile</Badge>
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <Form.Control type="text" placeholder="John Doe "/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control as="textarea" placeholder="Describe yourself"/>
            </InputGroup>
        
            <Button className="mb-3" variant="outline-secondary" id="button-addon1" onClick={
                addContactEntry
              }>
                More Contact Info
            </Button>
            <div>
              {contactEntries} 
            </div>
        
            <Button className="mb-3" variant="outline-secondary" id="button-addon2" onClick={
                addEduEntry
              }>
                More Education Info
            </Button>
            <div>
              {EduEntries} 
            </div>

            <Button className="mb-3" variant="outline-secondary" id="button-addon1" onClick={
                addExpEntry
              }>
                More Experience Info
              </Button>
              <div>
                {ExpEntries} 
              </div>
                
              <Button className="mb-3" variant="outline-secondary" id="button-addon1" onClick={
                addProjEntry
                }>
                  More Project Info
              </Button>
              <div>
                {ProjEntries} 
              </div>

              <Button className="mb-3" variant="outline-secondary" id="button-addon1" onClick={
                  addVolEntry
                }>
                  More Volunteering Info
              </Button>
              <div>
                {VolEntries} 
              </div>
        </div>
            
          <div>
            <Link to="/joblisting">
              <Button className="mb-3" variant="outline-secondary">Submit Resume</Button>
            </Link>
          </div>
      </Form>
  
    </>
  )
}

export default ResumeBuilder
