import React, { SetStateAction, SyntheticEvent } from "react";

import classes from "./MobileMenu.module.scss";

import menuLogoMobile from "../../../img/logo-menu-mobile.module.png";
import { privateRoutes, publicRoutes } from "../../../router";
import Navbar, { BeforeNavigateHandler } from "../../UI/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
// import { logout } from "../../../utils/auth";

interface MobileMenuData {
    setVisible: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuData> = ({setVisible}) => {
    // const isLogined = true;
    const {isLogined} = useTypedSelector(state => state.account);
    const navigate = useNavigate();
    const { loginUserReset } = useActions();

    const logout = () => {
        loginUserReset();
    };

    let usedRoutes = [];
    if (isLogined) {
        usedRoutes = publicRoutes;
    } else {
        usedRoutes = privateRoutes;
    }

    const beforeNavigateHandler: BeforeNavigateHandler = (event, path) => {
        setVisible(false);
    }

    const clickLink = (event: SyntheticEvent, path: string) => {
        event.preventDefault();
        beforeNavigateHandler(event, path);
        navigate(path);
    }

    const doLogout = (event: SyntheticEvent) => {
        event.preventDefault();
        setVisible(false);
        logout();
    }

    return (
        <div className={classes.menu}>
            <div className={classes.menu_header}>
                <img src={menuLogoMobile} alt="Menu mobile logo" />
                <button className={classes.menu_close_btn} onClick={() => setVisible(false)}/>
            </div>
            <Navbar routes={usedRoutes} listClassName={classes.menu_list} itemClassName={classes.menu_item} beforeNavigateHandler={beforeNavigateHandler} />
            <div className={classes.sign_div}>
                {/* <Link className={classes.signup_link} to="/signup">Зарегистрироваться</Link>
                <Link to="/login"><button className={classes.signin_button}>Войти</button></Link> */}
                {isLogined 
                ?
                    <Link to="/logout"><button className={classes.signin_button} onClick={(event) => doLogout(event)}>Выйти</button></Link>
                :
                    <>
                        <Link className={classes.signup_link} to="/signup" onClick={(event) => clickLink(event, "/signup")}>Зарегистрироваться</Link>
                        <Link to="/login"><button className={classes.signin_button} onClick={(event) => clickLink(event, "/login")}>Войти</button></Link>
                    </>
                }
                
            </div>
        </div>
    );
}

export default MobileMenu;