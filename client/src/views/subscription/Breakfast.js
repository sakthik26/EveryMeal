import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Breakfast.css';
import MealPlanService from '../../Services/MealPlanService';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Breakfast extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            loading: false,
            data: [],
            error:'',
            session:'Breakfast'
        };

    }

    componentWillMount(){
        this.setState({
            loading:true
        })
        
        if(this.props.tab === 0){
            this.setState({session: 'Breakfast'})
        }
        else if(this.props.tab === 1){
            this.setState({session: 'Lunch'})
       }
       else if(this.props.tab === 2){
        this.setState({session: 'Snacks'})
       }
       else if(this.props.tab === 3){
        this.setState({session: 'Dinner'})
       }

       

        MealPlanService.getMealPlansList(this.state.session).then((data)=>{
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
            <div className="breakfastParent">
            <Grid container justify='center' spacing={3}>
              <CircularProgress color="secondary" />
            </Grid></div>)
        }

        return(
            <div className="breakfastParent">
                <Grid container  spacing={3}>
                   {this.state.data.map((data,i) => <Grid item xs={8} sm={3} style={{cursor:'pointer'}}>
                      <Link color="inherit" href={`/subscription/details/${data._id}`}>
                        
                        <img className="breakfast" src={data.image} alt={'bf_'+i} />
                        <Typography>
                        <span>Starting:</span>
                        <span style={{float:'right'}}> {data.startingprice}/meal </span>
                         
                        </Typography>
                      </Link>
                    </Grid>)} 
                </Grid>
            </div>
        )
    }
}