import React from "react";
import dateFormat from "dateformat";


import classes from "./PageResultsCarouselItem.module.scss";


import { SummaryItem } from "../../../../../types/api";


interface PageResultsCarouselItemProps extends SummaryItem {
}

const PageResultsCarouselItem: React.FC<PageResultsCarouselItemProps> = ({date, all, risks}) => {

    

    const dateToText = (date: Date): string => {
        // return date.toLocaleString("YYYY.MM.DD");
        return dateFormat(date, "dd.mm.yyyy");
    }

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