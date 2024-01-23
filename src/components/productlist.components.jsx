import React from "react";
import PropTypes from 'prop-types';

import { Grid } from "@mui/material";


import ProductItem from "./productitem.components";


export const ProductList = ({products}) => (
    <Grid container spacing={1}>
        {
            products.map(product => (
                <Grid item xs={12} sm={1} md={3} key={product.id}>
                    <ProductItem 
                    key={product.id}
                    product={product}
                    />
                </Grid>

            ))
        }
    </Grid>
);

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}
