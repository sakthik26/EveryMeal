"use strict";

import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    footer: {
        backgroundColor: '#303030',
        color: '#FFF',
        bottom: 0,
        left: 0,
        right: 0,
        position: 'static',
        minHeight: '100px',
        textAlign: 'center',
    },
})

class Footer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footer}>
                <p>© {new Date().getFullYear()} EveryMeal. All rights reserverd.</p>
            </div>

        )
    }
}

export default withStyles(styles)(Footer);