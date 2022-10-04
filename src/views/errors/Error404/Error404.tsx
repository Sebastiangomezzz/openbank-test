import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
//Material UI
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
//redux
import { useDispatch } from "react-redux";
import { resetSteps } from "../../../redux/features/passwordManagerSlice";
//locale
import { useTranslation } from "react-i18next";
import styles from "./Error404.module.scss";

export const Error404 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");
  const handleNavigateBack = useCallback(() => {
    dispatch(resetSteps());
    navigate("/");
  }, [navigate, dispatch]);
  return (
    <Card className={styles.container}>
      <CardHeader
        className={styles.cardHeader}
        component="div"
        avatar={<WarningAmberTwoToneIcon className={styles.iconWarning} />}
        title={<h1 className={styles.title}>{t("error404.title")}</h1>}
        subheader={<p>{t("error404.subheader")}</p>}
      />
      <hr />
      <CardActions className={styles.cardActions}>
        <Button variant="contained" onClick={handleNavigateBack}>
          {t("error404.button")}
        </Button>
      </CardActions>
    </Card>
  );
};
