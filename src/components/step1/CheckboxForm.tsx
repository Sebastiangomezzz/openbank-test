import React, { useCallback, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementStep } from "../../features/stepperSlice";
import { useTranslation } from "react-i18next";

export const CheckboxForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleNavigate = useCallback(() => {
    dispatch(incrementStep());
    navigate("/create_password");
  }, [navigate, dispatch]);

  return (
    <FormGroup
      row
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            id="conditions-checkbox"
            checked={termsAndConditionsChecked}
            onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
          />
        }
        label={
          <span>
            <p>{t("step1.checkbox1")} </p>
            <span
              style={{ color: "#FF0049" }}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <p>{t("step1.checkbox2")}</p>
            </span>
          </span>
        }
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          paddingTop: "2rem",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div style={{ padding: "1rem 2rem" }}>
          <p>{t("step1.popover")}</p>
        </div>
      </Popover>
      <Button
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
