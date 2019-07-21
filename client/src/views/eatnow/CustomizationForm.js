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
      
    }



    render() {
        return (
            <div >
                <FormControl className="form-control">
                    <FormControl>
                        <div className="option">
                            <InputLabel required margin="dense" shrink>Portion size</InputLabel>
                            <Select
                            value={this.props.portion}
                            onChange={this.props.handlePortion}
                            >
                                
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={0.5}>0.5</MenuItem>
                            </Select> 
                        </div>            
                    </FormControl>

                <FormControl>
                    <div className="option">
                        <InputLabel required margin="dense" shrink>Quantity</InputLabel>
                        <Select
                        value={this.props.quantity}
                        onChange={this.props.handleQuantity}
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
                        value={this.props.comments}
                        onChange={this.props.handleComments}
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
