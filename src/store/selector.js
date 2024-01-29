import { createSelector } from "reselect";

const getCart = (state) => state.cart;
const getTotal = (state) => state.total;

export const getUpdatedCart = createSelector(
    [getCart, getTotal], (cart,total) => {
        return {
            cart: cart,
            total: total
        }
    }
)