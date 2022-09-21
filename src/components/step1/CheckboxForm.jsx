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

export const CheckboxForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
   const dispatch = useDispatch();

  const handlePopoverOpen = (event) => {
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
            type="checkbox"
            checked={termsAndConditionsChecked}
            onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
          />
        }
        label={
          <span>
            Acepto las{" "}
            <span
              style={{ color: "#FF0049" }}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              Condiciones del servicio
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
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div style={{ padding: "1rem" }}>
          Afirmo que soy mayor de 18 años y acepto que traten mis datos según la
          politica de protección de datos
        </div>
      </Popover>
      <Button
        variant="contained"
        onClick={handleNavigate}
        endIcon={<ArrowForwardIosIcon />}
        disabled={!termsAndConditionsChecked}
      >
        Siguiente
      </Button>
    </FormGroup>
  );
};
