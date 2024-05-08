import React from "react";

import classes from "./PageMainCarousel.module.scss";

import PageMainCarouselItem, { PageMainCarouselItemProps } from "./PageMainCarouselItem/PageMainCarouselItem";

import { Settings } from "react-slick";
import MySlider from "../../../UI/MySlider/MySlider";

interface PageMainCarouselProps {
    elems: PageMainCarouselItemProps[];
}

const PageMainCarousel: React.FC<PageMainCarouselProps> = ({elems}) => {
    const settings: Settings = {
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <MySlider settings={settings} addContainerClassNames={[classes.carousel_container]}>
            {elems.map(elem => 
                <PageMainCarouselItem key={elem.id} id={elem.id} caption={elem.caption} image={elem.image} />
            )}
        </MySlider>
    );
}

export default PageMainCarousel;