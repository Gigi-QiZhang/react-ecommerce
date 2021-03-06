import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cart-dropdown.styles';


// import './cart-dropdown.styles.scss';

// const CartDropdown = () => (
//     <div className='cart-dropdown'>
//         <div className='cart-items'/>
//         <CustomButton>GO TO CHECKOUT</CustomButton>
//     </div>
// );

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
        </CartDropdownContainer>
);

// const CartDropdown = ({ cartItems, history, dispatch }) => (
//     // ({cartItems, history, ...otherProps})
//     // console.log(otherProps); //dispatch, location, match
//     // use dispatch here to avoid writting mapDispatchToProps
//     <div className='cart-dropdown'>
//         <div className='cart-items'>
//             { cartItems.length ? (
//                 cartItems.map(cartItem => (
//                     <CartItem key={cartItem.id} item={cartItem}/>
//                 ))
//             ) : (
//                 <span className='empty-message'>Your cart is empty</span>
//             )
//         }
//         </div>
//         <CustomButton 
//             onClick={() =>  {
//                 history.push('/checkout');
//                 dispatch(toggoleCartHidden());
//             }}
//         >
//             GO TO CHECKOUT
//         </CustomButton>
//     </div>
// );

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

// improve performances by preventing rerender
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// }); 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));