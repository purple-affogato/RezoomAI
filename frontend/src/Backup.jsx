import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './ContactEntry'
import EduEntry from './EduEntry'
import ExperienceEntry from './ExperienceEntry'
import { InputGroup, Form, Button,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Backup() {
    return(
        <div>
            <Form.Group className=""  controlID="formGridDescription" >
                <InputGroup>
                    <InputGroup.Text id="addon4">Description</InputGroup.Text>
                    <Form.Control 
                        rows = "10"
                        type="text" 
                        as = "textarea"
                        placeholder="Name, Personal Description, Contact Info, Education Info, Experience, Projects, Volunteering, etc."
                    />
                </InputGroup>
            </Form.Group>

            <Link to="/joblisting">
                <Button className="mb-3" variant="outline-secondary">Submit Resume</Button>
            </Link>
        </div>
    );
}
export default Backup
