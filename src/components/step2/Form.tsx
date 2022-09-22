import React, { useCallback } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { submitForm } from "../../services/api";
import styles from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { incrementStep, decrementStep } from "../../features/stepperSlice";
import { MockResult } from "../../services/api";
import { useTranslation } from "react-i18next";

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

  const handleNavigateBack = useCallback(() => {
    dispatch(decrementStep());
    navigate("/");
  }, [navigate, dispatch]);

  return (
    <form
      style={{ width: "100%", marginTop: "2rem" }}
      //@ts-ignore
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="password" hidden>
        {t("step2.passwordInput.label")}
      </label>
      <TextField
        id="password"
        type="password"
        variant="outlined"
        sx={{ marginRight: "1rem", width: "14rem" }}
        placeholder={t("step2.passwordInput.label")}
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
        helperText={
          errors?.password ? <>{errors?.password?.message?.toString()}</> : null
        }
      />

      <label htmlFor="repass" hidden>
        {t("step2.repassInput.label")}
      </label>
      <TextField
        id="repass"
        type="password"
        variant="outlined"
        sx={{ marginLeft: "1rem" }}
        placeholder={t("step2.repassInput.label")}
        {...register("repass", {
          validate: (value) => {
            if (value.length >= 8) {
              return (
                value === watch("password") || `${t("step2.repassInput.match")}`
              );
            }
          },
        })}
        error={!!errors?.repass}
        helperText={
          errors?.repass ? <>{errors?.repass?.message?.toString()}</> : null
        }
      />
      <label htmlFor="password_hint" hidden>
        {t("step2.hintInput.label")}
      </label>
      <TextField
        id="password_hint"
        type="text"
        variant="outlined"
        sx={{ marginTop: "1rem", width: "100%" }}
        placeholder={t("step2.hintInput.label")}
        {...register("password_hint", {
          maxLength: { value: 255, message: t("step2.hintInput.maxLength") },
        })}
        error={!!errors?.password_hint}
        helperText={
          errors?.password_hint ? (
            <>{errors?.password_hint?.message?.toString()}</>
          ) : null
        }
      />
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={handleNavigateBack}
          color="secondary"
        >
          {t("step2.buttonPrev")}
        </Button>
        <Button
          variant="contained"
          type="submit"
          endIcon={<ArrowForwardIosIcon />}
        >
          {t("step2.buttonNext")}
        </Button>
      </div>
    </form>
  );
};
