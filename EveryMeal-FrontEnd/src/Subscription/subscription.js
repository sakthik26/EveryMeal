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
import './subscription.css'
import eatnow from '../Images/everymeal_eatnow.png'
import subs from '../Images/everymeal_subscription.png'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from '../Components/TabContainer/tabcontainer.js'
import Breakfast from './breakfast.js'


export default class Subscription extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event,newValue){
        this.setState({value:newValue})
    }
    render(){
        return(
           <div className="root">
             <Grid container spacing={0}>
               <Grid item xs={6}>
                 <img className="eatnow" src={eatnow} alt="eatnow" />
               </Grid>
               <Grid item xs={6}>
                 <img className="subscribe" src={subs} alt="subscription" />
               </Grid>
             </Grid>
             <div className="subscriptionSessions">
                <div className="subscriptionTitle">
                    <p> SUBSCRIPTION PLANS </p>
                </div>
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="Breakfast" />
                    <Tab label="Lunch" />
                    <Tab label="Snacks" />
                    <Tab label="Dinner"/>
                </Tabs>
                {this.state.value === 0 && <TabContainer><Breakfast/></TabContainer>}
                {this.state.value === 1 && <TabContainer><Breakfast/></TabContainer>}
                {this.state.value === 2 && <TabContainer><Breakfast/></TabContainer>}
                {this.state.value === 3 && <TabContainer><Breakfast/></TabContainer>}
             </div>
           </div>
        );
    }
}