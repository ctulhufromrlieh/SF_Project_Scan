import { Dispatch } from "redux";
import { AccountAction, AccountActionTypes } from "../../types/account";
import axios from "axios";
import { NavigateFunction, useNavigate } from "react-router";
import { LoginResponseData } from "../../types/api";


export const loginUser = (login: string, password: string, navigate: NavigateFunction) => {
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

            localStorage.setItem("account_accessToken", response.data.accessToken);
            localStorage.setItem("account_expire", response.data.expire);

            // const navigate = useNavigate();
            console.log("loginUser: before navigate");
            navigate("/");
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

export const loginUserByToken = (accessToken: string, expire: string) => {
    return async (dispatch: Dispatch<AccountAction>) => {
        const data: LoginResponseData = {
            accessToken: accessToken,
            expire: expire,
        }

        try {
            dispatch({type: AccountActionTypes.LOGIN_USER});
            dispatch({type: AccountActionTypes.LOGIN_USER_SUCCESS, payload: data});
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
        localStorage.removeItem("account_accessToken");
        localStorage.removeItem("account_expire");
    }
}