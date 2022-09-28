import React from "react";
import { Form } from "../../components/passwordManager/steps/step2/Form";
import { useTranslation } from "react-i18next";
import styles from "./Step2.module.scss";

export const Step2 = () => {
  const { t } = useTranslation("translation");

  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1 className={styles.title}>{t("step2.title")}</h1>
      <Form />
    </div>
  );
};