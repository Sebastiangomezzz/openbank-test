import React from "react";
import { screen, render } from "../../utils/test-utils/mockProvider";
import { Step1 } from "./Step1";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Step1 view tests", () => {
  test("should render the title", () => {
    render(<Step1 />);
    const title = screen.getByRole("heading", { name: /step1.title/i });
    expect(title).toBeTruthy();
  });
  test("should render the text1", () => {
    render(<Step1 />);
    const text1 = screen.getByText(/step1.text1/i);
    expect(text1).toBeTruthy();
  });
  test("should render the text2", () => {
    render(<Step1 />);
    const text2 = screen.getByText(/step1.text2/i);
    expect(text2).toBeTruthy();
  });
    test("should render the checkbox button", () => {
    render(<Step1 />);
    const checkboxButton = screen.getByRole("button", { name: /step1.buttonNext/i });
    expect(checkboxButton).toBeTruthy();
  });
});
