import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import { withStyles } from '@material-ui/styles';

/* Defining the basic layout of the application */
const styles = makeStyles(theme => ({
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


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ""}
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    }

    handleHeaderChange() {
      this.setState({
        value: '1'
      });
    }
  render(){
    
    return (
      <div>
      
      </div>
    );
   }
}

export default withStyles(styles)(App);
