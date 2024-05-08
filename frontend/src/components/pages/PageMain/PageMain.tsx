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

import tarifImg1D from "../../../img/pages/main/tarif-1-desktop.module.svg";
import tarifImg1M from "../../../img/pages/main/tarif-1-mobile.module.svg";
import tarifImg2D from "../../../img/pages/main/tarif-2-desktop.module.svg";
import tarifImg2M from "../../../img/pages/main/tarif-2-mobile.module.svg";
import tarifImg3D from "../../../img/pages/main/tarif-3-desktop.module.svg";
import tarifImg3M from "../../../img/pages/main/tarif-3-mobile.module.svg";

import { PageMainCarouselItemProps } from "./PageMainCarousel/PageMainCarouselItem/PageMainCarouselItem";
import { PMTColorScheme, PageMainTarifItemProps } from "./PageMainTarifList/PageMainTarifItem/PageMainTarifItem";
import PageMainTarifList from "./PageMainTarifList/PageMainTarifList";
import { Link } from "react-router-dom";

const PageMain: React.FC = () => {
    const whyWeElems: PageMainCarouselItemProps[] = [
        {id: 1, image: whyWeImg1, caption: "Высокая и оперативная скорость обработки заявки"},
        {id: 2, image: whyWeImg2, caption: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
        {id: 3, image: whyWeImg3, caption: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
        {id: 4, image: whyWeImg4, caption: "Высокая и оперативная скорость обработки заявки"},
        {id: 5, image: whyWeImg5, caption: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},
        {id: 6, image: whyWeImg6, caption: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},
    ];

    const tarifElems: PageMainTarifItemProps[] = [
        {id: 1, imageDesktop: tarifImg1D, imageMobile: tarifImg1M, caption: "Beginner", subcaption: "Для небольшого исследования", isCurrent: true, 
            cost: "799 ₽", oldCost: "1 200 ₽",  costPartial: "или 150 ₽/мес. при рассрочке на 24 мес.", 
            features: ["Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"], colorScheme: PMTColorScheme.ORANGE},
        {id: 2, imageDesktop: tarifImg2D, imageMobile: tarifImg2M, caption: "Pro", subcaption: "Для HR и фрилансеров", isCurrent: false, 
            cost: "1 299 ₽", oldCost: "2 600 ₽",  costPartial: "или 279 ₽/мес. при рассрочке на 24 мес.", 
            features: ["Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"], colorScheme: PMTColorScheme.CYAN},
        {id: 3, imageDesktop: tarifImg3D, imageMobile: tarifImg3M, caption: "Business", subcaption: "Для корпоративных клиентов", isCurrent: false, 
            cost: "2 379 ₽", oldCost: "3 700 ₽",  costPartial: "", 
            features: ["Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"], colorScheme: PMTColorScheme.BLACK},
    ]

    return (
        <div className={classes.page}>
            <div className={classes.overview}>
                <div>
                    <h1 className={classes.heading_main}>сервис по поиску публикаций о компании по его ИНН</h1>
                    <p className={classes.sub_heading_description}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту</p>
                    <Link to="/search"><MyButton addClassNames={[classes.btn_get_data]}>Запросить данные</MyButton></Link>
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
            </div>
            <div className={classes.our_tarifs}>
                <h2 className={classes.heading_std}>наши тарифы</h2>
                <PageMainTarifList elems={tarifElems}/>
            </div>
        </div>
    );
}

export default PageMain;