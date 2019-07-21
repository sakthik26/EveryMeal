"use strict";
import React from 'react';
import {Grid, Link, Button, Typography, Icon, Card, CardContent, Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';
import './Mealpage.css'
import Header from '../../components/header/Header';
import CustomizationForm from './CustomizationForm.js'
import MealService from '../../services/MealService';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class SubscriptionDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'a',
            loading: false,
            data: [],
            error:'',
            portion:1,
            quantity:1,
            comments: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePortion= this.handlePortion.bind(this);
        this.handleComments= this.handleComments.bind(this);
        this.handleQunatity = this.handleQunatity.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading:true
        })

        MealService.getMealInfo(this.props.match.params.id).then((data)=>{
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
    handleComments(event){
        this.setState({comments: event.target.value})
    }
    handlePortion(event){
        this.setState({portion: event.target.value})
    }

    handleQunatity(event){
        this.setState({quantity: event.target.value})
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
                    <Grid item className='left' xs={4} sm={4}>
                        <Card>
                            <CardContent className="nutritionCard">
                                <img className="image" src={this.state.data[0].mealImage} alt="Meal Image"/>
                                <Typography variant="body2" gutterBottom>
                                {/* {this.state.data[0].mealFilter} */}
                                    {/* {this.state.data[0].mealFilter.map((data,i) => <ul>
                                        <li>{data.mealFilter[i]}</li>)} 
                                    </ul>)} */}
                                    {/* <ul>
                                        <li>{this.state.data[0].mealFilter}</li>
                                    </ul> */}
                                </Typography>

                                <Grid className="macros">
                                    <Typography gutterBottom>Nutrition per serving</Typography>
                                    <table className="macrosT">
                                        <tr>
                                            <th>{this.state.data[0].mealNutrition[0].calories}Cal</th>
                                            <th>{this.state.data[0].mealNutrition[0].protein}g</th>
                                            <th>{this.state.data[0].mealNutrition[0].fat}g</th>
                                            <th>{this.state.data[0].mealNutrition[0].carbs}g</th>                    
                                            <th>{this.state.data[0].mealNutrition[0].fibre}g</th>
                                        </tr>
                                        <tr>                                          
                                            <td>Calories</td>
                                            <td>Protein</td>
                                            <td>Fat</td>
                                            <td>Carbs</td>
                                            <td>Fibre</td>
                                      </tr>
                                    </table>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className="right" item xs={4} sm={5} >
                        <Breadcrumbs separator="›" aria-label="Breadcrumb">
                            <Link color="inherit" href="/">
                                Home
                            </Link>
                            <Link color="inherit" href="/eat/eatnow">
                                Eat Now
                            </Link>
                            <Link color="inherit" href="/eatnow">
                                Menu of the Week
                            </Link>
                        </Breadcrumbs>

                        <Grid>
                            <Typography variant="h6" gutterBottom>
                                {this.state.data[0].mealName}
                            </Typography>
                            <Typography variant="h6" color="secondary" gutterBottom>
                                € {this.state.data[0].mealPrice}
                            </Typography>
                            <hr></hr>
                            <Typography className="override"  color="textSecondary" gutterBottom>
                                {this.state.data[0].mealDescription}
                            </Typography>
                        </Grid>
            
                        <Grid className='form'>
                            <CustomizationForm portion={this.state.portion} comments={this.state.comments} quantity={this.state.quantity} handlePortion={this.handlePortion} handleQuantity={this.handleQunatity} handleComments= {this.handleComments}></CustomizationForm>
                            <Button variant="contained" color="secondary" onClick= {() => this.props.history.push('/checkoutmeal/'+this.state.data[0]._id,{portion: this.state.portion,quantity:this.state.quantity,comments:this.state.comments})}>Order Now!</Button>
                            {/* <Button variant="contained" color="secondary" >
                                Add to cart
                                <Icon color="white">add_circle</Icon>
                            </Button> */}
                        </Grid>
                    </Grid>
             </Grid>
            </div>
        )
    }
}