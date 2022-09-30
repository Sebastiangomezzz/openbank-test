import React from "react";
import styles from "./Step3.module.scss";
import { CardContainer } from "../../components/passwordManager/steps/step3/CardContainer";
import { useLocation } from "react-router-dom";

export const Step3 = () => {
  const error = useLocation().state?.error;
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <CardContainer error={ error } />
    </div>
  );
};
