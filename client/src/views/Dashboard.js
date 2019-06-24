"use strict";

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';

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

                        <Grid item>
                            <Box my={5}>
                                Graph
                            </Box>
                        </Grid>
                        <Grid item>
                            <Button size="small" variant="contained" >+ Add meal</Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h1>Macronutrients</h1>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h1>Micronutrients</h1>
                    </Grid>
                    <Grid className={classes.graphButtons} item xs={12}>
                        <Grid item>
                            <ButtonGroup variant="contained" size="small">
                                <Button>Weekly</Button>
                                <Button disabled>Monthly</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Page>
        );

    }
}

export default withStyles(styles)(Dashboard); 