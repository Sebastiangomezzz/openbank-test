import React from "react";
import {
  screen,
  render,
  fireEvent,
} from "../../../../utils/test-utils/mockProvider";
import userEvent from "@testing-library/user-event";
import { TermsAndConditionsCheckbox } from "./TermsAndConditionsCheckbox";
import {waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));
const helpers = {
  mockIncrementStep: jest.fn(),
};

describe("CheckboxForm tests", () => {
  test("should render the checkbox form", () => {
    render(<TermsAndConditionsCheckbox onCheckboxChecked={()=>{}}/>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeTruthy();
  });
  test("the checkbox should be unchecked at first and, when clicked, be checked", () => {
    render(<TermsAndConditionsCheckbox onCheckboxChecked={() => {}} />);
    const checkbox = screen.getByRole("checkbox", { name: /step1/i });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  test("the button should be disabled if the checkbox is not checked and be enabled when checkbox is clicked again", () => {
    render(<TermsAndConditionsCheckbox onCheckboxChecked={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    const checkbox = screen.getByRole("checkbox", { name: /step1/i });
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });
  test("tooltip should be visible when hovering the red text", async () => {
    render(<TermsAndConditionsCheckbox onCheckboxChecked={() => {}} />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox", { name: /step1/i });
    await user.hover(checkbox);
    const tooltip = await screen.findByLabelText(
      /terms and conditions tooltip/i
    );
    expect(tooltip).toBeVisible();
  });
  test("incrementStep should be called if button is clicked", async () => {
    render(<TermsAndConditionsCheckbox onCheckboxChecked={helpers.mockIncrementStep} />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox", { name: /step1/i });
    fireEvent.click(checkbox);
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
    await user.click(button);
    await waitFor(() => expect(helpers.mockIncrementStep).toHaveBeenCalled());
  });
});
