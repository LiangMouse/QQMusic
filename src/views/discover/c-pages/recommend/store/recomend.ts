import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import from '../'
import { getBanners } from '../service';

interface IrecommendState {
  response: {
    data: {
      list: any[];
    };
  };
}
const initialState: IrecommendState = {
  response: {
    data: {
      list: []
    }
  }
};
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.response = payload.response;
    }
  }
});
export const fetchBannerDataAction = createAsyncThunk(
  'getSongLists',
  async (arg, { dispatch }) => {
    const res = await getBanners();
    dispatch(changeBannersAction(res));
  }
);
export const { changeBannersAction } = recommendSlice.actions;
export default recommendSlice.reducer;
