import React, {useState} from "react";

import { useParams } from "react-router-dom";

import { Container, Typography, TextField, Button } from "@mui/material";

import { useUpdatedCart } from "../store/cartstore";


const Order = () => {
    const {orderUniqueId} = useParams();
    const {cart, total} = useUpdatedCart();
    const [userDetails, setUserDetails] = useState(
        {
            name: '',
            email: '',
            address: ''
        }
    );

    const handleInputChange = () => {
        console.log('user details', userDetails);
        console.log('cart', cart)
    }

    const handelPlaceOrder = () => {
        console.log('cart details', userDetails);
        console.log('cart', cart)
        }

    return (
        <Container>
            <Typography variant="h4">Place your order</Typography>
            <Typography variant="h6">Total items in cart: {cart.length}</Typography>
            <Typography variant="h6">Price {total}</Typography>

            <form>
                <TextField
                label='Name'
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                />

                <TextField
                label='Email'
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                />
                <Button
                variant="contained"
                color="primary"
                onClick={handelPlaceOrder}>
                    place order

                </Button>
            </form>
        </Container>
    )
}

export default Order;