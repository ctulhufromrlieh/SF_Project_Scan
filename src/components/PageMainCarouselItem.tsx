import * as React from "react";

import pageMainCarouselItemStyle from "../styles/PageMainCarouselItem.module.scss";

class PageMainCarouselItem extends React.Component<any, any> {
    render(){
        let url = this.props.url;
        let caption = this.props.caption;

        let elem: React.ReactElement;
        elem = 
            <>
                <div className={pageMainCarouselItemStyle.why_we_reason}>
                    <img src={url} alt="Why-we-reason" />
                    <div className={pageMainCarouselItemStyle.why_we_reason_text}>
                        <p>{caption}</p>
                    </div>
                </div>
            </>;

        return elem;
    }
}

export default PageMainCarouselItem;