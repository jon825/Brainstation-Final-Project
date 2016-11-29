import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SignUp from './user/signup';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import SignIn from './user/signin';
import Header from './Header';
import View from './View'

ReactDOM.render((
  <Router history = {browserHistory}>
      <Route path ="/" component ={Header}>
          <IndexRoute component ={App}/>

        <Route path ="/user/signup" component={SignUp} />
        <Route path ="/user/signin" component={SignIn} />
        <Route path ='/view/:strains'  component={View} />
      </Route>
    </Router>
  ), document.getElementById('root')
);
