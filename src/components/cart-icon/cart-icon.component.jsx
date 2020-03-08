import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// import './cart-ican.styles.scss';

// const CartIcon = ({ toggleCartHidden, itemCount }) => (
//     <div className='cart-icon' onClick={ toggleCartHidden }>
//         <ShoppingIcon className='shopping-icon'/>
//         <span className='item-count'>{itemCount}</span>
//     </div>
// )

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
    toggleCartHidden: () => dispatch(toggleCartHidden())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
