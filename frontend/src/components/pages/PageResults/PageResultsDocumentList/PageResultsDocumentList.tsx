import React, { useState } from "react";
import classes from "./PageResultsDocumentList.module.scss";

// import imageHeaderRightDesktop from "../../../img/pages/results/header-right-desktop.module.svg";
// import imageHeaderRightMobile from "../../../img/pages/results/header-right-mobile.module.svg";
import { Document } from "../../../../types/api";
import PageResultsDocumentItem from "./PageResultsDocumentItem/PageResultsDocumentItem";

interface PageResultsDocumentListProps {
    docs: Document[];
};

const PageResultsDocumentList: React.FC<PageResultsDocumentListProps> = ({docs}) => {

    return (
        <div className={classes.container}>
            {docs.map(doc => 
                <PageResultsDocumentItem doc={doc}/>
            )}
        </div>
    );
}

export default PageResultsDocumentList;