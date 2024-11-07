import { createTheme } from "@mui/material/styles";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5A20CB",
    },
    secondary: {
      main: "#242B2E",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
});

export default darkMode;
