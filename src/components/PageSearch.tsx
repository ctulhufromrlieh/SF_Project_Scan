import * as React from "react";

import pageSearchStyle from "../styles/PageSearch.module.scss";

// import img_l from "../img/login/img-l.module.svg";
// import img_s from "../img/login/img-s.module.svg";
// import img_frm_ico from "../img/login/img-frm-ico.module.svg";
// import PageLoginMenuItem from "./PageLoginMenuItem";

import title_img_l from  "../img/search/title-img-l.module.svg";
import title_img_s from  "../img/search/title-img-s.module.svg";
import search_img_l from  "../img/search/search-img-l.module.svg";
import search_img_s from  "../img/search/search-img-s.module.svg";


class PageSearch extends React.Component<any, any> {
    render(){
        
        let IsErrorINN = true;
        // let IsErrorTone = false;
        let IsErrorCount = true;
        let IsErrorRange = true;

        // let isErrorLogin = true;
        // let isErrorPsw = false;

        const inputClassNames = [
            pageSearchStyle.input_normal,
            pageSearchStyle.input_error,
        ];

        const dateClassNames = [
            pageSearchStyle.date_normal,
            pageSearchStyle.date_error,
        ];

        const errorMsgClassNames = [
            pageSearchStyle.error_msg_hidden,
            pageSearchStyle.error_msg_visible,
        ];

        const asteriskClassNames = [
            pageSearchStyle.asterisk_normal,
            pageSearchStyle.asterisk_error,
        ];

        return (
            <>
                <div className={pageSearchStyle.main}>
                    <div className={pageSearchStyle.title}>
                        <div className={pageSearchStyle.title_left}>
                            <h1>Найдите необходимые данные в пару кликов.</h1>
                            <h2>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</h2>
                        </div>
                        <div className={pageSearchStyle.img_l}>
                            <img src={title_img_l} alt="Большой рисунок для поиска в заголовке" />
                        </div>
                        <div className={pageSearchStyle.img_s}>
                            <img src={title_img_s} alt="Маленький рисунок для поиска в заголовке" />
                        </div>
                    </div>
                    <div className={pageSearchStyle.lower_part}>
                        <div className={pageSearchStyle.search_div}>
                            <div className={pageSearchStyle.search_div_left}>
                                {/* ИНН */}
                                <div className={pageSearchStyle.input_box}>
                                    <div className={pageSearchStyle.label_container}>
                                        <label htmlFor="edtINN">ИНН компании</label>
                                        <p className={asteriskClassNames[Number(IsErrorINN)]}>*</p>
                                    </div>
                                    <div className={pageSearchStyle.input_container}>
                                        <input id="edtINN" type="text" className={inputClassNames[Number(IsErrorINN)]}></input>
                                        <p className={errorMsgClassNames[Number(IsErrorINN)]}>Введите корректные данные</p>
                                    </div>
                                </div>
                                {/* Тональность */}
                                <div className={pageSearchStyle.input_box}>
                                    <div className={pageSearchStyle.label_container}>
                                        {/* <label htmlFor="edtTone">Тональность</label> */}
                                        <label htmlFor="selTone">Тональность</label>
                                        {/* <p></p> */}
                                    </div>
                                    {/* <input id="edtTone" type="text" className={inputClassNames[Number(IsErrorTone)]}></input> */}
                                    <div className={pageSearchStyle.input_container}>
                                        <select id="selTone" className={inputClassNames[Number(false)]} defaultValue="any">
                                            <option value="any">Любая</option>
                                            <option value="positive">Положительная</option>
                                            <option value="negative">Отрицательная</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Количество документов в выдаче */}
                                <div className={pageSearchStyle.input_box}>
                                    <div className={pageSearchStyle.label_container}>
                                        <label htmlFor="edtCount">Количество документов в выдаче</label>
                                        <p className={asteriskClassNames[Number(IsErrorCount)]}>*</p>
                                    </div>
                                    <div className={pageSearchStyle.input_container}>
                                        { IsErrorCount ?
                                            <input id="edtCount" type="text" className={inputClassNames[Number(IsErrorCount)]} placeholder={"От 1 до 1000"}></input>
                                            :
                                            <input id="edtCount" type="text" className={inputClassNames[Number(IsErrorCount)]}></input>
                                        }
                                        <p className={errorMsgClassNames[Number(IsErrorCount)]}>Обязательное поле</p>
                                    </div>
                                </div>
                                {/* Диапазон поиска */}
                                <div className={pageSearchStyle.input_box}>
                                    <div className={pageSearchStyle.label_container}>
                                        <label htmlFor="edtRange1">Диапазон поиска</label>
                                        <p className={asteriskClassNames[Number(IsErrorRange)]}>*</p>
                                    </div>
                                    {/* <input id="edtRange" type="text" className={inputClassNames[Number(IsErrorRange)]}></input> */}
                                    <div className={pageSearchStyle.range_container}>
                                        <input id="edtRange1" type="date" className={dateClassNames[Number(IsErrorRange)]}></input>
                                        <input id="edtRange2" type="date" className={dateClassNames[Number(IsErrorRange)]}></input>
                                        {/* <p className={errorMsgClassNames[Number(IsErrorRange)]}>Введите корректные данные</p> */}
                                    </div>
                                    <p className={errorMsgClassNames[Number(IsErrorRange)]}>Введите корректные данные</p>
                                </div>
                            </div>
                            <div className={pageSearchStyle.search_div_right}>                                
                                <div className={pageSearchStyle.checkboxes}>
                                    <div className={pageSearchStyle.checkbox_container}>
                                        <input id="chb1" type="checkbox" defaultChecked={true} />
                                        <label htmlFor="chb1">Признак максимальной полноты</label>
                                    </div>
                                    <div className={pageSearchStyle.checkbox_container}>
                                        <input id="chb2" type="checkbox" defaultChecked={true} />
                                        <label htmlFor="chb2">Упоминания в бизнес-контексте</label>
                                    </div>
                                    <div className={pageSearchStyle.checkbox_container}>
                                        <input id="chb3" type="checkbox" defaultChecked={true} />
                                        <label htmlFor="chb3">Главная роль в публикации</label>
                                    </div>
                                    <div className={pageSearchStyle.checkbox_container}>
                                        <input id="chb4" type="checkbox" defaultChecked={false} disabled={true} />
                                        <label htmlFor="chb4">Публикации только с риск-факторами</label>
                                    </div>
                                    <div className={pageSearchStyle.checkbox_container}>
                                        <input id="chb5" type="checkbox" defaultChecked={false} disabled={true} />
                                        <label htmlFor="chb5">Включать технические новости рынков</label>
                                    </div>
                                    <div className={pageSearchStyle.checkbox_container}>
                                        <input id="chb6" type="checkbox" defaultChecked={true} />
                                        <label htmlFor="chb6">Включать анонсы и календари</label>
                                    </div>
                                    <div className={pageSearchStyle.checkbox_container}>
                                        <input id="chb7" type="checkbox" defaultChecked={false} disabled={true} />
                                        <label htmlFor="chb7">Включать сводки новостей</label>
                                    </div>
                                </div>
                                <div className={pageSearchStyle.button_container}>
                                    <button className={pageSearchStyle.search_btn}>Поиск</button>
                                    <p className={pageSearchStyle.asterisk_description}>* Обязательные к заполнению поля</p>
                                </div>
                            </div>
                        </div>
                        <div className={pageSearchStyle.search_img}>
                            <img src={search_img_l} alt="Большой рисунок для поиска в основной части" className={pageSearchStyle.search_img_l} />
                            <img src={search_img_s} alt="Маленький рисунок для поиска в основной части" className={pageSearchStyle.search_img_s} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PageSearch;