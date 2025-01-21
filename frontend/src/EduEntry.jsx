import { useState, useRef, useImperativeHandle, forwardRef } from 'react'
import { Button, Dropdown,Form } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';


const EduEntry = forwardRef(({}, ref) => {
    const inst = useRef();
    const deg = useRef();
    const gyr = useRef();

    useImperativeHandle(
        ref,
        () => ({
            getInputValue: () => {inst.current.value, deg.current.value, gyr.current.value}
        })
    );

    return(
        <Form>
            <InputGroup className="mb-3">
            <InputGroup.Text>Education</InputGroup.Text>
            <Form.Control type="text" placeholder="Institution" ref={inst}/>
            <Form.Control type="text" placeholder="Degree" ref={deg}/>
            <Form.Control type="text" placeholder="Grad Year" ref={gyr}/>
            </InputGroup>
        </Form>
    );


});
export default EduEntry