import { Histogram, HistogramsResponseData } from "./api";

export interface HistogramsState {
    totalHistograms: Histogram[];
    riskHistograms: Histogram[];
    loading: boolean;
    error: null | string;
}

export enum HistogramsActionTypes {
    FETCH_HISTOGRAMS = "FETCH_HISTOGRAMS",
    FETCH_HISTOGRAMS_SUCCESS = "FETCH_HISTOGRAMS_SUCCESS",
    FETCH_HISTOGRAMS_ERROR = "FETCH_HISTOGRAMS_ERROR",
}

interface HistogramsFetchAction {
    type: HistogramsActionTypes.FETCH_HISTOGRAMS;
}

interface HistogramsSuccessAction {
    type: HistogramsActionTypes.FETCH_HISTOGRAMS_SUCCESS;
    payload: HistogramsResponseData;
}

interface HistogramsErrorAction {
    type: HistogramsActionTypes.FETCH_HISTOGRAMS_ERROR;
    payload: any;
}

export type HistogramsAction = HistogramsFetchAction | HistogramsSuccessAction | HistogramsErrorAction;