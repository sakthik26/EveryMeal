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
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Mealpage.css'
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
import lunch_image1 from '../../images/lunch1.1.png'
import { typography } from '@material-ui/system';
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
                <Grid className="right" item xs={4} sm={4}>
                    <Card>
                        <CardContent className="nutritionard">
                            <img className="lunch_image1" src={lunch_image1} alt="MangoChicken" />
                            <Typography variant="h5" gutterBottom>
                                <ul>
                                    <li>Gluten-Free</li>
                                    <li>Dairy-Free</li>
                                    <li>Paleo</li>
                                    <li>Soy-Free</li>
                                    <li>Diabetes-Friendly</li>
                                </ul>
                            </Typography>
                            
                            <Grid className="macros">
                                <Typography variant="h5" gutterBottom>
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
                
                <Grid className="left" item xs={4} sm={5}>
                    
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
                            <Typography color="secondary" gutterBottom>
                            € 14
                            </Typography>
                            <Typography className="override"  color="textSecondary" gutterBottom>
                                Robust yet light, this paleo and gluten-free chicken salad is packed with our favorite sweet and spicy Southeast Asian flavors.
                            </Typography>
                            <Typography gutterBottom>
                                Customize your meal:
                            </Typography>

                        </Grid>
                       

                        <Grid>
                            <CustomizationForm></CustomizationForm>
                        </Grid>    
                        
                        <Button className="button" variant="contained" color="secondary" >
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
