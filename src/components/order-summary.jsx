import React from "react";

import { Typography, Box } from "@mui/material";

// import useCartStore from "../store/cartstore";
import { useUpdatedCart } from "../store/cartstore";

const OrderSummary = () => {
    // const cartItems = useCartStore((state) => state.cart);
    // const total = useCartStore((state) => state.total);
    const {cart,  total} = useUpdatedCart();

    return (
        <Box p={2}>
            <Typography variant="h6"> Order Summary</Typography>
            {cart.map((item) => (
                <div key={item.id}>
                    <Typography>{item.name}</Typography>
                    <Typography>Quantity: {item.quantity}</Typography>
                    <Typography>Price: {item.price * item.quantity}</Typography>
                    <hr />
                </div> 
            ))} 
            {
            cart.length === 0 && <Typography>
                Your cart is empty 
                </Typography>
            }
            <Typography>Total Price: {total}</Typography>
        </Box>
    )
}

export default OrderSummary;