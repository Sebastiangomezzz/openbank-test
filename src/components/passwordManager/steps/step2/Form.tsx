import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
//Material UI
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
//components
import { ButtonBox } from "../../../common";
//Types
import { MockResult } from "../../../../services/api";
//api
import { submitForm } from "../../../../services/api";
//react-hook-form
import { useForm } from "react-hook-form";
//locale
import { useTranslation } from "react-i18next";
//redux
import { useDispatch } from "react-redux";
import {
  incrementStep,
  decrementStep,
} from "../../../../features/stepperSlice";
//Styles
import styles from "./Form.module.scss";
//Validators
import {
  passwordValidator,
  confirmPasswordValidator,
  passwordHintValidator,
} from "../../helpers/formValidators";

type FormData = {
  password: string;
  repass: string;
  password_hint: string;
};

export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const { t } = useTranslation("translation");

  const onSubmit = useCallback(
    (data: FormData) => {
      setLoading(true);
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
    },
    [dispatch, navigate]
  );

  const handleNavigateBack = useCallback(() => {
    dispatch(decrementStep());
    navigate("/");
  }, [navigate, dispatch]);

  return (
    <form aria-label="form" onSubmit={handleSubmit(onSubmit)}>
      <Box className={styles.inputsContainer}>
        <Box className={styles.inputBox1}>
          <label
            className={styles.inputLabel}
            htmlFor="password"
            aria-label="password"
          >
            {t("step2.passwordInput.label")}
          </label>
          <TextField
            id="password"
            type="password"
            variant="outlined"
            className={styles.textField}
            {...register("password", passwordValidator(t))}
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
            aria-label="repeat-password"
            variant="outlined"
            className={styles.textField}
            {...register("repass", confirmPasswordValidator(t, watch))}
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
          {t("step2.hintInput.label")}{" "}
          <Tooltip
            arrow
            title={
              <div className={styles.tooltip}>
                <p className={styles.tooltipText}>
                  {t("step2.hintInput.tooltip")}
                </p>
              </div>
            }
            placement="right"
          >
            <InfoOutlinedIcon className={styles.tooltipIcon} />
          </Tooltip>
        </label>
        <TextField
          id="password_hint"
          type="text"
          aria-label="password-hint"
          variant="outlined"
          sx={{ width: "100%" }}
          {...register("password_hint", passwordHintValidator(t))}
          error={!!errors?.password_hint}
          FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          helperText={
            errors?.password_hint ? (
              <>{errors?.password_hint?.message?.toString()}</>
            ) : null
          }
        />
      </Box>
      <ButtonBox loading={loading} onNavigate={handleNavigateBack} />
    </form>
  );
};