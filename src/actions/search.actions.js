import { SEARCHING, SEARCH_FAILURE, SEARCH_SUCCESS, QUERY_UPDATED, RECORD_TYPE_UPDATED } from '../constants/index';
import { searchService } from '../services/search.service';

export const findRecordsForType = (dispatch, recordType, query) => {
    dispatch({
        type: SEARCHING,
        recordType,
        query
    })
    searchService.findRecordsForType(recordType, query)
        .then(resp => {
            if (!resp.ok) {
                dispatch({
                    type: SEARCH_FAILURE,
                    errorMsg: resp.statusText
                })
            } else {
                resp.json().then(records => {
                    dispatch({
                        type: SEARCH_SUCCESS,
                        records
                    })
                });
            }
        });
};

export const queryUpdated = (dispatch, newQuery) => {
    dispatch({
        type: QUERY_UPDATED,
        newQuery
    })
};

export const recordTypeUpdated = (dispatch, newRecordType) => {
    dispatch({
        type: RECORD_TYPE_UPDATED,
        newRecordType
    })
};