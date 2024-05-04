import * as AccountActionCreators from "./account";
// import * as BalanceActionCreators from "./balance";
import * as AccountInfoActionCreators from "./accountInfo";
import * as SearchQueryActionCreators from "./searchQuery";
import * as HistogramsQueryActionCreators from "./histograms";
import * as DocIdsQueryActionCreators from "./docIds";

export default {
    ...AccountActionCreators,
    // ...BalanceActionCreators,
    ...AccountInfoActionCreators,
    ...SearchQueryActionCreators,
    ...HistogramsQueryActionCreators,
    ...DocIdsQueryActionCreators,
}