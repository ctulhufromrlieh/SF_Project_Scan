import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
// import { UserAction } from "../../types/user";
// import { todoReducer } from "./todoReducer";


export const rootReducer = combineReducers({
    account: accountReducer,
    // reducer2: reducer2,
})

export type RootState = ReturnType<typeof rootReducer>;