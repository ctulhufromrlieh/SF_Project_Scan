import { Document } from "./api";

export interface DocumentsState {
    items: Document[];
    loading: boolean;
    error: null | string;
}

export enum DocumentsActionTypes {
    FETCH_DOCUMENTS = "FETCH_DOCUMENTS",
    FETCH_DOCUMENTS_SUCCESS = "FETCH_DOCUMENTS_SUCCESS",
    FETCH_DOCUMENTS_ERROR = "FETCH_DOCUMENTS_ERROR",
}

interface DocumentsFetchAction {
    type: DocumentsActionTypes.FETCH_DOCUMENTS;
}

interface DocumentsSuccessAction {
    type: DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS;
    payload: Document[];
}

interface DocumentsErrorAction {
    type: DocumentsActionTypes.FETCH_DOCUMENTS_ERROR;
    payload: any;
}

export type DocumentsAction = DocumentsFetchAction | DocumentsSuccessAction | DocumentsErrorAction;