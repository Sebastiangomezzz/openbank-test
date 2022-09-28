import React from "react";
import { screen, render } from "../../utils/test-utils/mockProvider";
import { Step3KO } from "./Step3KO";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("StepKO view tests", () => {
  test("should render the title", () => {
    render(<Step3KO />);
    const title = screen.getByRole("heading", { name: /step3KO.title/i });
    expect(title).toBeTruthy();
  });
  test("should render the proper icon", () => {
    render(<Step3KO />);
    const icon = screen.getByTestId("WarningAmberTwoToneIcon");
    expect(icon).toBeTruthy();
  });
  test("should render the subheader", () => {
    render(<Step3KO />);
    const text1 = screen.getByText(/step3KO.subheader/i);
    expect(text1).toBeTruthy();
  });
  test("should render the button with proper text", () => {
    render(<Step3KO />);
    const text2 = screen.getByRole("button", { name: /step3KO.button/i });
    expect(text2).toBeTruthy();
  });
});
