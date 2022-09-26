import React from "react";
import { screen, render } from "../../utils/test-utils/mockProvider";
import { ButtonBox } from "./ButtonBox";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("ButtonBox tests", () => {
    test("should render the button box", () => {
        render(<ButtonBox loading={false} />);
        const buttons = screen.getAllByRole("button");
        expect(buttons).toBeTruthy();
    });
    test('button loading should be disabled if loading prop is true', () => {
        render(<ButtonBox loading={true} />);
        const button = screen.getByRole("button", { name: /buttonNext/i }); 
        expect(button).toBeDisabled();
    });
});