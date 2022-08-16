import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  comments : [] = [] ,
} as any

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    loadAllComment: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.comments = action.payload
    },
  },
});

// Selectors
export const getComment = (state:any) => state.app;

// Reducers and actions
export const { loadAllComment } = commentSlice.actions;
export const setComments = (state: RootState) => state.comment;
export default commentSlice.reducer;