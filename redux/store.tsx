import { Action, applyMiddleware, configureStore , ThunkAction } from "@reduxjs/toolkit";
import userSlice from "./slices/authSlice";
import commentSlice from "./slices/commentSlice";
import coursesSlice from "./slices/coursesSlide";
import  scheduleSlice from './slices/schedule';
import appConfigSlice from './slices/appSlice';

export const store = configureStore({
  reducer: {
    auth: userSlice,
    comment : commentSlice,
    coursesState : coursesSlice,
    schedulesState : scheduleSlice,
    appConfig : appConfigSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;
