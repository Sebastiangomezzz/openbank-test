import passwordManagerReducer from "./passwordManagerSlice";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("passwordManagerReducer tests", () => {
  test("should return the initial state", () => {
    expect(passwordManagerReducer(undefined, { type: "" })).toEqual({
      stepperValue: 0,
      stepsCompletion: {
        currStep: 1,
        prevCompleted: false,
      },
      passwordError: false,
    });
  });

  test("should handle incrementStep", () => {
    expect(
      passwordManagerReducer(undefined, {
        type: "passwordManager/incrementStep",
      })
    ).toEqual({
      stepperValue: 1,
      stepsCompletion: {
        currStep: 1,
        prevCompleted: false,
      },
      passwordError: false,
    });
  });

  test("should handle decrementStep", () => {
    expect(
      passwordManagerReducer(undefined, {
        type: "passwordManager/decrementStep",
      })
    ).toEqual({
      stepperValue: -1,
      stepsCompletion: {
        currStep: 1,
        prevCompleted: false,
      },
      passwordError: false,
    });
  });

  test("should handle resetSteps", () => {
    expect(
      passwordManagerReducer(undefined, {
        type: "passwordManager/resetSteps",
      })
    ).toEqual({
      stepperValue: 0,
      stepsCompletion: {
        currStep: 1,
        prevCompleted: false,
      },
      passwordError: false,
    });
  });
});
