import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { accountInfoReducer } from "./accountInfoReducer";
import { searchQueryReducer } from "./searchQueryReducer";


export const rootReducer = combineReducers({
    account: accountReducer,
    accountInfo: accountInfoReducer,
    searchQuery: searchQueryReducer,
})

export type RootState = ReturnType<typeof rootReducer>;