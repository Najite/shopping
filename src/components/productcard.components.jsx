import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

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

export default ProductCard;