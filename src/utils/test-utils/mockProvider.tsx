import React, { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import passwordManagerReducer from "../../redux/features/passwordManagerSlice";
import { store, RootState } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

const queryClient = new QueryClient();

function render(
  ui: React.ReactElement,
  {
    preloadedState = {
      passwordManager: {
        stepperValue: 0,
        stepsCompletion: {
          currStep: 1,
          prevCompleted: false,
        },
        passwordError: false,
      },
    },
    store = configureStore({
      reducer: { passwordManager: passwordManagerReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { renderHook } from "@testing-library/react-hooks";
export { render };
