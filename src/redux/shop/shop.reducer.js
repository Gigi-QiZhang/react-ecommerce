// import SHOP_DATA from './shop.data';
// data moved to backend

import ShopActionTypes from './shop.actionTypes';

// const INITIAL_STATE = {
//     collections: SHOP_DATA
// };
const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;