"use strict";
import React from 'react';
import { FormControl, MenuItem, InputLabel, Select, TextField} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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
            <div >
                <FormControl className="form-control">
                    <FormControl>
                        <div className="option">
                            <InputLabel required margin="dense" shrink>Portion size</InputLabel>
                            <Select
                            value={this.state.value}
                            onChange={this.handleChange}
                            >
                                <MenuItem value={1}>&#189;</MenuItem>
                                <MenuItem value={2}>1</MenuItem>
                            </Select> 
                        </div>            
                    </FormControl>

                <FormControl>
                    <div className="option">
                        <InputLabel required margin="dense" shrink>Quantity</InputLabel>
                        <Select
                        value={this.state.valu2}
                        onChange={this.handleChange1}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </div>
                </FormControl>

                <FormControl>
                    <TextField
                        id="outlined-textarea"
                        label="Additional comments"
                        placeholder="Let us know what you need!"
                        multiline
                        margin="normal"
                        variant="outlined"
                        rows="3"
                        fullWidth
                    />
                </FormControl>
                    
                </FormControl>
            </div>
        );

    }
}

export default withStyles(styles)(CustomizationForn);
