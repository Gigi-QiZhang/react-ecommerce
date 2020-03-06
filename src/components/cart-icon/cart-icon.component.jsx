import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggoleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-ican.styles.scss';

const CartIcon = ({ toggoleCartHidden }) => (
    <div className='cart-icon' onClick={ toggoleCartHidden }>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

// const mapStateToProps 
const mapDispatchToProps = dispatch => ({
    toggoleCartHidden: () => dispatch(toggoleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
