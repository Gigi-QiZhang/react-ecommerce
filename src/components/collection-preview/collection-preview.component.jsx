import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
// import ShopPage from '../../pages/shop/shop.component';

const CollectionPreview = ({ title, items }) => (
    /* { items
    .filter((item, idx) => idx < 4)
    .map(item => (
        <div key={item.id}>{item.name}</div>
    ))
    } */
    <div className='collection-preview'>
        <h1 className='title'>
            { title.toUpperCase() }
        </h1>
        <div className='preview'>
            { items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />))
            }
        </div>
    </div>
);

export default CollectionPreview;
