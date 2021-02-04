import cn from 'classnames';

import s from './style.module.css';

const Navbar = ({ onChangeMenu, isNavbar, bgActive = false }) => {
    const handleChangeMenu = () => {
        onChangeMenu();
    }

    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive] : bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div onClick={ handleChangeMenu } className={cn(s.menuButton, {
                    [s.active] : isNavbar
                })}>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;