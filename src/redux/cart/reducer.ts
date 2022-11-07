import {createReducer} from '@reduxjs/toolkit';
import {actionCartGetAll} from './actions';

interface CartState {
  cartItems: Cart.CartItem[];
  meta: Cart.CartMeta;
}

const initState: CartState = {
  cartItems: [],
  meta: {},
};

const cartReducer = createReducer(initState, (builder) => {
  builder.addCase(actionCartGetAll.fulfilled, (state, action) => {
    state.cartItems = action.payload.data || [];
    state.meta = action.payload.meta || {};
  });
});

export default cartReducer;
