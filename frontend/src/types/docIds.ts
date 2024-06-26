import { SearchResultItem } from "./api";

export interface DocIdsState {
    items: SearchResultItem[];
    loading: boolean;
    error: null | string;
}

export enum DocIdsActionTypes {
    FETCH_DOCIDS = "FETCH_DOCIDS",
    FETCH_DOCIDS_SUCCESS = "FETCH_DOCIDS_SUCCESS",
    FETCH_DOCIDS_ERROR = "FETCH_DOCIDS_ERROR",
    RESET_DOCIDS = "RESET_DOCIDS",
}

interface DocIdsFetchAction {
    type: DocIdsActionTypes.FETCH_DOCIDS;
}

interface DocIdsSuccessAction {
    type: DocIdsActionTypes.FETCH_DOCIDS_SUCCESS;
    payload: SearchResultItem[];
}

interface DocIdsErrorAction {
    type: DocIdsActionTypes.FETCH_DOCIDS_ERROR;
    payload: any;
}

interface DocIdsResetAction {
    type: DocIdsActionTypes.RESET_DOCIDS;
}

export type DocIdsAction = DocIdsFetchAction | DocIdsSuccessAction | DocIdsErrorAction | DocIdsResetAction;