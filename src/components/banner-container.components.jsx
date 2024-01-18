import React from "react";
import { Typography, Grid, Paper } from "@mui/material";

const BannerContainer = () => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={2}>
                <Paper style={{height:'400px'}}>
                    <Typography variant="body1"> Item 1
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={8}>
                <Paper style={{height: '400px'}}>
                    <Typography variant="body1"> item center</Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
                <Paper style={{height:'400px'}}>
                    <Typography variant="body1">item right</Typography>
                </Paper>
            </Grid>
            
        </Grid>
    )
}

export default BannerContainer; 