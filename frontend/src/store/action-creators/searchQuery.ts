import { Dispatch } from "redux"
import { SearchQueryAction, SearchQueryActionTypes } from "../../types/searchQuery"
import { Tone } from "../../types/api";
import { RootState } from "../reducers";
import { TypedUseSelectorHook } from "react-redux";
import axios from "axios";

export const setInn = (value: string) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_INN, payload: value});
    }
}

export const setTone = (value: Tone) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_TONE, payload: value});
    }
}

export const setCount = (value: string) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_COUNT, payload: value});
    }
}

export const setDate1 = (value: string) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_DATE1, payload: value});
    }
}

export const setDate2 = (value: string) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_DATE2, payload: value});
    }
}

export const setMaxFullness = (value: boolean) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_MAX_FULLNESS, payload: value});
    }
}

export const setInBusinessNews = (value: boolean) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_IN_BUSINESS_NEWS, payload: value});
    }
}

export const setOnlyMainRole = (value: boolean) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_ONLY_MAIN_ROLE, payload: value});
    }
}

export const setOnlyWithRiskFactors = (value: boolean) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_ONLY_WITH_RISK_FACTORS, payload: value});
    }
}

export const setExcludeTechNews = (value: boolean) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_EXCLUDE_TECH_NEWS, payload: value});
    }
}

export const setExcludeAnnouncements = (value: boolean) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_EXCLUDE_ANNOUNCEMENTS, payload: value});
    }
}

export const setExcludeDigests = (value: boolean) => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.SET_EXCLUDE_DIGESTS, payload: value});
    }
}

// type CheckParamsFunc = () => void;

// export const checkParams = (okFunc: CheckParamsFunc): void => {
//     return async (dispatch: Dispatch<SearchQueryAction>) => {
//         dispatch({type: SearchQueryActionTypes.CHECK_PARAMS});
//     }    
// }

export const checkParams = () => {
    return async (dispatch: Dispatch<SearchQueryAction>) => {
        dispatch({type: SearchQueryActionTypes.CHECK_PARAMS});
        
    }    
}