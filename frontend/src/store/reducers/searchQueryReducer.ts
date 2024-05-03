import { Tone } from "../../types/api";
import { SearchQueryAction, SearchQueryActionTypes, SearchQueryState } from "../../types/searchQuery";

const initialState: SearchQueryState = {
    inn: "",
    tone: Tone.ANY,
    count: 10,
    date1: "",
    date2: "",
    maxFullness: true,
    inBusinessNews: true,
    onlyMainRole: true,
    onlyWithRiskFactors: false,
    excludeTechNews: true,
    excludeAnnouncements: false,
    excludeDigests: true,

    isInnError: false,
    isCountError: false,
    isDateError: false,

    isReady: false,
}

// from https://github.com/Kholenkov/js-data-validation/blob/master/data-validation.js
function validateInn(inn: string, error: any): boolean {
	var result = false;
	// if (typeof inn === 'number') {
	// 	inn = inn.toString();
	// } else if (typeof inn !== 'string') {
	// 	inn = '';
	// }
	if (!inn.length) {
		error.code = 1;
		error.message = 'ИНН пуст';
	} else if (/[^0-9]/.test(inn)) {
		error.code = 2;
		error.message = 'ИНН может состоять только из цифр';
	} else if ([10, 12].indexOf(inn.length) === -1) {
		error.code = 3;
		error.message = 'ИНН может состоять только из 10 или 12 цифр';
	} else {
		var checkDigit = function (inn: string, coefficients: number[]): number {
			var n = 0;
			for (var i in coefficients) {
				n += coefficients[i] * parseInt(inn[i]);
			}
			// return parseInt(n % 11 % 10);
            return n % 11 % 10;
		};
		switch (inn.length) {
			case 10:
				var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
				if (n10 === parseInt(inn[9])) {
					result = true;
				}
				break;
			case 12:
				var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
				var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
				if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
					result = true;
				}
				break;
		}
		if (!result) {
			error.code = 4;
			error.message = 'Неправильное контрольное число';
		}
	}
	return result;
}

// function "validateInn" from

const checkInn = (inn: string): boolean => {
    console.log("check ", inn);
    return validateInn(inn, {});
}

const checkCount = (count: number | null): boolean => {
    if (!count) {
        return false;
    }
    if (!Number.isInteger(count)) {
        return false;
    }

    return (count >= 1) && (count <= 1000);
}

const checkDate = (date1: string, date2: string): boolean => {
    try {
        const d1 = new Date(date1);
        const d2 = new Date(date2);

        return d1 < d2;
    } catch {
        return false;
    }
}

// export const searchQueryReducer = (state = initialState, action: SearchQueryAction): SearchQueryState => {
//     switch (action.type) {
//         case SearchQueryActionTypes.SET_INN:
//             const newInn = action.payload;
//             const isInnError = checkInn(newInn);
//             return {...state, inn: newInn, isInnError: isInnError};
//         case SearchQueryActionTypes.SET_TONE:
//             return {...state, tone: action.payload}
//         case SearchQueryActionTypes.SET_COUNT:
//             const newCount = parseInt(action.payload);
//             const IsCountError = checkCount(newCount);
//             return {...state, count: newCount, isCountError: IsCountError};
//         // using separate block
//         case SearchQueryActionTypes.SET_DATE1:{
//             const date1 = action.payload;
//             const date2 = state.date2;
//             const isDateError = checkDate(date1, date2);
//             return {...state, date1: date1, isDateError: isDateError};
//         }
//         // using separate block
//         case SearchQueryActionTypes.SET_DATE1: {
//             const date1 = action.payload;
//             const date2 = state.date2;
//             const isDateError = checkDate(date1, date2);
//             return {...state, date1: date1, isDateError: isDateError};
//         }
//         case SearchQueryActionTypes.SET_MAX_FULLNESS:
//             return {...state, maxFullness: action.payload};
//         case SearchQueryActionTypes.SET_IN_BUSINESS_NEWS:
//             return {...state, inBusinessNews: action.payload};
//         case SearchQueryActionTypes.SET_ONLY_MAIN_ROLE:
//             return {...state, onlyMainRole: action.payload};
//         case SearchQueryActionTypes.SET_ONLY_WITH_RISK_FACTORS:
//             return {...state, onlyWithRiskFactors: action.payload};
//         case SearchQueryActionTypes.SET_EXCLUDE_TECH_NEWS:
//             return {...state, excludeTechNews: action.payload};
//         case SearchQueryActionTypes.SET_EXCLUDE_ANNOUNCEMENTS:
//             return {...state, excludeAnnouncements: action.payload};
//         case SearchQueryActionTypes.SET_EXCLUDE_DIGESTS:
//             return {...state, excludeDigests: action.payload};
//         default:
//             return state;
//     }
// }

