import { configureStore, combineReducers } from '@reduxjs/toolkit';
import stepperReducer from '../features/stepperSlice';

const reducers = combineReducers({
  stepper: stepperReducer,
});

export const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
