import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggoleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-ican.styles.scss';

const CartIcon = ({ toggoleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggoleCartHidden }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) => 
//             accumulatedQuantity + cartItem.quantity, 0)
// });

// const mapStateToProps = (state) => ({
//     itemCount: selectCartItemsCount(state)
// });
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggoleCartHidden: () => dispatch(toggoleCartHidden())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
