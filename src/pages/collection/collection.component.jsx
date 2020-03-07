import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

// const CollectionPage = ({ match }) => {
//     // console.log("collection:",collection);
//     console.log('match.params.collectionId:', match);
//     return (
//         <div className='collection-page'>
//             <h1>CollectionPage ~~~~~~~</h1>
//         </div>
// )};

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
)};


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

// import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

// import { selectCollection } from '../../redux/shop/shop.selector';

// import './collection.styles.scss';

// const CollectionPage = ({ collection }) => {
//     console.log("collection:",collection);
//     // console.log(match.params.collectionId)
//     return (
//     <div className='collection-page'>
//         <h2>CollectionPage page~~~~~~~</h2>
//     </div>
// )};

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

// export default connect(mapStateToProps)(CollectionPage);
