import React from 'react';
import './collection-item.styles.scss';
// import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='coolection-footer'>
            <span className='name'>{name}</span>
            <br/>
            <span className='price'>Price: {price}</span>
        </div>
    </div>
);

export default CollectionItem;