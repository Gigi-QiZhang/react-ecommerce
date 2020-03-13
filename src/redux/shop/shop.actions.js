import ShopActionTypes from './shop.actionTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// return an action object
// export const updateCollections = collectionMap => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionMap
// });

// if redux-thunk middleware is enabled, any time you attempt to 
// dispatch a function instead of an object, the middleware will 
// call that function with dispatch mehod itself as the first argument.

// return functions
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// asynchonous action creator
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionMap));
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.massage)));  
    }
};

