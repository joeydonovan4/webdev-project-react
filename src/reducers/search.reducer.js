import { SEARCHING, SEARCH_FAILURE, SEARCH_SUCCESS, QUERY_UPDATED, RECORD_TYPE_UPDATED, SET_FAVORITES, ADD_FAVORITE } from '../constants/index';

export const searchReducer = (state = {
    searching: false,
    recordType: 'object',
    query: '',
    records: [],
    favorites: [],
    errorMsg: ''}, action) => {
    switch (action.type) {
        case SEARCHING:
            return {
                ...state,
                searching: true,
                query: action.query,
                recordType: action.recordType,
                records: [],
                errorMsg: ''
            }
        case SEARCH_FAILURE:
            return {
                ...state,
                searching: false,
                records: [],
                errorMsg: action.errorMsg
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                searching: false,
                records: action.records.map(record => {
                    record.favorite = state.favorites.includes(record.id);
                    return record;
                }),
                errorMsg: ''
            }
        case QUERY_UPDATED:
            return {
                ...state,
                query: action.newQuery
            }
        case RECORD_TYPE_UPDATED:
            return {
                ...state,
                favorites: [],
                recordType: action.newRecordType
            }
        case SET_FAVORITES:
            return {
                ...state,
                favorites: action.favorites
            }
        case ADD_FAVORITE:
            if (!state.favorites.includes(action.id)) {
                state.favorites.push(action.id);
                return {
                    ...state,
                    records: state.records.map(record => {
                        record.favorite = state.favorites.includes(record.id);
                        return record;
                    })
                }
            }
            return state;
        default:
            return state;
    }
}