import * as React from "react";

import mobileMenuStyle from "../styles/MobileMenu.module.scss";
import Logo from "./Logo";

class MobileMenu extends React.Component<any, any> {
    render(){
        return (
            <>
                <div className={mobileMenuStyle.mobile_menu}>
                    <header>
                        <Logo isHeader={false}></Logo>
                        <button className={mobileMenuStyle.mobile_menu_close_btn}></button>
                    </header>
                </div>
            </>
        );
    }
}

export default MobileMenu;