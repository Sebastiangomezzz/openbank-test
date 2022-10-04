import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Step3.module.scss";
import { CardContainer } from "../../../components/passwordManager/steps/step3";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

export const Step3 = () => {
  const error = useSelector((state: RootState) => state.passwordManager.passwordError);
  const previousStepCompleted = useSelector(
    (state: RootState) => state.passwordManager.stepsCompletion.prevCompleted
  );
  return (
    <>
      {!previousStepCompleted ? (
        <Navigate to="/" replace />
      ) : (
        <div className={`${styles.container} ${styles.container_arrow_top}`}>
          <CardContainer error={error} />
        </div>
      )}
    </>
  );
};
