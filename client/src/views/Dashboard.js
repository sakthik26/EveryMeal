"use strict";

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Page from '../components/page/Page';

const styles = theme => ({
    main: {
        padding: 24,
    },
})

export class Dashboard extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Page>
                <Grid className={classes.main} container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Food Consumption</h1>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h1>Macronutrients</h1>
                    </Grid>

                    <Grid item md={6}>
                        <h1>Micronutrients</h1>
                    </Grid>
                </Grid>
            </Page>
        );

    }
}

export default withStyles(styles)(Dashboard); 