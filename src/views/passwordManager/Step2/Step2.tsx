import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Step2.module.scss";
import { Form } from "../../../components/passwordManager/steps/step2/Form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

export const Step2 = () => {
  const { t } = useTranslation("translation");
  const previousStepCompleted = useSelector(
    (state: RootState) => state.passwordManager.stepsCompletion.prevCompleted
  );

  return (
    <>
      {!previousStepCompleted ? (
        <Navigate to="/" replace />
      ) : (
        <div className={`${styles.container} ${styles.container_arrow_top}`}>
          <h1 className={styles.title}>{t("step2.title")}</h1>
          <Form />
        </div>
      )}
    </>
  );
};
