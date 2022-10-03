import { createSlice } from "@reduxjs/toolkit";

export interface StepperState {
  value: number;
  step1Completed: boolean;
  passwordError: boolean;
}

const initialState: StepperState = {
  value: 0,
  step1Completed: false,
  passwordError: false,
};

export const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.value += 1;
    },
    decrementStep: (state) => {
      state.value -= 1;
    },
    resetSteps: (state) => {
      state.value = 0;
    },
    setStep1Completed: (state) => {
      state.step1Completed = true;
    },
    setPasswordError: (state) => {
      state.passwordError = true;
    },
  },
});

export const {
  incrementStep,
  decrementStep,
  resetSteps,
  setStep1Completed,
  setPasswordError,
} = stepperSlice.actions;

export default stepperSlice.reducer;
