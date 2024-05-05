import { DocumentsAction, DocumentsActionTypes, DocumentsState } from "../../types/documents";

const initialState: DocumentsState = {
    items: [],
    loading: false,
    error: null,
}

export const documentsReducer = (state = initialState, action: DocumentsAction): DocumentsState => {
    switch (action.type) {
        case DocumentsActionTypes.FETCH_DOCUMENTS:
            return { loading: true, error: null, items: state.items };
        case DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS:
            console.log("documentsReducer state.items: ", state.items);
            console.log("documentsReducer action.payload: ", action.payload);
            return { loading: false, error: null, items: [...state.items, ...action.payload] };
        case DocumentsActionTypes.FETCH_DOCUMENTS_ERROR:
            console.log(action.payload);
            return { loading: false, error: action.payload, items: [] };
        case DocumentsActionTypes.RESET_DOCUMENTS:
            return {loading: false, error: null, items: []};
        default:
            return state;
    }
}
