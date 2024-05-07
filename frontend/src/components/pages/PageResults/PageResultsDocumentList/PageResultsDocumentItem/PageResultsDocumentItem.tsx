import React, { useState } from "react";
import dateFormat from "dateformat";

import classes from "./PageResultsDocumentItem.module.scss";

import { Document, DocumentElem, DocumentType } from "../../../../../types/api";
import MyButton, { ButtonColorScheme, ButtonSizeType } from "../../../../UI/MyButton/MyButton";

// import image1 from "../../../img/pages/results/results-image-1.module.png";
// import image2 from "../../../img/pages/results/results-image-2.module.png";

// import { Parser } from "html-to-react";
import parse from 'html-react-parser';
import sanitizeHtml from "sanitize-html";
// import * as sanitizeHtml from 'sanitize-html';

const HtmlToReactParser = require('html-to-react').Parser;

interface PageResultsDocumentItemProps {
    // doc: DocumentElem;
    doc: Document;
};

const PageResultsDocumentItem: React.FC<PageResultsDocumentItemProps> = ({doc}) => {

    const dateToText = (date: Date): string => {
        return dateFormat(date, "dd.mm.yyyy");
    }

    // const isTechNews = true;
    // const isAnnouncement = true;
    // const isDigest = true;
    const isTechNews = doc.isTechNews;
    const isAnnouncement = doc.isAnnouncement;
    const isDigest = doc.isDigest;

    // !!! one class for all - may be changed
    const classNameIsTechNews = classes.type_class_tech_news;
    const captionIsTechNews = "Технические новости";
    const classNameIsAnnouncement = classes.type_class_tech_news;
    const captionIsAnnouncement = "Анонсы";
    const classNameIsDigest = classes.type_class_tech_news;
    const captionIsDigest = "Сводки новостей";

    // let usedTypeClass = "";
    // let usedTypeCaption = "";
    // if (doc.type = DocumentType.TECH_NEWS) {
    //     usedTypeClass = classes.type_class_tech_news;
    //     usedTypeCaption = "Технические новости";
    // } else {
    //     throw new Error("PageResultsDocumentItem: Wrong type of DocumentType");
    // }

    // from https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
    function numberWithCommas(n: number) {
        var parts=n.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (parts[1] ? "." + parts[1] : "");
    }

    // const htmlToReactParser = new HtmlToReactParser();
    // const TextReactElement = htmlToReactParser.parse(doc.text);
    // const TextReactElement = Parser.parse(doc.text);

    // const parsedContent = parse(doc.text.replaceAll("&lt;", "<").replaceAll("&gt;", ">"));
    const parsedContent = parse(sanitizeHtml(doc.text.replaceAll("&lt;", "<").replaceAll("&gt;", ">")));
    // const parsedContent = parse(sanitizeHtml(doc.text));

    // console.log("doc.text = ", doc.text);
    // console.log("parse(doc.text) = ", parse(doc.text));
    // let parsedContent: any = "";
    // // let DivContainer: any;
    // try {
    //     parsedContent = parse(doc.text.replaceAll("&lt;", "<").replaceAll("&gt;", ">"));
    //     // DivContainer = <div className={classes.text}>{parsedContent}</div>;
    //     // const checkContent = <Content/>;
    // } catch {
    //     parsedContent = "INVALID DATA";
    // }
    

    return (
        <div className={classes.item}>
            <div className={classes.header}>
                <p className={classes.date}>{dateToText(new Date(doc.date))}</p>
                <p className={classes.source}>{doc.source}</p>
            </div>
            <h1 className={classes.title}>{doc.title}</h1>
            <div className={classes.type_class_container}>
                {isTechNews && <div className={classNameIsTechNews}>{captionIsTechNews}</div>}
                {isAnnouncement && <div className={classNameIsAnnouncement}>{captionIsAnnouncement}</div>}
                {isDigest && <div className={classNameIsDigest}>{captionIsDigest}</div>}
            </div>
            <img className={classes.image} src={doc.image} alt="Document image"/>
            {/* {DivContainer} */}
            <div className={classes.text}>{parsedContent}</div>
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