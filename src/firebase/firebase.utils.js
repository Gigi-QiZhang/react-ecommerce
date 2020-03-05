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

// QueryReference and QuerySnapshot
// A query is a request we make to firestore to give us something from the database.
// Firestore returns us two types of objects: references and snapshots. 
// Of these objects, they can be either Document or Collection versions.
// Forestore will always return us these objects, even if nothing exists at from that query.
// A queryReference object is an object that represents the 
// "current" place in the database that we are querying.
// We get them by calling either:
// firestore.doc('/users/:userId');
// firestore.collections('/users');
// The queryReference object does not have the actual data of the collection or document.
// It instead has properties that tell us details about it, or the method to get the 
// Snapshot object which gives us the data we are looking for.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // console.log("userAuth:", userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}'`);
    const snapShot = await userRef.get();
    // console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error when creating user', error.message);
        }
    }

    return userRef;
    // console.log(firestore.doc('users/uuuuuuyggbnmkjsf'));
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;