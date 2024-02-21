import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux";
import reducer from "./reducers";
// import { logging } from "./middlewares/logging"

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App"

// const rdeFunc = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
// const rdeFuncEx  = rdeFunc && rdeFunc();
// console.log("rdeFunc", rdeFunc);

// const enhancer = compose(
//     applyMiddleware(logging), 
//     rdeFuncEx
//     // (window as any)["__REDUX_DEVTOOLS_EXTENSION__"] && (window as any)["__REDUX_DEVTOOLS_EXTENSION__"]()
// );

const store = createStore(reducer, undefined, undefined);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
);

// console.log("Hello world");