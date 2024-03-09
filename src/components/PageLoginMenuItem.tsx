import * as React from "react";

import pageLoginMenuItemStyle from "../styles/PageLoginMenuItem.module.scss";


class PageLoginMenuItem extends React.Component<any, any> {
    render(){
        const caption = this.props.caption;
        const isChecked = this.props.isChecked;
        const elemClassNames = [
            pageLoginMenuItemStyle.elem_unchecked,
            pageLoginMenuItemStyle.elem_checked,
        ]
        
        let elem: React.ReactElement = 
            <>
                <div className={elemClassNames[Number(isChecked)]}>
                    {caption}
                    <hr />
                </div>
            </>;

        return elem;
    }
}

export default PageLoginMenuItem;