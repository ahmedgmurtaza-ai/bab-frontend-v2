import React, { createContext, useContext } from "react";
import { theme as defaultTheme } from "../theme/theme";

const ThemeContext = createContext(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: typeof defaultTheme;
}> = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme || defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
