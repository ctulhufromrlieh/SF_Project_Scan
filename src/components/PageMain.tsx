import * as React from "react";

import pageMainStyle from "../styles/PageMain.module.scss";
import PageMainCarousel from "./PageMainCarousel";
import PageMainTarifs from "./PageMainTarifs";
import MobileMenu from "./MobileMenu";

class PageMain extends React.Component<any, any> {
    render(){
        
        // const [isShowMobileMenu, setIsShowMobileMenu] = React.useState(false);
        // const onShowMobileMenuClick = () => setIsShowMobileMenu(true);
        // const onCloseMobileMenuClick = () => setIsShowMobileMenu(false);

        let elem: React.ReactElement;
        elem = 
            <>
                <div className={pageMainStyle.overview}>
                    <div>
                        <h1>сервис по поиску публикаций о компании по его ИНН</h1>
                        <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту</p>
                        <button>Запросить данные</button>
                    </div>
                    <div className={pageMainStyle.overview_img}></div>
                </div>
                <div className={pageMainStyle.why_we}>
                    <h2>Почему именно мы</h2>
                    <PageMainCarousel></PageMainCarousel>
                </div>
                <div className={pageMainStyle.before_tarifs} />
                <div className={pageMainStyle.tarifs}>
                    <h2>наши тарифы</h2>
                    <PageMainTarifs />
                </div>
                <MobileMenu hideMobileMenu={this.props.hideMobileMenu} />
            </>;

        return elem;
    }
}

export default PageMain;