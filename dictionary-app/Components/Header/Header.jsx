import "../Header/Header.scss";
import FontSwitch from "../FontSwitcher/FontSwitch";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import logo from "../../src/images/logo.svg"
const Header = () => {
  return (
    <div className="header__container">
      <img
        className="header__icon"
        src={logo}
        alt="Website icon"
      />
      <FontSwitch />
      <div className="divider"></div>
      <ThemeSwitch />
    </div>
  );
};

export default Header;
