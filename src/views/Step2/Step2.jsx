import React, { useCallback } from "react";
import styles from "./Step2.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Step2 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/feedback");
  };

  const handleNavigateBack = useCallback(() => {
    navigate("/");
  }, [navigate]);
  // const handleNavigateForward = useCallback(() => {
  //
  // }, [navigate]);
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1>Creación de password</h1>
      <form
        style={{ width: "100%", marginTop: "2rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="password" hidden>
          Introduce una contraseña
        </label>
        <TextField
          id="password"
          type="password"
          variant="outlined"
          sx={{ marginRight: "1rem", width: "14rem" }}
          placeholder="Introduce una contraseña"
          {...register("password", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 8,
              message: "La contraseña tiene que tener 8 caracteres como mínimo",
            },
            maxLength: {
              value: 24,
              message: "La contraseña no debe sobrepasar los 24 caracteres",
            },
            pattern: {
              //generate a regexp to check if the password has at least one number and one uppercase letter
              value: /^(?=.*[A-Z])(?=.*[0-9])/,
              message:
                "La contraseña debe contener al menos una letra mayúscula y un número",
            },
          })}
          error={!!errors?.password}
          helperText={errors?.password ? errors.password.message : null}
        />

        <label htmlFor="password_repeat" hidden>
          Repite la contraseña
        </label>
        <TextField
          id="password_repeat"
          type="password"
          variant="outlined"
          sx={{ marginLeft: "1rem" }}
          placeholder="Repite la contraseña"
          {...register("password_repeat", {
            validate: (value) => {
              if (value.length >= 8) {
                return (
                  value === watch("password") || "Las contraseñas no coinciden"
                );
              }
            },
          })}
          error={!!errors?.password_repeat}
          helperText={
            errors?.password_repeat ? errors.password_repeat.message : null
          }
        />
        <label htmlFor="password_hint" hidden>
          Introduce una pista para recordar tu contraseña
        </label>
        <TextField
          id="password_hint"
          type="text"
          variant="outlined"
          sx={{ marginTop: "1rem", width: "100%" }}
          placeholder="Crea una pista para recordar tu contraseña"
          {...register("password_hint", { maxLength: 255 })}
          error={!!errors?.password_hint}
          helperText={
            errors?.password_hint
              ? "La pista puede tener, como máximo, 255 caracteres"
              : null
          }
        />
        <div className={styles.buttonContainer}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
            onClick={handleNavigateBack}
            color="neutral"
          >
            Anterior
          </Button>
          <Button
            variant="contained"
            type="submit"
            endIcon={<ArrowForwardIosIcon />}
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  );
};
