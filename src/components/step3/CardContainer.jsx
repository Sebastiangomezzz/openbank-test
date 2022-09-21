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

export const CardContainer = ({ error }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          error ? (
            <h1>Ha habido un error</h1>
          ) : (
            <h1>¡Tu nueva contraseña se ha creado con éxito!</h1>
          )
        }
        subheader={
          error
            ? "No hemos podido crear tu contraseña. Inténtalo más tarde"
            : "Ahora ya podrás acceder a tu cuenta"
        }
      />
      <hr />
      <CardActions sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button size="small" onClick={handleNavigateBack}>
          {error ? "Volver al inicio" : "Acceder"}
        </Button>
      </CardActions>
    </Card>
  );
};
