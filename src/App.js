import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUP from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }
  // } when use redux, mapDispatchToProps, do not need construtor
  // can get state from store

  unsubscribeFromAuth = null

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
  //     // this.setState({ currentUser: user });
  //     createUserProfileDocument(user);
  //     // console.log(user);
  //   });
  // }
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot(snapShot => {
        //   this.setState({
        //     currentUser: {
        //       id: snapShot.id,
        //       ...snapShot.data()
        //     }
        //   }, () => {
        //     console.log("this.state:", this.state);
        //   })
        // });
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // this.setState({ currentUser: userAuth });
      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <HomePage/> */}
        {/* <Header currentUser={this.state.currentUser}/> */}
        {/* use store to manage state */}
        <Header/> 
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route 
            exact path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/'/>
              ) : (
                <SignInAndSignUP/>
              )
            } 
            // component={SignInAndSignUP}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);




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

