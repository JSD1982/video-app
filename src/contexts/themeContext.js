import React from "react";

export const ThemeContext = React.createContext();

const ThemeContextTag = ({ children }) => {
  const [segmentTheme, setSegmentTheme] = React.useState();
  const [windowTheme, setWindowTheme] = React.useState({
    iebs_lcms: window.iebs_lcms,
  });

  return (
    <ThemeContext.Provider
      value={{ segmentTheme, setSegmentTheme, windowTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextTag;
