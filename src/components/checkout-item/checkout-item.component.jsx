import React from 'react';
import { connect } from 'react-redux';
// UTF-8 Dingbats
import { removeItemFromCart, addItem, substractItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem =({ cartItem, removeItem, addItem, substractItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt='item' src={imageUrl} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => substractItem(cartItem)}>&#10094;</div>
                    <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => removeItem(cartItem)}>&#10008;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    substractItem: item => dispatch(substractItem(item))
    // removeItem as a function, need to pass as a parameter
});

export default connect(null, mapDispatchToProps)(CheckoutItem);


// import './checkout-item.styles.scss';
// import { substractItemFromCart } from '../../redux/cart/cart.utils';

// const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
// const CheckoutItem =({ cartItem, removeItem, addItem, substractItem }) => {
//     const { name, imageUrl, price, quantity } = cartItem;
//     return (
//         <div className='checkout-item'>
//             <div className='image-container'>
//                 <img alt='item' src={imageUrl} />
//             </div>
//             <span className='name'>{name}</span>
//             <span className='quantity'>
//                 <div className='arrow' onClick={() => substractItem(cartItem)}>&#10094;</div>
//                     <span className='value'>{quantity}</span>
//                 <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
//             </span>
//             <span className='price'>{price}</span>
//             <span className='remove-button' onClick={() => removeItem(cartItem)}>&#10008;</span>
//         </div>
//     );
// };