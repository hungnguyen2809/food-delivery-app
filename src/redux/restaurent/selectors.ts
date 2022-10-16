import {RootState} from 'src/app/store';

export const selectorRestaurentList = (state: RootState) => state.restaurent.listRestaurent;
