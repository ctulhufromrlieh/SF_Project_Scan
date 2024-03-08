import * as React from "react";

// import "../styles/HeaderLoginArea.scss";
import headerProfileLoginStyle from "../styles/HeaderProfileLogin.module.scss";
// import HeaderProfileData from "./HeaderProfileData";
// import HeaderProfileUser from "./HeaderProfileUser";

class HeaderProfileLogin extends React.Component<any, any> {
    render(){
        return (
            <div className={headerProfileLoginStyle.header_profile_login}>
                <a className={headerProfileLoginStyle.header_profile_login_link} href="/login/">Зарегистрироваться</a>
                <div className={headerProfileLoginStyle.header_profile_login_border}></div>
                <button className={headerProfileLoginStyle.header_profile_login_button}>Войти</button>
            </div>
        );
    }
}

export default HeaderProfileLogin;