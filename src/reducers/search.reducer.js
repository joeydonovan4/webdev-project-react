import { SEARCHING, SEARCH_FAILURE, SEARCH_SUCCESS, QUERY_UPDATED, RECORD_TYPE_UPDATED } from '../constants/index';

export const searchReducer = (state = {
    searching: false,
    recordType: 'object',
    query: '',
    records: [],
    errorMsg: ''}, action) => {
    switch (action.type) {
        case SEARCHING:
            return {
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
                records: action.records,
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
                recordType: action.newRecordType
            }
        default:
            return state;
    }
}