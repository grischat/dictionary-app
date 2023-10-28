import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [defaultTheme, setTheme] = useState("light");
  const [defaultThemeImg, setThemeImg] = useState('../images/icon-moon.svg')
  useEffect(() => {
    defaultTheme === 'light' ? setThemeImg('../images/icon-moon.svg') : setThemeImg('../images/icon-moon-dark-mode.svg')
    
  }, [defaultTheme])
  const handleThemeChange = () => {
    setTheme(defaultTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider
      value={{ defaultTheme , handleThemeChange, defaultThemeImg }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
