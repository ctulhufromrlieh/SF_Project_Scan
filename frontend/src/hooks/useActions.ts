import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
// import * as UserActionCreators from "../store/action-creators/user"
import ActionCreators from "../store/action-creators/"

export const useActions = () => {
    const dispatch = useDispatch();
    // console.log(ActionCreators);
    return bindActionCreators(ActionCreators, dispatch);
}