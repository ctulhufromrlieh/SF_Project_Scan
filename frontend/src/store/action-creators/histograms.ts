// import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducers";
import { HistogramsAction, HistogramsActionTypes } from "../../types/histograms";
// import { SearchQueryActionTypes, SearchQueryState } from "../../types/searchQuery";
import { Dispatch } from "redux";
import axios from "axios";
import { NavigateFunction } from "react-router";
import { createHistogramRequestData } from "../../types/api";
import { resetDocuments } from "./documents";
import { resetDocIds } from "./docIds";

// export const fetchHistograms = (accessToken: string, typedSelector: TypedUseSelectorHook<RootState>) => {
export const fetchHistograms = (accessToken: string, navigate: NavigateFunction) => {
    return async (dispatch: Dispatch<HistogramsAction>, getState: () => RootState) => {
        try {
            const searchQuery = getState().searchQuery;
            const isReady = searchQuery.isReady;
            if (!isReady) {
                return;
            }

            // console.log("searchQuery.isReady", searchQuery.isReady);

            const headers = {
              'Content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            }

            // resetDocIds();
            // resetDocuments();
            dispatch({type: HistogramsActionTypes.FETCH_HISTOGRAMS});

            const data = createHistogramRequestData(searchQuery);

            // console.log("data: ", data);
            // console.log("before histograms");
            const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', data, {headers: headers});
            // console.log("after histograms");
            console.log("histograms response: ", response.data);
            dispatch({type: HistogramsActionTypes.FETCH_HISTOGRAMS_SUCCESS, payload: response.data})

            navigate("/results")
        } catch (e) {
            console.log("histograms error:")
            console.log(e);
            dispatch({
                type: HistogramsActionTypes.FETCH_HISTOGRAMS_ERROR, 
                payload: (e)
            })
        }
    }
}