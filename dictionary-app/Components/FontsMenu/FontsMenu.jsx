import "../FontsMenu/FontsMenu.scss";
import { useFontContext } from "../Context/FontContext";
import { useThemeContext } from "/Components/Context/ThemeContext";
const FontsMenu = () => {
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };
  const { handleFontChange } = useFontContext(); 
  const { defaultTheme } = useThemeContext()
  const handleFontClick = (font) => {
    handleFontChange(font); 
  };
  return (
    <div className={`fonts__container-${defaultTheme}`} onClick={handleContainerClick}>
      <ul className="font-list">
        <li className="sans-serif" onClick={() => handleFontClick("sans-serif")}>Sans Serif</li>
        <li className="serif" onClick={() => handleFontClick("serif")}>Serif</li>
        <li className="mono" onClick={() => handleFontClick("monospace")}>Mono</li>
      </ul>
    </div>
  );
};

export default FontsMenu;
