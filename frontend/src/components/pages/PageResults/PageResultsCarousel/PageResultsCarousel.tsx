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

    const getResponsiveItem = (width: number, count: number) => {
        return {
            breakpoint: width,
            settings: {
                slidesToShow: count
            }
        }
    }

    const usedCount = Math.min(elems.length, 8);
    const sliderWidths: number[] = [450, 585, 720, 855, 990, 1125, 1260];    
    let responsiveSettings: any[] = [];
    for (let i = 0; i < usedCount - 1; i++) {
        responsiveSettings.push(getResponsiveItem(sliderWidths[i], 1 + i));
    }
    // let responsiveSettings = sliderWidths.map((elem, index) => getResponsiveItem(elem, 1 + index));
    // for (let i = 0; i < 8 - usedCount - 1; i++) {
    //     responsiveSettings.pop();
    // }
    // responsiveSettings = responsiveSettings.filter((value, index) => index < usedCount);

    console.log(responsiveSettings);

    const settingsDesktop: Settings = {
        // slidesToShow: 8,
        // slidesToShow: 3,
        slidesToShow: Math.min(8, usedCount),
        infinite: false,
        responsive: responsiveSettings.reverse(),
        // responsive: [
        //     {
        //         breakpoint: 1260,
        //         settings: {
        //             slidesToShow: 7,
        //         }
        //     },
        //     {
        //         breakpoint: 1125,
        //         settings: {
        //             slidesToShow: 6,
        //         }
        //     },
        //     {
        //         breakpoint: 990,
        //         settings: {
        //             slidesToShow: 5,
        //         }
        //     },
        //     {
        //         breakpoint: 855,
        //         settings: {
        //             slidesToShow: 4,
        //         }
        //     },
        //     {
        //         breakpoint: 720,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },
        //     {
        //         breakpoint: 585,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 450,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     },
        // ]
    };
    const settingsMobile: Settings = {
        slidesToShow: 1,
    }

    const isProblemSlider = elems.length < 8
    let style = {};
    // let style = {display: "flex", justifyContent: "center"};
    const addOffsetXprev = -133;
    let addOffsetXnext = 0;

    // !!! Evil crutch
    // if (elems.length < 8) {
    if (isProblemSlider) {
        // settingsDesktop.slidesToShow = elems.length;
        // const deltaX = (8 - elems.length) * 132;
        // const deltaX = (8 - usedCount) * 135;
        const deltaX = (8 - usedCount) * 133;
        style = {width: 1260 - deltaX};
        // style = {display: "flex", justifyContent: "center", width: 1260 - deltaX};
    }

    // console.log("addOffsetXnext = ", addOffsetXnext);

    // let addElems = [];
    // for (let i = 0; i < 8 - elems.length; i++) {
    //     addElems.push(elems.length + i);
    // }
// 
    // console.log("addElems = ", addElems);

    return (
        <>
            <div className={classes.carousel_maincontainer_desktop}>
                <div className={classes.carousel_container} style={style}>
                    <div className={classes.fixed_part}>
                        <p>Период</p>
                        <p>Всего</p>
                        <p>Риски</p>
                    </div>
                    <div>
                        <MySlider 
                            settings={settingsDesktop} 
                            addContainerClassNames={[]} 
                            prevArrowData={{addOffsetX: addOffsetXprev, addOffsetY: 0}}
                            nextArrowData={{addOffsetX: -addOffsetXnext, addOffsetY: 0}}
                        >
                            {elems.map(elem => 
                                <PageResultsCarouselItem key={elem.date.toString()} date={elem.date} all={elem.all} risks={elem.risks} />
                            )}
                        </MySlider>
                    </div>
                </div>
            </div>
            <div className={commonClasses.only_mobile}>
                <div className={classes.carousel_container}>
                    <div className={classes.fixed_part}>
                        <p>Период</p>
                        <p>Всего</p>
                        <p>Риски</p>
                    </div>
                    <div>
                        <MySlider settings={settingsMobile} addContainerClassNames={[]}>
                            {elems.map(elem => 
                                <PageResultsCarouselItem key={elem.date.toString()} date={elem.date} all={elem.all} risks={elem.risks} />
                            )}
                        </MySlider>
                    </div>
                </div>
            </div>
        </>
    );

    // return (
    //     <div className={classes.carousel_container}>
    //         <div className={classes.fixed_part}>
    //             <p>Период</p>
    //             <p>Всего</p>
    //             <p>Риски</p>
    //         </div>
    //         <div className={commonClasses.only_desktop}>
    //             <MySlider settings={settingsDesktop} addContainerClassNames={[]} prevArrowData={{addOffsetX: -133, addOffsetY: 0}}>
    //                 {elems.map(elem => 
    //                     <PageResultsCarouselItem key={elem.date.toString()} date={elem.date} all={elem.all} risks={elem.risks} />
    //                 )}
    //             </MySlider>
    //         </div>
    //         <div className={commonClasses.only_mobile}>
    //             <MySlider settings={settingsMobile} addContainerClassNames={[]}>
    //                 {elems.map(elem => 
    //                     <PageResultsCarouselItem key={elem.date.toString()} date={elem.date} all={elem.all} risks={elem.risks} />
    //                 )}
    //             </MySlider>
    //         </div>
    //     </div>
    // );
}

export default PageResultsCarousel;