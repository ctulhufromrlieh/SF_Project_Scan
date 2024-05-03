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

// {
//     "data": [{
//       "data": [{
//         "date": "2020-11-01T03:00:00+03:00",
//         "value": 8
//       }, {
//         "date": "2020-06-01T03:00:00+03:00",
//         "value": 6
//       }],
//       "histogramType": "totalDocuments"
//     }, {
//       "data": [{
//         "date": "2020-11-01T03:00:00+03:00",
//         "value": 0
//       }, {
//         "date": "2020-06-01T03:00:00+03:00",
//         "value": 1
//       }],
//       "histogramType": "riskFactors"
//     }]
//   }

export interface Histogram {
    date: string;
    value: number;
}

// {
//     "data": [{
//       "data": [{
//         "date": "2020-11-01T03:00:00+03:00",
//         "value": 8
//       }, {
//         "date": "2020-06-01T03:00:00+03:00",
//         "value": 6
//       }],
//       "histogramType": "totalDocuments"
//     }, {
//       "data": [{
//         "date": "2020-11-01T03:00:00+03:00",
//         "value": 0
//       }, {
//         "date": "2020-06-01T03:00:00+03:00",
//         "value": 1
//       }],
//       "histogramType": "riskFactors"
//     }]
//   }

export enum HistogramType {
    TOTAL_DOCUMENTS = "totalDocuments",
    RISK_FACTORS = "riskFactors",
}

export interface HistogramList {
    data: Histogram[];
    histogramType: HistogramType;
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