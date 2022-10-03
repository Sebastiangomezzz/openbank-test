import React, { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import stepperReducer from "../../redux/features/stepperSlice";
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
      stepper: { value: 0, step1Completed: false, passwordError: false },
    },
    store = configureStore({
      reducer: { stepper: stepperReducer },
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
export {renderHook} from "@testing-library/react-hooks";
export { render };
