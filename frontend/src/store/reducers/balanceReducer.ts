import { BalanceAction, BalanceActionTypes, BalanceState } from "../../types/balance";

const initialState: BalanceState = {
    unlimited: false,
    balance: 0,
    searchTermCost: 0,
    searchRateBlockPeriod: 0,
    loading: false,
    error: null,
}

export const balanceReducer = (state = initialState, action: BalanceAction): BalanceState => {
    switch (action.type) {
        case BalanceActionTypes.FETCH_BALANCE:
            return { loading: true, error: null, unlimited: false, balance: 0, searchTermCost: 0, searchRateBlockPeriod: 0 };
        case BalanceActionTypes.FETCH_BALANCE_SUCCESS:
            return { loading: false, error: null, unlimited: action.payload.unlimited, balance: action.payload.balance, 
                searchTermCost: action.payload.searchTermCost, searchRateBlockPeriod: action.payload.searchRateBlockPeriod };
            // return { loading: false, error: null, isLogined: true, accessToken: action.payload.accessToken, expire: action.payload.expire };
        case BalanceActionTypes.FETCH_BALANCE_ERROR:
            console.log(action.payload);
            return { loading: false, error: action.payload, unlimited: false, balance: 0, searchTermCost: 0, searchRateBlockPeriod: 0 };
        default:
            return state;
    }
}
