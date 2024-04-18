import React from "react";

import classes from "./PageMain.module.scss";
// import commonClasses from "../../../styles/common.module.scss";

import MyButton from "../../UI/MyButton/MyButton";

import overviewImageDesktop from "../../../img/pages/main/overview-desktop.module.png";
import overviewImageMobile from "../../../img/pages/main/overview-mobile.module.png";
import PageMainCarousel from "./PageMainCarousel/PageMainCarousel";

import whyWeImg1 from "../../../img/pages/main/why-we-reason-01.module.svg";
import whyWeImg2 from "../../../img/pages/main/why-we-reason-02.module.svg";
import whyWeImg3 from "../../../img/pages/main/why-we-reason-03.module.svg";
import whyWeImg4 from "../../../img/pages/main/why-we-reason-04.module.svg";
import whyWeImg5 from "../../../img/pages/main/why-we-reason-05.module.svg";
import whyWeImg6 from "../../../img/pages/main/why-we-reason-06.module.svg";
import { PageMainCarouselItemProps } from "./PageMainCarousel/PageMainCarousel/PageMainCarouselItem";

const PageMain: React.FC = () => {
    const whyWeElems: PageMainCarouselItemProps[] = [
        {id: 1, image: whyWeImg1, caption: "Высокая и оперативная скорость обработки заявки"},
        {id: 2, image: whyWeImg2, caption: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
        {id: 3, image: whyWeImg3, caption: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
        {id: 4, image: whyWeImg4, caption: "Высокая и оперативная скорость обработки заявки"},
        {id: 5, image: whyWeImg5, caption: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
        {id: 6, image: whyWeImg6, caption: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
    ];

    return (
        <div className={classes.page}>
            {/* <div style={{boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.2)", width: 200, height: 200, margin: 40, borderRadius: 10}} ></div> */}
            <div className={classes.overview}>
                <div>
                    <h1 className={classes.heading_main}>сервис по поиску публикаций о компании по его ИНН</h1>
                    <p className={classes.sub_heading_description}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту</p>
                    <MyButton addClassNames={[classes.btn_get_data]}>Запросить данные</MyButton>
                </div>
                <div>
                    <img className={classes.overview_image_desktop} src={overviewImageDesktop} alt="Overview desktop image" />
                    <img className={classes.overview_image_mobile} src={overviewImageMobile} alt="Overview mobile image" />
                </div>
                {/* <div className={classes.overview_img}></div> */}
            </div>
            <div className={classes.why_we}>
                <h2 className={classes.heading_std}>Почему именно мы</h2>
                <PageMainCarousel elems={whyWeElems}/>
                {/* <div className={classes.carousel_container}>
                    <PageMainCarousel elems={whyWeElems}/>
                </div> */}
                {/* <PageMainCarousel></PageMainCarousel> */}
            </div>
            {/* <div className={pageMainStyle.why_we}>
                <h2>Почему именно мы</h2>
                <PageMainCarousel></PageMainCarousel>
            </div>
            <div className={pageMainStyle.before_tarifs} />
            <div className={pageMainStyle.tarifs}>
                <h2>наши тарифы</h2>
                <PageMainTarifs />
            </div> */}
        </div>
    );
}

export default PageMain;