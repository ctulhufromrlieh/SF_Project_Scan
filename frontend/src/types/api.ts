import { SearchQueryState } from "./searchQuery";

export interface LoginResponseData {
    accessToken: string;
    // expire: Date;
    expire: string;
}

export interface AccountInfoResponseData {
    eventFiltersInfo: {
        usedCompanyCount: number,
        companyLimit: number,
    }
}

export interface Histogram {
    date: string;
    value: number;
}

export enum HistogramType {
    TOTAL_DOCUMENTS = "totalDocuments",
    RISK_FACTORS = "riskFactors",
}

export interface HistogramList {
    data: Histogram[];
    histogramType: HistogramType;
}

export const createHistogramRequestData = (searchQueryState: SearchQueryState): string => {
    return JSON.stringify(
        {
            issueDateInterval: {
                startDate: searchQueryState.date1,
                endDate: searchQueryState.date2
            },
            searchContext: {
                targetSearchEntitiesContext: {
                    targetSearchEntities: [
                        {
                            type: "company",
                            sparkId: null,
                            entityId: null,
                            inn: parseInt(searchQueryState.inn),
                            maxFullness: searchQueryState.maxFullness,
                            inBusinessNews: searchQueryState.inBusinessNews
                        }
                    ],
                    onlyMainRole: searchQueryState.onlyMainRole,
                    tonality: searchQueryState.tone,
                    onlyWithRiskFactors: searchQueryState.onlyWithRiskFactors,
                    riskFactors: {
                        and: [],
                        or: [],
                        not: []
                    },
                    themes: {
                        and: [],
                        or: [],
                        not: []
                    }
                },
                themesFilter: {
                    and: [],
                    or: [],
                    not: []
                }
            },
            searchArea: {
                includedSources: [],
                excludedSources: [],
                includedSourceGroups: [],
                excludedSourceGroups: []
            },
            attributeFilters: {
                excludeTechNews: searchQueryState.excludeTechNews,
                excludeAnnouncements: searchQueryState.excludeAnnouncements,
                excludeDigests: searchQueryState.excludeDigests
            },
            similarMode: "duplicates",
            // similarMode: "none",
            limit: searchQueryState.count,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: [
              "totalDocuments",
              "riskFactors"
            ]
        }
    );
}

export interface SearchResultItem {
    encodedId: string;
    influence: number;
    similarCount: number;
}


export interface HistogramsResponseData {
    data: HistogramList[];
}

export interface BalanceResponseData {
    unlimited: boolean;
    balance: number;
    searchTermCost: number;
    searchRateBlockPeriod: number;
}

export enum Tone {
    ANY = "any", 
    NEGATIVE = "negative", 
    NEUTRAL = "neutral", 
    POSITIVE = "positive",
}

export interface SummaryItem {
    date: Date;
    all: number;
    risks: number;
}

export enum DocumentType {
    TECH_NEWS = "TECH_NEWS",
}
export interface Document {
    id: number;
    date: Date;
    source: string;
    title: string;
    type: DocumentType;
    image: any;
    text: string;
    link: string;
    wordCount: number;
}