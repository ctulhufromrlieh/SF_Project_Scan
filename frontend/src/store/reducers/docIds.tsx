import { DocIdsAction, DocIdsActionTypes, DocIdsState } from "../../types/docIds";

const initialState: DocIdsState = {
    items: [],
    loading: false,
    error: null,
}

export const docIdsReducer = (state = initialState, action: DocIdsAction): DocIdsState => {
    switch (action.type) {
        case DocIdsActionTypes.FETCH_DOCIDS:
            return { loading: true, error: null, items: [] };
        case DocIdsActionTypes.FETCH_DOCIDS_SUCCESS:
            return { loading: false, error: null, items: action.payload };
        case DocIdsActionTypes.FETCH_DOCIDS_ERROR:
            console.log(action.payload);
            return { loading: false, error: action.payload, items: [] };
        case DocIdsActionTypes.RESET_DOCIDS:
            return {loading: false, error: null, items: []};            
        default:
            return state;
    }
}
