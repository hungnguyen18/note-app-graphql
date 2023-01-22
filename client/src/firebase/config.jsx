// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBIP7ml9yJa_nV-5Fp7GXfGCukH3fbQCLo',
    authDomain: 'note-app-ff768.firebaseapp.com',
    projectId: 'note-app-ff768',
    storageBucket: 'note-app-ff768.appspot.com',
    messagingSenderId: '291853307782',
    appId: '1:291853307782:web:773c108e97d75a825d6607',
    measurementId: 'G-99TF91KT9M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
