import React from "react";

import { Container } from "@mui/material";

import SliderComponent from "./carousel.components";


const BannerContainer = () => {
    return (
        <Container maxWidth='fluid' sx={{
            height: 'auto',
            // overflow: 'hidden',
            padding: 0,

        }}>
        <SliderComponent />
        </Container>
    )
}

export default BannerContainer; 