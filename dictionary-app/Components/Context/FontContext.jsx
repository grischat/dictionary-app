// FontContext.js
import { createContext, useContext, useState, useEffect } from "react";

const FontContext = createContext();

export const useFontContext = () => useContext(FontContext);

export const FontProvider = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [fontName, setFontName] = useState("Sans Serif");
  useEffect(() => {
    
    if (selectedFont === 'sans-serif') {
      setFontName('Sans Serif');
    } else if (selectedFont === 'serif') {
      setFontName('Serif');
    } else if (selectedFont === 'monospace') {
      setFontName('Mono');
    }
  }, [selectedFont]);
  const handleFontChange = (font) => {
    setSelectedFont(font);
  };

  return (
    <FontContext.Provider value={{ selectedFont, fontName, handleFontChange }}>
      {children}
    </FontContext.Provider>
  );
};
