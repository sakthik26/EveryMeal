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
import './SubscriptionDetails.css'
import SubscriptionDetail from '../../images/everymeal_subscription_details.png'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FormControl, Card, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Header from '../../components/header/Header';
import breakfast_image1 from '../../images/Breakfast_option1.png'
import breakfast_image2 from '../../images/Breakfast_option2.png'
import breakfast_image3 from '../../images/Breakfast_option3.png'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MealPlanService from '../../Services/MealPlanService';
import TabContainer from '../../components/tabcontainer/TabContainer.js'
import CircularProgress from '@material-ui/core/CircularProgress';

export default class SubscriptionDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'Monthly',
            loading: false,
            data: [],
            error:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading:true
        })

        MealPlanService.getMealPlanInfo(this.props.match.params.id).then((data)=>{
            this.setState({
                data: [...data],
                loading:false
            })
         }).catch((e)=>{
             this.setState({
                 error:e
             })
         })
        
    }

    handleChange(event){
        this.setState({selectedValue: event.target.value})
    }

    
    render(){

        if(this.state.loading){
            
            return (
           
            <Grid container justify='center' spacing={3}>
              <CircularProgress color="secondary" />
            </Grid>)
        }
        return(
            <div>
            <Header/>
             <Grid className='details-grid-parent' container justify='center' spacing={2}>
                    <Grid item className='details-grid-item' xs={8} sm={4}>
                        <img className="sub-detail" src={this.state.data[0].image} alt="SubscriptionDetail" />
                    </Grid>
                    <Grid item xs={8} sm={5} >
                        <Breadcrumbs separator="›" aria-label="Breadcrumb">
                            <Link color="inherit" href="/">
                                Home
                            </Link>
                            <Link color="inherit" href="/eat">
                                Eat
                            </Link>
                            <Link color="inherit" href="">
                                Subscriptions
                            </Link>
                            
                        </Breadcrumbs>
                        <Typography component="h1" variant="h4">
                          {this.state.data[0].mealplanname}
                        </Typography>
                        <Typography paragraph color="textSecondary">
                        {this.state.data[0].description}
                        </Typography>
                        <Grid className='' container justify='center' spacing={2}>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent className='card-content'>
                                        <Typography className='meal-session' color="textPrimary">
                                        Monthly
                                        </Typography>
                                        <Radio
                                            checked={this.state.selectedValue === 'Monthly'}
                                            onChange={this.handleChange}
                                            value="Monthly"
                                            name="radio-button-demo"
                                            
                                        />      
                                         <Typography color="textSecondary">
                                         €  {this.state.data[0].startingprice}/meal (€  {this.state.data[0].startingprice * 30}/month)
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    {/* <Button size="small">Learn More</Button> */}
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card>
                                <CardContent className='card-content'>
                                        <Typography className='meal-session' color="textPrimary">
                                        Weekly 
                                        </Typography>
                                        <Radio
                                            checked={this.state.selectedValue === 'Weekly'}
                                            onChange={this.handleChange}
                                            value="Weekly"
                                            name="radio-button-demo"
                                            
                                        />      
                                         <Typography color="textSecondary">
                                         € {this.state.data[0].startingprice + 3}/meal (€  {this.state.data[0].startingprice + 3 * 7}/week)
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    {/* <Button size="small">Learn More</Button> */}
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="secondary" onClick= {() => this.props.history.push('/checkout/'+this.state.data[0]._id,{subscription: this.state.selectedValue})} >
                            Subscribe
                        </Button>
                    </Grid>
             </Grid>
             <Grid className='' container justify='center' spacing={3}>
                    <Grid item className='' xs={8} sm={5}>
                        <Typography component="h1" variant="h6">
                            Upcoming meals for the week
                        </Typography>
                    </Grid>
                    <Grid item className='' xs={8} sm={4}>
                    </Grid>
            </Grid> 
            <Grid className='details-upcoming-meals' container spacing = {4}>
                         <Grid item className='details-upcoming-item'> 
                            <Card>
                                <CardActionArea>
                                  <CardMedia
                                      className='card-media'
                                      image = {breakfast_image1}
                                      title = "Upcoming Meal"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom component="h6">
                                    Gobi-Methi Paranthas, Curd & Chutney
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Start your day right with our wholesome whole-wheat vegetable paranthas made with cauliflower, carrots and a hint of ginger. 
                                    </Typography>
                                 </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                     Try for € 19
                                    </Button>
                                </CardActions>
                            </Card>
                         </Grid>
                         <Grid item className='details-upcoming-item'> 
                            <Card>
                                <CardActionArea>
                                  <CardMedia
                                      className='card-media'
                                      image = {breakfast_image2}
                                      title = "Upcoming Meal1"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom component="h6">
                                    Gobi-Methi Paranthas, Curd & Chutney
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Start your day right with our wholesome whole-wheat vegetable paranthas made with cauliflower, carrots and a hint of ginger. 
                                    </Typography>
                                 </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                     Try for € 19
                                    </Button>
                                </CardActions>
                            </Card>
                         </Grid>
                         <Grid item className='details-upcoming-item'> 
                            <Card>
                                <CardActionArea>
                                  <CardMedia
                                      className='card-media'
                                      image = {breakfast_image3}
                                      title = "Upcoming Meal1"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom component="h6">
                                    Gobi-Methi Paranthas, Curd & Chutney
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Start your day right with our wholesome whole-wheat vegetable paranthas made with cauliflower, carrots and a hint of ginger. 
                                    </Typography>
                                 </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                     Try for € 19
                                    </Button>
                                </CardActions>
                            </Card>
                         </Grid>
                         <Grid item className='details-upcoming-item'> 
                            <Card>
                                <CardActionArea>
                                  <CardMedia
                                      className='card-media'
                                      image = {breakfast_image2}
                                      title = "Upcoming Meal1"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom component="h6">
                                    Gobi-Methi Paranthas, Curd & Chutney
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Start your day right with our wholesome whole-wheat vegetable paranthas made with cauliflower, carrots and a hint of ginger. 
                                    </Typography>
                                 </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                     Try for € 19
                                    </Button>
                                </CardActions>
                            </Card>
                         </Grid>
                         
                         
             </Grid>
            </div>
        )
    }
}
