import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    schedules: [] = [],
    englishSchedule: [] = [],
    vietnameseSchedule: [] = []
} as any

export const scheduleSlice = createSlice({
    name: 'schedules',
    initialState,
    reducers: {
        setSchedule :(
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.schedules = action.payload
        },
        setVietnamesesSchedule: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.vietnameseSchedule = action.payload
        },
        setEnglishSchedule: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.englishSchedule = action.payload
        }
    },
});

// Selectors
export const getSchedules = (state:any) =>{
    return state.schedulesState.schedules
}
export const getVieSchedule = (state: any) => {
    return state.schedulesState.courses
}
export const getEngSchedule = (state: any) => {
    return state.schedulesState.englishCourse
}

// Reducers and actions
export const { setVietnamesesSchedule, setEnglishSchedule , setSchedule } = scheduleSlice.actions;
export const setSchedules = (state: RootState) => state.schedulesState;
export default scheduleSlice.reducer;