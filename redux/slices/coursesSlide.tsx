import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  courses : [] = [] ,
  englishCourse :[] = [],
  vietnameseCourse : [] = []
} as any

export const coursesSlice = createSlice({
  name: 'couses',
  initialState,
  reducers: {
    loadAllCouses: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.courses = action.payload
    },
    getAllCouses : (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) =>  {
      state.courses = action.payload
    },
    setVietnamesesLesson : (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) =>  {
      state.vietnameseCourse = action.payload
    },
    setEnglishLesson : (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) =>  {
      state.englishCourse = action.payload
    }
  },
});

// Selectors
export const getCourses = (state:any) => {
  return state.coursesState.courses
}
export const getEnglishCourses = (state:any) => {
  return state.coursesState.englishCourse
}
export const getVietnamesCourses = (state:any) => {
  return state.coursesState.vietnameseCourse
}

// Reducers and actions
export const { loadAllCouses , getAllCouses , setVietnamesesLesson ,setEnglishLesson } = coursesSlice.actions;
export const setCouses = (state: RootState) => state.coursesState;
export default coursesSlice.reducer;