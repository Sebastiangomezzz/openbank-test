import React from "react";
import styles from "./Step3KO.module.scss";
import { CardContainer } from "../../components/passwordManager/steps/step3/CardContainer";

export const Step3KO = () => {
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <CardContainer error/>
    </div>
  );
};
