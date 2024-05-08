import { BalanceResponseData } from "./api";


export interface BalanceState extends BalanceResponseData {
    loading: boolean;
    error: null | string;
}

export enum BalanceActionTypes {
    FETCH_BALANCE = "FETCH_BALANCE",
    FETCH_BALANCE_SUCCESS = "FETCH_BALANCE_SUCCESS",
    FETCH_BALANCE_ERROR = "FETCH_BALANCE_ERROR",
}

interface BalanceGetAction {
    type: BalanceActionTypes.FETCH_BALANCE;
}

interface BalanceSuccessAction {
    type: BalanceActionTypes.FETCH_BALANCE_SUCCESS;
    payload: BalanceResponseData;
}

interface BalanceErrorAction {
    type: BalanceActionTypes.FETCH_BALANCE_ERROR;
    payload: string;
}


export type BalanceAction = BalanceGetAction | BalanceSuccessAction | BalanceErrorAction;