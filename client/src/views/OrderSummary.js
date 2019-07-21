import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Header from '../components/header/Header';
import breakfast_image1 from '../images/Breakfast_option1.png'
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './OrderSummary.css'
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MealPlanService from '../Services/MealPlanService';
import DateFnsUtils from '@date-io/date-fns';
import OrderService from '../Services/OrderService';
import UserService from '../Services/UserService';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default class OrderSummary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startingDate:new Date(),
            time:'',
            address:'',
            city:'',
            stateValue:'',
            zipcode:'',
            total:'',
            open:false
        };
        this.handleStartingDate = this.handleStartingDate.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleTimeSlot = this.handleTimeSlot.bind(this);
        this.changeInputAddress = this.changeInputAddress.bind(this);
        this.changeInputCity = this.changeInputCity.bind(this);
        this.changeInputStateValue = this.changeInputStateValue.bind(this);
        this.changeInputZipCode = this.changeInputZipCode.bind(this);
        this.handlePay = this.handlePay.bind(this);
       // this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading:true
        })

        MealPlanService.getMealPlanInfo(this.props.match.params.id).then((data)=>{
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

    // handleChange(event){
    //     this.setState({selectedValue: event.target.value})
    // }
    handlePay(event){

      event.preventDefault();
      let orderDetails = {
        address: this.state.address,
        startingdate: this.state.startingDate,
        timeslot: this.state.time,
        ordertype: (this.props.location.state && this.props.location.state.subscription) ? "subscription" : "onetime",
        productid: this.props.match.params.id,
        total: this.state.total
      }
     
      var promise = new Promise((resolve,reject) => {
        UserService.getUser().then((data) =>{
            resolve(data._id);
        }).catch((e) => {
            reject(e);
        })
      })
     
     promise.then( userId =>{
        OrderService.registerOrder(userId,orderDetails).then((data) => {this.props.history.push('/eat/eatnow');
        })}, function(error){
            
                this.setState({
                    error:error
                })
        })
     }
    changeInputAddress(e){
        this.setState({address: e.target.value})
    }
    changeInputCity(e){
        this.setState({city: e.target.value})
    }
    changeInputStateValue(e){
        this.setState({stateValue: e.target.value})
    }
    changeInputZipCode(e){
        this.setState({zipcode: e.target.value})
    }
    handleStartingDate(e){
      this.setState({startingDate:e})
    }
    handleTimeSlot(e){
        this.setState({time:e.target.value})
      }
    handleClickOpen() {
        this.setState({open:true});
      }
    
    handleClose() {
        this.setState({open:false,address:this.state.address+', '+this.state.city+', '+this.state.stateValue+ ', '+this.state.zipcode});
      }

    render(){
        if(this.state.data){
          var mealplan = `${this.state.data[0].mealplanname} -  ${this.state.data[0].mealsession}`;
          var mealSubscription = this.props.location.state.subscription;
          this.state.total = mealSubscription === "Monthly" ? this.state.data[0].startingprice * 30 : (this.state.data[0].startingprice + 3) * 7;
          var totalInEuros = this.state.total.toString().replace(/^/,'€ ');
          var delivery = 10;
          var timeSlots = this.state.data[0].mealsession === 'Breakfast' ? 
                          ["07:30 - 08:15 AM","08:15 - 09:00 AM","09:00 - 09:45 AM","09:45 - 10:30 AM"] : 
                          this.state.data[0].mealsession === 'Lunch' ? 
                          ["12:15 - 01:00 PM","01:00 - 01:45 PM","1:45 - 02:30 PM","02:30 - 03:15 PM"] : 
                          ["07:15 - 08:00 PM","08:00 - 08:45 PM","8:45 - 09:30 PM","09:30 - 10:15 PM"]
        
      
        }
        const {address,zipcode,stateValue,city,time,startingDate,total} = this.state;
        
        if(this.state.loading){
            
            return (
           
            <Grid container justify='center' spacing={3}>
              <CircularProgress color="secondary" />
            </Grid>)
        }
        return(
            <div>
            <Header/>
             <Grid container justify='center' spacing={2}>
                    <Grid item xs={8} sm={4}>
                        <Typography component="h1" variant="h6">
                            Order Summary
                            
                        </Typography>
                        <img className="sub-detail" src={this.state.data[0].image} alt="SubscriptionDetail" />
                        <InputBase className="summary-title"
                                        
                                        defaultValue= {mealplan}
                                        inputProps={{ 'aria-label': 'naked',readOnly: true }}
                                    />
                        <InputBase
                            
                            defaultValue={totalInEuros}
                            inputProps={{ 'aria-label': 'naked',readOnly: true }}
                        />
                    </Grid>
                    
                    <Grid item xs={8} sm={5} >
                        <form className="summary-form-root" autoComplete="off">
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                {/* <InputLabel>Starting Date</InputLabel>
                                <Select
                                value={this.state.startingDate}
                                onChange={this.handleStartingDate}
                                >
                                    <MenuItem value='Today'>Today</MenuItem>
                                    <MenuItem value='Tomorrow'>Tomorrow</MenuItem>
                                    <MenuItem value='Thirty'>Thirty</MenuItem>
                                </Select> */}
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="mui-pickers-date"
                                    label="Starting Date"
                                    value={this.state.startingDate}
                                    onChange={this.handleStartingDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <FormControl className="summary-form-control">
                                <InputLabel>Time Slot</InputLabel>
                                <Select
                                value={this.state.time}
                                onChange={this.handleTimeSlot}
                                >
                                  {timeSlots.map((data,i) =>
                                    <MenuItem value={data}>{data}</MenuItem>
                                  )}
                                </Select>
                            </FormControl>   
                            <Grid container justify='center' spacing={2}>
                               <Grid item xs={9} >
                                    <FormControl className="summary-form-control address-field">
                                        <TextField className='address-field'
                                            label="Address"
                                            value = {this.state.address}
                                            defaultValue="Add your address"
                                            margin="normal"
                                            onChange = {this.state.changeInput}
                                            InputProps={{
                                            readOnly: true,
                                            }}
                                        />   
                                    </FormControl>  
                                </Grid>
                                <Grid item xs={3} className='change-address'>
                                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                                    Change
                                </Button>    
                                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title"> Delivery Address</DialogTitle>
                                    <DialogContent>
                                    
                                        <Grid container spacing={3}>
                                            <Grid item xs={12}>
                                            <TextField
                                                required
                                                id="address1"
                                                value = {this.state.address}
                                                name="address1"
                                                onChange={this.changeInputAddress}
                                                label="Address"
                                                fullWidth
                                                autoComplete="billing address-line1"
                                            />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="city"
                                                value= {this.state.city}
                                                name="city"
                                                onChange={this.changeInputCity}
                                                label="City"
                                                fullWidth
                                                autoComplete="billing address-level2"
                                            />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <TextField id="state" name="state"  onChange={this.changeInputStateValue} value ={this.state.stateValue} label="State/Province/Region" fullWidth />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="zip"
                                                name="zip"
                                                onChange={this.changeInputZipCode}
                                                value={this.state.zipcode}
                                                label="Zip / Postal code"
                                                fullWidth
                                                autoComplete="billing postal-code"
                                            />
                                            </Grid>
                                            <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                                label="Use this address for payment details"
                                            />
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={this.handleClose} disabled = {!(address && stateValue && city && zipcode)}color="primary">
                                        Add New Addresss
                                    </Button>
                                    </DialogActions>
                                </Dialog> 
                                </Grid>
                                </Grid>
                                <Grid container className="order-total" justify='center' spacing={2}>
                                 <Grid item xs={8} >
                                    <InputBase
                                        className = "pay-amount"
                                        defaultValue="Total"
                                        inputProps={{ 'aria-label': 'naked',readOnly: true }}
                                    />
                                  </Grid>
                                  <Grid item xs={4} >
                                    <InputBase
                                        className = "pay-amount"
                                        defaultValue={total}
                                        inputProps={{ 'aria-label': 'naked',readOnly: true }}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid container justify='center' spacing={2}>
                                 <Grid item xs={8} >
                                    <InputBase
                                        className = "pay-amount"
                                        defaultValue="Delivery Charges"
                                        inputProps={{ 'aria-label': 'naked',readOnly: true }}
                                    />
                                  </Grid>
                                  <Grid item xs={4} >
                                    <InputBase
                                        
                                        defaultValue={delivery}
                                        inputProps={{ 'aria-label': 'naked',readOnly: true }}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid container justify='center' spacing={2}>
                                 <Grid item xs={8} >
                                    <InputBase
                                        
                                        defaultValue="Total Payable"
                                        inputProps={{ 'aria-label': 'naked',readOnly: true }}
                                    />
                                  </Grid>
                                  <Grid item xs={4} >
                                    <InputBase
                                        
                                        defaultValue={delivery + total}
                                        inputProps={{ 'aria-label': 'naked',readOnly: true }}
                                    />
                                  </Grid>
                                </Grid>
                                <Button variant="outlined" className = "pay" color="secondary" disabled = {!(address && startingDate && time)} onClick={this.handlePay}>
                                    Pay
                                </Button> 

                        </form>    
                    </Grid>
             </Grid>
             
            </div>
        )
    }
}
