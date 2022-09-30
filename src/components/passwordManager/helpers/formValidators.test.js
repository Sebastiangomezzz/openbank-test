import {
  passwordValidator,
  passwordHintValidator,
} from "./formValidators";
import { renderHook} from "@testing-library/react-hooks";
import { useTranslation } from "react-i18next";

describe("formValidators tests", () => {
  test("passwordValidator should return correct object", () => {
    const { result } = renderHook(() => useTranslation());
    const { t } = result.current;
    const expected = {
      required: t("step2.passwordInput.required"),
      minLength: {
        value: 8,
        message: t("step2.passwordInput.minLength"),
      },
      maxLength: {
        value: 24,
        message: t("step2.passwordInput.maxLength"),
      },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
        message: t("step2.passwordInput.pattern"),
      },
    };
    expect(passwordValidator(t)).toEqual(expected);
  });
 
  test("passwordHintValidator should return correct object", () => {
    const { result } = renderHook(() => useTranslation());
    const { t } = result.current;
    const expected = {
      maxLength: {
        value: 255,
        message: t("step2.hintInput.maxLength"),
      },
    };
    expect(passwordHintValidator(t)).toEqual(expected);
  });
});
