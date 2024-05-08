import React from "react";

import classes from "./PageMainTarifList.module.scss";
import PageMainTarifItem, { PageMainTarifItemProps } from "./PageMainTarifItem/PageMainTarifItem";

export interface PageMainTarifListProps {
    elems: PageMainTarifItemProps[];
}

const PageMainTarifList: React.FC<PageMainTarifListProps> = ({elems}: PageMainTarifListProps) => {

    return (
        <div className={classes.list}>
                {elems.map(elem => 
                    <PageMainTarifItem key={elem.id} {...elem} />
                )}
        </div>
    );
}

export default PageMainTarifList;