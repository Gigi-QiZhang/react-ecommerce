import CartActionTypes from './cart.actionTypes';
import { addItemToCart, substractItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                // 跟payload.id不同的cartItem.id都保留,即相当于删除id相同的cartItem
            };
        case CartActionTypes.SUBSTRACT_ITEM:
            return {
                ...state,
                cartItems: substractItemFromCart(state.cartItems, action.payload)
            };

        default:
            return state;
    }
}

export default cartReducer;