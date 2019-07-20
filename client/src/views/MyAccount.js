import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Page from '../components/page/Page';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
    main: {
        margin: 24,
    },
    leftIcon: {
        marginRight: theme.spacing(1),
      },
})


export class MyAccount extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Page>
                <Grid className={classes.main} container spacing={2}>
                    <Grid item xs={12}>
                    <h1>My Account</h1>
                        <h3>User Data</h3>
                        <h4>Delivery Addresses</h4>
                        <h4>Invoice Address</h4>
                        <h3>Recent Activity</h3>

                        <Button className={classes.deleteButton} variant="contained"><DeleteIcon className={classes.leftIcon}/>Delete Account</Button>

                    </Grid>
                </Grid>
            </Page>
        );
    }
}

export default withStyles(styles)(MyAccount); 