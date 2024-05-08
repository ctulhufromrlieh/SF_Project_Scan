import React from "react";
import dateFormat from "dateformat";


import classes from "./PageResultsCarouselItem.module.scss";


// import { SummaryItem } from "../../../../../types/api";


interface PageResultsCarouselItemProps {
    date?: Date | undefined;
    all?: number | undefined;
    risks?: number | undefined;
    isEmpty?: boolean;
}

const PageResultsCarouselItem: React.FC<PageResultsCarouselItemProps> = ({date = undefined, all = undefined, risks = undefined, isEmpty = false}) => {

    const dateToText = (date: Date | undefined): string => {
        // return date.toLocaleString("YYYY.MM.DD");
        return dateFormat(date, "dd.mm.yyyy");
    }

    if (isEmpty) {
        return (
            <div className={classes.container}>
                <div className={classes.item}>
                    {/* 123 */}
                </div>
                {/* <div className={classes.line}/> */}
            </div>
        );
    };

    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <p>{dateToText(date)}</p>
                <p>{all}</p>
                <p>{risks}</p>
            </div>
            <div className={classes.line}/>
        </div>
    );
}

export default PageResultsCarouselItem;