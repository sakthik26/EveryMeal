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



export default class SubscriptionDetails extends React.Component{
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
             <Grid className='details-grid-parent' container justify='center' spacing={2}>
                    <Grid item className='details-grid-item' xs={8} sm={5}>
                        <img className="sub-detail" src={SubscriptionDetail} alt="SubscriptionDetail" />
                    </Grid>
                    <Grid item xs={8} sm={4} >
                        <Typography component="h1" variant="h4">
                          Power Breakfast Veg
                        </Typography>
                        <Typography paragraph color="textSecondary">
                         Why choose between Indian and Western cuisines when you can have the best of both? Our crepes are just as delicious as our paranthas, so let your tastebuds travel the world every morning.
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
                                         € 19/meal
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
                                         € 19/meal
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
             <Grid className='' container justify='center' spacing={3}>
                    <Grid item className='' xs={8} sm={5}>
                        <Typography component="h1" variant="h6">
                            Upcoming meals
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
                                      image = {SubscriptionDetail}
                                      title = "Upcoming Meal"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
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
                                      image = {SubscriptionDetail}
                                      title = "Upcoming Meal1"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
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
                                      image = {SubscriptionDetail}
                                      title = "Upcoming Meal1"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
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
                                      image = {SubscriptionDetail}
                                      title = "Upcoming Meal1"
                                   />
                                 <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
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
