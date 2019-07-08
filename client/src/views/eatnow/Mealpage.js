"use strict";
import React from 'react';
import {Grid, Link, Button, Typography, Icon, Card, CardContent, Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';
import './Mealpage.css'
import Header from '../../components/header/Header';
import lunch_image11 from '../../images/Week1/Day1/lunch1.1.png'
import CustomizationForm from '../../components/forms/CustomizationForm.js'


export default class Mealpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'a'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({selectedValue: event.target.value})
    }
    render(){
        return(
            <div>
                <Header/>
                <Grid className='details-grid-parent' container justify='center' spacing={2}>
                    <Grid className="left" item xs={4} sm={4}>
                        <Card>
                            <CardContent className="nutritionard">
                                <img className="lunch_image1" src={lunch_image11} alt="MangoChicken" />
                                <Typography variant="body2" gutterBottom>
                                    <ul>
                                        <li>Gluten-Free</li>
                                        <li>Dairy-Free</li>
                                        <li>Paleo</li>
                                        <li>Soy-Free</li>
                                        <li>Diabetes-Friendly</li>
                                    </ul>
                                </Typography>
                                
                                <Grid className="macros">
                                    <Typography variant="button" gutterBottom>
                                        Nutrition per serving
                                    </Typography>
                                    <table className="macrosT">
                                        <tr>
                                            <th>410Cal</th>
                                            <th>44g</th>
                                            <th>10g</th>
                                            <th>38g</th>
                                            <th>5g</th>
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
                    
                    <Grid className="right" item xs={4} sm={5}>
                    
                        <Breadcrumbs separator="›" aria-label="Breadcrumb">
                            <Link color="inherit" href="/">
                                Home
                            </Link>
                            <Link color="inherit" href="">
                                Meal of the Week
                            </Link>
                            
                        </Breadcrumbs>
                        <Grid>
                            <Typography variant="h6" gutterBottom>
                                Mango chicken salad with ginger dressing
                            </Typography>
                            <Typography variant="h6" color="secondary" gutterBottom>
                            € 14
                            </Typography>
                            <hr></hr>
                            <Typography className="override"  color="textSecondary" gutterBottom>
                                Robust yet light, this paleo and gluten-free chicken salad is packed with our favorite sweet and spicy Southeast Asian flavors.
                            </Typography>
                        </Grid>
                       
                        <Grid className="form">
                            <CustomizationForm></CustomizationForm>
                        </Grid>    
                                          
                        <Button variant="contained" color="secondary" >
                            Try now!
                        </Button>
                        <Button variant="contained" color="secondary" >
                            Add to cart 
                            <Icon color="white">add_circle</Icon>
                        </Button>  
                    </Grid>
                </Grid>
            </div>
        )
    }
}
