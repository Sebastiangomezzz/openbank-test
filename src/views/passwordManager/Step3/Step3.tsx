import React from "react";
import styles from "./Step3.module.scss";
import { CardContainer } from "../../../components/passwordManager/steps/step3";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

export const Step3 = () => {
  const error = useSelector((state: RootState) => state.stepper.passwordError);
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <CardContainer error={error} />
    </div>
  );
};
