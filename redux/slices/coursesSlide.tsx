import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  couses : [] = [] ,
} as any

export const coursesSlice = createSlice({
  name: 'couses',
  initialState,
  reducers: {
    loadAllCouses: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.couses = action.payload
    },
  },
});

// Selectors
export const getCouses = (state:any) => state.courses;

// Reducers and actions
export const { loadAllCouses } = coursesSlice.actions;
export const setCouses = (state: RootState) => state.courses;
export default coursesSlice.reducer;