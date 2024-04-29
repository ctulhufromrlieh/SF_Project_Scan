import React, { useState } from "react";
import classes from "./PageResults.module.scss";

import imageHeaderRightDesktop from "../../../img/pages/results/header-right-desktop.module.svg";
import imageHeaderRightMobile from "../../../img/pages/results/header-right-mobile.module.svg";
import image1 from "../../../img/pages/results/results-image-1.module.png";
import image2 from "../../../img/pages/results/results-image-2.module.png";


import PageResultsCarousel from "./PageResultsCarousel/PageResultsCarousel";
import { Document, DocumentType, SummaryItem } from "../../../types/api";
import PageResultsDocumentList from "./PageResultsDocumentList/PageResultsDocumentList";
// import PageResultsCarouselMobile from "./PageResultsCarouselMobile/PageResultsCarouselMobile";

// import PageSearchForm from "./PageSearchForm/PageSearchForm";

const PageResults = () => {
    const elems: SummaryItem[] = [
        {date: new Date("2021-09-10"), all: 5, risks: 0},
        {date: new Date("2021-09-13"), all: 2, risks: 0},
        {date: new Date("2021-09-17"), all: 6, risks: 0},
        {date: new Date("2021-09-20"), all: 8, risks: 2},
        {date: new Date("2021-10-12"), all: 1, risks: 0},
        {date: new Date("2021-10-15"), all: 10, risks: 2},
        {date: new Date("2021-10-16"), all: 4, risks: 0},
        {date: new Date("2021-10-17"), all: 3, risks: 0},
    ];

    const docs: Document[] = [
        {
            id: 1,
            date: new Date("2021-09-13"),
            source: "Комсомольская правда KP.RU",
            title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
            type: DocumentType.TECH_NEWS,
            image: image1,
            text: "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
            link: "www.source1.ru",
            wordCount: 2543,
        },
        {
            id: 2,
            date: new Date("2021-10-15"),
            source: "VC.RU",
            title: "Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций",
            type: DocumentType.TECH_NEWS,
            image: image2,
            text: "Кто такой Data Scientist и чем он занимается? Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один. В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.",
            link: "www.source2.ru",
            wordCount: 3233,
        },
    ];

    return (
        <div>
            <div className={classes.page}>
                <div className={classes.header}>
                    <div className={classes.header_left}>
                        <h1 className={classes.heading_main}>Ищем. Скоро будут результаты</h1>
                        <p className={classes.sub_heading_description}>Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    <div className={classes.header_right}>
                        <div className={classes.header_right_image_container_desktop}>
                            <img src={imageHeaderRightDesktop} alt="Header image for desktop"/>
                        </div>
                        <div className={classes.header_right_image_container_mobile}>
                            <img src={imageHeaderRightMobile} alt="Header image for mobile"/>
                        </div>
                    </div>
                </div>
                <div className={classes.summary}>
                    <div className={classes.summary_header}>
                        <h2 className={classes.heading_std}>Общая сводка</h2>
                        <p className={classes.summary_caption}>
                            Найдено 4 221 вариантов
                        </p>
                    </div>
                    {/* <div className={classes.carousel_desktop}>
                        <PageResultsCarouselDesktop elems={elems} />
                    </div> */}
                    <div className={classes.carousel}>
                        <PageResultsCarousel elems={elems} />
                    </div>
                    {/* <div className={classes.carousel_mobile}>
                        <PageResultsCarouselMobile elems={elems} />
                    </div> */}
                </div>
                <div className={classes.documents}>
                    <h2 className={classes.heading_std}>Список документов</h2>
                    <PageResultsDocumentList docs={docs} />
                </div>
            </div>
        </div>
    );
}

export default PageResults;