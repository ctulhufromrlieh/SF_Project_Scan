import * as React from "react";

import pageLoginStyle from "../styles/PageLogin.module.scss";
// import PageMainCarousel from "./PageMainCarousel";
// import PageMainTarifs from "./PageMainTarifs";
// import MobileMenu from "./MobileMenu";

import img_l from "../img/login/img-l.module.svg"
import img_s from "../img/login/img-s.module.svg"

class PageLogin extends React.Component<any, any> {
    render(){
        
        return (
            <>
                <div>
                    <div>
                        <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                        <img src={img_l} alt="Картинка при авторизации" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default PageLogin;