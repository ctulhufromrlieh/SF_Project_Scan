import React from "react";

import classes from "./HeaderProfileUser.module.scss";

import profile_user_img from "../../../img/profile_user_img.module.png";

const HeaderProfileUser: React.FC = () => {
    return (
        <>
            <div className={classes.user_data}>
                <div className={classes.user_data_left}>
                    <p className={classes.user_name}>Алексей А.</p>
                    <a className={classes.logout_link}>Выйти</a>
                </div>
                <img src={profile_user_img} alt="Profile user image" />
            </div>
        </>
    );
}

export default HeaderProfileUser;