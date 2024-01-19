import React from "react";

import { Container } from "@mui/material";

import SliderComponent from "./carousel.components";


const BannerContainer = () => {
    return (
        <Container maxWidth="x1" style={{
            height: '100vh', 
            display: 'flex',
            flexDirection: 'column'
        }}>
        <SliderComponent />
        </Container>
    )
}

export default BannerContainer; 