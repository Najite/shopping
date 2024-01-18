import React from "react";
import ProductCard from "./productcard.components";
import PropTypes from 'prop-types';

const ProductItem = ({product}) => {
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

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string
}

export default ProductItem;