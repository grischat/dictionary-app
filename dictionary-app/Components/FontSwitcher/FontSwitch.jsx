import "../FontSwitcher/FontSwitch.scss";
import { useState } from "react";
import { useFontContext } from "../Context/FontContext";
import FontsMenu from "../FontsMenu/FontsMenu";
const ButtonSwitch = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const { handleFontChange } = useFontContext();
  const { fontName } = useFontContext();
  return (
    <div className="btn__container">
      <p className="font-name">{fontName}</p>
      <button className="btn_fontSwitcher" onClick={toggleMenu}>
        {menuOpened && <FontsMenu onFontChange={handleFontChange} />}
        <img src="../images/icon-arrow-down.svg" alt="Arrow button" />
      </button>
    </div>
  );
};

export default ButtonSwitch;
