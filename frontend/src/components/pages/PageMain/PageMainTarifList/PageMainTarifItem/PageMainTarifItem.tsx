import React from "react";

import classes from "./PageMainTarifItem.module.scss";
import MyButton, { BorderRadiusType, ButtonColorScheme, ButtonSizeType } from "../../../../UI/MyButton/MyButton";
import PageMainTarifItemFeatureList from "./PageMainTarifItemFeatureList.tsx/PageMainTarifItemFeatureList";
// import commonClasses from "../../../styles/common.module.scss";

// import MyButton from "../../UI/MyButton/MyButton";

// import overviewImageDesktop from "../../../img/pages/main/overview-desktop.module.png";
// import overviewImageMobile from "../../../img/pages/main/overview-mobile.module.png";

// import whyWeImg1 from "../../../img/pages/main/why-we-reason-01.module.svg";
// import whyWeImg2 from "../../../img/pages/main/why-we-reason-02.module.svg";
// import { PageMainCarouselItemProps } from "./PageMainCarousel/PageMainCarouselItem/PageMainCarouselItem";

export enum PMTColorScheme {
    ORANGE = "ORANGE",
    CYAN   = "CYAN",
    BLACK  = "BLACK",
}

export interface PageMainTarifItemProps {
    id: number,
    imageDesktop: any;
    imageMobile: any;
    caption: string;
    subcaption: string;
    isCurrent: boolean;
    cost: string;
    oldCost: string;
    costPartial: string;
    features: string[];
    colorScheme: PMTColorScheme;
}

const PageMainTarifItem: React.FC<PageMainTarifItemProps> = ({id, imageDesktop, imageMobile, caption, subcaption, isCurrent, cost, oldCost, costPartial, 
    features, colorScheme}: PageMainTarifItemProps) => {

    let usedClasses = [classes.item];

    let usedColorSchemeClass = "";
    if (colorScheme === PMTColorScheme.ORANGE) {
        usedColorSchemeClass = classes.item_orange;
    } else if (colorScheme === PMTColorScheme.CYAN) {
        usedColorSchemeClass = classes.item_cyan;
    } else if (colorScheme === PMTColorScheme.BLACK) {
        usedColorSchemeClass = classes.item_black;
    } else {
        throw new Error("PageMainTarifItem: Wrong type of colorScheme");
    }
    usedClasses.push(usedColorSchemeClass);

    return (
        // <div className={classes.item}>
        <div className={usedClasses.join(" ")}>
            <div className={classes.header}>
                <div className={classes.header_textblock}>
                    <h1 className={classes.caption}>{caption}</h1>
                    <h2 className={classes.subcaption}>{subcaption}</h2>
                </div>
                <div className={classes.header_image_desktop}>
                    <img src={imageDesktop} />
                </div>
                <div className={classes.header_image_mobile}>
                    <img src={imageMobile} />
                </div>
            </div>
            <div className={classes.main}>
                {isCurrent && 
                    <div className={classes.current_tarif_mark}>
                        Текущий тариф
                    </div>
                }
                <div className={classes.cost_container}>
                    <p className={classes.cost}>{cost}</p>
                    <p className={classes.oldCost}>{oldCost}</p>
                </div>
                <div className={classes.cost_partial_container}>
                    {/* <p className={classes.cost_partial}>{costPartial ? costPartial : " "}</p> */}
                    <p className={classes.cost_partial}>{costPartial}</p>
                </div>
                <h2 className={classes.tarif_features_caption}>В тариф входит:</h2>
                <PageMainTarifItemFeatureList items={features} />
                {isCurrent ? 
                    <MyButton sizeType={ButtonSizeType.NORMAL} colorScheme={ButtonColorScheme.GRAY_BLACK} addClassNames={[classes.tarif_btn]}>Перейти в личный кабинет</MyButton>
                :
                    <MyButton sizeType={ButtonSizeType.NORMAL} colorScheme={ButtonColorScheme.BLUE_WHITE} addClassNames={[classes.tarif_btn]}>Подробнее</MyButton>
                }
                
            </div>
        </div>
    );
}

export default PageMainTarifItem;