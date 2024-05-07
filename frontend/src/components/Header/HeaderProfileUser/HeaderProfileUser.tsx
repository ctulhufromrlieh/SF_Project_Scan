import React from "react";

import classes from "./HeaderProfileUser.module.scss";

import profile_user_img from "../../../img/profile_user_img.module.png";
import { useActions } from "../../../hooks/useActions";
// import { logout } from "../../../utils/auth";

const HeaderProfileUser: React.FC = () => {
    const { loginUserReset } = useActions();

    const logout = () => {
        loginUserReset();
    };

    return (
        <>
            <div className={classes.user_data}>
                <div className={classes.user_data_left}>
                    <p className={classes.user_name}>Алексей А.</p>
                    <p className={classes.logout_link} onClick={() => logout()}>Выйти</p>
                </div>
                <img src={profile_user_img} alt="Profile user image" />
            </div>
        </>
    );
}

export default HeaderProfileUser;