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
        width: '100%',
        height: 'auto',
        // margin: 'auto'
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
        <Slider {...sliderSetting} sx={slickContainer}>
            {data.map((slide, index) => (
                <Card key={index} sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                    }} >
                    <CardMedia 
                    component="img"
                    // height="auto"
                    image={slide.image}
                    alt={slide.name}
                    sx={{
                        width: '100%',
                        flex: 1,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        margin: 'auto',
                    }}
                    /> 
                </Card>
            ))}
        </Slider>
    );
};

export default SliderComponent;