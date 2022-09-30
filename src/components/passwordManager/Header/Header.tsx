import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import OpenbankLogo from "../../../assets/img/logo_openbank.png";
import KeyOpenBank from "../../../assets/img/key_openbank.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  const step = useSelector((state: RootState) => state.stepper.value);

  return (
    <div className={styles.container}>
      <img
        className={styles.openbank_logo}
        src={OpenbankLogo}
        alt="openbank-logo"
      />
      <Box sx={{ width: "50%" }}>
        <Stepper activeStep={step}>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </Box>
      <img className={styles.key_logo} src={KeyOpenBank} alt="key-logo" />
    </div>
  );
};
