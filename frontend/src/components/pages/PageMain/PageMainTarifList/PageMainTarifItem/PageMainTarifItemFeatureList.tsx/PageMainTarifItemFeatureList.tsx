import React from "react";

import classes from "./PageMainTarifItemFeatureList.module.scss";

export interface PageMainTarifItemFeatureListProps {
    items: string[];
}

const PageMainTarifItemFeatureList: React.FC<PageMainTarifItemFeatureListProps> = ({items}: PageMainTarifItemFeatureListProps) => {

    return (
        <div className={classes.list}>
            {items.map(item => 
                <li>{item}</li>
            )}
        </div>
    );
}

export default PageMainTarifItemFeatureList;