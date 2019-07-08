import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import './Eatnow.css'
import lunch_image211 from '../../images/Week2/lunch211.png'
import lunch_image212 from '../../images/Week2/lunch212.png'
import lunch_image213 from '../../images/Week2/lunch213.png'
import lunch_image221 from '../../images/Week2/lunch221.png'
import lunch_image222 from '../../images/Week2/lunch222.png'
import lunch_image223 from '../../images/Week2/lunch223.png'
import lunch_image231 from '../../images/Week2/lunch231.png'
import lunch_image232 from '../../images/Week2/lunch232.png'
import lunch_image233 from '../../images/Week2/lunch233.png'
import lunch_image241 from '../../images/Week2/lunch241.png'
import lunch_image242 from '../../images/Week2/lunch242.png'
import lunch_image243 from '../../images/Week2/lunch243.png'
import lunch_image251 from '../../images/Week2/lunch251.png'
import lunch_image252 from '../../images/Week2/lunch252.png'
import lunch_image253 from '../../images/Week2/lunch253.png'
import lunch_image261 from '../../images/Week2/lunch261.png'
import lunch_image262 from '../../images/Week2/lunch262.png'
import lunch_image263 from '../../images/Week2/lunch263.png'
import lunch_image271 from '../../images/Week2/lunch271.png'
import lunch_image272 from '../../images/Week2/lunch272.png'
import lunch_image273 from '../../images/Week2/lunch273.png'
import './Lunch.css';


export default class Lunch2 extends React.Component{
    constructor(props){
        super(props);
        this.state= {};
    }

    render(){
        return(
            <div className="lunchParent">
                <div class="topnav">
                    <a href="/eatnow">&lt;</a>
                    <a>Week of June 30</a>
                    <a>&gt;</a>
                </div>

                <Grid container spacing={9}>
                <div class="day">Monday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image211}/>
                            <div class="caption">Teriyaki cauliflower tacos with pineapple salsa</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image212}/>
                            <div class="caption">Texas shrimp salad with guacamole</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image213}/>
                            <div class="caption">Chicken tacos with roasted red peppers</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Tuesday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image221}/>
                            <div class="caption">Ginger sesame chicken with sugar snap peas and red rice</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image222}/>
                            <div class="caption">Ratatouille with squash ribbons and ciabatta toast</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image223}/>
                            <div class="caption">Hawaiian loco moco with teriyaki chicken and fried eggs</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Wednesday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image231}/>
                            <div class="caption">Huli huli chicken with pineapple celery slaw</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image232}/>
                            <div class="caption">Paprika-spiced chicked over creamed corn with tomato salsa</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image233}/>
                            <div class="caption">Chicken salad with charred plums, arugula, and walnuts</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Thursday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image241}/>
                            <div class="caption">Fish tacos with charred corn salsa and guacamole</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image242}/>
                            <div class="caption">Chipotle chilaquiles with black beans and fried eggs</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image243}/>
                            <div class="caption">Chickpea and carrot pita pockets with cumin-lime tahini</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Friday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image251}/>
                            <div class="caption">Braised tofu and soba noodles with miso-tamari dressing</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image252}/>
                            <div class="caption">Spicy jerk chicken with gingered peach slaw</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image253}/>
                            <div class="caption">Big Island vegetable curry with warm naan</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Saturday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image261}/>
                            <div class="caption">Pork piccata with lemon-caper pan sauce and sautéed summer squash</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image262}/>
                            <div class="caption">Fresh cavatelli and summer squash with pesto alla trapanese</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image263}/>
                            <div class="caption">Lettuce cups with braised tofu and wood ear mushrooms</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Sunday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image271}/>
                            <div class="caption">Seared salmon with pearled cousous and salsa fresca</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image272}/>
                            <div class="caption">Chorizo paella with cauliflower rice and aioli</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image273}/>
                            <div class="caption">Whole wheat penne primavera with creamy feta sauce</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                </Grid>    
            </div>
        );
    }
}