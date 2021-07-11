import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, theme_akademus, theme_citius } from "../assets/theme";

import { ThemeContext } from "../contexts/themeContext";
import Courses from "./courses";

const App = () => {
  const contextTheme = React.useContext(ThemeContext);
  const theme = contextTheme.windowTheme.iebs_lcms.theme;
  return (
    <>
      <Router>
        <Switch>
          <Route path="/lcms-app/:id" children={<Child />} />
          <>
            {theme === "iebs" && <Redirect to="/lcms-app/iebs" />}
            {theme === "akademus" && <Redirect to="/lcms-app/akademus" />}
            {theme === "citius" && <Redirect to="/lcms-app/citius" />}
          </>
        </Switch>
      </Router>
    </>
  );
};

function Child() {
  const contextTheme = React.useContext(ThemeContext);
  let { id } = useParams();

  switch (id) {
    case "iebs":
      {
        contextTheme.setSegmentTheme("iebs");
      }
      return (
        <>
          <ThemeProvider theme={theme}>
            <Route path="/lcms-app/iebs" component={Courses} />
          </ThemeProvider>
        </>
      );
    case "akademus":
      {
        contextTheme.setSegmentTheme("akademus");
      }
      return (
        <>
          <ThemeProvider theme={theme_akademus}>
            <Route path="/lcms-app/akademus" component={Courses} />
          </ThemeProvider>
        </>
      );
    case "citius":
      {
        contextTheme.setSegmentTheme("citius");
      }
      return (
        <>
          <ThemeProvider theme={theme_citius}>
            <Route path="/lcms-app/citius" component={Courses} />
          </ThemeProvider>
        </>
      );
    default:
      return <Redirect to="/lcms-app/iebs" />;
  }
}

export default App;
