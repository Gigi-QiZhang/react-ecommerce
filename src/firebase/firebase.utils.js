import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2VIb66OOR4ahL4Opei3Nvd_qWvgMLewQ",
    authDomain: "ecommerce-db-b5c9e.firebaseapp.com",
    databaseURL: "https://ecommerce-db-b5c9e.firebaseio.com",
    projectId: "ecommerce-db-b5c9e",
    storageBucket: "ecommerce-db-b5c9e.appspot.com",
    messagingSenderId: "1040344686449",
    appId: "1:1040344686449:web:7562392b46f8b80ee560d0",
    measurementId: "G-51FZR5TD11"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;