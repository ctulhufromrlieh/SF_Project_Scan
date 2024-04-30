import React from "react";

import classes from "./HeaderLogin.module.scss";
import commonClasses from "../../../styles/common.module.scss";
import { Link } from "react-router-dom";

const HeaderLogin: React.FC = () => {
    return (
        <div className={commonClasses.only_desktop}>
            <div className={classes.main}>
                {/* <a className={classes.signup_link} href="/login/">Зарегистрироваться</a> */}
                {/* <Link className={classes.signup_link} to="/login">Зарегистрироваться</Link> */}
                <Link className={classes.signup_link} to="/register">Зарегистрироваться</Link>
                <div className={classes.vertical_line }></div>
                <Link to="/login"><button className={classes.signin_button}>Войти</button></Link>
            </div>
        </div>
    );
}

export default HeaderLogin;