import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
// import Form from '../Components/Form';

function RegisterPage() {
    const [emailAddress, setEmailAddress] = useState('');

    
    const element = [
        {label: 'Email Address', type:'email'},
        {label: 'First Name', type:'text'},
        {label: 'Last Name', type:'text'},
        {label: 'Password', type:'password'},
        {label: 'Occupation', type:'text'},
        
    ];
    return (
        <>
        
        <Form>
        <div style={{ width:600, margin: 'auto', marginTop: 40 }}>
        <h3>REGISTER</h3>
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
        <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
        </p>
        <h3>Hi! {emailAddress}</h3>
        </div>
        </Form>
        </>
    );
}

export default RegisterPage;