import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    footer: {
        backgroundColor: '#303030',
        color: '#FFF',
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: '100px',
        textAlign: 'center',
    },
})

class Footer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.footer}>
                <Box py={5}>
                <p>© {new Date().getFullYear()} EveryMeal. All rights reserverd.</p>
                </Box>
            </div>

        )
    }
}

export default withStyles(styles)(Footer);