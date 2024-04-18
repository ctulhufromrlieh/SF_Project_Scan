import React, { ComponentPropsWithoutRef, useEffect, useId, useRef } from "react";

import classes from './MyButton.module.scss';

export enum ButtonSizeType {
    SMALL = "SMALL",
    NORMAL = "NORMAL",
    LARGE = "LARGE",
}

export enum ButtonColorScheme {
    BLUE_WHITE = "BLUE_WHITE",
    GRAY_BLACK = "GRAY_BLACK",
    CYAN_BLACK = "CYAN_BLACK",
}

interface MyButtonProps extends ComponentPropsWithoutRef<"button">{
    sizeType?: string;
    colorScheme?: string;
    addClassNames?: string[];
}

const MyButton: React.FC<MyButtonProps> = ({sizeType = ButtonSizeType.NORMAL, colorScheme = ButtonColorScheme.BLUE_WHITE, children, addClassNames, ...rest}: MyButtonProps) => {
    let usedClasses = [classes.btn_common];

    let usedRest = rest;
    if (!usedRest.type) {
        usedRest.type = "button";
    }

    let usedSizeClass = "";
    if (sizeType === ButtonSizeType.SMALL) {
        usedSizeClass = classes.btn_size_small;
    } else if (sizeType === ButtonSizeType.NORMAL) {
        usedSizeClass = classes.btn_size_normal;
    } else if (sizeType === ButtonSizeType.LARGE) {
        usedSizeClass = classes.btn_size_large;
    } else {
        throw new Error("MyButton: Wrong type of sizeType");
    }
    usedClasses.push(usedSizeClass);

    let usedColorClass = "";
    if (colorScheme === ButtonColorScheme.BLUE_WHITE) {
        usedColorClass = classes.btn_color_blue_white;
    } else if (colorScheme === ButtonColorScheme.CYAN_BLACK) {
        usedColorClass = classes.btn_color_cyan_black;
    } else if (colorScheme === ButtonColorScheme.GRAY_BLACK) {
        usedColorClass = classes.btn_color_gray_black;
    } else {
        throw new Error("MyButton: Wrong type of colorScheme");
    }
    usedClasses.push(usedColorClass);    

    if (addClassNames) {
        usedClasses.push(...addClassNames);
    }

    console.log(usedClasses);

    return (
        <button className={usedClasses.join(" ")} {...usedRest}>{children}</button>
    );
}

export default MyButton;