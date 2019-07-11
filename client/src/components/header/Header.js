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
    logout:{
        position: "absolute",
        right: "2%"
    }
    
})

class Header extends React.Component {
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
                       <MenuItem className={classes.horizontalmenu}>
                       <Link href='/eat' className={classes.link}>
                        EAT
                       </Link>
                       </MenuItem>
                       <MenuItem className={classes.horizontalmenu} Component={Link} to="/consultation">
                       <Link href='/consultation' className={classes.link}>
                        DIET CONSULTATION
                        </Link>
                      </MenuItem>
                    </MenuList>
                    <Button className = "logout" onClick={this.props.logout}>Logout</Button>
                </Toolbar>
            </AppBar>

        )
    }
}

export default withStyles(styles)(Header);