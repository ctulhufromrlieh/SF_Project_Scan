import { AccountInfoResponseData } from "./api";

export interface AccountInfoState {
    usedCompanyCount: number;
    companyLimit: number;
    loading: boolean;
    error: null | string;
}

export enum AccountInfoActionTypes {
    FETCH_ACCOUNT_INFO = "FETCH_ACCOUNT_INFO",
    FETCH_ACCOUNT_INFO_SUCCESS = "FETCH_ACCOUNT_INFO_SUCCESS",
    FETCH_ACCOUNT_INFO_ERROR = "FETCH_ACCOUNT_INFO_ERROR",
}

interface AccountInfoFetchAction {
    type: AccountInfoActionTypes.FETCH_ACCOUNT_INFO;
}

interface AccountInfoSuccessAction {
    type: AccountInfoActionTypes.FETCH_ACCOUNT_INFO_SUCCESS;
    payload: AccountInfoResponseData;
}

interface AccountInfoErrorAction {
    type: AccountInfoActionTypes.FETCH_ACCOUNT_INFO_ERROR;
    payload: string;
}


export type AccountInfoAction = AccountInfoFetchAction | AccountInfoSuccessAction | AccountInfoErrorAction;