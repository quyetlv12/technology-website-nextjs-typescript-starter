import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    schedules: [] = [],
    englishSchedule: [] = [],
    vietnameseSchedule: [] = [],
    vietStartDoc: 0,
    engStartDoc: 0
} as any

export const scheduleSlice = createSlice({
    name: 'schedules',
    initialState,
    reducers: {
        setSchedule: (
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
        },
        updateVietnamesesStartDoc: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.vietStartDoc = action.payload
        },
        updateEnglishStartDoc: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.engStartDoc = action.payload
        },
    },
});

// Selectors
export const getSchedules = (state: any) => {
    return state.schedulesState.schedules
}
export const getVieSchedule = (state: any) => {
    return state.schedulesState.vietnameseSchedule
}
export const getEngSchedule = (state: any) => {
    return state.schedulesState.englishSchedule
}
export const getEngStartDoc = (state: any) => {
    return state.schedulesState.engStartDoc
}
export const getVieStartDoc = (state: any) => {
    return state.schedulesState.vietStartDoc
}

// Reducers and actions
export const { setVietnamesesSchedule, setEnglishSchedule, setSchedule, updateVietnamesesStartDoc, updateEnglishStartDoc } = scheduleSlice.actions;
export const setSchedules = (state: RootState) => state.schedulesState;
export default scheduleSlice.reducer;