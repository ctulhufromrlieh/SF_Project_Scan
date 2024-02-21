import * as React from "react";

import { connect } from "react-redux"
import Header from "./Header";

class App extends React.Component<any, any> {
    render(){
        return (
            <>
                <Header></Header>
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