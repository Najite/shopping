import React, {useState} from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import { Container, Typography, TextField, Button } from "@mui/material";

import { useUpdatedCart } from "../store/cartstore";


const Order = () => {
    const {orderUniqueId} = useParams();
    const {cart, total, cartId} = useUpdatedCart();
    console.log(cartId)
    const [userDetails, setUserDetails] = useState(
        {
            name: '',
            email: '',
            address: ''
        }
    );

    const handleInputChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handelPlaceOrder = async() => {
        try {
            const orderPayload = {
                id: orderUniqueId,
                user: 'admin@mail.com',
                order_item: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                }))
            }

            console.log(orderPayload)
            const orderResponse = await axios.post('https://nahjyte.pythonanywhere.com/api/order/', 
            orderPayload);

            console.log(orderResponse, 'order')

            const orderId = orderResponse.data
            console.log(orderId, 'here');



            const paymentResponse = await axios.post(`https://nahjyte.pythonanywhere.com/api/${orderUniqueId}`, {
                cartId
            })
            console.log('success')
        } catch (error) {
            console.error('error', error.message)
        }
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
                    place order {total}

                </Button>
            </form>
        </Container>
    )
}

export default Order;