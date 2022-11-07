import {createAsyncThunk} from '@reduxjs/toolkit';
import {appRequest, APP_PATH} from 'src/api';

const PREFIX = 'cart';

export const actionCartGetAll = createAsyncThunk(
  `${PREFIX}/actionCartGetAll`,
  async (_, {rejectWithValue, signal}) => {
    try {
      const {data} = await appRequest.get<
        BaseResponse<{meta: Cart.CartMeta; data: Cart.CartItem[]}>
      >(APP_PATH.getCart, {signal});
      if (data.status) {
        return rejectWithValue(data);
      }

      return data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const actionCartAdd = createAsyncThunk(
  `${PREFIX}/actionCartAdd`,
  async (body: {foodId: string}, {rejectWithValue, dispatch}) => {
    try {
      const {data} = await appRequest.post<BaseResponse>(APP_PATH.addToCart, body);
      if (data.status) {
        return rejectWithValue(data);
      }
      await dispatch(actionCartGetAll());
      return data.data;
    } catch (error) {
      throw error;
    }
  },
);

export const actionCartRemove = createAsyncThunk(
  `${PREFIX}/actionCartRemove`,
  async (body: {foodId: string}, {rejectWithValue, dispatch}) => {
    try {
      const {data} = await appRequest.delete<BaseResponse>(APP_PATH.removeFormCart, {params: body});
      if (data.status) {
        return rejectWithValue(data);
      }

      await dispatch(actionCartGetAll());
      return data.data;
    } catch (error) {
      throw error;
    }
  },
);
