import { AccountInfoAction, AccountInfoActionTypes, AccountInfoState } from "../../types/accountInfo";
import { BalanceAction, BalanceActionTypes, BalanceState } from "../../types/balance";

const initialState: AccountInfoState = {
    usedCompanyCount: 0,
    companyLimit: 0,
    loading: false,
    error: null,
}

export const accountInfoReducer = (state = initialState, action: AccountInfoAction): AccountInfoState => {
    switch (action.type) {
        case AccountInfoActionTypes.FETCH_ACCOUNT_INFO:
            return { loading: true, error: null, usedCompanyCount: 0, companyLimit: 0 };
        case AccountInfoActionTypes.FETCH_ACCOUNT_INFO_SUCCESS:
            return { loading: false, error: null, usedCompanyCount: action.payload.eventFiltersInfo.usedCompanyCount, companyLimit: action.payload.eventFiltersInfo.companyLimit };
        case AccountInfoActionTypes.FETCH_ACCOUNT_INFO_ERROR:
            console.log(action.payload);
            return { loading: false, error: action.payload, usedCompanyCount: 0, companyLimit: 0 };
        default:
            return state;
    }
}
