import { Dispatch } from "redux";
import { DocIdsAction, DocIdsActionTypes } from "../../types/docIds";
import { RootState } from "../reducers";
import { createHistogramRequestData } from "../../types/api";
import axios from "axios";

export const fetchDocIds = (accessToken: string) => {
    return async (dispatch: Dispatch<DocIdsAction>, getState: () => RootState) => {
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

            dispatch({type: DocIdsActionTypes.FETCH_DOCIDS});

            const data = createHistogramRequestData(searchQuery);

            // console.log("data: ", data);
            // console.log("before histograms");
            const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch', data, {headers: headers});
            // console.log("after histograms");
            console.log("docIds response: ", response.data);
            dispatch({type: DocIdsActionTypes.FETCH_DOCIDS_SUCCESS, payload: response.data.items})

            // navigate("/results")
        } catch (e) {
            console.log("docIds error:")
            console.log(e);
            dispatch({
                type: DocIdsActionTypes.FETCH_DOCIDS_ERROR, 
                payload: (e)
            })
        }
    }
}

export const resetDocIds = () => {
    return async (dispatch: Dispatch<DocIdsAction>, getState: () => RootState) => {
        dispatch({type: DocIdsActionTypes.RESET_DOCIDS});
    }
}