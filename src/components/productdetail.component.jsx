import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { 
    Container,
    CircularProgress,
    Typography, 
    Grid
 } from "@mui/material";


 import useAPi from "../hooks/fetch-api";



 
const ProductDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState(null);
    const url = `https://nahjyte.pythonanywhere.com/api/product/${id}`
    const {data, isLoading, error} = useAPi(url);

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
                </Grid>
                
            </Grid>
        )
        }
        </Container>
    )
};


export default ProductDetail;