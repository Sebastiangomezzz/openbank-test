import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./Step1.module.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Popover from "@mui/material/Popover";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Step1 = () => {
  const [tcChecked, setTcChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <h1>Bienvenido/a a la Cuenta Corriente OpenClose</h1>
      <p>En los siguientes pasos, le pediremos una serie de datos</p>
      <p>Por favor, para continuar, marque la casilla y pulse "Siguiente"</p>
      <div className={styles.checkboxButtonContainer}>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                id="conditions-checkbox"
                type="checkbox"
                checked={tcChecked}
                onChange={(e) => setTcChecked(e.target.checked)}
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
            Afirmo que soy mayor de 18 años y acepto que traten mis datos según
            la politica de protección de datos
          </Popover>
          <Button
            variant="contained"
            type="submit"
            endIcon={<ArrowForwardIosIcon />}
            disabled={!tcChecked}
          >
            Siguiente
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};
