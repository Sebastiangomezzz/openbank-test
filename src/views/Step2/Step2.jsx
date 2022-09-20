import React, {useCallback} from "react";
import styles from "./Step2.module.scss";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

export const Step2 = () => {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();

  const handleNavigateBack = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const handleNavigateForward = useCallback(() => {
    navigate("/feedback");
  }, [navigate]);
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1>Creación de password</h1>
      <FormGroup row sx={{ width: "100%", marginTop: "2rem" }}>
        <label htmlFor="password" hidden>
          Introduce una contraseña
        </label>
        <TextField
          required
          id="password"
          type="password"
          variant="outlined"
          sx={{ marginRight: "1rem", width: "14rem" }}
          placeholder="Introduce una contraseña"
          helperText="La contraseña debe tener al menos 8 caracteres"
        />

        <label htmlFor="repeat_password" hidden>
          Repite la contraseña
        </label>
        <TextField
          required
          id="repeat_password"
          type="password"
          variant="outlined"
          sx={{ marginLeft: "1rem" }}
          placeholder="Repite la contraseña"
          helperText="Las contraseñas deben coincidir"
        />
        <label htmlFor="password" hidden>
          Introduce una pista para recordar tu contraseña
        </label>
        <TextField
          required
          id="password"
          type="password"
          variant="outlined"
          sx={{ marginTop: "1rem", width: "100%" }}
          placeholder="Crea una pista para recordar tu contraseña"
          helperText="La contraseña debe tener al menos 8 caracteres"
        />
        <div className={styles.buttonContainer}>

        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
          onClick={handleNavigateBack}
          color='neutral'
        >
          Anterior
        </Button>
        <Button
          variant="contained"
          type="submit"
          endIcon={<ArrowForwardIosIcon />}
          onClick={handleNavigateForward}
        >
          Siguiente
        </Button>
        </div>
      </FormGroup>
    </div>
  );
};
