import React from "react";

import classes from "./HeaderMenu.module.scss";
import { Link } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../../router";
import Navbar from "../../UI/Navbar/Navbar";

// interface HeaderMenuData {
//     items: string[];
//     className?: string;
// }

interface HeaderMenuProps {
    isLogined: boolean;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({isLogined}) => {
    let usedRoutes = [];
    if (isLogined) {
        usedRoutes = publicRoutes;
    } else {
        usedRoutes = privateRoutes;
    }

    return (
        <Navbar routes={usedRoutes} listClassName={classes.menu} itemClassName={classes.item} />
        // <div className={classes.menu}>
        //     {/* {items.map(item => 
        //         <div key={item} className={classes.item}>{item}</div>
        //     )} */}
        // </div>
    );
}

export default HeaderMenu;