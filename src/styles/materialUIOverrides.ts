import { createTheme } from "@mui/material/styles";
import { enUS, esES } from "@mui/material/locale";

export const themeWithLocale = createTheme(
  {
    palette: {
      primary: {
        main: "#000000",
      }
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  },
  enUS,
  esES
);
