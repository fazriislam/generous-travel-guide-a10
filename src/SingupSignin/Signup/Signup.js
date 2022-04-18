import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Signup = () => {
    return (
        <div className='w-50 mt-5 mx-auto'>
            <h2 className='text-center text-primary'>Generous Travel Guide</h2>
            <Form className='border p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>
        </div >
    );
};

export default Signup;