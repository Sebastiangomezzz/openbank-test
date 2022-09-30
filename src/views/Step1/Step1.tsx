import React, { useCallback } from "react";
import styles from "./Step1.module.scss";
import { TermsAndConditionsCheckbox } from "../../components/passwordManager/steps/step1/TermsAndConditionsCheckbox";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { incrementStep } from "../../redux/features/stepperSlice";

export const Step1 = () => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = useCallback(() => {
    dispatch(incrementStep());
    navigate("/create_password");
  }, [navigate, dispatch]);

  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1 className={styles.title}>{t("step1.title")}</h1>
      <p>{t("step1.text1")}</p>
      <br />
      <p>{t("step1.text2")}</p>
      <div className={styles.checkboxButtonContainer}>
        <TermsAndConditionsCheckbox onCheckboxChecked={handleNavigate} />
      </div>
    </div>
  );
};
