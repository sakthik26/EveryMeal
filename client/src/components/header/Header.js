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

const styles = theme => ({
    appbar: {
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
})

class Header extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <img className={classes.logo} src={logo} alt="logo" />
                    <Tabs className={classes.tabs}>
                        <Tab label="Eat" />
                        <Tab label="Diet Consultation" />
                    </Tabs>
                    <Button>Sign Up</Button>
                    <Button>Login</Button>
                </Toolbar>
            </AppBar>

        )
    }
}

export default withStyles(styles)(Header);