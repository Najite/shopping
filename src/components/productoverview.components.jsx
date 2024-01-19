import React from "react";



import useAPi from "../hooks/fetch-api";
import { ProductList } from "./productlist.components";

const ProductOverview = () => {
    const url = 'https://nahjyte.pythonanywhere.com/api/product';

    const {data, loading, error} = useAPi(url);
    if (loading) {
        return <p>Loading</p> 
    }
    if (error) {
        return <p>Error: {error.message} </p>
    }
    return (
    <div className="collection-overview">
        <h1>home page</h1>
        { data && <ProductList products={data} />}
        </div>
    );
};

export default ProductOverview;