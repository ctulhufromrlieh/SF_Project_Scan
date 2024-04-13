import React from "react";

import classes from "./Footer.module.scss";
import commonClasses from "../../styles/common.module.scss";

import footerLogoDesktop from "../../img/logo-footer-desktop.module.png";
import footerLogoMobile from "../../img/logo-footer-mobile.module.png";
import FooterData from "./FooterData/FooterData";


const Footer: React.FC = () => {
    return (
        <div className={classes.footer}>
            <img className={commonClasses.only_desktop} src={footerLogoDesktop} alt="Footer desktop logo" />
            <img className={commonClasses.only_mobile} src={footerLogoMobile} alt="Footer mobile logo" />
            <FooterData/>
        </div>
    );
}

export default Footer;