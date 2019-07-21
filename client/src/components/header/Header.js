"use strict";

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../images/everyMealLogo.png";
import everymeal from "../../images/everymeal.png";
import {
  AppBar,
  Toolbar,
  Button,
  MenuList,
  MenuItem
} from "@material-ui/core/";
import { Link } from "react-router-dom";
import UserService from "../../Services/UserService";
import UserMenu from "./UserMenu";

const styles = theme => ({
  appbar: {
    backgroundColor: "#FFFF",
    color: "rgba(0, 0, 0, 0.87)"
  },
  title: {
    minWidth: "100px",
    maxWidth: "100px",
    paddingTop: "5px"
  },
  logo: {
    width: "75px",
    height: "50px",
    cursor: "pointer"
  },
  link: {
    margin: theme.spacing(1)
  },
  horizontalmenu: {
    display: "inline-block"
  },
  menulist: {
    margin: "0 auto",
    paddingBottom: "0px"
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.logOut = this.logOut.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  handleChange() {
    this.setState({
      value: "1"
    });
  }

  logOut() {
    UserService.logout()
      .then(data => {
        window.location = "/login";
      })
      .catch(e => {
        window.location = "/login";
        console.error(e);
      });
  }

  login() {
    window.location = "/login";
    this.handleChange();
  }

  signup() {
    window.location = "/signup";
    this.handleChange();
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <a href="/eat/eatnow">
            <img className={classes.logo} src={logo} alt="logo" />
          </a>
          <img className={classes.title} src={everymeal} alt="everymeal" />
          {/* <Tabs className={classes.tabs}>
                        <Tab label="Eat" />
                        <Tab label="Diet Consultation" />
                    </Tabs> */}
          <MenuList className={classes.menulist}>
            <MenuItem
              className={classes.horizontalmenu}
              component={Link}
              to="/eat/eatnow"
            >
              Eat
            </MenuItem>
            <MenuItem
              className={classes.horizontalmenu}
              component={Link}
              to="/consultation"
            >
              Diet Consultation
            </MenuItem>
          </MenuList>
          {window.localStorage["jwtToken"] === undefined ? (
            <div>
              <Button className="login" onClick={this.login}>
                Login
              </Button>
              <Button className="signup" onClick={this.signup}>
                Sign Up
              </Button>
            </div>
          ) : (
            <UserMenu />
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
