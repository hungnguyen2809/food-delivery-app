import {createReducer} from '@reduxjs/toolkit';
import {actionRestaurentList} from './actions';
import {RestaurentState} from './type';

const initState: RestaurentState = {
  listRestaurent: [],
};

const restaurentReducer = createReducer(initState, (builder) => {
  builder.addCase(actionRestaurentList.fulfilled, (state, action) => {
    state.listRestaurent = action.payload;
  });
});

export default restaurentReducer;
