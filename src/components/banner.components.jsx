import React from "react";
import { Container } from "@mui/material";
import PropTypes from 'prop-types';


import useAPi from "../hooks/fetch-api";


export const BannerItem = () => {
    const url = 'https://nahjyte.pythonanywhere.com/api/product';
    const {data, loading, error} = useAPi(url);
    if (loading) {
        return <p>Loading.....</p>
    }
    if (error) {
        return <p>Eror: {error.message}</p>
    }

    return (
        <div>
            <h2>banner center</h2>
        </div>
    )   
};