import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {appRequest, APP_PATH} from 'src/api';
import {removeDataStorage, setDataStorage, STORAGE_KEY} from 'src/utils';

const PREFIX = 'auth';

export const actionAuthSetUserInfo = createAction<Auth.UserInfo | undefined>(
  `${PREFIX}/actionAuthSetUserInfo`,
);

export const actionAuthLogin = createAsyncThunk(
  `${PREFIX}/actionAuthLogin`,
  async (payload: {username: string; password: string}, {rejectWithValue}) => {
    try {
      const {data} = await appRequest.post<BaseResponse<Auth.UserInfo>>(APP_PATH.login, payload);
      if (data.status) {
        return rejectWithValue(data);
      }
      await setDataStorage(STORAGE_KEY.ACCESS_TOKEN, data.data.token);
      await setDataStorage(STORAGE_KEY.USER_INFO, data.data);
      return data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const actionAuthLogout = createAsyncThunk(
  `${PREFIX}/actionAuthLogout`,
  async (_, {dispatch}) => {
    try {
      await removeDataStorage(STORAGE_KEY.ACCESS_TOKEN);
      await removeDataStorage(STORAGE_KEY.USER_INFO);
      dispatch(actionAuthSetUserInfo(undefined));
    } catch (error) {
      throw error;
    }
  },
);

export const actionAuthRegister = createAsyncThunk(
  `${PREFIX}/actionAuthRegister`,
  async (payload: {username: string; password: string; email: string}, {rejectWithValue}) => {
    try {
      const {data} = await appRequest.post<BaseResponse>(APP_PATH.register, payload);
      if (data.status) {
        return rejectWithValue(data);
      }
      return data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const actionAuthGetUserInfo = createAsyncThunk(
  `${PREFIX}/actionAuthGetUserInfo`,
  async (payload: {username: string}, {rejectWithValue}) => {
    try {
      const {data} = await appRequest.get<BaseResponse>(APP_PATH.getInfo, {params: payload});
      if (data.status) {
        return rejectWithValue(data);
      }
      return data.data;
    } catch (error) {
      throw error;
    }
  },
);
