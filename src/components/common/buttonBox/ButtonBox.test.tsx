import React from "react";
import { screen, render } from "../../../utils/test-utils/mockProvider";
import { ButtonBox } from "./ButtonBox";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const helpers = {
    mockDecrementStep: jest.fn(),
};

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("ButtonBox tests", () => {
  test("should render the button box", () => {
    render(<ButtonBox loading={false} onBackBtnClicked={() => {}} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toBeTruthy();
  });
  test("button loading should be enabled if loading prop is true", () => {
    render(<ButtonBox loading={true} onBackBtnClicked={() => {}} />);
    const button = screen.getByRole("button", { name: /buttonNext/i });
    expect(button).toBeDisabled();
  });
  test("button loading should be disabled if loading prop is false", () => {
    render(<ButtonBox loading={false} onBackBtnClicked={() => {}} />);
    const button = screen.getByRole("button", { name: /buttonNext/i });
    expect(button).toBeEnabled();
  });
  test("decrementStep should be called if buttonPrev is clicked", async () => {
    render(<ButtonBox loading={false} onBackBtnClicked={helpers.mockDecrementStep} />);
    const button = screen.getByRole("button", { name: /buttonPrev/i });
    userEvent.click(button);
    await waitFor(() => expect(helpers.mockDecrementStep).toHaveBeenCalled());
  });
});
