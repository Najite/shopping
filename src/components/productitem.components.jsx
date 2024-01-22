import React from "react";
import PropTypes from 'prop-types';
import {styled} from "@mui/system";


import ProductCard from "./productcard.components";


const CardContainer = styled('div')({
    border: '1px solid #ccc',
    borderRadius: '8ox',
    padding: '16px',
    textAlign: 'center'
})

const ProductItem = ({product}) => {
    const {id, name, price, image} = product;
    return (
        <CardContainer key={id}  >
            <ProductCard
            name={name}
            price={price}
            image={image} />
        </CardContainer>
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