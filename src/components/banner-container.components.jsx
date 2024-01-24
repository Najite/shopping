import React from "react";

import { Container } from "@mui/material";

import SliderComponent from "./carousel.components";


const BannerContainer = () => {
    return (
        <Container maxWidth="xl" sx={{
            height: 'auto',
            // overflow: 'hidden',
            padding: 0,

        }}>
        <SliderComponent />
        </Container>
    ) 
}

export default BannerContainer; 