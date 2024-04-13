import React, { SetStateAction } from "react";

import classes from "./MobileMenu.module.scss";

import menuLogoMobile from "../../../img/logo-menu-mobile.module.png";
import { privateRoutes, publicRoutes } from "../../../router";
import Navbar, { BeforeNavigateHandler } from "../../UI/Navbar/Navbar";
import { Link } from "react-router-dom";

interface MobileMenuData {
    setVisible: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuData> = ({setVisible}) => {
    const isLogined = true;
    let usedRoutes = [];
    if (isLogined) {
        usedRoutes = publicRoutes;
    } else {
        usedRoutes = privateRoutes;
    }

    const beforeNavigateHandler: BeforeNavigateHandler = (event, path) => {
        setVisible(false);
    }

    return (
        <div className={classes.menu}>
            <div className={classes.menu_header}>
                <img src={menuLogoMobile} alt="Menu mobile logo" />
                <button className={classes.menu_close_btn} onClick={() => setVisible(false)}/>
            </div>
            <Navbar routes={usedRoutes} listClassName={classes.menu_list} itemClassName={classes.menu_item} beforeNavigateHandler={beforeNavigateHandler} />
            <div className={classes.sign_div}>
                <Link className={classes.signup_link} to="/login">Зарегистрироваться</Link>
                <button className={classes.signin_button}>Войти</button>
            </div>
        </div>
    );
}

export default MobileMenu;