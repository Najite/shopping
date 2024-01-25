import React, { useState } from "react";

import { Container, CircularProgress, Typography } from "@mui/material";


import useAPi from "../hooks/fetch-api";
import { ProductList } from "./productlist.components";

const ProductOverview = () => {
    const url = 'https://nahjyte.pythonanywhere.com/api/product';

    const {data, isLoading, error} = useAPi(url);
    const [sortedData, setSortedData] = useState(null);

    if (isLoading) {
        return (
            <Container maxWidth='xl' style={{
                marginTop: '10rem'
                }}
            >
                <CircularProgress />
            </Container>
            ) 
    }
    if (error) {
        <Container 
            maxWidth="xl"
            style={{
                marginTop: '10rem'
            }}
        >
            <Typography variant="h6" color="error">
                Error: {error.message}
            </Typography>
        </Container>
        }

    const handleSort = (sortBy) => {
        let sortedProducts;
        console.log('fired')

        switch (sortBy) {
            case 'price':
                sortedProducts = [...data].sort((a, b) => 
                    a.price - b.price
                );
                break;
            case 'name':
                sortedProducts = [...data].sort((a, b) => 
                a.name.localeCompare(b.name)
                );
                break;
            default:
                sortedProducts = [...data];
        }

        setSortedData(sortedProducts);
    }
    return (
    <Container maxWidth="xl" style={{marginTop: '10rem'}}>
        { data && 
            (
                <>
                <button onClick={() => handleSort('price')}> price</button>
                <button></button>
                <ProductList products={ sortedData || data} />
                </>
            )
        }
        </Container> 
    );
};

export default ProductOverview;