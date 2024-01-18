import React from "react";
import { Container } from "@mui/material"; // material ui container


import ProductOverview from "../components/productoverview.components";
import BannerContainer from "../components/banner-container.components";


const HomePage = () => {
    return (
        <>
        <BannerContainer />
            <ProductOverview />
        </>
    )
}

export default HomePage;