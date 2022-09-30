import React from "react";
import { screen, render } from "../../utils/test-utils/mockProvider";
import { Step3OK } from "./Step3OK";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Step3OK view tests", () => {
  test("should render the title", () => {
    render(<Step3OK />);
    const title = screen.getByRole("heading", { name: /step3OK.title/i });
    expect(title).toBeTruthy();
  });
  test("should render the proper icon", () => {
    render(<Step3OK />);
    const icon = screen.getByTestId("CheckCircleTwoToneIcon");
    expect(icon).toBeTruthy();
  });
  test("should render the subheader", () => {
    render(<Step3OK />);
    const text1 = screen.getByText(/step3OK.subheader/i);
    expect(text1).toBeTruthy();
  });
  test("should render the button with proper text", () => {
    render(<Step3OK />);
    const text2 = screen.getByRole("button", { name: /step3OK.button/i });
    expect(text2).toBeTruthy();
  });
});
