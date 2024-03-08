import * as React from "react";

import headerStyle from "../styles/Header.module.scss";
// import "../styles/Header.scss";
import HeaderMenu from "./HeaderMenu";
import HeaderProfileArea from "./HeaderProfileArea";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

class Header extends React.Component<any, any> {
    render(){
        console.log("this.props.showMobileMenu", this.props.showMobileMenu);
        return (
            <header className={headerStyle.header}>
                <Logo isHeader={true} />
                <HeaderMenu></HeaderMenu>
                <HeaderProfileArea isLogged={true} />
                <button className={headerStyle.mobile_menu_button} onClick={this.props.showMobileMenu}><a></a></button>
            </header> 
        );
    }
}

export default Header;