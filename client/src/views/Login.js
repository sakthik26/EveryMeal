import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import UserService from '../services/UserService';
import Header from '../components/header/Header';
import { Redirect } from 'react-router';
import MySnackbarContentWrapper from '../components/snackbar/SnackBar';
import Snackbar from '@material-ui/core/Snackbar';

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
  error:{
    color:'red',
    marginTop:'1%'
  }
});



class Login extends React.Component {
 
constructor(props){
  super(props);
  this.state = {
    error:"",
    email:"",
    password:"",
    redirectToReferrer: false,
    openSnack: false,
  };
  this.handleLogin = this.handleLogin.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleSnackClose = this.handleSnackClose.bind(this);
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
        this.setState({
           error:e
        });
      })
}

handleSnackClose(e,reason){
  if (reason === 'clickaway') {
      return;
    }

    this.setState({openSnack:false});

}
  
render(){
  const {classes} = this.props;
  const {from} = this.props.location.state ? this.props.location.state  : {from:{pathname:'/eat/eatnow'}}

  if(this.state.redirectToReferrer === true){
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
    </Container>
    </div>
  );}
}

export default withStyles(styles)(Login);