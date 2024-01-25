import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { 
    Container,
    CircularProgress,
    Typography, 
    Grid,
    Button
 } from "@mui/material";


 import useAPi from "../hooks/fetch-api";
 import useCartStore from "../store/cartstore";



 
const ProductDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState(null);
    const url = `https://nahjyte.pythonanywhere.com/api/product/${id}`
    const {data, isLoading, error} = useAPi(url);
    const cartstore = useCartStore();

    const handleAddToCart = () => {
        if (detail) {
            cartstore.addToCart(detail);
            console.log('added to cart')

        }
    }
    useEffect(() => {
        if (data && data !== null) {
            setDetail(data);
        }
    }, [data])

    if (isLoading) {
        return <CircularProgress />
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }


    return (
        <Container>
            <Typography variant="h4">
                    Product Detail
            </Typography>

        {detail && (
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={detail.image} alt={detail.name} style={{ width: '100%'}} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        {detail.name}
                    </Typography>
                    <Typography variant="body1">
                        {detail.price}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleAddToCart}>Add to cart</Button>
                </Grid>
                
            </Grid>
        )
        }
        </Container>
    )
};


export default ProductDetail;