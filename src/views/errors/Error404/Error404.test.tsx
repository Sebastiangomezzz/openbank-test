import React from "react";
import { screen, render } from "../../../utils/test-utils/mockProvider";
import { Error404 } from "./Error404";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockedNavigator = jest.fn();

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Error404 view tests", () => {
  test("should render the title", () => {
    render(<Error404 />);
    const title = screen.getByRole("heading", { name: /error404.title/i });
    expect(title).toBeTruthy();
  });
  test("should render the proper icon", () => {
    render(<Error404 />);
    const icon = screen.getByTestId("WarningAmberTwoToneIcon");
    expect(icon).toBeTruthy();
  });
  test("should render the subheader", () => {
    render(<Error404 />);
    const text1 = screen.getByText(/error404.subheader/i);
    expect(text1).toBeTruthy();
  });
  test("should render the button with proper text", () => {
    render(<Error404 />);
    const text2 = screen.getByRole("button", { name: /error404.button/i });
    expect(text2).toBeTruthy();
  });
  test('should navigate to the "/" route when the button is clicked', async() => {
    render(<Error404 />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /error404.button/i });
    await user.click(button);
    expect(mockedNavigator).toHaveBeenCalledWith("/");
  });
});
