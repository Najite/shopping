import React from "react";
import ProductCard from "./productcard.components";
import { ProductItem } from "./productitem.components";

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
