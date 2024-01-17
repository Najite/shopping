import React from "react";
import ProductCard from "./productcard.components";


export const ProductItem = ({product}) => {
    const {id, name, price, image} = product;
    return (
        <div key={id}>
            <ProductCard
            name={name}
            price={price}
            image={image} />
        </div>
    );
};
