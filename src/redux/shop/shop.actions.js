import ShopActionTypes from './shop.actionTypes';

export const updateCollections = collectionMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
});