import React from "react";
import { screen, render } from "../../utils/test-utils/mockProvider";
import { Step2 } from "./Step2";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Step2 view tests", () => {
  test("should render the title", () => {
    render(<Step2 />);
    const title = screen.getByRole("heading", { name: /step2.title/i });
    expect(title).toBeTruthy();
  });
  test("should render the Form component", () => {
    render(<Step2 />);
    const form = screen.getByRole("form");
    expect(form).toBeTruthy();
  });
    test('should render the "Next" button', () => {
    render(<Step2 />);
    const button = screen.getByRole("button", { name: /step2.buttonNext/i });
    expect(button).toBeTruthy();
    });
    test('should render the "Back" button', () => {
    render(<Step2 />);
    const button = screen.getByRole("button", { name: /step2.buttonPrev/i });
    expect(button).toBeTruthy();
    });
});
