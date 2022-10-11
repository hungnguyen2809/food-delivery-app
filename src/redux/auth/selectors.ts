import {RootState} from 'src/app/store';

export const selectorAuthToken = (state: RootState) => state.auth.token;
export const selectorAuthUserInfo = (state: RootState) => state.auth.userInfo;
