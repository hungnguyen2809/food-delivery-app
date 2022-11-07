import {combineReducers} from '@reduxjs/toolkit';
import authReducer from 'src/redux/auth/reducer';
import cartReducer from 'src/redux/cart/reducer';
import restaurentReducer from 'src/redux/restaurent/reducer';

const createRootReducer = () => {
  return combineReducers({
    auth: authReducer,
    restaurent: restaurentReducer,
    cart: cartReducer,
  });
};

export default createRootReducer;
