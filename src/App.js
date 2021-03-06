import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import './App.css';
import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
// import { selectCollectionForPreview } from './redux/shop/shop.selector';
import { checkUserSession } from './redux/user/user.actions';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';
// import ContactPage from './pages/contact/contact.component';
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));




// changed to useEffect hook
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />

      <Header/> 

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}> 
          {/* <Suspense fallback={<div>...Loading</div>}>  */}
            {/* wrap a possible asynchronous operation */}
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route 
              exact path='/signin' 
              render={() => 
                currentUser ? (
                  <Redirect to='/'/>
                ) : (
                  <SignInAndSignUp/>
                )
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionForPreview
});


const mapDispatchToProps = dispatch => ({
// setCurrentUser: user => dispatch(setCurrentUser(user))
checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



// class App extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     currentUser: null
//   //   }
//   // } when use redux, mapDispatchToProps, do not need construtor
//   // can get state from store

//   unsubscribeFromAuth = null

//   // componentDidMount() {
//   //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
//   //     // this.setState({ currentUser: user });
//   //     createUserProfileDocument(user);
//   //     // console.log(user);
//   //   });
//   // }

  
//   componentDidMount() {
//     const { checkUserSession } = this.props;
//     checkUserSession();

//   //   // const { setCurrentUser, collectionsArray } = this.props;
//     // const { setCurrentUser } = this.props;
//   //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//   //     if (userAuth) {
//   //       const userRef = await createUserProfileDocument(userAuth);
//   //       // userRef.onSnapshot(snapShot => {
//   //       //   this.setState({
//   //       //     currentUser: {
//   //       //       id: snapShot.id,
//   //       //       ...snapShot.data()
//   //       //     }
//   //       //   }, () => {
//   //       //     console.log("this.state:", this.state);
//   //       //   })
//   //       // });
//   //       userRef.onSnapshot(snapShot => {
//   //         setCurrentUser({
//   //           id: snapShot.id,
//   //           ...snapShot.data()
//   //         });
//   //       });
//   //     }
//   //     // this.setState({ currentUser: userAuth });
//   //     setCurrentUser(userAuth);

//   //     // addCollecionAndDocuments('collections', collectionsArray);
//   //     // addCollecionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));

//   //   });
//   };


//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   };

//   render() {
//     return (
//       <div>
//         {/* <HomePage/> */}
//         {/* <Header currentUser={this.state.currentUser}/> */}
//         {/* use store to manage state */}
//         <Header/> 
//         <Switch>
//           <Route exact path='/' component={HomePage}/>
//           <Route path='/shop' component={ShopPage}/>
//           <Route exact path='/checkout' component={CheckoutPage}/>
//           <Route path='/contact' component={ContactPage}/>
//           <Route 
//             exact path='/signin' 
//             render={() => 
//               this.props.currentUser ? (
//                 <Redirect to='/'/>
//               ) : (
//                 <SignInAndSignUp/>
//               )
//             } 
//             // component={SignInAndSignUP}
//           />
//         </Switch>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });
// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser
//     // collectionsArray: selectCollectionForPreview
// });


// const mapDispatchToProps = dispatch => ({
//   // setCurrentUser: user => dispatch(setCurrentUser(user))
//   checkUserSession: () => dispatch(checkUserSession())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);


// const TopicsList = (props) => {
//   return (
//       <div>
//           <h1>TopicsList</h1>
//           <button onClick={() => props.history.push('/topics')}>History</button>
//           <br/>
//           {/* Dynamic routing with ${props.match.url} */}
//           <Link to={`${props.match.url}/7`}>To /topics/7</Link>
//           <br/>
//           <Link to={`${props.match.url}/27`}>To /topics/27</Link>
//       </div>
//   )
// }

// const TopicDetail = (props) => {
//   return (
//       <div>
//           <h1>TopicDetail: {props.match.params.topicId}</h1>
//       </div>
//   )
// }

// <Route exact path='/topics' component={TopicsList}/>
// <Route exact path='/topics/:topicId' component={TopicDetail}/>

