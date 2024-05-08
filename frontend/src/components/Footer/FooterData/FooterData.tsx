import React from "react";

import classes from "./FooterData.module.scss";

const FooterData: React.FC = () => {
    return (
        <div className={classes.main}>
            <div className={classes.textblock1}>
                <p>г. Москва, Цветной б-р, 40</p>
                <p>+7 495 771 21 11</p>
                <p>info@skan.ru</p>
            </div>
            <div className={classes.textblock2}>
                <p>Copyright. 2022</p>
            </div>
        </div>
    );
}

export default FooterData;