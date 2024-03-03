import * as React from "react";

// import "../styles/FooterContacts.scss";
import footerContactsStyle from "../styles/FooterContacts.module.scss";


// class FooterContacts extends React.Component<any, any> {
//     render(){
//         return (
//             <footer className={"footer"}>
//                 <div className="footer-logo"></div>
//                 <div className={"footer-right-block"}>
//                     <div className={"footer-right-block-top"}>
//                         <p>г. Москва, Цветной б-р, 40</p>
//                         <p>+7 495 771 21 11</p>
//                         <p>info@skan.ru</p>
//                     </div>
//                     <div className={"footer-right-block-bottom"}>
//                         <p>Copyright. 2022</p>
//                     </div>
//                 </div>
//             </footer> 
//         );
//     }
// }

class FooterContacts extends React.Component<any, any> {
    render(){
        return (
            <div className={footerContactsStyle.footer_contacts}>
                {/* <div className={"footer-right-block-top"}> */}
                <div>
                    <p className={footerContactsStyle.footer_contacts_p}>г. Москва, Цветной б-р, 40</p>
                    <p className={footerContactsStyle.footer_contacts_p}>+7 495 771 21 11</p>
                    <p className={footerContactsStyle.footer_contacts_p}>info@skan.ru</p>
                </div>
                {/* <div className={"footer-right-block-bottom"}> */}
                <div>
                    <p className={footerContactsStyle.footer_contacts_p}>Copyright. 2022</p>
                </div>
            </div>
        );
    }
}

// class Footer extends React.Component<any, any> {
//     render(){
//         return (
//             <footer className={"footer"}>
//                 <div className={"footer-right-block"}>
//                     <div className={"footer-right-block-top"}>
//                         <p>г. Москва, Цветной б-р, 40<br/>
//                         +7 495 771 21 11<br/>
//                         info@skan.ru</p>
//                     </div>
//                     <div className={"footer-right-block-bottom"}>
//                         <p>Copyright. 2022</p>
//                     </div>
//                 </div>
//             </footer> 
//         );
//     }
// }

export default FooterContacts;