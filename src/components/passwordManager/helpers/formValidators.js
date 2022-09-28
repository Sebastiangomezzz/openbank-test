export const passwordValidator = (t) => ({
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
});

export const confirmPasswordValidator = (t, watch) => ({
  validate: (value) => {
    if (value.length >= 8) {
      return value === watch("password") || `${t("step2.repassInput.match")}`;
    }
  },
});

export const passwordHintValidator = (t) => ({
  maxLength: { value: 255, message: t("step2.hintInput.maxLength") },
});
