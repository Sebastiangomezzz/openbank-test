import React from "react";
import { screen, render } from "../../../utils/test-utils/mockProvider";
import { Header } from "./Header";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Header tests", () => {
  test("should render the openbank logo", () => {
    render(<Header />);
    const logo = screen.findAllByAltText(/openbank-logo/i);
    expect(logo).toBeTruthy();
  });
  test("should render a stepper component", () => {
    const {container}=render(<Header />);
    const stepper = container.getElementsByClassName('MuiStepper-root');
    expect(stepper).toBeTruthy();
  });
    test('should render a key logo', () => {
        render(<Header />);
        const keyLogo = screen.findAllByAltText(/key-logo/i);
        expect(keyLogo).toBeTruthy();
    });
});
