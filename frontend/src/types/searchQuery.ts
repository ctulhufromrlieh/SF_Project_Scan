import { HistogramsResponseData, Tone } from "./api";

export interface SearchQueryState {
    inn: string;
    tone: Tone;
    count: number;
    date1: string;
    date2: string;
    maxFullness: boolean;
    inBusinessNews: boolean;
    onlyMainRole: boolean;
    onlyWithRiskFactors: boolean;
    excludeTechNews: boolean;
    excludeAnnouncements: boolean;
    excludeDigests: boolean;

    isInnError: boolean;
    isCountError: boolean;
    isDateError: boolean;

    isReady: boolean;
}

export enum SearchQueryActionTypes {
    SET_INN = "SET_INN",
    SET_TONE = "SET_TONE",
    SET_COUNT = "SET_COUNT",
    SET_DATE1 = "SET_DATE1",
    SET_DATE2 = "SET_DATE2",
    SET_MAX_FULLNESS = "SET_MAX_FULLNESS",
    SET_IN_BUSINESS_NEWS = "SET_IN_BUSINESS_NEWS",
    SET_ONLY_MAIN_ROLE = "SET_ONLY_MAIN_ROLE",
    SET_ONLY_WITH_RISK_FACTORS = "SET_ONLY_WITH_RISK_FACTORS",
    SET_EXCLUDE_TECH_NEWS = "SET_EXCLUDE_TECH_NEWS",
    SET_EXCLUDE_ANNOUNCEMENTS = "SET_EXCLUDE_ANNOUNCEMENTS",
    SET_EXCLUDE_DIGESTS = "SET_EXCLUDE_DIGESTS",
    CHECK_PARAMS = "CHECK_PARAMS",
}

interface SearchQuerySetInnAction {
    type: SearchQueryActionTypes.SET_INN;
    payload: string;
}

interface SearchQuerySetToneAction {
    type: SearchQueryActionTypes.SET_TONE;
    payload: Tone;
}

interface SearchQuerySetCountAction {
    type: SearchQueryActionTypes.SET_COUNT;
    payload: string;
}

interface SearchQuerySetDateAction {
    type: SearchQueryActionTypes.SET_DATE1 | SearchQueryActionTypes.SET_DATE2;
    payload: string;
}

interface SearchQuerySetCheckAction {
    type: SearchQueryActionTypes.SET_MAX_FULLNESS
        | SearchQueryActionTypes.SET_IN_BUSINESS_NEWS
        | SearchQueryActionTypes.SET_ONLY_MAIN_ROLE
        | SearchQueryActionTypes.SET_ONLY_WITH_RISK_FACTORS
        | SearchQueryActionTypes.SET_EXCLUDE_TECH_NEWS
        | SearchQueryActionTypes.SET_EXCLUDE_ANNOUNCEMENTS
        | SearchQueryActionTypes.SET_EXCLUDE_DIGESTS;
    payload: boolean;
}

interface SearchQueryCheckParamsAction {
    type: SearchQueryActionTypes.CHECK_PARAMS;
}

export type SearchQueryAction = SearchQuerySetInnAction
    | SearchQuerySetToneAction
    | SearchQuerySetCountAction
    | SearchQuerySetDateAction
    | SearchQuerySetCheckAction
    | SearchQueryCheckParamsAction;