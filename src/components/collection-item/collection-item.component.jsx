import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage
                // className='image'
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <br />
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>Add To Cart</AddButton>
        </CollectionItemContainer>
)};

// import CustomButton from '../custom-button/custom-button.component';
// import './collection-item.styles.scss';
// import CollectionPreview from '../collection-preview/collection-preview.component';

// const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
//     <div className='collection-item'>
//         <div
//             className='image'
//             style={{
//                 backgroundImage: `url(${imageUrl})`
//             }}
//         />
//         <div className='collection-footer'>
//             <span className='name'>{name}</span>
//             <br/>
//             <span className='price'>${price}</span>
//         </div>
//         <CustomButton inverted>Add To Cart</CustomButton>
//     </div>
// );
// const CollectionItem = ({ item, addItem }) => {
//     const { id, name, price, imageUrl } = item;
//     return (
//         <div className='collection-item'>
//             <div
//                 className='image'
//                 style={{
//                     backgroundImage: `url(${imageUrl})`
//                 }}
//             />
//             <div className='collection-footer'>
//                 <span className='name'>{name}</span>
//                 <br/>
//                 <span className='price'>${price}</span>
//             </div>
//             <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
//         </div>
// )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) // pass 'item' to payload
    // need to add 'addItem' to const CollectionItem = ({ id, name, price, imageUrl, addItem }) 
})

export default connect(null, mapDispatchToProps)(CollectionItem);