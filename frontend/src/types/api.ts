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