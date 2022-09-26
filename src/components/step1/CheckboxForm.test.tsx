import React from "react";
import { screen, render, fireEvent } from "../../utils/test-utils/mockProvider";
import userEvent from "@testing-library/user-event";
import { CheckboxForm } from "./CheckboxForm";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("CheckboxForm tests", () => {
  test("should render the checkbox form", () => {
    render(<CheckboxForm />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeTruthy();
  });
  test("the checkbox should be unchecked at first and, when clicked, be checked", () => {
    render(<CheckboxForm />);
    const checkbox = screen.getByRole("checkbox", { name: /step1/i });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  test("the button should be disabled if the checkbox is not checked and be enabled when checkbox is clicked again", () => {
    render(<CheckboxForm />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    const checkbox = screen.getByRole("checkbox", { name: /step1/i });
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });
  test("tooltip should be visible when hovering the red text", async () => {
    render(<CheckboxForm />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox", { name: /step1/i });
    await user.hover(checkbox);
    const tooltip = await screen.findByLabelText(
      /terms and conditions tooltip/i
    );
    expect(tooltip).toBeVisible();
  });
});
