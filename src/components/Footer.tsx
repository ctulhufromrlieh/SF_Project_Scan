import * as React from "react";

// import "../styles/Footer.scss";
import footerStyle from "../styles/Footer.module.scss";
import Logo from "./Logo";
import FooterContacts from "./FooterContacts";
// import HeaderMenu from "./HeaderMenu";
// import HeaderLoginArea from "./HeaderLoginArea";



// class Footer extends React.Component<any, any> {
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

class Footer extends React.Component<any, any> {
    render(){
        return (
            <footer className={footerStyle.footer}>
                <Logo isHeader={false} />
                <FooterContacts></FooterContacts>
            </footer> 
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

export default Footer;