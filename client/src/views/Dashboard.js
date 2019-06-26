"use strict";

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import logo from '../images/everyMealLogo.png';

import Page from '../components/page/Page';
import ConsumptionGraph from '../components/charts/Chart';
import Select from '../components/buttons/SimpleSelect';
import AddMealButton from '../components/buttons/DialogButton';
import ProgressCircle from '../components/charts/ProgessCircle';

import Fats from '../images/nutrients/fats.png'
import Proteins from '../images/nutrients/proteins.png'
import Carbs from '../images/nutrients/carbs.png'
import Iron from '../images/nutrients/iron.png'
import Calcium from '../images/nutrients/calcium.png'
import Selenium from '../images/nutrients/selenium.png'

const styles = theme => ({
    main: {
        margin: 24,
    },
})

export class Dashboard extends React.Component {
    render() {
        const { classes } = this.props;

        //TODO: Change months and nutrients such that it reflects data available in api response
        const months = [{ id: 201906, name: "June 2019" }, { id: 201905, name: "May 2019" }, { id: 201904, name: "April 2019" }, { id: 201903, name: "March 2019" }]
        const macronutrients = [
            { index: 0, name: "Fats", value: 0.75, url: Fats },
            { index: 1, name: "Proteins", value: 0.3, url: Proteins },
            { index: 2, name: "Carbohydrates", value: 0.2, url: Carbs }]

        const micronutrients = [
            { index: 0, name: "Iron", value: 0.11111, url: Iron },
            { index: 1, name: "Calcium", value: 0.89, url: Calcium },
            { index: 2, name: "Selenium", value: 0.32, url: Selenium }]

        return (
            <Page>
                <Grid className={classes.main} container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Food Consumption</h1>

                        <Grid container className={classes.graphButtons} item xs={12} md={6} xl={3} justify="space-between">
                            <Grid item>
                                <ButtonGroup variant="contained" size="small">
                                    <Button>Weekly</Button>
                                    <Button disabled>Monthly</Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item>
                                <AddMealButton label="+ Add meal" />
                            </Grid>
                        </Grid>

                        <Grid item >
                            <Box my={5}>
                                {/*TODO: Pass propper onchange function such that api call for graph gets updated*/}
                                <Select months={months} />
                                <ConsumptionGraph />
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={6} xl={3}>
                        <h2>Macronutrients</h2>
                        <Grid container>
                            {macronutrients.map(item => (
                                <Grid xs={4}>
                                    <ProgressCircle label={item.name} percentage={item.value} url={item.url} />
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>

                    <Grid item xs={12} md={6} xl={3}>
                        <h2>Micronutrients</h2>
                        <Grid container>
                            {micronutrients.map(item => (
                                <Grid xs={4}>
                                    <ProgressCircle label={item.name} percentage={item.value} url={item.url} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Page>
        );

    }
}

export default withStyles(styles)(Dashboard); 