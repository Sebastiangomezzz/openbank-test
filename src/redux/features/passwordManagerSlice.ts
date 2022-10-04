import { createSlice } from "@reduxjs/toolkit";

export interface PasswordManagerState {
  stepperValue: number;
  stepsCompletion: {
    currStep: number;
    prevCompleted: boolean;
  };
  passwordError: boolean;
}

const initialState: PasswordManagerState = {
  stepperValue: 0,
  stepsCompletion: {
    currStep: 1,
    prevCompleted: false,
  },
  passwordError: false,
};

export const passwordManagerSlice = createSlice({
  name: "passwordManager",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.stepperValue += 1;
    },
    decrementStep: (state) => {
      state.stepperValue -= 1;
    },
    resetSteps: (state) => {
      state.stepperValue = 0;
    },
    setStepsCompletion: (state) => {
      state.stepsCompletion.prevCompleted = true;
      state.stepsCompletion.currStep = state.stepsCompletion.currStep + 1;
    },
    resetStepsCompletion: (state) => {
      state.stepsCompletion.prevCompleted = false;
      state.stepsCompletion.currStep = 1;
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
  setStepsCompletion,
  resetStepsCompletion,
  setPasswordError,
} = passwordManagerSlice.actions;

export default passwordManagerSlice.reducer;
