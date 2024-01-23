import React, {lazy, Suspense} from "react";
import PropTypes from 'prop-types';

import {styled} from "@mui/system";
import { CircularProgress } from "@mui/material";



// import ProductCard from "./productcard.components";

const LazyProductCard = lazy(() => import("./productcard.components"));



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
            <Suspense fallback={<CircularProgress />}>
                <LazyProductCard
                     name={name}
                     price={price}
                    image={image} 
                />
            </Suspense>
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