import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>
            <h2 className='my-5'> Difference between authorization and authentication</h2>
            <p>
                Authorization means give some extra more access to any user than normal user. Bu using this access the user can do extra more tasks than other user. One the other hand authentication is verifying someone's information is he/she a real user or not.
            </p>

            <h2 className='my-5'> Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>We use firebase for authentication. There are lots of company who provides authentication. Such as Prove MFA, DUO Access, HID Global IAM, ESET Secure Authentication, Ping Identity, TypingDNA.</p>

            <h2 className='my-5'> What other services does firebase provide other than authentication?</h2>
            <p className='mb-5'>Basically we are using firebase for website's authentication. But firebase provides more services such as Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config.</p>
        </div>
    );
};

export default Blogs;