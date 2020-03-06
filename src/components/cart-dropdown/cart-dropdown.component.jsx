import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

// const CartDropdown = () => (
//     <div className='cart-dropdown'>
//         <div className='cart-items'/>
//         <CustomButton>GO TO CHECKOUT</CustomButton>
//     </div>
// );
const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

// improve performances by preventing rerender
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// }); 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);