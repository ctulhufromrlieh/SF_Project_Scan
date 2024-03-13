import * as React from "react";

import pageResultsTableLStyle from "../styles/PageResultsTableL.module.scss";


import Slider from "react-slick";
import PageMainCarouselItem from "./PageMainCarouselItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          top: "93px",
        }}
        onClick={onClick}
      >
        {/* <img src={btnRight} alt={"Next page"} /> */}
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
            top: "93px",
        }}
        onClick={onClick}>
            {/* <img src={btnLeft} alt={"Previous page"} /> */}
        </div>
    );
  }

class PageResultsTableL extends React.Component<any, any> {
    // render(){

    //     return (
    //         <>
    //             Таблица с результатами
    //         </>
    //     )
    // }
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

        //  let urls = [
        //     img1,
        //     img2,
        //     img3,
        //     img4,
        //     img5,
        //     img6,
        // ]        

        // let captions = [
        //     "Высокая и оперативная скорость обработки заявки",
        //     "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
        //     "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
        //     "Высокая и оперативная скорость обработки заявки",
        //     "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
        //     "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
        // ]

        return (
            <>
                <Slider {...settings}>
                    {/* <PageMainCarouselItem url={urls[0]} caption={captions[0]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[1]} caption={captions[1]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[2]} caption={captions[2]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[3]} caption={captions[3]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[4]} caption={captions[4]}></PageMainCarouselItem>
                    <PageMainCarouselItem url={urls[5]} caption={captions[5]}></PageMainCarouselItem> */}
                </Slider>    
            </>
        );
    }
}

export default PageResultsTableL;