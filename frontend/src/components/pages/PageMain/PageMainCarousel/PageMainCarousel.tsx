import React from "react";

import classes from "./PageMainCarousel.module.scss";
import sliderArrowNext from "../../../../img/pages/main/slider-arrow-next.module.svg";
import sliderArrowPrev from "../../../../img/pages/main/slider-arrow-prev.module.svg";

import PageMainCarouselItem, { PageMainCarouselItemProps } from "./PageMainCarouselItem/PageMainCarouselItem";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

function CustomNextArrow(props: any) {
    const { className, style, onClick } = props;
        return (
            <div
                className={className}
                // className={classes.custom_arrow_next}
                style={{ ...style, width: 39, height: 39, right: -43}}
                onClick={onClick}
            >
                <img src={sliderArrowNext} alt="Slider next arrow" />
            </div>
    );
}

function CustomPrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            // className={classes.custom_arrow_prev}
            style={{ ...style, width: 39, height: 39, left: -43}}
            onClick={onClick}
        >
            <img src={sliderArrowPrev} alt="Slider prev arrow" />
        </div>
);
}

interface PageMainCarouselProps {
    elems: PageMainCarouselItemProps[];
}

const PageMainCarousel: React.FC<PageMainCarouselProps> = ({elems}) => {
    var settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>,
        // responsive: [
        //     {
        //       breakpoint: 1350,
        //       settings: {
        //         slidesToShow: 2,
        //         initialSlide: 2
        //       }
        //     },
        //     {
        //       breakpoint: 900,
        //       settings: {
        //         slidesToShow: 1,
        //       }
        //     }
        //   ]
      };

    return (
        <div className={classes.carousel_container}>
            <Slider {...settings}>
                    {elems.map(elem => 
                        <PageMainCarouselItem key={elem.id} id={elem.id} caption={elem.caption} image={elem.image} />
                    )}
            </Slider>
        </div>
    );

    // return (
    //     <div className={classes.carousel_container}>
    //         <Carousel className={classes.carousel} showArrows={true} showStatus={false}>
    //             {elems.map(elem => 
    //                 <PageMainCarouselItem caption={elem.caption} image={elem.image} />
    //             )}
    //         </Carousel>
    //     </div>
    // );
}

export default PageMainCarousel;