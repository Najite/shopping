import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import PropTypes from 'prop-types';

const ProductCard = ({name, price, image}) =>  {
    return(
        <Card>
            <CardMedia
            component="img"
            alt={name}
            height="130"
            image={image}
            
        />
        <CardContent>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {price}
            </Typography>
        </CardContent>
        </Card>
    );
};

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string,
}

export default ProductCard;
