import React from "react";
import ProductItem from "./productitem.components";
import PropTypes from 'prop-types'

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
