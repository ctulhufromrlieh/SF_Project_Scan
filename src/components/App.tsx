import * as React from "react";

import { connect } from "react-redux"
import { Route, Routes, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import PageMain from "./PageMain";
import PageLogin from "./PageLogin";

// class App extends React.Component<any, any> {
//     render(){
//         return (
//             <>
//                 <Header></Header>
//                 <main>
//                     {/* Main part */}
//                 {/* <nav>
//                     <Link to="/">Home</Link>
//                     <Link to="/users">Users</Link>
//                 </nav> */}
//                 <Routes>
//                     {/* <Route path="/users/:id" element={<User/>}>
//                     </Route>
//                     <Route path="/users/" element={<Users/>}>
//                     </Route> */}
//                     <Route path="/" element={<PageMain/>}>                        
//                     </Route>
//                 </Routes>
//                 </main>
//                 <Footer></Footer>
//             </>
//         );
//     }
// }

class App extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
          mobileMenuShow: false,
        };
    }

    setMobileMenuShow(isShow: boolean){
        console.log(`setMobileMenuShow(${isShow})`);
        this.setState({mobileMenuShow: isShow});
    }

    showMobileMenu(){
        this.setMobileMenuShow(true);
    }

    hideMobileMenu(){
        this.setMobileMenuShow(false);
    }

    render(){
        return (
            <>
                <Header showMobileMenu={this.showMobileMenu}></Header>
                <main>
                    <Routes>
                        <Route path="/login" element={<PageLogin />} />
                        <Route path="/" element={<PageMain hideMobileMenu={this.hideMobileMenu} />} />
                    </Routes>
                </main>
                <Footer></Footer>
            </>
        );
    }
}

export default App;

// export default connect(
//     // mapStateToProps
//     (state: any) => ({
//         // testStore: state
//         // libraries: state.libraries,
//         // frameworks: state.frameworks
//         // libraries: state.changeLibrary,
//         // frameworks: state.changeFramework
//         libraries: state.libraries,
//         frameworks: state.frameworks,
//         searchData: state.searchData
//     }),
//     // mapDispatchToProps
//     dispatch => ({
//         addElement: elem => {
//             dispatch({type: "ADD_LIBRARY", payload: elem});
//         },
//         changeSearchData: elem => {
//             dispatch({type: "CHANGE_SEARCH", text: elem})
//         }
//     })
// )(ReduxApp);

// export default ReduxApp;