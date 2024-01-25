import React from "react";

import { Container, CircularProgress } from "@mui/material";


import useAPi from "../hooks/fetch-api";
import { ProductList } from "./productlist.components";

const ProductOverview = () => {
    const url = 'https://nahjyte.pythonanywhere.com/api/product';

    const {data, isLoading, error} = useAPi(url);
    if (isLoading) {
        return (
        <p>h</p>
        ) 
    }
    if (error) {
        return <p>Error: {error.message} </p>
    }
    return (
    <Container maxWidth="xl" style={{marginTop: '10rem'}}>
        { data && <ProductList products={data} />}
        </Container>
    );
};

export default ProductOverview;