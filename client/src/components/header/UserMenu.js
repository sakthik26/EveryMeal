import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircleSharp';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import UserService from '../../services/UserService';
import { Link } from 'react-router-dom';


export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function logOut() {
        UserService.logout().then((data) => {
            window.location = "/login";
        }).catch((e) => {
            window.location = "/login";
            console.error(e);
        })
    }

    return (
        <div>
            <AccountCircle />
            <ArrowDown aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <MenuItem component={Link} to="/dashboard">
                    Dashboard
                </MenuItem>
                <MenuItem component={Link} to="/account">My Account</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}