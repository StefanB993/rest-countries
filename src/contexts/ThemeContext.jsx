import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  function toggleTheme() {
    setIsLightTheme((prev) => !prev);
    document.body.className = isLightTheme ? "theme-dark" : "theme-light";
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const value = useContext(ThemeContext);
  return value;
}

export { ThemeProvider, useTheme };
