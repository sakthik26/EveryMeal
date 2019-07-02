"use strict";
import React from 'react';
import { FormControl,MenuItem, FormHelperText, Card, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import "./CustomizationForm.css"

const styles = theme => ({
    main: {
        padding: 24,
    },
})


export class CustomizationForn extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.state = {value:'',valu2:''}
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleChange1(event){
        this.setState({valu2: event.target.value})
    }


    render() {
        return (
            <div>
                TEST
                
                <FormControl className="form-control">
                    <InputLabel>Quantity</InputLabel>
                    <Select
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    </Select>


                    <InputLabel>Quantity</InputLabel>
                    <Select
                    value={this.state.valu2}
                    onChange={this.handleChange1}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );

    }
}

export default withStyles(styles)(CustomizationForn);
