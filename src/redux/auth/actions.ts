import {createAsyncThunk} from '@reduxjs/toolkit';
import {appRequest, APP_PATH} from 'src/api';
import {getMessageError} from 'src/utils';

const PREFIX = 'auth';

export const actionAuthLogin = createAsyncThunk(
  `${PREFIX}/actionAuthLogin`,
  async (payload: {username: string; password: string}, {rejectWithValue}) => {
    try {
      const {data} = await appRequest.post<BaseResponse<Auth.UserInfo>>(APP_PATH.login, payload);
      if (data.status) {
        return rejectWithValue(data);
      }
      return data.data;
    } catch (error) {
      return rejectWithValue(getMessageError(error));
    }
  },
);
