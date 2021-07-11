import grey from "@material-ui/core/colors/grey";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#691196",
      main: "#691196",
      dark: "#691196",
      contrastText: "#ffffff",
    },
    secondary: {
      light: grey[200],
      main: grey[500],
      dark: grey[700],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
      appBar: "#ffffff",
      contentFrame: "#ffffff",
      chip: "#ffffff",
      avatar: "#ffffff",
    },
  },
  status: {
    danger: "red",
  },

  typography: {
    fontFamily: "Rubik, Arial, sans-serif",
    button: {
      fontWeight: 400,
      color: "#fff",
      textAlign: "capitalize",
    },
  },
});

export const theme_akademus = createMuiTheme({
  palette: {
    primary: {
      light: "#000",
      main: "#F07300",
      dark: "#000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: grey[200],
      main: grey[500],
      dark: grey[700],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
      appBar: "#ffffff",
      contentFrame: "#ffffff",
      chip: "#ffffff",
      avatar: "#ffffff",
    },
  },
  status: {
    danger: "red",
  },

  typography: {
    fontFamily: "Rubik, Arial, sans-serif",
    button: {
      fontWeight: 400,
      color: "#fff",
      textAlign: "capitalize",
    },
  },
});

export const theme_citius = createMuiTheme({
  palette: {
    primary: {
      light: "#FFF",
      main: "#8900a1",
      dark: "#000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: grey[200],
      main: grey[500],
      dark: grey[700],
      contrastText: "#ffffff",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
      appBar: "#ffffff",
      contentFrame: "#ffffff",
      chip: "#ffffff",
      avatar: "#ffffff",
    },
  },
  status: {
    danger: "red",
  },

  typography: {
    fontFamily: "Rubik, Arial, sans-serif",
    button: {
      fontWeight: 400,
      color: "#fff",
      textAlign: "capitalize",
    },
  },
});
