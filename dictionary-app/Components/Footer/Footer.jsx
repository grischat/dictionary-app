import { useThemeContext } from "../Context/ThemeContext";
import "../Footer/Footer.scss";

const Footer = ({ link }) => {
    const { defaultTheme } = useThemeContext();
  return (
    <div className="footer__container">
      <div className="footer__divider"></div>
      <span className="footer__source">Source</span>
      <a
        className={`footer__link-${defaultTheme}`}
        href={`https://en.wiktionary.org/wiki/${link}`}
        rel="noreferrer"
        target="_blank"
      >
        {`https://en.wiktionary.org/wiki/${link}`}
      </a>
    </div>
  );
};

export default Footer;
