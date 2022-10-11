import {AuthState} from './type';
import {createReducer} from '@reduxjs/toolkit';
import {actionAuthLogin} from './actions';

const initState: AuthState = {};

const authReducer = createReducer(initState, (builder) => {
  builder.addCase(actionAuthLogin.fulfilled, (state, action) => {
    state.token = action.payload.token;
    state.userInfo = action.payload;
  });
});

export default authReducer;
