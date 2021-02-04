import { useState } from 'react';

import Menu from "../Menu";
import Navbar from "../Navbar";

const MenuHeader = ({ bgActive }) => {
    const [isNavbar, setNavbar] = useState(null);

    const onChangeMenu = () => {
        setNavbar(prevState => !prevState);
    }

    console.log(`isNavbar:${isNavbar}`);

    return (
        <>
            <Menu isNavbar={ isNavbar } />
            <Navbar onChangeMenu={ onChangeMenu } isNavbar={ isNavbar } bgActive={ bgActive } />
        </>
    );
}

export default MenuHeader;