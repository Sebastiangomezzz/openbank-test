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
      fontSize: '1.5rem',
    },
    fontFamily: "Quicksand",
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          height: 0,
        },
      },
    },
  },
});
