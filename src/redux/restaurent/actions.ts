import {createAsyncThunk} from '@reduxjs/toolkit';
import {appRequest, APP_PATH} from 'src/api';
import {getMessageError} from 'src/utils';

const PREFIX = 'restaurent';

export const actionRestaurentList = createAsyncThunk(
  `${PREFIX}/actionRestaurentList`,
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await appRequest.get<BaseResponse<Restaurent.RestaurentRow[]>>(
        APP_PATH.restaurentGetAll,
      );
      if (data.status) {
        throw rejectWithValue(data);
      }

      return data.data;
    } catch (error) {
      throw new Error(getMessageError(error));
    }
  },
);

export const actionRestaurentGetOne = createAsyncThunk(
  `${PREFIX}/actionRestaurentGetOne`,
  async ({restaurentId}: {restaurentId: string}, {rejectWithValue}) => {
    try {
      const {data} = await appRequest.get<BaseResponse<Restaurent.RestaurentFood>>(
        APP_PATH.restaurentGetById + '/' + restaurentId,
      );
      if (data.status) {
        return rejectWithValue(data);
      }

      return data.data;
    } catch (error) {
      throw new Error(getMessageError(error));
    }
  },
);
