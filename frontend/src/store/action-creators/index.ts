import * as AccountActionCreators from "./account";
// import * as BalanceActionCreators from "./balance";
import * as AccountInfoActionCreators from "./accountInfo";

export default {
    ...AccountActionCreators,
    // ...BalanceActionCreators,
    ...AccountInfoActionCreators,
}