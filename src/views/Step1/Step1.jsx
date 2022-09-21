import React from "react";
import styles from "./Step1.module.scss";
import { CheckboxForm } from "../../components/step1/CheckboxForm";

export const Step1 = () => {
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1>Bienvenido/a a la Cuenta Corriente OpenClose</h1>
      <p>
        En los siguientes pasos, le pediremos una serie de datos para poder
        crear su nueva contraseña.
      </p>
      <p>Por favor, para continuar, marque la casilla y pulse "Siguiente".</p>
      <div className={styles.checkboxButtonContainer}>
        <CheckboxForm />
      </div>
    </div>
  );
};
