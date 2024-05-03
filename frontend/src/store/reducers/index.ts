import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { accountInfoReducer } from "./accountInfoReducer";
import { searchQueryReducer } from "./searchQueryReducer";
import { histogramsReducer } from "./histograms";


export const rootReducer = combineReducers({
    account: accountReducer,
    accountInfo: accountInfoReducer,
    searchQuery: searchQueryReducer,
    histogramQuery: histogramsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;