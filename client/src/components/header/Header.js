"use strict";

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import logo from '../../images/everyMealLogo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import UserService from '../../Services/UserService';

const styles = theme => ({
    appbar: {
        backgroundColor: '#FFFF',
        color: 'rgba(0, 0, 0, 0.87)'
    },
    logo: {
        width: '75px',
        height: '50px',
    },
    link: {
        margin: theme.spacing(1),
      },
    horizontalmenu:{
        display: "inline-block"
    },
    menulist:{
        margin: "0 auto",
        paddingBottom:"0px"
    },
    
})

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        value: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.logOut = this.logOut.bind(this)
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
    }
    handleChange() {
        this.setState({
          value: '1'
        });
      }

     logOut(){
        UserService.logout().then((data) => {
          window.location = "/login";
        }).catch((e) => {
          window.location = "/login";
          console.error(e);
        })
      }
      
     login(){
          window.location = "/login";
          this.handleChange()
      }
      
     signup(){
          window.location = "/signup";
          this.handleChange()
      }

    render() {
        const { classes } = this.props;

        return (
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <img className={classes.logo} src={logo} alt="logo" />
                    
                    
                    {/* <Tabs className={classes.tabs}>
                        <Tab label="Eat" />
                        <Tab label="Diet Consultation" />
                    </Tabs> */}
                   <MenuList className={classes.menulist}>
                       <MenuItem className={classes.horizontalmenu} component={Link} to="/eat">
                        Eat
                       </MenuItem>
                       <MenuItem className={classes.horizontalmenu} component={Link} to="/consultation">
                        Diet Consultation    
                      </MenuItem>
                    </MenuList>
                    {window.localStorage['jwtToken'] == undefined ?   
                    <div>
                        <Button className = "login" onClick={this.login}>Login</Button>
                        <Button className = "signup" onClick={this.signup}>Sign Up</Button> </div>
                    : 
                        <Button className = "logout" onClick={this.logOut}>Logout</Button>
                    }
                </Toolbar>
            </AppBar>

        )
    }
}

export default withStyles(styles)(Header);