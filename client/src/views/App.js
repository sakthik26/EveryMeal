import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import logo from '../assets/images/everyMealLogo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignUp from './Signup.js';


/* Defining the basic layout of the application */
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


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
      <AppBar className={classes.appbar} position="static">
       <Toolbar> 
          <img className={classes.logo} src={logo} alt="logo" />
            <Tabs className={classes.tabs} value={value} onChange={handleChange}>
              <Tab label="Eat Now" />
              <Tab label="Subscribe" />
            </Tabs>
          <Button>Sign Up</Button>
          <Button>Login</Button>
       </Toolbar>
      </AppBar>
      {value === 0 && <TabContainer>Eat Now</TabContainer>}
      {value === 1 && <TabContainer>Subscribe</TabContainer>}
     
    </div>
  );
}

export default App;
