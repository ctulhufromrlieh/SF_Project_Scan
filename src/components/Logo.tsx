import * as React from "react";

import logoStyle from "../styles/Logo.module.scss";

class Logo extends React.Component<any, any> {
    render(){
        let logoElem: React.ReactElement;
        if (this.props.isHeader){
            logoElem = <div className={logoStyle.header_logo}></div>;
        } else {
            logoElem = <div className={logoStyle.footer_logo}></div>;
        }

        return logoElem;
    }
}

export default Logo;