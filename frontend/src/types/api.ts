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

export interface BalanceResponseData {
    unlimited: boolean;
    balance: number;
    searchTermCost: number;
    searchRateBlockPeriod: number;
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