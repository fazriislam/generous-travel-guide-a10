import React from 'react';
import { signOut } from "firebase/auth";
import auth from '../../firebase.init';
import { Button } from 'react-bootstrap';

const Signout = () => {
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <div>
            <Button onClick={handleSignOut}>Sign out</Button>
        </div>
    );
};

export default Signout;