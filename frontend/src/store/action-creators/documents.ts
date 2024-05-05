import axios from "axios";
import { Dispatch } from "redux";
import { DocumentsAction, DocumentsActionTypes } from "../../types/documents";
import { RootState } from "../reducers";
import { Document, DocumentsResponseData } from "../../types/api";

// const responseDataElemToDocument = (responseDataElem: any): Document => {
//     return {};
// }

// const documentsResponseDataToDocuments = (responseData: any): Document[] => {
//     let res: Document[] = [];
//     responseData.map(rdElem => res.push(responseDataElemToDocument(rdElem)));

//     return res;
// }

const documentsResponseDataToDocuments = (documentsResponseData: DocumentsResponseData): Document[] => {
    let res: Document[] = [];
    documentsResponseData.map(sdrd => res.push({
            id: sdrd.ok.id,
            // date: new Date(sdrd.ok.issueDate),
            date: sdrd.ok.issueDate,
            source: sdrd.ok.source.name,
            title: sdrd.ok.title.text,
            isTechNews: sdrd.ok.attributes.isTechNews,
            isAnnouncement: sdrd.ok.attributes.isAnnouncement,
            isDigest: sdrd.ok.attributes.isDigest,
            image: null,
            text: sdrd.ok.content.markup,
            link: sdrd.ok.url,
            wordCount: sdrd.ok.attributes.wordCount,
        }
    ));

    return res;
}

export const fetchDocuments = (accessToken: string, count: number) => {
    return async (dispatch: Dispatch<DocumentsAction>, getState: () => RootState) => {
        try {
            // const searchQuery = getState().searchQuery;
            // const isReady = searchQuery.isReady;
            // if (!isReady) {
            //     return;
            // }
            const docIdsState = getState().docIds;
            const documentsState = getState().documents;
            const usedCount = Math.min(count, docIdsState.items.length - documentsState.items.length);
            const ids = docIdsState.items.filter((elem, index) => (index >= documentsState.items.length) && (index < documentsState.items.length + usedCount )).map(value => value.encodedId);
            if (ids.length == 0) {
                return;
            }
            
            console.log("fetchDocuments: documentsState = ", documentsState);
            console.log("fetchDocuments: ids = ", ids);

            const headers = {
              'Content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            }

            dispatch({type: DocumentsActionTypes.FETCH_DOCUMENTS});

            const data = JSON.stringify({ids: ids});
            const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/documents', data, {headers: headers});
            console.log("documents response: ", response.data);
            // dispatch({type: DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS, payload: response.data.items})
            // dispatch({type: DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS, payload: []});
            dispatch({type: DocumentsActionTypes.FETCH_DOCUMENTS_SUCCESS, payload: documentsResponseDataToDocuments(response.data)});

            // navigate("/results")
        } catch (e) {
            console.log("documents error:")
            console.log(e);
            dispatch({
                type: DocumentsActionTypes.FETCH_DOCUMENTS, 
                payload: (e)
            })
        }
    }
}

export const resetDocuments = () => {
    return async (dispatch: Dispatch<DocumentsAction>, getState: () => RootState) => {
        dispatch({type: DocumentsActionTypes.RESET_DOCUMENTS});
    }
}