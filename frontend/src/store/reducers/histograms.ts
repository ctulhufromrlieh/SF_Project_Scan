import { Histogram, HistogramType, HistogramsResponseData } from "../../types/api";
import { HistogramsAction, HistogramsActionTypes, HistogramsState } from "../../types/histograms";

const initialState: HistogramsState = {
    totalHistograms: [],
    riskHistograms: [],
    loading: false,
    error: null,
}

const getHistogramsByType = (histogramsResponseData: HistogramsResponseData, histogramType: HistogramType): Histogram[] => {
    const list = histogramsResponseData.data.find(elem => elem.histogramType === histogramType);
    if (list) {
        return list.data;
    } else {
        return [];
    }
}

export const histogramsReducer = (state = initialState, action: HistogramsAction): HistogramsState => {
    switch (action.type) {
        case HistogramsActionTypes.FETCH_HISTOGRAMS:
            return { loading: true, error: null, totalHistograms: [], riskHistograms: [] };
        case HistogramsActionTypes.FETCH_HISTOGRAMS_SUCCESS:
            return { loading: false, error: null, 
                totalHistograms: getHistogramsByType(action.payload, HistogramType.TOTAL_DOCUMENTS), 
                riskHistograms: getHistogramsByType(action.payload, HistogramType.RISK_FACTORS) };
        case HistogramsActionTypes.FETCH_HISTOGRAMS_ERROR:
            console.log(action.payload);
            return { loading: false, error: action.payload, totalHistograms: [], riskHistograms: [] };
        default:
            return state;
    }
}
