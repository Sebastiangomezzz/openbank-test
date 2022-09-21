import React from "react";
import styles from "./Step2.module.scss";
import { Form } from "../../components/step2/Form";

export const Step2 = () => {
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1>Creación de password</h1>
      <Form/>
    </div>
  );
};
