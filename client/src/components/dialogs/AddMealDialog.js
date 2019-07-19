import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="contained" size="small" onClick={handleClickOpen}>
                {props.label}
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a meal</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a custom meal (not ordered via EveryMeal) to track all your nutrients.
                    </DialogContentText>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker value={selectedDate} onChange={handleDateChange} />
                    </MuiPickersUtilsProvider>
                    <br/>
                    <TextField
                        id="standard-number"
                        label="Calories"
                        // value={values.age}
                        // onChange={handleChange('age')}
                        // type="number"
                        // className={classes.textField}
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
