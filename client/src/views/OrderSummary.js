import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Header from '../components/header/Header';
import breakfast_image1 from '../images/Breakfast_option1.png'
import CircularProgress from '@material-ui/core/CircularProgress';

export default class OrderSummary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
        };
       // this.handleChange = this.handleChange.bind(this);
    }

    // componentWillMount(){
    //     this.setState({
    //         loading:true
    //     })

    //     MealPlanService.getMealPlanInfo(this.props.match.params.id).then((data)=>{
    //         this.setState({
    //             data: [...data],
    //             loading:false
    //         })
    //      }).catch((e)=>{
    //          this.setState({
    //              error:e
    //          })
    //      })
        
    //}

    // handleChange(event){
    //     this.setState({selectedValue: event.target.value})
    // }

    
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
                    <Typography component="h1" variant="h6">
                        Order Summary
                        
                    </Typography>
                    <img className="sub-detail" src={breakfast_image1} alt="SubscriptionDetail" />
                    </Grid>
                    <Grid item xs={8} sm={5} >
                        <Typography component="h1" variant="h4">
                         
                        </Typography>
                        <Typography paragraph color="textSecondary">
                        
                        </Typography>
                        <Grid className='' container justify='center' spacing={2}>
                            <Grid item xs={6}>
                                <Card>
                                    <CardContent className='card-content'>
                                        <Typography className='meal-session' color="textPrimary">
                                        Monthly
                                        </Typography>
                                        <Radio
                                            checked={this.state.selectedValue === 'a'}
                                            onChange={this.handleChange}
                                            value="a"
                                            name="radio-button-demo"
                                            
                                        />      
                                         <Typography color="textSecondary">
                                         €  /meal
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button size="small">Learn More</Button>
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
                                            checked={this.state.selectedValue === 'b'}
                                            onChange={this.handleChange}
                                            value="b"
                                            name="radio-button-demo"
                                            
                                        />      
                                         <Typography color="textSecondary">
                                         € /meal
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="secondary" >
                            Subscribe
                        </Button>
                    </Grid>
             </Grid>
             
            </div>
        )
    }
}
