import React, { useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import styles from "./Step3OK.module.scss";
import { useNavigate } from "react-router-dom";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

export const Step3OK = () => {
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
            <CheckCircleTwoToneIcon sx={{ color: "green", fontSize: 50 }} />
          }
          title={<h1>¡Tu nueva contraseña se ha creado con éxito!</h1>}
          subheader="Ahora ya podrás acceder a tu cuenta"
        />
        <hr />
        <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button size="small" onClick={handleNavigateBack}>
            Acceder
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
