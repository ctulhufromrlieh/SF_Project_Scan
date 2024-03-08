import * as React from "react";

import pageMainTarifsStyle from "../styles/PageMainTarifs.module.scss";
import PageMainTarif from "./PageMainTarif";
import { TarifData } from "./PageMainTarif";

import tarif_1_l from "../img/main/tarif-1-l.module.svg";
import tarif_1_s from "../img/main/tarif-1-s.module.svg";
import tarif_2_l from "../img/main/tarif-2-l.module.svg";
import tarif_2_s from "../img/main/tarif-2-s.module.svg";
import tarif_3_l from "../img/main/tarif-3-l.module.svg";
import tarif_3_s from "../img/main/tarif-3-s.module.svg";

class PageMainTarifs extends React.Component<any, any> {
    render(){
        let elem: React.ReactElement;

        let datas: Array<TarifData> = [
            {
                title: "Beginner",
                description: "Для небольшого исследования",
                cost_new: "799 ₽",
                cost_old: "1 200 ₽",
                cost_sub_description: "или 150 ₽/мес. при рассрочке на 24 мес.",
                tarif_elems: [
                    "Безлимитная история запросов",
                    "Безопасная сделка",
                    "Поддержка 24/7",
                ],
                style_type: 1,
                is_personal_cabinet: true,
                img_l: tarif_1_l,
                img_s: tarif_1_s,
            },
            {
                title: "Pro",
                description: "Для HR и фрилансеров",
                cost_new: "1 299 ₽",
                cost_old: "2 600 ₽",
                cost_sub_description: "или 279 ₽/мес. при рассрочке на 24 мес.",
                tarif_elems: [
                    "Все пункты тарифа Beginner",
                    "Экспорт истории",
                    "Рекомендации по приоритетам",
                ],
                style_type: 2,
                is_personal_cabinet: false,
                img_l: tarif_2_l,
                img_s: tarif_2_s,
            },
            {
                title: "Business",
                description: "Для корпоративных клиентов",
                cost_new: "2 379 ₽",
                cost_old: "3 700 ₽",
                cost_sub_description: "",
                tarif_elems: [
                    "Все пункты тарифа Pro",
                    "Безлимитное количество запросов",
                    "Приоритетная поддержка",
                ],
                style_type: 3,
                is_personal_cabinet: false,
                img_l: tarif_3_l,
                img_s: tarif_3_s,
            },
        ]

        elem = 
            <div className={pageMainTarifsStyle.main}>
                <PageMainTarif data={datas[0]} />
                <PageMainTarif data={datas[1]} />
                <PageMainTarif data={datas[2]} />
            </div>
            // <>
            //     <div className={pageMainStyle.overview}>
            //         <div>
            //             <h1>сервис по поиску публикаций о компании по его ИНН</h1>
            //             <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту</p>
            //             <button>Запросить данные</button>
            //         </div>
            //         <div className={pageMainStyle.overview_img}></div>
            //     </div>
            //     <div className={pageMainStyle.why_we}>
            //         <h2>Почему именно мы</h2>
            //         <PageMainCarousel></PageMainCarousel>
            //     </div>
            //     <div className={pageMainStyle.before_tarifs} />
            // </>;

        return elem;
    }
}

export default PageMainTarifs;