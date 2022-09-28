import { configureStore, combineReducers } from "@reduxjs/toolkit";
import stepperReducer from "../features/stepperSlice";
import { passwordApi } from '../features/passwordApi';

export const allReducers = combineReducers({
  stepper: stepperReducer,
  [passwordApi.reducerPath]: passwordApi.reducer
})

export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(passwordApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
