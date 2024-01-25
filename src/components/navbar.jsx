import React from "react";

import { Link as RouterLink } from "react-router-dom";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";


import ProductDetail from "./productdetail.component";
import CartIcon from "./carticon";


const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{
                    flexGrow: 1
                }}>
                    Market
                </Typography>
                <Button color="inherit" LinkComponent={RouterLink} to="/">
                    Home
                </Button>
                <CartIcon />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;