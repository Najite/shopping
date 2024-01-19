import React from "react";

// Slider carousel settings
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Material UI
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


import useAPi from "../hooks/fetch-api";



const slickContainer = {
        width: '80%',
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
        slidesToScroll: 1
    }

    return (
        <Slider {...sliderSetting} style={slickContainer}>
            {data.map((slide, index) => (
                <Card key={index} >
                    <CardMedia 
                    component="img"
                    height="auto"
                    image={slide.image}
                    alt={slide.name}
                    style={{
                        maxWidth: '100%',
                        width: '40%',
                        objectFit: 'cover',
                        height: 'auto',
                        // display: 'flex',
                        // alignItems: 'center',
                        margin: 'auto'
                        
                    }}
                    /> 
                </Card>
            ))}
        </Slider>
    );
};

export default SliderComponent;