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
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log(userRef.path);
    // console.log(userRef.id);
    // const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    // console.log(snapShot);
    // const collectionSnapshot = await collectionRef.get();
    // console.log("collectionSnapshot", collectionSnapshot);
    // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });//{collection: Array(7)}

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
};

// add to componentDidMount for one time trigger
// add collections data of shop.data.js to firebase db
// after added data, remove codes from App.js
export const addCollecionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        //can pass in such as obj.title as the key, collectionRef.doc(obj.title)
        // otherwise will have random/unique string as the key
        // id: "TxhhIPb8SgsoUSY2SSIR"
        // path: "collections/TxhhIPb8SgsoUSY2SSIR"
        // console.log("newDocRef:",newDocRef);
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionSnapshot) => {
    const transformedCollection = collectionSnapshot.docs.map(docSnapshot => {
        const { title, items } = docSnapshot.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items
        };
    });
    // console.log("transformedCollection:",transformedCollection);
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ promt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);


// use sagas
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;