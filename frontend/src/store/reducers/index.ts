import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { accountInfoReducer } from "./accountInfoReducer";
import { searchQueryReducer } from "./searchQueryReducer";
import { histogramsReducer } from "./histograms";
import { docIdsReducer } from "./docIds";
import { documentsReducer } from "./documents";


export const rootReducer = combineReducers({
    account: accountReducer,
    accountInfo: accountInfoReducer,
    searchQuery: searchQueryReducer,
    histogram: histogramsReducer,
    docIds: docIdsReducer,
    documents: documentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;