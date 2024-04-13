import React from "react";

import classes from "./HeaderProfileData.module.scss";

const HeaderProfileData: React.FC = () => {
    const isLoading = false;
    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <div className={classes.caption}>Использовано компаний</div>
                <div className={classes.num1}>34</div>
                <div className={classes.caption}>Лимит по компаниям</div>
                <div className={classes.num2}>100</div>
            </div>
        </div>
    );
}

export default HeaderProfileData;