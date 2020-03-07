import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    return (
        <div className='collection-page'>
            <h1>CollectionPage ~~~~~~~</h1>
        </div>
)};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

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
