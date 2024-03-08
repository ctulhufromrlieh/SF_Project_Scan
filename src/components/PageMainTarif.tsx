import * as React from "react";

import pageMainTarifStyle from "../styles/PageMainTarif.module.scss";

type TarifData = {
    title: string,
    description: string,
    cost_new: string,
    cost_old: string,
    cost_sub_description: string,
    tarif_elems: Array<string>,
    style_type: number,
    is_personal_cabinet: boolean,
    img_l: any,
    img_s: any,
}

class PageMainTarif extends React.Component<any, any> {
    render(){
        let data: TarifData = this.props.data;
        let currentTarif = 1;

        let classNames = [
            pageMainTarifStyle.elem_1,
            pageMainTarifStyle.elem_2,
            pageMainTarifStyle.elem_3,
        ]

        return (
            <div className={classNames[data.style_type - 1]}>
                <div className={pageMainTarifStyle.head}>
                    <div className={pageMainTarifStyle.head_caption}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                    <div className={pageMainTarifStyle.head_img}>
                        <img  className={pageMainTarifStyle.head_img_l} src={data.img_l} alt="large image for tarif" />
                        <img  className={pageMainTarifStyle.head_img_s} src={data.img_s} alt="small image for tarif" />
                    </div>                   
                </div>
                <div className={pageMainTarifStyle.body}>
                    <p>
                        <span className={pageMainTarifStyle.cost_new}>{data.cost_new}</span>
                        <span className={pageMainTarifStyle.cost_old}>{data.cost_old}</span>
                    </p>
                    <p>{data.cost_sub_description}</p>
                    <p className={pageMainTarifStyle.tarif_elems_intro}>В тариф входит:</p>
                    <ul>
                        {data.tarif_elems.map(item => 
                            <li key={item}>{item}</li>
                        )}
                    </ul>                    
                    {
                        (data.style_type == currentTarif) ? 
                        <div className={pageMainTarifStyle.current_tarif}>
                            <p>Текущий тариф</p>
                        </div>
                        : 
                        <></>
                    }
                    {/* <div className={pageMainTarifStyle.button_container}>
                    {
                        (data.is_personal_cabinet) ?
                        <button>Перейти в личный кабинет</button> :
                        <button>Подробнее</button>
                    }
                    </div> */}
                </div>

                {/* <div className={pageMainTarifStyle.button_container}>
                    {
                        (data.is_personal_cabinet) ?
                        <button>Перейти в личный кабинет</button> :
                        <button>Подробнее</button>
                    }
                </div> */}
                {
                    (data.is_personal_cabinet) ?
                    <button>Перейти в личный кабинет</button> :
                    <button>Подробнее</button>
                }
            </div>
        );
    }
}

export default PageMainTarif;
export { TarifData };