import { Dispatch } from "redux";
import { AccountAction, AccountActionTypes } from "../../types/account";
import axios from "axios";
import { useNavigate } from "react-router";


export const loginUser = (login: string, password: string) => {
    return async (dispatch: Dispatch<AccountAction>) => {
        try {
            const headers = {
              'Content-type': 'application/json',
              'Accept': 'application/json',
            }
            const data = JSON.stringify({login: login, password: password});

            dispatch({type: AccountActionTypes.LOGIN_USER})
            const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', data, {headers: headers});
            dispatch({type: AccountActionTypes.LOGIN_USER_SUCCESS, payload: response.data})
            // const navigate = useNavigate();
            // navigate("/");
        } catch (e) {
            // console.log(e);
            dispatch({
                type: AccountActionTypes.LOGIN_USER_ERROR, 
                // payload: "Проблемы авторизации"
                payload: <string>(e)
            })
        }
    }
}

export const loginUserReset = () => {
    return async (dispatch: Dispatch<AccountAction>) => {
        dispatch({type: AccountActionTypes.LOGIN_USER_RESET})
    }
}