import React from "react";
import styles from "./Step2.module.scss";
import { Form } from "../../components/step2/Form";
import { useTranslation } from "react-i18next";

export const Step2 = () => {
  const { t } = useTranslation("translation");

  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1>{t("step2.title")}</h1>
      <Form />
    </div>
  );
};
