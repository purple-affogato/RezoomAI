import { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExperienceEntry = forwardRef(({name}, ref) => {
    const [isUnchecked, setIsUnchecked] = useState(false);
    const [isCurr, setIsCurr] = useState("month");
    const title = useRef();
    // const

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
        <div className="mb-4">
            <Form>
                <Row>
                    <div className="col-md-6">
                        <Form.Group className=""  controlID="formGridHeader" >
                            <InputGroup>
                                <InputGroup.Text id="addon1">{name}</InputGroup.Text>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Senior Resume Writer, etc..."
                                        ref={title}
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
                                placeholder = "Now"
                            />
                            </InputGroup>
                        </div>  
                </Row>
                <Row>
                    <div className="row g-2 m-1">
                        <Form.Group className=""  controlID="formGridDescription" >
                            <InputGroup>
                                <InputGroup.Text id="addon4">Description</InputGroup.Text>
                                    <Form.Control 
                                        rows = "5"
                                        type="text" 
                                        as = "textarea"
                                        placeholder="What was it about?"
                                    />
                            </InputGroup>
                        </Form.Group>
                    </div>
                    <div className="row g-2 m-1">
                        <Form.Group className=""  controlID="formGridSkills" >
                            <InputGroup>
                                <InputGroup.Text id="addon5">Skills</InputGroup.Text>
                                    <Form.Control 
                                        rows = "1"
                                        type="text" 
                                        as = "textarea"
                                        placeholder="What did you use? What did you learn?"
                                    />
                            </InputGroup>
                        </Form.Group>
                    </div>
                </Row>
            </Form>
        </div>
    )
});

export default ExperienceEntry