import * as React from "react";

// import headerStyle from "../styles/Header.module.scss";
import "../styles/Header.scss";
import HeaderMenu from "./HeaderMenu";

// function Header(props) {
//     return (
//         <header className={headerStyle.header1}>
//         </header>    
//     );
// }

class Header extends React.Component<any, any> {
    render(){
        return (
            <header className={"header"}>
                <HeaderMenu></HeaderMenu>
            </header> 
        );
    }
}

// function Header(props) {
//     return (
//         <header className={"header"}>
//         </header>    
//     );
// }

export default Header;