import React, { PropsWithChildren, ReactElement, ReactNode } from "react";

import classes from "./MySlider.module.scss";
import sliderArrowNext from "./slider-arrow-next.module.svg";
import sliderArrowPrev from "./slider-arrow-prev.module.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { makeClassName } from "../../../utils/classes";

export interface ArrowData {
    addOffsetX: number;
    addOffsetY: number;
};

function CustomNextArrow(props: any) {
    const { className, style, onClick, arrowData } = props;

    let addOffsetX = 0;
    let addOffsetY = 0;
    if (arrowData) {
        addOffsetX = arrowData.addOffsetX;
        addOffsetY = arrowData.addOffsetY;
    }

    return (
        <div
            className={className}
            // className={classes.custom_arrow_next}
            style={{ ...style, width: 39, height: 39, right: -43 + addOffsetX}}
            onClick={onClick}
        >
            <img src={sliderArrowNext} alt="Slider next arrow" />
        </div>
    );

    // return (
    //     <div
    //         className={className}
    //         // className={classes.custom_arrow_next}
    //         style={{ ...style, width: 39, height: 39, right: -43}}
    //         onClick={onClick}
    //     >
    //         <img src={sliderArrowNext} alt="Slider next arrow" />
    //     </div>
    // );
}

function CustomPrevArrow(props: any) {
    const { className, style, onClick, arrowData } = props;

    let addOffsetX = 0;
    let addOffsetY = 0;
    if (arrowData) {
        addOffsetX = arrowData.addOffsetX;
        addOffsetY = arrowData.addOffsetY;
    }

    return (
        <div
            className={className}
            // className={classes.custom_arrow_prev}
            style={{ ...style, width: 39, height: 39, left: -43 + addOffsetX}}
            onClick={onClick}
        >
            <img src={sliderArrowPrev} alt="Slider prev arrow" />
        </div>
    );
}

// function makeCustomNextArrow(arrowData: ArrowData | undefined) {
//     return function CustomNextArrow(props: any) {
//         const { className, style, onClick } = props;
//         //     return (
//         //         <div
//         //             className={className}
//         //             // className={classes.custom_arrow_next}
//         //             style={{ ...style, width: 39, height: 39, right: -43}}
//         //             onClick={onClick}
//         //         >
//         //             <img src={sliderArrowNext} alt="Slider next arrow" />
//         //         </div>
//         // );
//         let addOffsetX = 0;
//         let addOffsetY = 0;
//         if (arrowData) {
//             addOffsetX = arrowData.addOffsetX;
//             addOffsetY = arrowData.addOffsetY;
//         }
//         return (
//             <div
//                 className={className}
//                 // className={classes.custom_arrow_next}
//                 style={{ ...style, width: 39, height: 39, right: -43}}
//                 onClick={onClick}
//             >
//                 <img src={sliderArrowNext} alt="Slider next arrow" />
//             </div>
//     );
//     }
// }

// function makeCustomPrevArrow(arrowData: ArrowData | undefined) {
//     return function CustomPrevArrow(props: any) {
//         const { className, style, onClick } = props;
//         // return (
//         //     <div
//         //         className={className}
//         //         style={{ ...style, width: 39, height: 39, left: -43}}
//         //         onClick={onClick}
//         //     >
//         //         <img src={sliderArrowPrev} alt="Slider prev arrow" />
//         //     </div>
//         // );
//         return (
//             <div
//                 className={className}
//                 style={{ ...style, width: 39, height: 39, left: -43}}
//                 onClick={onClick}
//             >
//                 <img src={sliderArrowPrev} alt="Slider prev arrow" />
//             </div>
//         );
//     }
// }

interface MySliderProps {
    settings?: Settings | undefined;
    // children: ReactNode | undefined;
    addContainerClassNames?: string[];
    nextArrowData?: ArrowData | undefined;
    prevArrowData?: ArrowData | undefined;
}

const MySlider: React.FC<PropsWithChildren<MySliderProps>> = ({settings, addContainerClassNames = [], nextArrowData = undefined, prevArrowData = undefined, children}) => {
    const defaultSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow arrowData={nextArrowData}/>,
        prevArrow: <CustomPrevArrow arrowData={prevArrowData}/>,
        // nextArrow: makeCustomNextArrow(nextArrowData),
        // prevArrow: makeCustomPrevArrow(prevArrowData),
    };

    const usedSettings: Settings = {
        ...defaultSettings,
        ...settings
    }

    return (
        <div className={makeClassName(classes.carousel_container, addContainerClassNames)}>
            <Slider {...usedSettings}>
                {children}
            </Slider>
        </div>
    );
}

export default MySlider;