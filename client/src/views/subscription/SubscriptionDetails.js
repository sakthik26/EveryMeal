import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './SubscriptionDetails.css'
import { Card, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Radio from '@material-ui/core/Radio';
import Header from '../../components/header/Header';
import breakfast_image1 from '../../images/Breakfast_option1.png'
import breakfast_image2 from '../../images/Breakfast_option2.png'
import breakfast_image3 from '../../images/Breakfast_option3.png'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MealPlanService from '../../services/MealPlanService';
import MealService from '../../services/MealService';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class SubscriptionDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'Monthly',
            loading: false,
            data: [],
            error:'',
            mealData:[]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading:true
        })

        var promise = new Promise((resolve,reject) => {
            MealPlanService.getMealPlanInfo(this.props.match.params.id).then((data)=>{
                this.setState({
                    data: [...data],
                    loading:false
                })
                resolve(data);
            }).catch((e)=>{
                reject(e);
            })
        })


     
     promise.then( data =>{
        var self = this;
        if(data.length>0){
            var mealSession = data[0].mealsession;
            var mealType = data[0].mealplantype
            MealPlanService.getMealType(mealSession,mealType).then((data) => {
            self.setState({mealData:data})
                
            
            })}}, function(error){
                
            })
        
    }

    handleChange(event){
        this.setState({selectedValue: event.target.value})
    }

    
    render(){
       const {data,mealData} = this.state;
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
                        <img className="sub-detail" className="meal-image" src={this.state.data[0].image} alt="SubscriptionDetail" />
                    </Grid>
                    <Grid item xs={8} sm={5} >
                        <Breadcrumbs separator="›" aria-label="Breadcrumb">
                            <Link color="inherit" href="/">
                                Home
                            </Link>
                            <Link color="inherit" href="/eat/subscription">
                                Subscriptions
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
            {this.state.mealData.map((data,i) => 
                    
                         <Grid item className='details-upcoming-item'> 
                          <Link color="inherit" href={`/eatnow/mealpage/${data._id}`}>
                            <Card>
                                <CardActionArea>
                                  <CardMedia
                                      className='card-media'
                                      image = {data.mealImage}
                                      title = "Upcoming Meal"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom component="h6">
                                    {data.mealName}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    {data.mealDescription}
                                    </Typography>
                                 </CardContent>
                                </CardActionArea>
                                <CardActions>
                                </CardActions>
                            </Card></Link>
                   </Grid> )}
                             
              </Grid> 
            </div>
        )
    }
}
