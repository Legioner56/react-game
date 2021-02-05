import cn from 'classnames';
import s from './style.module.css';
import { NavLink } from "react-router-dom";

const MENU = [
    {
        title: 'HOME',
        to: '/'
    },
    {
        title: 'GAME',
        to: '/game'
    },
    {
        title: 'ABOUT',
        to: '/about'
    },
    {
        title: 'CONTACT',
        to: '/contact'
    },
]

const Menu = ({isNavbar, onChangeMenu}) => {
    const handleClick = () => {
        onChangeMenu()
    }
    return (
        <div className={cn(s.menuContainer, {
            [s.active] : isNavbar === true,
            [s.deactive] : isNavbar === false
        })}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <NavLink onClick={handleClick} to={`${to}`}>
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Menu;