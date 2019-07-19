import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const styles = theme => ({
    main: {
        "min-height": "1500px"
    } 
})

export class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
        this.setState({
            title: document.title
        });
     }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />

                <Grid className={classes.main} container>

                {this.props.children}

                </Grid>

                <Footer />
            </div>
        );

    }
}

export default withStyles(styles)(Page);