import { Dispatch } from "redux";
import axios from "axios";
import { AccountInfoAction, AccountInfoActionTypes } from "../../types/accountInfo";
import { checkAuth } from "../../utils/auth";
// import { Action, BalanceActionTypes } from "../../types/balance";

export const fetchAccountInfo = (accessToken: string) => {
    return async (dispatch: Dispatch<AccountInfoAction>) => {
        try {
            checkAuth();

            const headers = {
              'Content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            }

            dispatch({type: AccountInfoActionTypes.FETCH_ACCOUNT_INFO})
            const response = await axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {headers: headers});
            dispatch({type: AccountInfoActionTypes.FETCH_ACCOUNT_INFO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: AccountInfoActionTypes.FETCH_ACCOUNT_INFO_ERROR, 
                payload: <string>(e)
            })
        }
    }
}