import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const RequirAuth = ({chidren}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    console.log(user);

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />
    }
    return Children;
};

export default RequirAuth;