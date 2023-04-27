import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import '../Pages/Login';

function BasicExample() {
    const [emailAddress, setEmailAddress] = useState('');
    const element = [
        {label: 'Email Adderess', type:'email'},
        {label: 'First Name', type:'text'},
        {label: 'Password', type:'password'},
    ];

    return (
        <Form>
        {element.map((elem) =>{
            return (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{elem.label}</Form.Label>
                    <Form.Control type={elem.type} placeholder="EnterEmail" />
                </Form.Group>
            );
        })}
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <h3>Hi{emailAddress}</h3>
        <h3>Your First Name is {firstname}</h3>
        <h3>Your Password is {password}</h3>    
        </Form>
    );
}

export default BasicExample;
