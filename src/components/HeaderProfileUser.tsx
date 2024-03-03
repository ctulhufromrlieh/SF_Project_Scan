import * as React from "react";

import headerProfileUserStyle from "../styles/HeaderProfileUser.module.scss";

import profile_user_img from "../img/profile_user_img.module.png";

class HeaderProfileUser extends React.Component<any, any> {
    render(){
        return (
            <>
                <div className={headerProfileUserStyle.user_data}>
                    <div className={headerProfileUserStyle.user_data_left}>
                        {/* <p>123</p> */}
                        <p className={headerProfileUserStyle.user_name}>Иван И.</p>
                        <a className={headerProfileUserStyle.logout_link}>Выйти</a>
                    </div>
                    <img src={profile_user_img} alt="Profile user image" />
                    {/* <img src="../src/img/profile_user_img.png" alt="Profile user image" /> */}
                </div>
            </>
        );
    }
}

export default HeaderProfileUser;