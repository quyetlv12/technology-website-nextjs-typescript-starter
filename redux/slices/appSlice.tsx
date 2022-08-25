import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    isLoadingCourses: false,
    isLoadingPosts: false,
    isLoadingSchedule: false,
} as any

export const appConfigSlice = createSlice({
    name: 'appCofig',
    initialState,
    reducers: {
        setStatusLoadingCourses: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.isLoadingCourses = action.payload
        },
        setStatusLoadingPosts: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.isLoadingPosts = action.payload
        },
        setStatusLoadingSchedule: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.isLoadingSchedule = action.payload
        }
    },
});

// Selectors
export const getStatusLoadingCourses = (state: any) => state.appConfig.isLoadingCourses;
export const getStatusLoadingPosts = (state: any) => state.appConfig.isLoadingCourses;
export const getStatusLoadingSchedule = (state: any) => state.appConfig.isLoadingCourses;

// Reducers and actions
export const { setStatusLoadingCourses, setStatusLoadingPosts, setStatusLoadingSchedule } = appConfigSlice.actions;
export const setAppConfig = (state: RootState) => state.appConfig;
export default appConfigSlice.reducer;