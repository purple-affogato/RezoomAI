import { useState } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExperienceEntry(props) {
    const [isUnchecked, setIsUnchecked] = useState(false);
    const [isCurr, setIsCurr] = useState("month");

    const handleCheckboxChange = () => {
        setIsUnchecked(!isUnchecked);
        currChecked();
      };

    const currChecked = () => {
        if(isUnchecked) {
            setIsCurr("month");  
        } else {
            setIsCurr("text");
        }
      };
    /* experience title
     * month/year & current vs end date toggle
     * description box
     * skill box 
     */

    return (
        <div className="col">
            <Form>
                <Row>
                    <div className="col-md-6">
                        <Form.Group className=""  controlID="formGridTitle" >
                            <InputGroup>
                                <InputGroup.Text id="addon1">{props.name}</InputGroup.Text>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Your Title, Your Project, etc..."
                                    />
                            </InputGroup>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <InputGroup> 
                        <InputGroup.Text id="addon2">Current? </InputGroup.Text>
                        <InputGroup.Checkbox
                            checked={isUnchecked}
                            onChange={handleCheckboxChange}
                        />
                        <InputGroup.Text id="addon3">Duration</InputGroup.Text>
                            <Form.Control 
                                type="month" 
                            />
                            <Form.Control 
                                type={isCurr}
                                placeholder = "Current"
                            />
                            </InputGroup>
                        </div>  
                </Row>
                <Row>
                    <div className="row g-2 m-1">
                        <Form.Group className=""  controlID="formGridTitle" >
                            <InputGroup>
                                <InputGroup.Text id="addon4">Description</InputGroup.Text>
                                    <Form.Control 
                                        rows = "5"
                                        type="text" 
                                        as = "textarea"
                                        placeholder="Tell us about your project? What did you learn? What did you use?"
                                    />
                            </InputGroup>
                        </Form.Group>
                    </div>
                </Row>
            </Form>
        </div>
    )
}

export default ExperienceEntry