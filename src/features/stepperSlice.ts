import { createSlice } from "@reduxjs/toolkit";

export interface StepperState {
  value: number;
}

const initialState: StepperState = {
  value: 0,
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
  },
});

export const { incrementStep, decrementStep, resetSteps } =
  stepperSlice.actions;

export default stepperSlice.reducer;
