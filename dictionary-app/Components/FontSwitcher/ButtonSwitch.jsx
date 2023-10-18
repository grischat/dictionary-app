import "../FontSwitcher/ButtonSwitch.scss";
import { useState } from "react";
import FontsMenu from "../FontsMenu/FontsMenu";
const ButtonSwitch = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }
  return (
    <div className="btn__container">
        <p className="font-name">Sans Serif</p>
      <button className="btn_fontSwitcher" onClick={toggleMenu}>
        {menuOpened && <FontsMenu/>}
        <img src="../images/icon-arrow-down.svg" alt="Arrow button" />
      </button>
    </div>
  );
};

export default ButtonSwitch;
