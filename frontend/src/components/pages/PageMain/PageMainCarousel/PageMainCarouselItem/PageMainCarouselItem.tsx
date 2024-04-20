import React from "react";

import classes from "./PageMainCarouselItem.module.scss";
// import { Carousel } from "react-responsive-carousel";

export interface PageMainCarouselItemProps {
    id: number,
    image: any;
    caption: string;
}

const PageMainCarouselItem: React.FC<PageMainCarouselItemProps> = ({image, caption}) => {
    return (
        <div className={classes.why_we_reason_container}>
            <div className={classes.why_we_reason}>
                {/* <img className={[classes.why_we_reason_img1, classes.why_we_reason_img2].join(" ")} src={image} alt="Why-we-reason" /> */}
                <div className={classes.why_we_reason_image_container}>
                    <img src={image} alt="Why-we-reason" />
                </div>
                <div className={classes.why_we_reason_text}>
                    <p>{caption}</p>
                </div>
            </div>
        </div>
    );
}

export default PageMainCarouselItem;