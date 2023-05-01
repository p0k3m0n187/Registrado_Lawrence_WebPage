import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
// import Form from '../Components/Form';

function LoginPage() {
    
    const [emailAddress, setEmailAddress] = useState('');

    
    const element = [
        {label: 'Email Address', type:'email'},
        {label: 'First Name', type:'text'},
        {label: 'Password', type:'password'},
    ];
    return (
        <>
        
        <Form>
        <div style={{ width:600, margin: 'auto', marginTop: 40 }}>
        <h3>Log In</h3>
        {element.map((elem) =>{
            return (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{elem.label}</Form.Label>
                    <Form.Control type={elem.type} placeholder=".........."
                    onChange={(e) => setEmailAddress(e.target.value)}/>
                </Form.Group>
            );  
        })}
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <h3>Hi! {emailAddress}</h3>
        </div>
        </Form>
        </>
    );
}

export default LoginPage;