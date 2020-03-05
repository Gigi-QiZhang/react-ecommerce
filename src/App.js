import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => {
  return (
    <div>
      <Link to='/hats'> 
        HATS
      </Link>
      <h1>HATS PAGE</h1>  
    </div>
  )
}

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;




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

