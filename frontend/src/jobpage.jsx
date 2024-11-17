import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';
import {Form, Button } from 'react-bootstrap';
import './App.css'
import ContactEntry from './ContactEntry'

    function JobEntry(){
        const [entries, setEntries] = useState([]);

        const addEntry = () => {
            setEntries((prevEntries) => [
              ...prevEntries,
              <ContactEntry key={prevEntries.length} />, 
            ]);
          };

        return (
            <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Job Description</Form.Label>
                         <Form.Control as="textarea" rows={3} type="text" placeholder="Paste desired position description here:"/>
                     </Form.Group>
                     <Button className="mb-3" variant="outline-secondary" id="button-addon1" onClick={
                     addEntry
                    }>
                        Submit
                    </Button>
             </Form>
            </div>
        );
    }

    export default JobEntry

