import React from "react";
import { screen, render } from "./utils/test-utils/mockProvider";
import userEvent from "@testing-library/user-event";
import { App } from "./App";
import "@testing-library/jest-dom/extend-expect";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("App tests", () => {
    test('should render the Step1 component', () => {
        render(<App />);
        const step1 = screen.getByRole('heading', { name: /step1.title/i });
        expect(step1).toBeTruthy();
    });
    test('should render the checkbox', () => {
        render(<App />);
        const checkbox = screen.getByRole('checkbox', { name: /step1.checkbox/i });
        expect(checkbox).toBeTruthy();
    });
    test('should render the button', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /step1.button/i });
        expect(button).toBeTruthy();
    });
    test('should navigate to "/create_password" if checkbox is checked and button is clicked', async () => {
        render(<App />);
        const user = userEvent.setup();
        const checkbox = screen.getByRole('checkbox', { name: /step1.checkbox/i });
        const button = screen.getByRole('button', { name: /step1.button/i });
        await user.click(checkbox);
        await user.click(button);
        expect(mockedNavigator).toBeCalledWith('/create_password');
        screen.debug();
    });
});
