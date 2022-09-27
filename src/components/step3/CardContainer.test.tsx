import React from "react";
import { screen, render } from "../../utils/test-utils/mockProvider";
import userEvent from "@testing-library/user-event";
import { CardContainer } from "./CardContainer";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("CardContainer tests", () => {
  test("should render the card title for feedback_OK if no error prop is passed", () => {
    render(<CardContainer />);
    const cardtitle = screen.getByRole("heading", {
      name: /step3OK.title/i,
    });
    expect(cardtitle).toBeTruthy();
  });
  test("should render the OK button if no error prop is passed", () => {
    render(<CardContainer />);
    const button = screen.getByRole("button", { name: /step3OK.button/i });
    expect(button).toBeTruthy();
  });
  test("should render the card title for feedback_ERROR if error prop is passed", () => {
    render(<CardContainer error />);
    const cardtitle = screen.getByRole("heading", {
      name: /step3KO.title/i,
    });
    expect(cardtitle).toBeTruthy();
  });
  test("should render the KO button if error prop is passed", () => {
    render(<CardContainer error />);
    const button = screen.getByRole("button", { name: /step3KO.button/i });
    expect(button).toBeTruthy();
  });
  test("should navigate to '/' if OK/KO button is clicked", async () => {
    render(<CardContainer />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /step3OK.button/i });
    await user.click(button);

    expect(mockedNavigator).toBeCalledWith("/");
    screen.debug();
  });
});
