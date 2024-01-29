import React from "react";


import { Container, Typography, Button, List, ListItem } from "@mui/material";

// import OrderSummary from "./order-summary";
// import useCartStore from "../store/cartstore";
// import Order from "./order";
import { useUpdatedCart } from "../store/cartstore";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
    // const cartItems = useCartStore((state) => state.cart);
    const {cart, total, removeFromCart, orderUniqueId} = useUpdatedCart(); 
    const navigate = useNavigate();

    const handleProcessingOrder = () => {
        navigate(`/order/${orderUniqueId}`)
    }

    const handleCheckout = () => {
        console.log('processing', cart)
    }

    const handleRemoveItem = (productId) => {
        removeFromCart(productId);
    };

    return (
        <Container>
            <Typography variant="h4">Checkout</Typography>
            <List>
                {
                    cart.map((item) => (
                        <ListItem key={item.id}>
                            {item.name} - quantity: {item.quantity} - price:{item.price * item.quantity}
                            <Button 
                            onClick={() => handleRemoveItem(item.id)}>
                                Remove
                            </Button>
                        </ListItem>
                    ))
                }
            </List>
            <Typography variant="h6">Total: {total}</Typography>
            <Button variant="contained"
             color="primary"
             onClick={handleProcessingOrder}
             >Proceed to Checkout
             </Button>

             {/* <Order /> */}
        </Container>
    )
}

export default Checkout