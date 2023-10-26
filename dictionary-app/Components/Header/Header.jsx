import '../Header/Header.scss'
import FontSwitch from '../FontSwitcher/FontSwitch';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
const Header = () => {
    
    return (
        <div className="header__container">
            <img className='header__icon' src="../images/logo.svg" alt="Website icon" />
            <FontSwitch />
            <div className="divider"></div>
            <ThemeSwitch></ThemeSwitch>
        </div>
    )
}

export default Header;