"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import axios from 'axios';
import { withStyles } from '@material-ui/styles';
import { withRouter } from "react-router-dom";
import UserService from '../Services/UserService';
import Header from '../components/header/Header';
import { Redirect } from 'react-router';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
  paper: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: '10%',
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: '10%',
  },
});



class Login extends React.Component {
 
constructor(props){
  super(props);
  this.state = {
    error:"",
    email:"",
    password:"",
    redirectToReferrer: false
  };
  this.handleLogin = this.handleLogin.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
}

handleChangeEmail(event) {
  this.setState({email:event.target.value});
}
handleChangePassword(event) {
  this.setState({password:event.target.value});
}

handleLogin(event){
       event.preventDefault();
      let user = {
        email: this.state.email,
        password: this.state.password
      }
      UserService.login(user.email,user.password).then((data) => {
        this.setState({redirectToReferrer: true})
        //this.props.history.push('/eat');
        //window.location.reload()
      }).catch((e) => {
        console.error(e);
        this.setState({
            error: e
        });
      })
}
  
render(){
  const {classes} = this.props;
  const {from} = this.props.location.state ? this.props.location.state  : {from:{pathname:'/eat'}}

  if(this.state.redirectToReferrer == true){
    return <Redirect to={from} />
  }
 
  return (
    <div>
    <Header/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" container justify='center'>
          Login
        </Typography>
        <form onSubmit={this.handleLogin} className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value = {this.state.email}
                onChange={this.handleChangeEmail}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                value = {this.state.password}
                onChange={this.handleChangePassword}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
         <div className={classes.error}> {this.state.error} </div>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    </div>
  );}
}

export default withStyles(styles)(Login);