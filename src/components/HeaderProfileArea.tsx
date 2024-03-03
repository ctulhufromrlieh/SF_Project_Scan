import * as React from "react";

// import "../styles/HeaderLoginArea.scss";
import headerProfileAreaStyle from "../styles/HeaderProfileArea.module.scss";
import HeaderProfileData from "./HeaderProfileData";
import HeaderProfileUser from "./HeaderProfileUser";

class HeaderProfileArea extends React.Component<any, any> {
    render(){
        let areaElem: React.ReactElement;

        if (this.props.isLogged){
            areaElem = 
                <div className={headerProfileAreaStyle.header_login_area}>
                    <HeaderProfileData />
                    <HeaderProfileUser />
                    {/* <a className={headerLoginAreaStyle.header_login_area_link} href="/login/">Зарегистрироваться</a>
                    <div className={headerLoginAreaStyle.header_login_area_border}></div>
                    <button className={headerLoginAreaStyle.header_login_area_button}>Войти</button> */}
                </div>;
        } else {
            areaElem = 
                <div className={headerProfileAreaStyle.header_login_area}>
                    <a className={headerProfileAreaStyle.header_login_area_link} href="/login/">Зарегистрироваться</a>
                    <div className={headerProfileAreaStyle.header_login_area_border}></div>
                    <button className={headerProfileAreaStyle.header_login_area_button}>Войти</button>
                </div>
        };

        return areaElem;
        // return (
        //     <>
        //         <div className={headerLoginAreaStyle.header_login_area}>
        //             <a className={headerLoginAreaStyle.header_login_area_link} href="/login/">Зарегистрироваться</a>
        //             <div className={headerLoginAreaStyle.header_login_area_border}></div>
        //             <button className={headerLoginAreaStyle.header_login_area_button}>Войти</button>
        //         </div>
        //     </>
        // );
    }
}

export default HeaderProfileArea;