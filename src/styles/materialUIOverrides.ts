import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FF0049",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "Quicksand",
  },
  components: {
    //change the color of the icon in stepper when active
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&$active": {
            color: "#FF0049",
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        active: {
          "& $line": {
            borderColor: "#FF0049",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          height: 0,
        },
      }
    },
  },
});
