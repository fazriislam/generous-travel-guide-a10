// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdQlQkLTs3HpkZHV-Dday1WEtlvlBfNII",
    authDomain: "generous-travel-guide.firebaseapp.com",
    projectId: "generous-travel-guide",
    storageBucket: "generous-travel-guide.appspot.com",
    messagingSenderId: "556033698565",
    appId: "1:556033698565:web:5b99281e6ab699ede8656c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;