import {createAsyncThunk} from '@reduxjs/toolkit';
import {appRequest, APP_PATH} from 'src/api';

const PREFIX = 'food';

export const actionFoodGetById = createAsyncThunk(
  `${PREFIX}/actionFoodGetById`,
  async ({foodId}: {foodId: string}, {rejectWithValue}) => {
    try {
      const {data} = await appRequest.get<BaseResponse<Food.FoodInfo>>(
        APP_PATH.foodGet + '/' + foodId,
      );
      if (data.status) {
        return rejectWithValue(data);
      }

      return data.data;
    } catch (error) {
      throw error;
    }
  },
);
