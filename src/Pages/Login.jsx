import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

const LoginPage = () => {
    const [username, setUserName] = useState('');

    return (
    <div style={{ width:600, margin: 'auto', marginTop: 40 }}>
        <h3>Log In</h3>
        
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Email" 
        onChange={(e) => setUserName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassowrd">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>   

        <Form.Group className="mb-3" controlId="formBasicCheckBox">
            <Form.Label>Password</Form.Label>
            <Form.Control type="checkbosx" placeholder="Check Me Out!" />
        </Form.Group> 
    
        <Button variant="primary" type="submit">
                Submit
            </Button>
        <h3>Hi! {username}</h3>
        </Form>
        </div>
    )
};

export default LoginPage;