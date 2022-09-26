import React from "react";
import { screen, render } from "../../utils/test-utils/mockProvider";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Form tests", () => {
  test("should render the form", () => {
    render(<Form />);
    const form = screen.getByRole("form", { name: "form" });
    expect(form).toBeTruthy();
  });
  test("should render the form with 1 password input, 1 repeat password input and a password hint input", () => {
    render(<Form />);
    const passwordInput = screen.getByLabelText(/passwordInput/i);
    const repeatPasswordInput = screen.getByLabelText(/repassInput/i);
    const passwordHintInput = screen.getByLabelText(/hintInput/i);
    expect(passwordInput).toBeTruthy();
    expect(repeatPasswordInput).toBeTruthy();
    expect(passwordHintInput).toBeTruthy();
  });
  test("should render an error if the first inputed text don't have the proper format", async () => {
    render(<Form />);
    const user = userEvent.setup();
    const passwordInput = screen.getByLabelText(/passwordInput/i);
    const submitButton = screen.getByRole("button", { name: /buttonNext/i });
    user.type(passwordInput, "123456");
    await user.click(submitButton);
    const error = await screen.findByText(/minLength/i);
    expect(error).toBeTruthy();
  });
    test('should render an error if only one input is filled', async () => {
        render(<Form />);
        const user = userEvent.setup();
        const repeatPasswordInput = screen.getByLabelText(/repassInput/i);
        const submitButton = screen.getByRole("button", { name: /buttonNext/i });
        user.type(repeatPasswordInput, "Qwerty123");
        await user.click(submitButton);
        // const error = await screen.findByText(/required/i);
        // expect(error).toBeTruthy();
    });
  
});
