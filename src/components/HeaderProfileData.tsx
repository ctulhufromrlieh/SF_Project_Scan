import * as React from "react";

// import "../styles/HeaderLoginArea.scss";
import headerProfileDataStyle from "../styles/HeaderProfileData.module.scss";

class HeaderProfileData extends React.Component<any, any> {
    render(){
        let isLoaded = true;
        let elem: React.ReactElement;
        if (isLoaded) {
            elem = 
                <div className={headerProfileDataStyle.profile_data_loaded}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={headerProfileDataStyle.profile_data_caption}>
                                    Использовано компаний 
                                </td>
                                <td className={headerProfileDataStyle.profile_data_count}>
                                    34
                                </td>
                            </tr>
                            <tr>
                                <td className={headerProfileDataStyle.profile_data_caption}>
                                    Лимит по компаниям
                                </td>
                                <td className={headerProfileDataStyle.profile_data_count_lim}>
                                    100
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className={headerProfileDataStyle.profile_data_left}></div>
                        <p></p>
                    <div className={headerProfileDataStyle.profile_data_right}></div> */}
                </div>
        } else {
            elem = 
                <div className={headerProfileDataStyle.profile_data_loading}>
                </div>
        }

        // return (
        //     <>
        //         <div className={headerProfileDataStyle.profile_data_loading}>
        //         </div>
        //     </>
        // );
        // let elem: React.ReactElement;
        // if (isLoaded){
        //     elem = <><p>Загрузка</p></>
        // } else {
        //     elem = <><p>Данные</p></>
        // }

        return elem;
    }
}

export default HeaderProfileData;