import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
//Material UI
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
//locale
import { useTranslation } from "react-i18next";
//Redux
import { useDispatch } from "react-redux";
import { decrementStep } from "../../features/stepperSlice";
//Styles
import styles from "./ButtonBox.module.scss";
interface ButtonBoxProps {
  loading: boolean;
}
export const ButtonBox = ({loading}:ButtonBoxProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");

  const handleNavigateBack = useCallback(() => {
    dispatch(decrementStep());
    navigate("/");
  }, [navigate, dispatch]);
    
  return (
    <Box className={styles.buttonContainer}>
      <Button
        className={styles.button}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        onClick={handleNavigateBack}
        color="secondary"
      >
        {t("step2.buttonPrev")}
      </Button>
      <LoadingButton
        loading={loading}
        loadingPosition="end"
        className={styles.button}
        variant="contained"
        type="submit"
        endIcon={<ArrowForwardIosIcon />}
      >
        {t("step2.buttonNext")}
      </LoadingButton>
    </Box>
  );
};
