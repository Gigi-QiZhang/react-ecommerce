import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsPage from '../collection/collection.component';
import { ShopPageContainer } from './shop.styles';

const ShopPage = ({ match }) => (
    <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
    </ShopPageContainer>
);

export default ShopPage;

// const ShopPage = ({ match }) => (
//     <div className='shop-page'>
//         <Route exact path={`${match.path}`} component={CollectionsOverview} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />

//         {/* <CollectionsOverview/> */}
//         {/* {collections.map(({ id, ...otherCollectionProps }) => (
//             <CollectionPreview key={id} {...otherCollectionProps}/>
//         ))} 
//         collections should be in the ({collections}) =>()
//         */}
//     </div>
// );

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// });
// moved to collections-overview.component.jsx
// export default connect(mapStateToProps)(ShopPage);





// const ShopPage = ({ match }) => {
//     // console.log('match:match:', match);
//     // {path: "/shop", url: "/shop", isExact: true, params: {…}}
//     //     path: "/shop"
//     //     url: "/shop"
//     //     isExact: true
//     return (
//         <div className='shop-page'>
//             <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
//             {/* <CollectionsOverview/> */}
//         </div>
// )};

// const ShopPage = ({ collections }) => (
//     <div className='shop-page'>
//         {collections.map(({ id, ...otherCollectionProps }) => (
//             <CollectionPreview key={id} {...otherCollectionProps}/>
//         ))}
//     </div>
// );



// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// });

// export default connect(mapStateToProps)(ShopPage);



// class ShopPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             collections: SHOP_DATA
//         };
//     }
//     render() {
//         const { collections } = this.state;
//         return (
//             <div className='shop-page'>
//                 {
//                     collections.map(({ id, ...otherCollectionProps }) => (
//                         <CollectionPreview key={id} {...otherCollectionProps}/>
//                     ))
//                 }
//             </div>
//         );
//     }
// }
// export default ShopPage;