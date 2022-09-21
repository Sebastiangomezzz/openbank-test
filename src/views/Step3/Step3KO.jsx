import React, { useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import styles from "./Step3KO.module.scss";
import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import { useNavigate } from "react-router-dom";

export const Step3KO = () => {
  const navigate = useNavigate();
  const handleNavigateBack = useCallback(() => {
    navigate("/");
  }, [navigate]);
    
  return (
    <div className={`${styles.container} ${styles.container_arrow_top}`}>
      <Card>
        <CardHeader
          component="div"
          avatar={
            <WarningAmberTwoToneIcon sx={{ color: "red", fontSize: 50 }} />
          }
          title={<h1>Ha habido un error</h1>}
          subheader="No hemos podido crear tu contraseña. Inténtalo más tarde"
        />
        <hr />
        <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button size="small" onClick={handleNavigateBack}>
            Volver al inicio
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
