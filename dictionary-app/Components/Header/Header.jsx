import '../Header/Header.scss'
import ButtonSwitch from '../FontSwitcher/ButtonSwitch';

const Header = () => {
    
    return (
        <div className="header__container">
            <img className='header__icon' src="../images/logo.svg" alt="Website icon" />
            <ButtonSwitch />
            <div className="divider"></div>
        </div>
    )
}

export default Header;