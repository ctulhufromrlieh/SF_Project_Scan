import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { accountInfoReducer } from "./accountInfoReducer";
import { searchQueryReducer } from "./searchQueryReducer";
import { histogramsReducer } from "./histograms";
import { docIdsReducer } from "./docIds";


export const rootReducer = combineReducers({
    account: accountReducer,
    accountInfo: accountInfoReducer,
    searchQuery: searchQueryReducer,
    histogram: histogramsReducer,
    docIds: docIdsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;