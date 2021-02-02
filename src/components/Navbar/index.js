import cn from 'classnames';

import s from './style.module.css';

const Navbar = ({ onChangeMenu, isNavbar }) => {
    const handleChangeMenu = () => {
        onChangeMenu();
    }

    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a onClick={ handleChangeMenu } className={cn(s.menuButton, (isNavbar) ? s.active : '')}>
                    <span></span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;