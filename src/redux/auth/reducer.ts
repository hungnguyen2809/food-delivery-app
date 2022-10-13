import {createReducer} from '@reduxjs/toolkit';
import {actionAuthLogin, actionAuthSetUserInfo} from './actions';
import {AuthState} from './type';

const initState: AuthState = {};

const authReducer = createReducer(initState, (builder) => {
  builder.addCase(actionAuthSetUserInfo, (state, action) => {
    state.token = action.payload?.token;
    state.userInfo = action.payload;
  });
  builder.addCase(actionAuthLogin.fulfilled, (state, action) => {
    state.token = action.payload.token;
    state.userInfo = action.payload;
  });
});

export default authReducer;
