import React from "react";
import PropTypes from 'prop-types';


import ProductItem from "./productitem.components";


export const ProductList = ({products}) => (
    <ul>
        {
            products.map(product => (
                <ProductItem 
                key={product.id}
                product={product}
                />
            ))
        }
    </ul>
);

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}
