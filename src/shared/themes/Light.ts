import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#ab47bc",
      light: "#df78ef",
      dark: "#790e8b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fff176",
      light: "#ffffa8",
      dark: "#cabf45",
      contrastText: "#000000",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
});
