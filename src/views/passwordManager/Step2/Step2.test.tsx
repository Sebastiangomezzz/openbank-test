import React from "react";
import { screen, renderWithRouter } from "../../../utils/test-utils/mockProvider";
import { Step2 } from "./Step2";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Step2 view tests", () => {
  test("should render the title", () => {
    renderWithRouter(<Step2 />);
    const title = screen.getByRole("heading", { name: /step2.title/i });
    expect(title).toBeTruthy();
  });
  test("should render the Form component", () => {
    renderWithRouter(<Step2 />);
    const form = screen.getByRole("form");
    expect(form).toBeTruthy();
  });
    test('should render the "Next" button', () => {
    renderWithRouter(<Step2 />);
    const button = screen.getByRole("button", { name: /step2.buttonNext/i });
    expect(button).toBeTruthy();
    });
    test('should render the "Back" button', () => {
    renderWithRouter(<Step2 />);
    const button = screen.getByRole("button", { name: /step2.buttonPrev/i });
    expect(button).toBeTruthy();
    });
});
