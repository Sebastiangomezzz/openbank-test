import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
//Material UI
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//redux
import { useDispatch } from "react-redux";
import { incrementStep } from "../../../../redux/features/stepperSlice";
//locale
import { useTranslation } from "react-i18next";
//Styles
import styles from "./CheckboxForm.module.scss";

export const CheckboxForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");

 

  const handleNavigate = useCallback(() => {
    dispatch(incrementStep());
    navigate("/create_password");
  }, [navigate, dispatch]);

  return (
    <FormGroup className={styles.formGroup}>
      <FormControlLabel
        className={styles.formControlLabel}
        control={
          <Checkbox
            aria-label="terms and conditions checkbox"
            id="conditions-checkbox"
            checked={termsAndConditionsChecked}
            onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
          />
        }
        label={
          <div className={styles.checkBoxLabelContainer}>
            <p>{t("step1.checkbox1")} </p>
            <Tooltip
              aria-label="terms and conditions tooltip"
              arrow
              title={
                <div className={styles.tooltip}>
                  <p className={styles.tooltipText}>{t("step1.popover")}</p>
                </div>
              }
              placement="right"
            >
              <p className={styles.tooltipInnerText}>{t("step1.checkbox2")}</p>
            </Tooltip>
          </div>
        }
      />
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleNavigate}
        endIcon={<ArrowForwardIosIcon />}
        disabled={!termsAndConditionsChecked}
      >
        {t("step1.buttonNext")}
      </Button>
    </FormGroup>
  );
};
