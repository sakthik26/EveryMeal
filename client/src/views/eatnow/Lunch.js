import React from 'react';
import {Link, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Eatnow.css'
import lunch_image11 from '../../images/lunch1.1.png'
import lunch_image12 from '../../images/lunch1.2.png'
import lunch_image13 from '../../images/lunch1.3.png'
import lunch_image21 from '../../images/lunch2.1.png'
import lunch_image22 from '../../images/lunch2.2.png'
import lunch_image23 from '../../images/lunch2.3.png'
import lunch_image31 from '../../images/lunch3.1.png'
import lunch_image32 from '../../images/lunch3.2.png'
import lunch_image33 from '../../images/lunch3.3.png'
import lunch_image41 from '../../images/lunch4.1.png'
import lunch_image42 from '../../images/lunch4.2.png'
import lunch_image43 from '../../images/lunch4.3.png'
import lunch_image51 from '../../images/lunch5.1.png'
import lunch_image52 from '../../images/lunch5.2.png'
import lunch_image53 from '../../images/lunch5.3.png'
import lunch_image61 from '../../images/lunch6.1.png'
import lunch_image62 from '../../images/lunch6.2.png'
import lunch_image63 from '../../images/lunch6.3.png'
import lunch_image71 from '../../images/lunch7.1.png'
import lunch_image72 from '../../images/lunch7.2.png'
import lunch_image73 from '../../images/lunch7.3.png'
import './Lunch.css';
import MealService from '../../Services/MealService';
import CircularProgress from '@material-ui/core/CircularProgress';



export default class Lunch extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            loading: false,
            data: [],
            error:'',
            session:'Lunch'
        };
    }

    componentWillMount(){
        this.setState({
            loading:true
        })

        if(this.props.tab == 0){
            this.state.session = 'Breakfast'
        }
        else if(this.props.tab == 1){
            this.state.session = 'Lunch'
        }   
        else if(this.props.tab == 2){
            this.state.session = 'Dinner'
        }

        
        MealService.getMealsList(this.state.session).then((data)=>{
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
    

    render(){

        if(this.state.loading){
            
            return (
            <div className="lunchParent">
            <Grid container justify='center' spacing={3}>
              <CircularProgress color="secondary" />
            </Grid></div>)
        }

        return(
            <div className="lunchParent">
                <div class="topnav">
                    <a>&lt;</a>
                    <a>Week of June 23</a>
                    <a href="/eatnowpage2">&gt;</a>
                </div>

                <Grid container spacing={9}>
                <div class="day">Monday</div>
                {this.state.data.map((data,i) => <Grid class="lunchOption" item xs={8} sm={3} style={{cursor:'pointer'}}>
                    <Link color="inherit" href={`/eatnow/mealpage/${data._id}`}>
                    <div class="polaroid">
                        <img className="lunchImage" src={data.mealImage} alt={'lunch_'+i} />
                        <div class="caption">{data.mealName}</div>
                    </div>   
                    </Link>
                </Grid>)}
                {/* {this.state.data.map((data,i) =>)} */}

                {/* <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image11}/>
                            <div class="caption">Mango chicken salad with ginger dressing</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image12}/>
                            <div class="caption">Seared steaks with romesco and artichoke-olive salad</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image13}/>
                            <div class="caption">Sweet and sour eggplant wraps with cashews and bok choy slaw</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Tuesday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image21}/>
                            <div class="caption">Ancho chicken Mexican pozole with hominy</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image22}/>
                            <div class="caption">Thai-style salmon with peach-cabbage slaw</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image23}/>
                            <div class="caption">Tempeh sloppy joes with tangy coleslaw and pickled jalapeños</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Wednesday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image31}/>
                            <div class="caption">Beef skewers with pear slaw and sesame seeds</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image32}/>
                            <div class="caption">Cheesy fusili with leeks and wilted greens</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image33}/>
                            <div class="caption">Burrito bowls with basmati rice, black beans, and avocado</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Thursday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image41}/>
                            <div class="caption">Chipotle turkey chili with cucumber-sumac salad</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image42}/>
                            <div class="caption">Lemony shrimp and orzo pasta salad with peas and baby greens</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image43}/>
                            <div class="caption">Lettuce cups with avocado, snap peas, and goji berries</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Friday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image51}/>
                            <div class="caption">Meze platter with lamb meatballs and tzatziki</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image52}/>
                            <div class="caption">Mediterranean salad with falafel and Marcona almonds</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image53}/>
                            <div class="caption">Tamarina chana chickpea masala with naan</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Saturday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image61}/>
                            <div class="caption">Pork chops with vinaigrette pan sauce and sweet potato mash</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image62}/>
                            <div class="caption">Jersey Shore shrimp chowder with spiced ciabatta croutons</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image63}/>
                            <div class="caption">Black bean spaghetti with ratatouille and gremolata</div>
                        </div>
                    </Link>    
                </Grid>
                </div>    

                <div class="day">Sunday</div>
                <div>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image71}/>
                            <div class="caption">Pan-seared chicken and carrots with mint pesto and couscous</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image72}/>
                            <div class="caption">Chorizo paella with cauliflower rice and aioli</div>
                        </div>
                    </Link>    
                </Grid>
                <Grid class="lunchOption">
                    <Link color="inherit" href="/mealpage">
                        <div class="polaroid">
                            <img className="lunchImage" src={lunch_image73}/>
                            <div class="caption">Dubu kimchi stir-fry with tofu and pickled chard</div>
                        </div>
                    </Link>    
                </Grid>
                </div>  */}   
                
                
                
                </Grid>    
            </div>
        );
    }
}