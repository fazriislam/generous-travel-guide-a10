import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    // ----------------------Event Function

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    // const handleGoogleSignIn=e=>{
    //     signInWithGoogle();
    // }

    const handleSubmit = async e => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, user, email, password);
        console.log(user, email, password);
        navigate('/home');
    }

    return (
        <div className='w-50 mt-5 mx-auto'>
            <Form onSubmit={handleSubmit} className='border p-3'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
            <hr />
            <div className='mt-2 text-center'>
                <Button onClick={() => signInWithGoogle()}>Sign in with Google</Button>
            </div>
        </div>
    );
};

export default Signin;