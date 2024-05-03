import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducers";
import { HistogramsAction, HistogramsActionTypes } from "../../types/histograms";
import { SearchQueryActionTypes, SearchQueryState } from "../../types/searchQuery";
import { Dispatch, StateFromReducersMapObject } from "redux";
import axios from "axios";

// export const fetchHistograms = (accessToken: string, typedSelector: TypedUseSelectorHook<RootState>) => {
export const fetchHistograms = (accessToken: string, searchQuery: SearchQueryState) => {
    return async (dispatch: Dispatch<HistogramsAction>) => {
        try {
            // dispatch({type: SearchQueryActionTypes.CHECK_PARAMS});
            // const {isReady} = typedSelector(state => state.searchQuery);
            // const searchQuery = typedSelector(state => state.searchQuery);
            if (!searchQuery.isReady) {
                return;
            }

            console.log("searchQuery.isReady", searchQuery.isReady);

            const headers = {
              'Content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            }

            dispatch({type: HistogramsActionTypes.FETCH_HISTOGRAMS});
            const data = JSON.stringify(
                {
                    issueDateInterval: {
                        startDate: searchQuery.date1,
                        endDate: searchQuery.date2
                    },
                    searchContext: {
                        targetSearchEntitiesContext: {
                            targetSearchEntities: [
                                {
                                    type: "company",
                                    sparkId: null,
                                    entityId: null,
                                    inn: parseInt(searchQuery.inn),
                                    maxFullness: searchQuery.maxFullness,
                                    inBusinessNews: searchQuery.inBusinessNews
                                }
                            ],
                            onlyMainRole: searchQuery.onlyMainRole,
                            tonality: searchQuery.tone,
                            onlyWithRiskFactors: searchQuery.onlyWithRiskFactors,
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
                        excludeTechNews: searchQuery.excludeTechNews,
                        excludeAnnouncements: searchQuery.excludeAnnouncements,
                        excludeDigests: searchQuery.excludeDigests
                    },
                    similarMode: "duplicates",
                    limit: searchQuery.count,
                    sortType: "sourceInfluence",
                    sortDirectionType: "desc",
                    intervalType: "month",
                    histogramTypes: [
                      "totalDocuments",
                      "riskFactors"
                    ]
                }
            );

            // console.log("data: ", data);
            // console.log("before histograms");
            const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', data, {headers: headers});
            // console.log("after histograms");
            console.log(response.data);
            dispatch({type: HistogramsActionTypes.FETCH_HISTOGRAMS_SUCCESS, payload: response.data})
        } catch (e) {
            console.log("histograms error:")
            console.log(e);
            dispatch({
                type: HistogramsActionTypes.FETCH_HISTOGRAMS_ERROR, 
                payload: (e)
            })
        }
    }
}