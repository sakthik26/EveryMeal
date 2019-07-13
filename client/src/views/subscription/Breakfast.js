"use strict";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import breakfast_image1 from '../../images/Breakfast_option1.png'
import breakfast_image2 from '../../images/Breakfast_option2.png'
import breakfast_image3 from '../../images/Breakfast_option3.png'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Breakfast.css';
import TabContainer from '../../components/tabcontainer/TabContainer.js'


export default class Breakfast extends React.Component{
    constructor(props){
        super(props);
        this.state= {};

    }

    render(){
        return(
            <div className="breakfastParent">
                <Grid container justify='center' spacing={3}>
                    <Grid item xs={8} sm={3} style={{cursor:'pointer'}}>
                      <Link color="inherit" href="/details">
                        <img className="breakfast" src={breakfast_image1} alt="bf1" />
                        <Typography>
                        <span>Starting:</span>
                        <span style={{float:'right'}}> $12/meal </span>
                         
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item xs={8} sm={3} style={{cursor:'pointer'}}>
                      <Link color="inherit" href="/details">
                        <img className="breakfast" src={breakfast_image2} alt="bf2" />
                        <Typography>
                        <span>Starting:</span>
                        <span style={{float:'right'}}> $14/meal </span>
                         
                        </Typography>
                       </Link>
                    </Grid>
                    <Grid item xs={8} sm={3} style={{cursor:'pointer'}}>
                        <img className="breakfast" src={breakfast_image3} alt="bf3" />
                        <Typography>
                        <span>Starting:</span>
                        <span style={{float:'right'}}> $18/meal </span>
                         
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={3} style={{cursor:'pointer'}}>
                        <img className="breakfast" src={breakfast_image3} alt="bf4" />
                        <Typography>
                        <span>Starting:</span>
                        <span style={{float:'right'}}> $19/meal </span>
                         
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}