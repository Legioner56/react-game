import { useState } from 'react';

import Menu from "../Menu";
import Navbar from "../Navbar";

const MenuHeader = () => {
    const [isNavbar, setNavbar] = useState(false);

    const onChangeMenu = () => {
        setNavbar(prevState => !prevState);
    }

    return (
        <>
            <Menu isNavbar={ isNavbar } />
            <Navbar onChangeMenu={ onChangeMenu } isNavbar={ isNavbar } />
        </>
    );
}

export default MenuHeader;