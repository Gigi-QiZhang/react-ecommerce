import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsPage from '../collection/collection.component';
import { ShopPageContainer } from './shop.styles';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);

// const ShopPage = ({ match }) => (
//     <ShopPageContainer>
//         <Route exact path={`${match.path}`} component={CollectionsOverview} />
//         <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
//     </ShopPageContainer>
// );
class ShopPage extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         loading: true
    //     }
    // }
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    // Obeservable pattern, subscribe to stream of data
    // componentDidMount() {
    //     const { updateCollections } = this.props;
    //     const collectionRef = firestore.collection('collections');
    //     this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //         // console.log("snapshot:", snapshot);
    //         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //         // console.log("collectionMap:", collectionMap);
    //         updateCollections(collectionMap);
    //         this.setState({ loading: false });
    //     });
    // };

    // Promise pattern
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        });

        // can use fetch method to get deeply nested response object
        // fetch('https://firestore.googleapis.com/v1/projects/ecommerce-db-b5c9e/databases/(default)/documents/collections')
        //     .then(response => response.json()
        //     .then(collections => console.log(collections)
        // ));
          
    }

   

    render () {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <ShopPageContainer>
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
                <Route exact path={`${match.path}`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionsPage} /> */}
                <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionsPageWithSpinner isLoading={loading} {...props} />)} />
            </ShopPageContainer>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);

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