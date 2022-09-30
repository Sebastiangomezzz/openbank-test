import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useSubmitPasswordMutation } from "./useSubmitPasswordMutation";
//Redux
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
//react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const wrapper = ({ children }: any) => (
  <QueryClientProvider client={new QueryClient()}>
    <Provider store={store}>{children}</Provider>
  </QueryClientProvider>
);

const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("useSubmitPasswordMutation tests", () => {
  test("should return a function", () => {
    const { result } = renderHook(() => useSubmitPasswordMutation(), {
      wrapper,
    });
    expect(typeof result.current).toBe("object");
  });
  test("should set isLoading to true if submitPasswordMutation is called with a string and set to false after it", async () => {
    const { result, waitFor, waitForNextUpdate } = renderHook(
      () => useSubmitPasswordMutation(),
      {
        wrapper,
      }
    );
    const { submitPasswordMutation } = result.current;
    submitPasswordMutation.mutate("123456" as string);
    waitFor(() => {
      expect(submitPasswordMutation.isLoading).toBeTruthy();
    });
    await waitForNextUpdate();
    expect(submitPasswordMutation.isLoading).toBeFalsy();
  });
});
