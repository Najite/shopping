import {create} from 'zustand';
import zukeeper from 'zukeeper';

const useCartStore = create(zukeeper(set => ({
    cart: [],
    addToCart: (product) => set((state) => ({
        cart: [
            ...state.cart,
            product]
    }))
})))
 
export default useCartStore