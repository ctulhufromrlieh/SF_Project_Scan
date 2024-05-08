import React, { useState } from "react";
import classes from "./PageSearch.module.scss";

import imageHeaderRight1Desktop from "../../../img/pages/search/header-right-1-desktop.module.svg";
import imageHeaderRight2Desktop from "../../../img/pages/search/header-right-2-desktop.module.svg";
import imageHeaderRightMobile from "../../../img/pages/search/header-right-mobile.module.svg";
import imageMainDesktop from "../../../img/pages/search/main-desktop.module.svg";
import imageMainMobile from "../../../img/pages/search/main-mobile.module.svg";
import PageSearchForm from "./PageSearchForm/PageSearchForm";

const PageSearch = () => {

    return (
        <div>
            <div className={classes.page}>
                <div className={classes.header}>
                    <div className={classes.header_left}>
                        <h1 className={classes.heading_main}>Найдите необходимые данные в пару кликов.</h1>
                        <p className={classes.sub_heading_description}>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
                    </div>
                    <div className={classes.header_right_desktop}>
                        <div className={classes.header_right_desktop_image_container}>
                            <div className={classes.header_right_desktop_wrapper_1}/>
                            <img src={imageHeaderRight1Desktop} alt="Header image 1 for desktop"/>
                            <div className={classes.header_right_desktop_wrapper_2}/>
                            <img src={imageHeaderRight2Desktop} alt="Header image 2 for desktop"/>
                            <div className={classes.header_right_desktop_wrapper_3}/>
                        </div>
                    </div>
                    <div className={classes.header_right_mobile_image_container}>
                        <img src={imageHeaderRightMobile} alt="Header image for mobile"/>
                    </div>
                </div>
                <div className={classes.main}>
                    <PageSearchForm/>
                    <div className={classes.main_image_container_desktop}>
                        <img src={imageMainDesktop} alt="Main image for desktop"/>
                    </div>
                </div>
                <div className={classes.main_image_container_mobile}>
                    <img src={imageMainMobile} alt="Main image for mobile"/>
                </div>
            </div>
        </div>
    );
}

export default PageSearch;