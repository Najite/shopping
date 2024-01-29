// useCartStore.js
import { create } from 'zustand';
import { produce } from 'immer';

const generateUniqueId = () => Math.random().toString(36).substring(7);
const generateOrderUniqueId = () => 'order_' + generateUniqueId(); // Function to generate a unique order identifier

const useCartStore = create((set) => ({
  cartId: generateUniqueId(),
  orderUniqueId: generateOrderUniqueId(), // Add a unique identifier for the order
  cart: [],
  total: 0,

  addToCart: (product) => {
    set(
      produce((state) => {
        const existingItem = state.cart.findIndex((item) => item.id === product.id);

        if (existingItem !== -1) {
          state.cart[existingItem].quantity++;
        } else {
          const newItem = { ...product, quantity: 1 };
          state.cart.push(newItem);
        }

        state.total = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('total', JSON.stringify(state.total));
      })
    );
  },

  removeFromCart: (productId) => {
    set(
      produce((state) => {
        state.cart = state.cart.filter((item) => item.id !== productId);
        state.total = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('total', JSON.stringify(state.total));
      })
    );
  },
}));

const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
const storedTotal = JSON.parse(localStorage.getItem('total')) || 0;

useCartStore.setState({
  cart: storedCart,
  total: storedTotal,
});

export const useUpdatedCart = () => useCartStore((state) => state);

export default useCartStore;
