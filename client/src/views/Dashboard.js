import React from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';

import Page from '../components/page/Page';
import ConsumptionGraph from '../components/charts/Chart';
import Select from '../components/buttons/SimpleSelect';
import AddMealDialog from '../components/dialogs/AddMealDialog';
import ProgressCircle from '../components/charts/ProgessCircle';
import Legend from '../components/charts/Legend'

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
            { index: 0, name: "Fats", value: 0.8, url: Fats },
            { index: 1, name: "Proteins", value: 0.6, url: Proteins },
            { index: 2, name: "Carbohydrates", value: 0.7, url: Carbs }]

        const micronutrients = [
            { index: 0, name: "Iron", value: 0.4, url: Iron },
            { index: 1, name: "Calcium", value: 0.633, url: Calcium },
            { index: 2, name: "Selenium", value: 0.211, url: Selenium }]

        return (
            <Page>
                {window.localStorage['jwtToken'] === undefined ?
                    <Redirect to='login' />
                    :
                    <Grid className={classes.main} container spacing={2}>
                        <Grid item xs={12}>
                            <h1>Food Consumption</h1>

                            <Grid container className={classes.graphButtons} item sm={12} md={8} xl={6} justify="space-between">
                                <Grid item>
                                    <ButtonGroup variant="contained" size="small">
                                        <Button>Weekly</Button>
                                        <Button disabled>Monthly</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item>
                                    <AddMealDialog label="+ Add meal" />
                                </Grid>
                            </Grid>

                            <Grid item xl={6} md={8} sm={12}>
                                <Box my={5}>
                                    {/*TODO: Pass propper onchange function such that api call for graph gets updated*/}
                                    <Select months={months} />
                                    <ConsumptionGraph />
                                    <Legend />
                                </Box>
                            </Grid>

                        </Grid>

                        <Grid item xs={12} md={6} xl={3}>
                            <h2>Macronutrients</h2>
                            <Grid container spacing={10}>
                                {macronutrients.map(item => (
                                    <Grid key={item.index} item xs={12} sm={4}>
                                        <ProgressCircle label={item.name} percentage={item.value} url={item.url} />
                                    </Grid>
                                ))}
                            </Grid>

                        </Grid>

                        <Grid item xs={12} md={6} xl={3}>
                            <h2>Micronutrients</h2>
                            <Grid container spacing={2}>
                                {micronutrients.map(item => (
                                    <Grid key={item.index} item xs={12} sm={4}>
                                        <ProgressCircle label={item.name} percentage={item.value} url={item.url} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                    </Grid>}
            </Page>
        );

    }
}

export default withStyles(styles)(Dashboard); 