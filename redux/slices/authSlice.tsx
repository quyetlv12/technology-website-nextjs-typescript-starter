import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  user : [] = [] ,
  loginStatus : false
} as any

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveInfoAccount: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.user = action.payload
    },
    changeLoginStatus : (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) =>{
      state.loginStatus = action.payload
    }
  },
});

// Selectors
export const getUser = (state:any) => state.availableProducts;

// Reducers and actions
export const { saveInfoAccount , changeLoginStatus } = userSlice.actions;
export const setProducts = (state: RootState) => state.auth;
export default userSlice.reducer;