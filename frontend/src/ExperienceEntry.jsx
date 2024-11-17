import { useState } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExperienceEntry(props) {
    /* experience title
     * month/year & current vs end date toggle
     * description box
     * skill box 
     */

    return (
        
        <div className="experience-entry-group">
            <header className = "header">
            </header>

            <Form>
                <Row>
                    <Form.Group className=""  controlID="formGridTitle" >
                        <InputGroup>
                            <InputGroup.Text id="addon1">{props.name}</InputGroup.Text>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Job Title, etc..."
                                />
                        </InputGroup>
                    </Form.Group>
                </Row>

            </Form>
        </div>
    )
}

export default ExperienceEntry