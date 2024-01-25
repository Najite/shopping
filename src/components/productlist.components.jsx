import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

import { CircularProgress, Container, Grid } from "@mui/material";


import ProductItem from "./productitem.components";


export const ProductList = ({products}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPage = 4;
    const pageSize = itemPage * currentPage;
    const [loading, setLoading] = useState(false);

    const observer = useRef();
    const lastProductRef = useCallback(node => {
        if (observer.current) observer.current.disconnet();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setCurrentPage(prevPage => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, []);

    const visibleProducts = products.slice(0, pageSize);

    useEffect(() => {
        const handleScroll = () => {
            const {scrollTop, clientHeight, scrollHeight} = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
                setLoading(true);
                setTimeout(() => {
                    setCurrentPage(prevPage => prevPage + 1);
                    setLoading(false);
                }, 1000);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading])
    return (
    <Grid container spacing={2} >
        {
            visibleProducts.map((product, index) => {
                    return (
                    <Grid item xs={12} sm={1} md={3} key={product.id} >
                    <ProductItem 
                    key={product.id}
                    product={product}
                    />
                    {loading && index === visibleProducts.length - 1 && (
                        <Container
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10rem',
                            
                        }}
                        >
                            <CircularProgress />
                        </Container>
                    )}
                    </Grid>
                    );
                }             
            )
        }
        <div ref={lastProductRef} style={{
            height: '1px',
            visibility: 'hidden'
        }}></div>
    </Grid>
    )
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}
