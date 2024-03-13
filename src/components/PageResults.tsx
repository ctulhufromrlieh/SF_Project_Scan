import * as React from "react";

import pageResultsStyle from "../styles/PageResults.module.scss";

import title_img_l from  "../img/results/title-img-l.module.svg";
import title_img_s from  "../img/results/title-img-s.module.svg";
import PageResultsTableL from "./PageResultsTableL";


class PageResults extends React.Component<any, any> {
    render(){

        return (
            <>
                <div className={pageResultsStyle.main}>
                    <div className={pageResultsStyle.title}>
                        <div className={pageResultsStyle.title_left}>
                            <h1>Ищем. Скоро будут результаты</h1>
                            <h2>Поиск может занять некоторое время, просим сохранять терпение.</h2>
                        </div>
                        <div className={pageResultsStyle.img_l}>
                            <img src={title_img_l} alt="Большой рисунок для результатов в заголовке" />
                        </div>
                        <div className={pageResultsStyle.img_s}>
                            <img src={title_img_s} alt="Маленький рисунок для результатов в заголовке" />
                        </div>
                    </div>
                    <div className={pageResultsStyle.summary}>
                        <h1>Общая сводка</h1>
                        <p className={pageResultsStyle.found}>Найдено 4 221 вариантов</p>
                        <PageResultsTableL />
                    </div>
                </div>
            </>
        )
    }
}

export default PageResults;