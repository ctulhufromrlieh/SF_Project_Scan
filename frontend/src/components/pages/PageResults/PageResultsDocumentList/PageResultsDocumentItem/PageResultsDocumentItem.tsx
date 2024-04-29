import React, { useState } from "react";
import dateFormat from "dateformat";

import classes from "./PageResultsDocumentItem.module.scss";

import { Document, DocumentType } from "../../../../../types/api";
import MyButton, { ButtonColorScheme, ButtonSizeType } from "../../../../UI/MyButton/MyButton";

interface PageResultsDocumentItemProps {
    doc: Document;
};

const PageResultsDocumentItem: React.FC<PageResultsDocumentItemProps> = ({doc}) => {

    const dateToText = (date: Date): string => {
        return dateFormat(date, "dd.mm.yyyy");
    }

    let usedTypeClass = "";
    let usedTypeCaption = "";
    if (doc.type = DocumentType.TECH_NEWS) {
        usedTypeClass = classes.type_class_tech_news;
        usedTypeCaption = "Технические новости";
    } else {
        throw new Error("PageResultsDocumentItem: Wrong type of DocumentType");
    }

    // from https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
    function numberWithCommas(n: number) {
        var parts=n.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (parts[1] ? "." + parts[1] : "");
    }

    return (
        <div className={classes.item}>
            <div className={classes.header}>
                <p className={classes.date}>{dateToText(doc.date)}</p>
                <p className={classes.source}>{doc.source}</p>
            </div>
            <h1 className={classes.title}>{doc.title}</h1>
            <div className={usedTypeClass}>{usedTypeCaption}</div>
            <img className={classes.image} src={doc.image} alt="Document image"/>
            <p className={classes.text}>{doc.text}</p>
            {/* <div className={classes.bottom_panel}>
            </div> */}
            <MyButton
                    sizeType={ButtonSizeType.SMALL}
                    colorScheme={ButtonColorScheme.CYAN_BLACK} 
                    addClassNames={[classes.button_link]}
                >
                    <a href={doc.link}>
                        Читать в источнике
                    </a>
                </MyButton>
                <p className={classes.word_count}>{numberWithCommas(doc.wordCount)} слова</p>
        </div>
    );
}

export default PageResultsDocumentItem;