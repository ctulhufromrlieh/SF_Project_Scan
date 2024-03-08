import * as React from "react";

import pageMainCarouselStyle from "../styles/PageMainCarousel.module.scss";

// import React from "react";
import Slider from "react-slick";
import PageMainCarouselItem from "./PageMainCarouselItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../img/main/why-we-reason-01.module.svg";
import img2 from "../img/main/why-we-reason-02.module.svg";
import img3 from "../img/main/why-we-reason-03.module.svg";
import img4 from "../img/main/why-we-reason-04.module.svg";
import img5 from "../img/main/why-we-reason-05.module.svg";
import img6 from "../img/main/why-we-reason-06.module.svg";

import btnLeft from "../img/main/why-we-btn-left.module.svg";
import btnRight from "../img/main/why-we-btn-right.module.svg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
            // top: "0px",
            top: "93px",
            // background: "red",
            // backgroundImage: btnRight,
        }}
        onClick={onClick}
      >
        <img src={btnRight} alt={"Next page"} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
            ...style, 
            display: "block", 
            // background: "green" 
            // backgroundImage: {btnLeft},
            // background: {btnLeft},
            // width: "39px",
            // height: "39px",
            // border: "1px red solid"
            // verticalAlign: "middle",
            // marginTop: "auto",
            // marginBottom: "auto",
            top: "93px",
        }}
        onClick={onClick}>
            <img src={btnLeft} alt={"Previous page"} />
        </div>
    );
  }

class PageMainCarousel extends React.Component<any, any> {
    render(){
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        }

        // let urls = [
        //     require("../img/main/why-we-reason-01.module.svg"),
        //     require("../img/main/why-we-reason-02.module.svg"),
        //     require("../img/main/why-we-reason-03.module.svg"),
        //     require("../img/main/why-we-reason-04.module.svg"),
        //     require("../img/main/why-we-reason-05.module.svg"),
        //     require("../img/main/why-we-reason-06.module.svg"),
        // ]
        let urls = [
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
        ]        

        let captions = [
            "Высокая и оперативная скорость обработки заявки",
            "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
            "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
            "Высокая и оперативная скорость обработки заявки",
            "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
            "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
        ]

        return (
            <>
                <Slider {...settings}>
                    {/* <PageMainCarouselItem url={"../img/main/why-we-reason-01.svg"} caption={captions[0]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={"../img/main/why-we-reason-02.svg"} caption={captions[1]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={"../img/main/why-we-reason-03.svg"} caption={captions[2]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={"../img/main/why-we-reason-04.svg"} caption={captions[3]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={"../img/main/why-we-reason-05.svg"} caption={captions[4]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={"../img/main/why-we-reason-06.svg"} caption={captions[5]}></PageMainCarouselItem> */}
                    <PageMainCarouselItem url={urls[0]} caption={captions[0]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[1]} caption={captions[1]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[2]} caption={captions[2]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[3]} caption={captions[3]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[4]} caption={captions[4]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[5]} caption={captions[5]}></PageMainCarouselItem>
                </Slider>    
            </>
        );
    }
}

export default PageMainCarousel;
