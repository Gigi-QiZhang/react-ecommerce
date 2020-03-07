import CartActionTypes from './cart.actionTypes';

export const toggoleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

export const substractItem = item => ({
    type: CartActionTypes.SUBSTRACT_ITEM,
    payload: item
});
