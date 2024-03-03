import * as React from "react";

import headerStyle from "../styles/Header.module.scss";
// import "../styles/Header.scss";
import HeaderMenu from "./HeaderMenu";
import HeaderProfileArea from "./HeaderProfileArea";
import Logo from "./Logo";

class Header extends React.Component<any, any> {
    render(){
        return (
            <header className={headerStyle.header}>
                {/* <div className={"header-wrapper"}>
                    123
                </div> */}
                {/* <div className={headerStyle.header_logo}></div> */}
                <Logo isHeader={true} />
                <HeaderMenu></HeaderMenu>
                <HeaderProfileArea isLogged={true} />
            </header> 
        );
    }
}

export default Header;