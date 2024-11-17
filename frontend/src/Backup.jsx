import { useEffect, useState, useRef } from 'react'
import {Routes, Route} from 'react-router-dom'
import ContactEntry from './ContactEntry'
import EduEntry from './EduEntry'
import ExperienceEntry from './ExperienceEntry'
import { InputGroup, Form, Button,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap'
import {Container, Nav, Navbar} from 'react-bootstrap';
import mainLogo from '/RezoomAI-main-whitebg.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Backup() {
    const [final, setFinal] = useState("")
    const data = useRef("")
    const jobd = useRef("")

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
                    <InputGroup.Text id="addon1">Description</InputGroup.Text>
                    <Form.Control 
                        rows = "10"
                        type="text" 
                        as = "textarea"
                        placeholder="Name, Personal Description, Contact Info, Education Info, Experience, Projects, Volunteering, etc."
                        ref={data}
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group className=""  controlID="formGridDescription" >
                <InputGroup>
                    <InputGroup.Text id="addon2">Job Listing</InputGroup.Text>
                    <Form.Control 
                        rows = "10"
                        type="text" 
                        as = "textarea"
                        placeholder="Copy-paste your target job listing here."
                        ref={jobd}
                    />
                </InputGroup>
            </Form.Group>

            <Button className="mb-3" variant="outline-secondary" onClick={()=>{
                const formdata = new FormData();
                formdata.append('data', data.current.value);
                formdata.append('jobd', jobd.current.value);
        
                const requestOptions = {
                    method: 'POST',
                    body: formdata
                };
                fetch("http://172.31.19.12:3000/generate_resume_backup", requestOptions)
                .then(response => response.json())
                .then((result) => {console.log(result); setFinal(result["final"])})
                .catch(error => console.log('error', error));
            console.log("yay")}}> 
                Submit Resume 
            </Button>
                <p>{final}</p>
        </div>
    );
}
export default Backup
