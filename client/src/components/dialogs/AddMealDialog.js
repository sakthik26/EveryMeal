import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DashboardMealForm from './DashboardMealForm';
import CloseIcon from '@material-ui/icons/Close';
import DashboardMealService from '../../services/DashboardMealService';



export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function createMeal(meal) {
        DashboardMealService.createMeal(meal);
    }

    return (
        <div>
            <Button variant="contained" size="small" onClick={handleClickOpen}>
                {props.label}
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <CloseIcon />
                    </Button>
                </DialogActions>
                <DialogTitle id="form-dialog-title">Add a meal</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Add a custom meal (not ordered via EveryMeal) to track all your nutrients.
                    </DialogContentText>
                    <DashboardMealForm onSubmit={(meal) => createMeal(meal)}/>
                </DialogContent>

            </Dialog>
        </div>
    );
}
