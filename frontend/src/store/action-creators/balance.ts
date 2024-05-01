import { Dispatch } from "redux";
import axios from "axios";
import { BalanceAction, BalanceActionTypes } from "../../types/balance";

// export const fetchBalance = (accessToken: string) => {
//     return async (dispatch: Dispatch<BalanceAction>) => {
//         try {
//             const headers = {
//               'Content-type': 'application/json',
//               'Accept': 'application/json',
//               'Authorization': 'Bearer ' + accessToken
//             }

//             dispatch({type: BalanceActionTypes.FETCH_BALANCE})
//             const response = await axios.post('https://gateway.scan-interfax.ru/Account/get_api_v1_account_balance', {headers: headers});
//             dispatch({type: BalanceActionTypes.FETCH_BALANCE_SUCCESS, payload: response.data})
//         } catch (e) {
//             dispatch({
//                 type: BalanceActionTypes.FETCH_BALANCE_ERROR, 
//                 payload: <string>(e)
//             })
//         }
//     }
// }