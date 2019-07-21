import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from "react-router-dom";
import { Redirect } from 'react-router';
import Signup from './views/Signup'
import Login from './views/Login'
import OrderSummary from './views/OrderSummary'
import Eatnow from './views/eatnow/Eatnow';
import Eatnow2 from './views/eatnow/Eatnow2';
import Mealpage from './views/eatnow/Mealpage';
import configureStore from './store/ConfigureStore';
import Dashboard from './views/Dashboard';
import MyAccount from './views/MyAccount';
import SubscriptionDetails from './views/subscription/SubscriptionDetails';

import Subscription from './views/subscription/Subscription';
const store = configureStore();

function PrivateRoute ({component: Component, authed, ...rest}){
  return(
    <Route 
      {...rest}
      render={(props) => window.localStorage.jwtToken === undefined
       ? <Redirect to={{pathname: '/login',state: {from:props.location}}} />
       : <Component {...props} />
      } />
  )
}

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/signup" component= {Signup} />
        <Route exact path="/login" component= {Login} />
        {/* <Route path="/eat" component= {Subscription} /> */}
        <Route path="/dashboard" component= {Dashboard} />
        <Route path="/account" component= {MyAccount} />
        <PrivateRoute path="/checkout/:id" component= {OrderSummary} />
        <PrivateRoute path="/checkoutmeal/:id" component= {OrderSummary} />
        <Route exact path="/subscription/details/:id" component= {SubscriptionDetails} />
        <Route path="/eat/subscription" component= {Subscription} />
        <Route exact path="/eat/eatnow" component= {Eatnow} />
        <Route exact path="/eatnow/mealpage/:id" component= {Mealpage} />
        <Route exact path="/eatnowpage2" component= {Eatnow2} />
      </div>
    </Router>
  </Provider> 
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
