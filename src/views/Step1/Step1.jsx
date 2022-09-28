import React from "react";
import { CheckboxForm } from "../../components/passwordManager/steps/step1/CheckboxForm";
import { useTranslation } from "react-i18next";
import styles from "./Step1.module.scss";

export const Step1 = () => {
  const { t } = useTranslation("translation");

  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1 className={styles.title}>{t("step1.title")}</h1>
      <p>{t("step1.text1")}</p>
      <br />
      <p>{t("step1.text2")}</p>
      <div className={styles.checkboxButtonContainer}>
        <CheckboxForm />
      </div>
    </div>
  );
};