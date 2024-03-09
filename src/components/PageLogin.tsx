import * as React from "react";

import pageLoginStyle from "../styles/PageLogin.module.scss";
// import PageMainCarousel from "./PageMainCarousel";
// import PageMainTarifs from "./PageMainTarifs";
// import MobileMenu from "./MobileMenu";

import img_l from "../img/login/img-l.module.svg";
import img_s from "../img/login/img-s.module.svg";
import img_frm_ico from "../img/login/img-frm-ico.module.svg";
import PageLoginMenuItem from "./PageLoginMenuItem";



class PageLogin extends React.Component<any, any> {
    render(){
        
        let isErrorLogin = true;
        let isErrorPsw = false;

        const inputClassNames = [
            pageLoginStyle.input_normal,
            pageLoginStyle.input_error,
        ];

        const errorMsgClassNames = [
            pageLoginStyle.error_msg_hidden,
            pageLoginStyle.error_msg_visible,
        ];

        return (
            <>
                <div className={pageLoginStyle.main}>
                    <div className={pageLoginStyle.caption_div_s}>
                        <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                    </div>
                    <div className={pageLoginStyle.img_div_l}>
                        <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                        <img src={img_l} alt="Картинка при авторизации" />
                    </div>
                    <div className={pageLoginStyle.login_div}>
                        <img className={pageLoginStyle.img_frm_ico} src={img_frm_ico} alt="Картинка с замком" />
                        <div className={pageLoginStyle.menu}>
                            <PageLoginMenuItem caption={"Войти"} isChecked={true} />
                            <PageLoginMenuItem caption={"Зарегистрироваться"} isChecked={false} />
                        </div>
                        <div className={pageLoginStyle.input_box}>
                            <label htmlFor="edtLogin">Логин или номер телефона:</label>
                            <input id="edtLogin" type="text" className={inputClassNames[Number(isErrorLogin)]}></input>
                            <p className={errorMsgClassNames[Number(isErrorLogin)]}>Введите корректные данные</p>
                            <label htmlFor="edtPassword">Пароль:</label>
                            <input id="edtPassword" type="password" className={inputClassNames[Number(isErrorPsw)]}></input>
                            <p className={errorMsgClassNames[Number(isErrorPsw)]}>Неправильный пароль</p>
                        </div>
                        <div className={pageLoginStyle.enter_btn_container}>
                            <button className={pageLoginStyle.enter_btn}>Войти</button>
                        </div>
                        <div className={pageLoginStyle.restore_psw_container}>
                            <p><a>Восстановить пароль</a></p>
                        </div>
                        <div className={pageLoginStyle.enter_from_container}>
                            <h4>Войти через:</h4>
                            <div className={pageLoginStyle.button_container}>
                                <button className={pageLoginStyle.google_btn}></button>
                                <button className={pageLoginStyle.facebook_btn}></button>
                                <button className={pageLoginStyle.yandex_btn}></button>
                            </div>
                        </div>
                    </div>
                    <div className={pageLoginStyle.img_div_s}>
                        {/* <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1> */}
                        <img src={img_s} alt="Картинка при авторизации" />
                    </div>
                </div>
            </>
        )
    }
}

export default PageLogin;