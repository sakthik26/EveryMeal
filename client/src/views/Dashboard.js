"use strict";

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';

import Page from '../components/page/Page';
import ConsumptionGraph from '../components/charts/Chart';
import Select from '../components/buttons/SimpleSelect';
import AddMealButton from '../components/buttons/DialogButton';
import ProgressCircle from '../components/charts/ProgressCircle';

const styles = theme => ({
    main: {
        padding: 24,
    },
})

export class Dashboard extends React.Component {
    render() {
        const { classes } = this.props;

        //TODO: Change months such that it reflects month available in api response
        const months = [{ id: 201906, name: "June 2019" }, { id: 201905, name: "May 2019" }, { id: 201904, name: "April 2019" }, { id: 201903, name: "March 2019" }]

        return (
            <Page>
                <Grid className={classes.main} container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Food Consumption</h1>

                        <Grid item>
                            <Box my={5}>
                                {/*TODO: Pass propper onchange function such that api call for graph gets updated*/}
                                <Select months={months} />
                                <ConsumptionGraph />
                            </Box>
                        </Grid>
                        <Grid item>
                            <AddMealButton label="+ Add meal"/>
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