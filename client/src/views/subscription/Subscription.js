import React from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Subscription.css'
import eatnow from '../../images/everymeal_eatnow.png'
import subs from '../../images/everymeal_subscription.png'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from '../../components/tabcontainer/TabContainer.js'
import Breakfast from './Breakfast.js'
import FormGroup from '@material-ui/core/FormGroup';
import Header from '../../components/header/Header';


export default class Subscription extends React.Component {
    constructor(props){
        super(props);
        this.state = {value:0,
            checkedItems:{highfibre:false,lowcarb:false,keto:true,paleo:false},
            showFilter: false,eatnow:false};
        this.handleChange = this.handleChange.bind(this);
        this.openFilter = this.openFilter.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleMealService = this.handleMealService.bind(this);
    }

    handleCheckboxChange(event){
        let item = event.target.name;
        let isChecked = event.target.checked;
        let updatedItems = Object.assign({}, this.state.checkedItems, {[item]:isChecked})
        this.setState({checkedItems:updatedItems})
    }
    handleChange(event,newValue){
        this.setState({value:newValue})
    }
    openFilter(event){
        this.setState({showFilter: !this.state.showFilter})
    }
    handleMealService(){
        this.setState({eatnow: !this.state.eatnow})
    }
    render(){
        return(
           <div className="root">
            <Header/>
             <Grid container spacing={0}>
               <Grid item xs={6}>
               <Link color="inherit" href={`/eat/eatnow/`}>
                 <img className="eatnow" src={eatnow} alt="eatnow" onClick={this.handleMealService}/>
               </Link>
               </Grid>
               <Grid item xs={6}>
               <Link color="inherit" href={`/eat/subscription/`}>
                 <img className="subscribe" src={subs} alt="subscription" onClick={this.handleMealService}/>
                </Link>
               </Grid>
             </Grid>
             
                <Grid container justify='center' alignItems= 'center' className="subscriptionSessions">
                    <Grid item xs={5}>
                        <Typography component="h1" variant="h6">
                            <p> SUBSCRIPTION PLANS </p>
                        </Typography>
                    </Grid>
                    <Grid className="filter-button" item xs={5}>
                        <Button onClick={this.openFilter} color="secondary">
                            Filter
                        </Button>
                        {this.state.showFilter ? 
                        <div className = "filter-block">
                            <Typography variant="body2" color="textSecondary" component="p">
                            Nutrition
                            </Typography>
                            <FormGroup column>
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={this.state.checkedItems.keto} onChange={this.handleCheckboxChange} name="keto" />
                                    }
                                    label="Keto"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={this.state.checkedItems.paleo} onChange={this.handleCheckboxChange} name="paleo" />
                                    }
                                    label="Paleo"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={this.state.checkedItems.highfibre} onChange={this.handleCheckboxChange} name="highfibre" />
                                    }
                                    label="High-fibre"
                                />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={this.state.checkedItems.lowcarb} onChange={this.handleCheckboxChange} value="lowcarb" />
                                    }
                                    label="Low-carb"
                                />
                            </FormGroup>
                            <Button color="secondary">
                            Apply
                        </Button>
                        </div>  : null}
                    </Grid>
                    <Grid item xs={10}>
                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            <Tab label="Breakfast" />
                            <Tab label="Lunch" />
                            <Tab label="Snacks" />
                            <Tab label="Dinner"/>
                        </Tabs>
                        {this.state.value === 0 && <TabContainer><Breakfast tab={this.state.value}/></TabContainer>}
                        {this.state.value === 1 && <TabContainer><Breakfast tab={this.state.value}/></TabContainer>}
                        {this.state.value === 2 && <TabContainer><Breakfast tab={this.state.value}/></TabContainer>}
                        {this.state.value === 3 && <TabContainer><Breakfast tab={this.state.value}/></TabContainer>}
                    </Grid> 
                </Grid> 
           </div>
        );
    }
}