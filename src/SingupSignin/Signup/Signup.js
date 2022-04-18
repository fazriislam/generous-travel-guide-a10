import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.init';

const Signup = () => {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [confirmPassword, setConfirmPassword] = useState([]);
    // const [error, setError] = useState([]);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const googleProvider = new GoogleAuthProvider();


    // --------------------------------Event Functions

    const handleNameBlur = e => {
        setName(e.target.value);
        console.log(name);
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePAsswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPAsswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    const handelGoogleSignUp = e => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                const errorMessage = error.message;
                const emailError = error.email;
            })
    }

    const handleSubmit = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(email, password);
        updateProfile({ name: name });
    }





    return (
        <div className='w-50 mt-5 mx-auto'>
            <h2 className='text-center text-primary'>Generous Travel Guide</h2>
            <Form onSubmit={handleSubmit} className='border p-3'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePAsswordBlur} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPAsswordBlur} type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>
            <hr />
            <div className='mt-2 text-center'>
                <Button onClick={handelGoogleSignUp}>Sign up with Google</Button>
            </div>
        </div >
    );
};

export default Signup;