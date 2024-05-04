import React from "react";

import commonClasses from "../../../../styles/common.module.scss";
import classes from "./PageResultsCarousel.module.scss";

import { Settings } from "react-slick";
import MySlider from "../../../UI/MySlider/MySlider";
import { Histogram, SummaryItem } from "../../../../types/api";
import PageResultsCarouselItem from "./PageResultsCarouselItem/PageResultsCarouselItem";

interface PageResultsCarouselProps {
    elems: SummaryItem[];
}

const PageResultsCarousel: React.FC<PageResultsCarouselProps> = ({elems}) => {
    const settingsDesktop: Settings = {
        slidesToShow: 8,
        infinite: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 855,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    const settingsMobile: Settings = {
        slidesToShow: 1,
    }

    if (elems.length < 8) {
        settingsDesktop.slidesToShow = elems.length;
    }

    // let addElems = [];
    // if (elems.length < 8) {
    //     for (let i = elems.length; i < 8; i++)
    //         addElems.push("");
    // }


    return (
        <div className={classes.carousel_container}>
            <div className={classes.fixed_part}>
                <p>Период</p>
                <p>Всего</p>
                <p>Риски</p>
            </div>
            <div className={commonClasses.only_desktop}>
                <MySlider settings={settingsDesktop} addContainerClassNames={[]} prevArrowData={{addOffsetX: -133, addOffsetY: 0}}>
                    {elems.map(elem => 
                        <PageResultsCarouselItem key={elem.date.toString()} date={elem.date} all={elem.all} risks={elem.risks} />
                    )}
                    {/* {addElems.map(elem => 
                        <div>

                        </div>
                    )} */}
                </MySlider>
            </div>
            <div className={commonClasses.only_mobile}>
                <MySlider settings={settingsMobile} addContainerClassNames={[]}>
                    {elems.map(elem => 
                        <PageResultsCarouselItem key={elem.date.toString()} date={elem.date} all={elem.all} risks={elem.risks} />
                    )}
                </MySlider>
            </div>
        </div>
    );
}

export default PageResultsCarousel;