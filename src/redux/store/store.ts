import { configureStore, combineReducers } from '@reduxjs/toolkit';
import passwordManagerReducer from "../features/passwordManagerSlice";

const reducers = combineReducers({
  passwordManager: passwordManagerReducer,
});

export const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
