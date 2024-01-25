import React, { useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Popover, Typography, Box } from "@mui/material";


import useCartStore from "../store/cartstore";

const CartIcon = () => {
    const cartItems = useCartStore((state) => state.cart);
    const total = useCartStore((state) => state.total)
    const [anchor, setAnchor] = useState(null);

    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchor(null);
    };

    const open = Boolean(anchor);

    return (
        <>
        <Badge badgeContent={cartItems.length} color="secondary" onClick={handleClick}>
            <ShoppingCartIcon />
        </Badge>
        <Popover
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        >
            <Box>
                <Typography variant="h6"> Shopping Cart</Typography>
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <Typography>{item.name}</Typography>
                        <Typography>Quantity: {item.quantity}</Typography>
                        <Typography>
                            Total Price: {item.price * item.quantity} 
                        </Typography>
                        <hr />
                    </div>
                ))}
                {
                cartItems.length === 0 && <Typography>Empty Cart </Typography>
                }
                <Typography>Total Price: {parseFloat(total).toFixed(2)}</Typography>
            </Box>

        </Popover>
        </>
    )
}

export default CartIcon;