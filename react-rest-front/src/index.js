import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './user/signup';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import SignIn from './user/signin';
import Header from './Header';
import View from './View';
import ShoppingCart from './Shop/ShoppingCart';
import Shop from './Shop/Shop';
import'./App.css';

ReactDOM.render((
  <Router history = {browserHistory}>
      <Route path ="/" component ={Header}>
        <IndexRoute component ={SignUp}/>

        <Route path ="/index" component={Shop} />
        <Route path ="/user/signin" component={SignIn} />
        <Route path ='/view/:strains'  component={View} />
        <Route path='/shoppingcart' component={ShoppingCart} />
      </Route>
    </Router>
  ), document.getElementById('root')
);
