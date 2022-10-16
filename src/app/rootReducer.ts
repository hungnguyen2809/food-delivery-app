import {combineReducers} from '@reduxjs/toolkit';
import authReducer from 'src/redux/auth/reducer';
import restaurentReducer from 'src/redux/restaurent/reducer';

const createRootReducer = () => {
  return combineReducers({
    auth: authReducer,
    restaurent: restaurentReducer,
  });
};

export default createRootReducer;
