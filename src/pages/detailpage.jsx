import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CircularProgress, Container, Typography, Grid } from "@mui/material";

import useAPi from "../hooks/fetch-api";
import ProductDetail from "../components/productdetail.component";
import OrderSummary from "../components/order-summary";

export const ProductDetailPage = () => (
    <ProductDetail />

);