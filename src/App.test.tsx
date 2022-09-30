import React from "react";
import ReactDOM from "react-dom";
import { render } from "./utils/test-utils/mockProvider";
import { App } from "./App";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("App tests", () => {
  test('should start without crashing', () => {
    const body = render(<App />);
    expect(body).toBeTruthy();
  });
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});