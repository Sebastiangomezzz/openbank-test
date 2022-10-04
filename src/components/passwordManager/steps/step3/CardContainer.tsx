import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
//Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
//redux
import { useDispatch } from "react-redux";
import {
  resetSteps,
  resetStepsCompletion,
} from "../../../../redux/features/passwordManagerSlice";
//locale
import { useTranslation } from "react-i18next";
//Styles
import styles from "./CardContainer.module.scss";
interface CardContainerProps {
  error?: boolean;
}

export const CardContainer = ({ error }: CardContainerProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");

  const handleNavigateBack = useCallback(() => {
    dispatch(resetStepsCompletion());
    dispatch(resetSteps());
    navigate("/");
  }, [navigate, dispatch]);

  return (
    <Card className={styles.container}>
      <CardHeader
        className={styles.cardHeader}
        component="div"
        avatar={
          error ? (
            <WarningAmberTwoToneIcon className={styles.iconWarning} />
          ) : (
            <CheckCircleTwoToneIcon className={styles.iconCheck} />
          )
        }
        title={
          error ? (
            <h1 className={styles.title}>{t("step3KO.title")}</h1>
          ) : (
            <h1 className={styles.title}>{t("step3OK.title")}</h1>
          )
        }
        subheader={
          error ? (
            <p>{t("step3KO.subheader")}</p>
          ) : (
            <p>{t("step3OK.subheader")}</p>
          )
        }
      />
      <hr />
      <CardActions className={styles.cardActions}>
        <Button variant="contained" onClick={handleNavigateBack}>
          {error ? t("step3KO.button") : t("step3OK.button")}
        </Button>
      </CardActions>
    </Card>
  );
};
