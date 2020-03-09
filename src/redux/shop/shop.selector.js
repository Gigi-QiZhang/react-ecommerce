import { createSelector } from 'reselect';

// data normalization, mapped in shop.data.js 
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// };

const selectShop = state => state.shop;

export const selectCollections= createSelector(
    [selectShop],
    shop => shop.collections
);

// convert object to array (refactor for shop.data.js)
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    // collections => Object.keys(collections).map(key => collections[key])
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);


export const selectCollection = collectionUrlParam => createSelector(
        [selectCollections],
        // collections => collections[collectionUrlParam] // refactored 
        // collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
        collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
    // !!0 => false; !!'' => false; !!null => fasle; !!{} => true
);