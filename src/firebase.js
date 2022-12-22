import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBfdO1Sk95USYL8UtfCu7i0A69IOcYdebk",
    authDomain: "rose-apothecary.firebaseapp.com",
    projectId: "rose-apothecary",
    storageBucket: "rose-apothecary.appspot.com",
    messagingSenderId: "902096771417",
    appId: "1:902096771417:web:1d2ef63d010fac2829d448"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
