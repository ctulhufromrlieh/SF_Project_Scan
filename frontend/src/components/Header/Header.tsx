import React, { useState } from "react";

import classes from "./Header.module.scss";
import commonClasses from "../../styles/common.module.scss";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import headerLogoDesktop from "../../img/logo-header-desktop.module.png";
import headerLogoMobile from "../../img/logo-header-mobile.module.png";
import HeaderLogin from "./Login/HeaderLogin";
import HeaderProfileData from "./HeaderProfileData/HeaderProfileData";
import HeaderProfileUser from "./HeaderProfileUser/HeaderProfileUser";
import MyModal from "../UI/MyModal/MyModal";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "../UI/Navbar/Navbar";
import { privateRoutes, publicRoutes } from "../../router";


const Header: React.FC = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    // const menuItems: string[] = ["Главная", "Тарифы", "FAQ"];
    const isLogined = true;


    return (
        <div className={classes.header}>
            <img className={commonClasses.only_desktop} src={headerLogoDesktop} alt="Header desktop logo" />
            <img className={commonClasses.only_mobile} src={headerLogoMobile} alt="Header mobile logo" />
            <div className={commonClasses.only_desktop}>
                <HeaderMenu isLogined={isLogined} />
                {/* <Navbar routes={usedRoutes} listClassName="" /> */}
            </div>
            {/* <HeaderMenu className={commonClasses.only_desktop} items={menuItems} /> */}
            {isLogined 
                ?
                <>
                    <HeaderProfileData/>
                    <HeaderProfileUser/>
                </>
                : 
                <HeaderLogin />
            }
            <button className={classes.menu_button} onClick={() => setMobileMenuVisible(true)}></button>            

            <MyModal visible={mobileMenuVisible} setVisible={setMobileMenuVisible} contentClassName={classes.menu_background}>
                <MobileMenu setVisible={setMobileMenuVisible} />
            </MyModal>
        </div>
    );
}

export default Header;