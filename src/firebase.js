import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCybPziMrgHA6v85h8ZZlyYveuS_M3Dg7E",
    authDomain: "rose-apothecary-store.firebaseapp.com",
    projectId: "rose-apothecary-store",
    storageBucket: "rose-apothecary-store.appspot.com",
    messagingSenderId: "36724422089",
    appId: "1:36724422089:web:174f65172b2e944b012418"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
