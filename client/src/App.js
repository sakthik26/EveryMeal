"use strict";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import logo from './images/everyMealLogo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignUp from './views/Signup.js';
import TabContainer from './components/tabcontainer/TabContainer.js'
import './App.css';
import Subscription from './views/subscription/Subscription'
import Header from './components/header/Header';

/* Defining the basic layout of the application */
const useStyles = makeStyles(theme => ({
  appbar:{
    backgroundColor: '#FFFF',
    color: 'rgba(0, 0, 0, 0.87)'
  },
  logo: {
    width: '75px',
    height: '50px',
  },
  tabs: {
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Header/>
       <Subscription/>
    
    </div>
  );
}

export default App;
