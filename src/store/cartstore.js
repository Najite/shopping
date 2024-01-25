import {create} from 'zustand';
import zukeeper from 'zukeeper';

const useCartStore = create(zukeeper(set => ({
    cart: [],
    total: 0, // Total price for the entire cart
    addToCart: (product) => {
        set((state) => {
        const existingItem = state.cart.findIndex((item) => item.id === product.id);
        // update the quantity if item exists
        const updatedCart = existingItem !== -1 ? [...state.cart] : [...state.cart, { ...product, quantity: 0 }];

        if (existingItem !== -1) {
            updatedCart[existingItem].quantity++;
        } else {
            updatedCart[updatedCart.length -1].quantity++;
        }

        const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        localStorage.setItem('total', JSON.stringify(updatedTotal));
        return {
            cart: updatedCart,
            total: updatedTotal
        };        
    },)},

    removeFromCart: (productId) => {
        set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== productId);

            const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            localStorage.setItem('total', JSON.stringify(updatedTotal));

            return {
                cart: updatedCart,
                total: updatedTotal
            }
        })
    }

}
)))

const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
const storedTotal = JSON.parse(localStorage.getItem('cart')) || 0;

useCartStore.setState({
    cart: storedCart,
    total: storedTotal
});

export default useCartStore