// const getIsReady = (state: SearchQueryState): boolean => {
//     if (!state.inn) {
//         return false;
//     }
//     if (!state.count) {
//         return false;
//     }
//     if (!state.date1 || !state.date2) {
//         return false;
//     }

//     return !state.isInnError && !state.isCountError && !state.isDateError;
// }

const recalcIsReadyReducer = (state: SearchQueryState): SearchQueryState => {
    const isReady = 
        (state.inn.length > 0) && Number.isInteger(state.count) && (state.date1.length > 0) && (state.date2.length > 0) &&
        !state.isInnError && !state.isCountError && !state.isDateError;
    console.log("recalcIsReadyReducer: isReady = ", isReady);
    return {...state, isReady: isReady };    
}

const checkReducer = (state: SearchQueryState): SearchQueryState => {
    const isInnError = !checkInn(state.inn);
    const IsCountError = !checkCount(state.count); 
    const isDateError = !checkDate(state.date1, state.date2);
    console.log("errors: ", isInnError, IsCountError, isDateError);
    // const isReady = !isInnError && !IsCountError && !isDateError;
    // return {...state, isInnError: isInnError, isCountError: IsCountError, isDateError: isDateError, isReady: isReady };
    return recalcIsReadyReducer({...state, isInnError: isInnError, isCountError: IsCountError, isDateError: isDateError });
}

const enum ErrorType {
    ERROR_TYPE_INN = "ERROR_TYPE_INN",
    ERROR_TYPE_COUNT = "ERROR_TYPE_COUNT",
    ERROR_TYPE_DATE = "ERROR_TYPE_DATE",
}

const resetErrorReducer = (state: SearchQueryState, errorType: ErrorType): SearchQueryState => {
    switch (errorType) {
        case ErrorType.ERROR_TYPE_INN:
            return recalcIsReadyReducer({...state, isInnError: false});
        case ErrorType.ERROR_TYPE_COUNT:
            return recalcIsReadyReducer({...state, isCountError: false});
        case ErrorType.ERROR_TYPE_DATE:
            return recalcIsReadyReducer({...state, isDateError: false});
        default:
            return state;
    }
}

export const searchQueryReducer = (state = initialState, action: SearchQueryAction): SearchQueryState => {
    switch (action.type) {
        case SearchQueryActionTypes.SET_INN:
            // return checkReducer({...state, inn: action.payload});
            return resetErrorReducer({...state, inn: action.payload}, ErrorType.ERROR_TYPE_INN);
        case SearchQueryActionTypes.SET_TONE:
            return {...state, tone: action.payload}
        case SearchQueryActionTypes.SET_COUNT:
            // return checkReducer({...state, count: parseInt(action.payload)});
            return resetErrorReducer({...state, count: parseInt(action.payload)}, ErrorType.ERROR_TYPE_COUNT);
        case SearchQueryActionTypes.SET_DATE1:
            // return checkReducer({...state, date1: action.payload});
            return resetErrorReducer({...state, date1: action.payload}, ErrorType.ERROR_TYPE_DATE);
        case SearchQueryActionTypes.SET_DATE2: 
            // return checkReducer({...state, date2: action.payload});
            return resetErrorReducer({...state, date2: action.payload}, ErrorType.ERROR_TYPE_DATE);
        case SearchQueryActionTypes.SET_MAX_FULLNESS:
            return {...state, maxFullness: action.payload};
        case SearchQueryActionTypes.SET_IN_BUSINESS_NEWS:
            return {...state, inBusinessNews: action.payload};
        case SearchQueryActionTypes.SET_ONLY_MAIN_ROLE:
            return {...state, onlyMainRole: action.payload};
        case SearchQueryActionTypes.SET_ONLY_WITH_RISK_FACTORS:
            return {...state, onlyWithRiskFactors: action.payload};
        case SearchQueryActionTypes.SET_EXCLUDE_TECH_NEWS:
            return {...state, excludeTechNews: action.payload};
        case SearchQueryActionTypes.SET_EXCLUDE_ANNOUNCEMENTS:
            return {...state, excludeAnnouncements: action.payload};
        case SearchQueryActionTypes.SET_EXCLUDE_DIGESTS:
            return {...state, excludeDigests: action.payload};
        case SearchQueryActionTypes.CHECK_PARAMS: {
            // console.log("CHECK_PARAMS");
            return checkReducer(state);
        }
        default:
            return state;
    }
}

