import React from "react";
import { useNavigate } from "react-router-dom";
//Material UI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
//Types
import { MockResult } from "../../services/api";
//api
import { submitForm } from "../../services/api";
//react-hook-form
import { useForm } from "react-hook-form";
//locale
import { useTranslation } from "react-i18next";
import { ButtonBox } from "./ButtonBox";
//redux
import { useDispatch } from "react-redux";
import { incrementStep } from "../../features/stepperSlice";
//Styles
import styles from "./Form.module.scss";


interface FormData {
  password: string;
  repass: string;
  password_hint: string;
}

export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { t } = useTranslation("translation");

  const onSubmit = (data: FormData) => {
    const { password } = data;
    submitForm(password)
      .then((response: MockResult) => {
        response.status === 200 &&
          dispatch(incrementStep()) &&
          navigate("/feedback_OK");
      })
      .catch((error) => {
        error.status === 401 &&
          dispatch(incrementStep()) &&
          navigate("/feedback_KO");
      });
  };
  return (
    <form
      //@ts-ignore
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box className={styles.inputsContainer}>
        <Box className={styles.inputBox}>
          <label className={styles.inputLabel} htmlFor="password">
            {t("step2.passwordInput.label")}
          </label>
          <TextField
            id="password"
            type="password"
            variant="outlined"
            className={styles.textField}
            {...register("password", {
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
            })}
            error={!!errors?.password}
            FormHelperTextProps={{ style: { fontSize: "1rem" } }}
            helperText={
              errors?.password ? (
                <>{errors?.password?.message?.toString()}</>
              ) : null
            }
          />
        </Box>
        <Box className={styles.inputBox}>
          <label className={styles.inputLabel} htmlFor="repass">
            {t("step2.repassInput.label")}
          </label>
          <TextField
            id="repass"
            type="password"
            variant="outlined"
            className={styles.textField}
            {...register("repass", {
              validate: (value) => {
                if (value.length >= 8) {
                  return (
                    value === watch("password") ||
                    `${t("step2.repassInput.match")}`
                  );
                }
              },
            })}
            error={!!errors?.repass}
            FormHelperTextProps={{ style: { fontSize: "1rem" } }}
            helperText={
              errors?.repass ? <>{errors?.repass?.message?.toString()}</> : null
            }
          />
        </Box>
      </Box>
      <Box className={styles.inputHintBox}>
        <label className={styles.inputLabel} htmlFor="password_hint">
          {t("step2.hintInput.label")}
        </label>
        <TextField
          id="password_hint"
          type="text"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("password_hint", {
            maxLength: { value: 255, message: t("step2.hintInput.maxLength") },
          })}
          error={!!errors?.password_hint}
          FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          helperText={
            errors?.password_hint ? (
              <>{errors?.password_hint?.message?.toString()}</>
            ) : null
          }
        />
      </Box>
      <ButtonBox />
    </form>
  );
};
