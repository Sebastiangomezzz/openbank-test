import React from "react";
//Material UI
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
//locale
import { useTranslation } from "react-i18next";
//Styles
import styles from "./ButtonBox.module.scss";

interface ButtonBoxProps {
  loading: boolean;
  onNavigate: () => void;
}

export const ButtonBox = ({loading, onNavigate}:ButtonBoxProps) => {
  const { t } = useTranslation("translation");

  return (
    <Box className={styles.buttonContainer}>
      <Button
        className={styles.button}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        onClick={onNavigate}
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
