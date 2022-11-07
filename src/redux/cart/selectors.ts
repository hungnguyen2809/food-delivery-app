import {RootState} from 'src/app/store';

export const selectorCartItems = (state: RootState) => state.cart.cartItems;
export const selectorCartMeta = (state: RootState) => state.cart.meta;
