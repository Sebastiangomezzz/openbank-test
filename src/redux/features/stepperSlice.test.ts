import stepperReducer from "./stepperSlice";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("stepperReducer tests", () => {
  it("should return the initial state", () => {
    expect(stepperReducer(undefined, { type: "" })).toEqual({
      value: 0,
      step1Completed: false,
      passwordError: false,
    });
  });

  it("should handle incrementStep", () => {
    expect(
      stepperReducer(undefined, {
        type: "stepper/incrementStep",
      })
    ).toEqual({
      value: 1,
      step1Completed: false,
      passwordError: false,
    });
  });

  it("should handle decrementStep", () => {
    expect(
      stepperReducer(undefined, {
        type: "stepper/decrementStep",
      })
    ).toEqual({
      value: -1,
      step1Completed: false,
      passwordError: false,
    });
  });

  it("should handle resetSteps", () => {
    expect(
      stepperReducer(undefined, {
        type: "stepper/resetSteps",
      })
    ).toEqual({
      value: 0,
      step1Completed: false,
      passwordError: false,
    });
  });
});
