import React, { useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetSteps } from "../../features/stepperSlice";
import { useTranslation } from 'react-i18next';

interface CardContainerProps {
  error?: boolean;
}

export const CardContainer = ({ error }:CardContainerProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation('translation');

  const handleNavigateBack = useCallback(() => {
    dispatch(resetSteps());
    navigate("/");
  }, [navigate, dispatch]);

  return (
    <Card>
      <CardHeader
        component="div"
        avatar={
          error ? (
            <WarningAmberTwoToneIcon sx={{ color: "red", fontSize: 50 }} />
          ) : (
            <CheckCircleTwoToneIcon sx={{ color: "green", fontSize: 50 }} />
          )
        }
        title={
          error ? <h1>{t("step3KO.title")}</h1> : <h1>{t("step3OK.title")}</h1>
        }
        subheader={error ? t("step3KO.subheader") : t("step3OK.subheader")}
      />
      <hr />
      <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button size="small" onClick={handleNavigateBack}>
          {error ? t("step3KO.button") : t("step3OK.button")}
        </Button>
      </CardActions>
    </Card>
  );
};
