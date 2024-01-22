import React from "react";

// Slider carousel settings
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {PrevArrow, NextArrow} from 'react-slick';

// Material UI
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


import useAPi from "../hooks/fetch-api";


const customArrowStyle = {
    color: 'black',
    fontSize: '24px',
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '10px'
}


const slickContainer = {
        width: '80%',
        height: '100vh',
        overflow: 'hidden',
        margin: 'auto'
    }

// const slickSlide = {
//         display: 'flex',
//         justifyContent: 'center'
//     }

const SliderComponent = () => {
    const url = 'https://nahjyte.pythonanywhere.com/api/product';
    const {data, loading, error} = useAPi(url)
    if (loading) {
        return <p>Loading</p>
    }
    
    if (error) {
        return <p>Error: {error.message}</p>
    }

    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <PrevArrow  />,
        // nextArrow: <NextArrow />

    } 

    return (
        <Slider {...sliderSetting} style={slickContainer}>
            {data.map((slide, index) => (
                <Card key={index} style={{
                    width: '100%'
                }} >
                    <CardMedia 
                    component="img"
                    height="auto"
                    image={slide.image}
                    alt={slide.name}
                    style={{
                        maxWidth: '100%',
                        width: '40%',
                        objectFit: 'cover',
                        margin: 'auto',
                        height: 'auto',               
                    }}
                    /> 
                </Card>
            ))}
        </Slider>
    );
};

export default SliderComponent;