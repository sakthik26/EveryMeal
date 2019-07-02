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
import './Eatnow.css'
import lunch_image1 from '../../images/lunch1.1.png'
import lunch_image2 from '../../images/lunch1.2.png'
import lunch_image3 from '../../images/lunch1.3.png'
import lunch_image4 from '../../images/lunch1.4.png'
import lunch_image5 from '../../images/lunch1.5.png'
import lunch_image6 from '../../images/lunch1.6.png'
import lunch_image7 from '../../images/lunch1.7.png'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Lunch.css';
import TabContainer from '../../components/tabcontainer/TabContainer.js'
import { FormControl, Card, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';


export default class Lunch extends React.Component{
    constructor(props){
        super(props);
        this.state= {};
    }

    render(){
        return(
            <div className="lunchParent">
                <div class="topnav">
                    <a>&lt;</a>
                    <a>Week of June 23</a>
                    <a href="/eatnowpage2">&gt;</a>
                </div>

                <Grid container spacing={9}>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <div class="day">Monday</div>
                            <img className="lunchImage" src={lunch_image1}/>
                            <div class="caption">Mango chicken salad with ginger dressing</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <div class="day">Tuesday</div>
                            <img className="lunchImage" src={lunch_image2}/>
                            <div class="caption">Chicken tacos with roasted red peppers</div>
                        </div>
                    </Link>
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <div class="day">Wednesday</div>
                            <img className="lunchImage" src={lunch_image3}/>
                            <div class="caption">Ratatouille with squash ribbons and ciabatta toasts</div>
                        </div>
                    </Link>
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <div class="day">Thursday</div>
                            <img className="lunchImage" src={lunch_image4}/>
                            <div class="caption">Teriyaki cauliflower tacos with pineapple salsa</div>
                        </div>
                    </Link>
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <div class="day">Friday</div>
                            <img className="lunchImage" src={lunch_image5}/>
                            <div class="caption">Lettuce cups with avocado, snap peas, and goji berries</div>
                        </div>
                    </Link>
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <div class="day">Saturday</div>
                            <img className="lunchImage" src={lunch_image6}/>
                            <div class="caption">Tempeh sloppy joes with tangy coleslaw and pickled jalapeños</div>
                        </div>
                    </Link>
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <div class="day">Sunday</div>
                            <img className="lunchImage" src={lunch_image7}/>
                            <div class="caption">Texas shrimp Salad with Guacamole</div>
                        </div>
                    </Link>
                </Grid>
                
                </Grid>    
            </div>
        );
    }
}