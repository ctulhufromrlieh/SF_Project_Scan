import * as React from "react";

// import headerStyle from "../styles/Header.module.scss";
// import "../styles/Header.scss";
// import "../styles/HeaderMenuItem.scss";
import headerMenuItemStyle from "../styles/HeaderMenuItem.module.scss";

class HeaderMenuItem extends React.Component<any, any> {
    render(){
        return (
            <>
                {/* <li className="header-menu-item"><a href={this.props.link}>{this.props.children}</a></li> */}
                <li className={headerMenuItemStyle.header_menu_item}><a className={headerMenuItemStyle.header_menu_item_a} href={this.props.link}>{this.props.children}</a></li>
            </>
        );
    }
}

export default HeaderMenuItem;