// export const searchQueryReducer = (state = initialState, action: SearchQueryAction): SearchQueryState => {
//     switch (action.type) {
//         case SearchQueryActionTypes.SET_INN:
//             const newInn = action.payload;
//             let isInnError = state.isInnError;
//             if (newInn !== state.inn) {
//                 isInnError = false;
//             }
//             // const isInnError = checkInn(newInn);
//             return {...state, inn: newInn, isInnError: isInnError};
//         case SearchQueryActionTypes.SET_TONE:
//             return {...state, tone: action.payload}
//         case SearchQueryActionTypes.SET_COUNT:
//             const newCount = parseInt(action.payload);
//             let IsCountError = state.isCountError;
//             if (newCount !== state.count) {
//                 IsCountError = false;
//             }           
//             // const IsCountError = checkCount(newCount);
//             return {...state, count: newCount, isCountError: IsCountError};
//         // using separate block
//         case SearchQueryActionTypes.SET_DATE1:{
//             const newDate1 = action.payload;
//             let isDateError = state.isDateError;
//             if (newDate1 !== state.date1) {
//                 isDateError = false;
//             }
//             // const isDateError = checkDate(date1, date2);
//             return {...state, date1: newDate1, isDateError: isDateError};
//         }
//         // using separate block
//         case SearchQueryActionTypes.SET_DATE2: {
//             const newDate2 = action.payload;
//             let isDateError = state.isDateError;
//             if (newDate2 !== state.date2) {
//                 isDateError = false;
//             }
//             // const isDateError = checkDate(date1, date2);
//             return {...state, date2: newDate2, isDateError: isDateError};
//         }
//         case SearchQueryActionTypes.SET_MAX_FULLNESS:
//             return {...state, maxFullness: action.payload};
//         case SearchQueryActionTypes.SET_IN_BUSINESS_NEWS:
//             return {...state, inBusinessNews: action.payload};
//         case SearchQueryActionTypes.SET_ONLY_MAIN_ROLE:
//             return {...state, onlyMainRole: action.payload};
//         case SearchQueryActionTypes.SET_ONLY_WITH_RISK_FACTORS:
//             return {...state, onlyWithRiskFactors: action.payload};
//         case SearchQueryActionTypes.SET_EXCLUDE_TECH_NEWS:
//             return {...state, excludeTechNews: action.payload};
//         case SearchQueryActionTypes.SET_EXCLUDE_ANNOUNCEMENTS:
//             return {...state, excludeAnnouncements: action.payload};
//         case SearchQueryActionTypes.SET_EXCLUDE_DIGESTS:
//             return {...state, excludeDigests: action.payload};
//         case SearchQueryActionTypes.CHECK_PARAMS: {
//             const isInnError = checkInn(state.inn);
//             const IsCountError = checkCount(state.count); 
//             const isDateError = checkDate(state.date1, state.date2);
//             const isReady = !isInnError && !IsCountError && !isDateError;
//             return {...state, isInnError: isInnError, isCountError: IsCountError, isDateError: isDateError, isReady: isReady };
//         }
//         default:
//             return state;
//     }
// }