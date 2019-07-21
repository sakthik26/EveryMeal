import React from 'react';
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
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import UserService from '../services/UserService';
import Header from '../components/header/Header';
function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      
    </Typography>
  );
}

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



class SignUp extends React.Component {
 
constructor(props){
  super(props);
  this.state = {
    error:"",
    firstname:"",
    lastname:"",
    email:"",
    password:""
  };
  this.handleSignup = this.handleSignup.bind(this);
  this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
  this.handleChangeLastName = this.handleChangeLastName.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
}

handleChangeFirstName(event) {
  this.setState({firstname:event.target.value});
}
handleChangeLastName(event) {
  this.setState({lastname:event.target.value});
}
handleChangeEmail(event) {
  this.setState({email:event.target.value});
}
handleChangePassword(event) {
  this.setState({password:event.target.value});
}

handleSignup(event){
       event.preventDefault();
      let user = {
        firstname : this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      }
      UserService.register(user.firstname, user.lastname,user.email,user.password).then((data) => {
        this.props.history.push('/eat/eatnow');
        //window.location.reload()
      }).catch((e) => {
        this.setState({
            error: e
        });
      })
}
  
render(){
  const {classes} = this.props;
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
          Sign up
        </Typography>
        <form onSubmit={this.handleSignup} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value = {this.state.firstname}
                onChange={this.handleChangeFirstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastname"
                value = {this.state.lastname}
                onChange={this.handleChangeLastName}
                autoComplete="lname"
              />
            </Grid>
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
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
              Already have an account?
              </Link>
              
            </Grid>
          </Grid>
         <div className={classes.error}> {this.state.error} </div>
        </form>
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
    </div>
  );}
}

export default withStyles(styles)(SignUp);