import React, {lazy, Suspense} from "react";
import PropTypes from "prop-types";

// Slider carousel settings
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
// Material UI
import { Card, CardMedia, CircularProgress } from "@mui/material";


// local import
import useAPi from "../hooks/fetch-api"; 
import { PrevArrow, NextArrow } from "./custom-arrow";


const slickContainer = {
        width: '100%',
        height: 'auto',
    }


const SliderComponent = () => {
    const url = 'https://nahjyte.pythonanywhere.com/api/product';
    const {data, loading, error} = useAPi(url)
    if (loading) {
        return <CircularProgress />
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
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />

    }  

    return (
        <Slider {...sliderSetting} sx={slickContainer}>
            {data.slice(0,3).map((slide, index) => (
                <Card key={index} sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                    }} >
                    <CardMedia 
                    component="img"
                    image={slide.image}
                    alt={slide.name}
                    sx={{
                        width: '100%',
                        height: {
                            xs: '70vh',
                            sm: '100vh',
                            md: '60vh',
                            lg: '90vh',
                            xl: '120vh'

                        },
                        objectFit: 'contain',
                    }}
                    /> 
                </Card>
            ))} 
        </Slider>
    );
};

export default SliderComponent;






