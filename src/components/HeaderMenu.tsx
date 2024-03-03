import * as React from "react";

// import headerStyle from "../styles/Header.module.scss";
// import "../styles/Header.scss";
// import "../styles/HeaderMenu.scss";
import headerMenuStyle from "../styles/HeaderMenu.module.scss";
import HeaderMenuItem from "./HeaderMenuItem";

class HeaderMenu extends React.Component<any, any> {
    render(){
        return (
            <>
                <nav className={headerMenuStyle.header_menu}>
                    <ol>
                        <HeaderMenuItem link="/main/">Главная</HeaderMenuItem>
                        <HeaderMenuItem link="/tarifs/">Тарифы</HeaderMenuItem>
                        <HeaderMenuItem link="/faq/">FAQ</HeaderMenuItem>
                    </ol>
                </nav>
            </>
        );
    }
}

export default HeaderMenu;