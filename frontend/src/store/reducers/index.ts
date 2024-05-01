import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { accountInfoReducer } from "./accountInfoReducer";


export const rootReducer = combineReducers({
    account: accountReducer,
    accountInfo: accountInfoReducer,
})

export type RootState = ReturnType<typeof rootReducer>;