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

    let style = {};
    const addOffsetXprev = -133;
    let addOffsetXnext = 0;

    // !!! Evil crutch
    if (elems.length < 8) {
        settingsDesktop.slidesToShow = elems.length;
        // const deltaX = (8 - elems.length) * 132;
        // style = {width: 1125 - deltaX};
        // addOffsetXnext += deltaX;
    }

    // console.log("addOffsetXnext = ", addOffsetXnext);

    let addElems = [];
    for (let i = 0; i < 8 - elems.length; i++) {
        addElems.push(elems.length + i);
    }

    console.log("addElems = ", addElems);
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
            <div className={commonClasses.only_desktop} style={style}>
                <MySlider 
                    settings={settingsDesktop} 
                    addContainerClassNames={[]} 
                    prevArrowData={{addOffsetX: addOffsetXprev, addOffsetY: 0}}
                    nextArrowData={{addOffsetX: -addOffsetXnext, addOffsetY: 0}}
                >
                    {elems.map(elem => 
                        <PageResultsCarouselItem key={elem.date.toString()} date={elem.date} all={elem.all} risks={elem.risks} />
                    )}
                    {addElems.map(elem => 
                        <PageResultsCarouselItem key={elem} isEmpty={true} />
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