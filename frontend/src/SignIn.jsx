import { useState } from 'react'
import { Button, Form, InputGroup } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom'



function SignIn() {
    return (
        <Form>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
                <Form.Text className = "text-muted">
                    We'll never share your email with anyone.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId = "formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <div style={{ marginTop: '20px' }}>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </div>
        </Form>
    )
}

export default SignIn;
