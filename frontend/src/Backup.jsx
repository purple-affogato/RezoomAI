import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './ContactEntry'
import EduEntry from './EduEntry'
import ExperienceEntry from './ExperienceEntry'
import { InputGroup, Form, Button,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap'
import mainLogo from '/RezoomAI-main-whitebg.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Backup() {
    return(
        <div>

            <Navbar className="bg-body-tertiary" style={{backgroundColor: '#6383d4'}} >
                <div className="col-md-1">
                    <Navbar.Brand href="#home">
                    <img src={mainLogo} className="logo RezoomAI" alt="RezoomAI main logo"/>
                    </Navbar.Brand>
                </div>
                <div className="col-md-9"></div>
                <div className="col-md-2">
                    <Link to="/">
                    <Button className="md-5" variant="outline-secondary">Sign Out</Button>
                    </Link>
                </div>
            </Navbar>

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
