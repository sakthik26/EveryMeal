import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import Signup from './UserManagement/signup'
import configureStore from './Store/configureStore';
import SubscriptionDetails from './Subscription/subscriptionDetails'

const store = configureStore();

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component= {App} />
        <Route path="/signup" component= {Signup} />
        <Route path="/details" component= {SubscriptionDetails} />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
