import { SEARCHING, SEARCH_FAILURE, SEARCH_SUCCESS, QUERY_UPDATED, RECORD_TYPE_UPDATED, SET_FAVORITES } from '../constants/index';
import { searchService } from '../services/search.service';
import { userService } from '../services/user.service';

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
                        records: records.records
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

export const findFavorites = (dispatch, recordType, userId) => {
    switch (recordType) {
        case 'person':
            userService.findFavoriteArtists(userId)
                .then(response => {
                    if (response.ok) {
                        response.json().then(favorites => {
                            dispatch({
                                type: SET_FAVORITES,
                                favorites: favorites.favoriteArtists
                            })
                        });
                    }
                });
            break;
        case 'object':
            userService.findFavoriteObjects(userId)
                .then(response => {
                    if (response.ok) {
                        response.json().then(favorites => {
                            dispatch({
                                type: SET_FAVORITES,
                                favorites: favorites.favoriteObjects
                            })
                        });
                    }
                });
            break;
        case 'publication':
            userService.findFavoritePublications(userId)
                .then(response => {
                    if (response.ok) {
                        response.json().then(favorites => {
                            dispatch({
                                type: SET_FAVORITES,
                                favorites: favorites.favoritePublications
                            })
                        });
                    }
                });
            break;
        case 'exhibition':
            userService.findFavoriteExhibitions(userId)
                .then(response => {
                    if (response.ok) {
                        response.json().then(favorites => {
                            dispatch({
                                type: SET_FAVORITES,
                                favorites: favorites.favoriteExhibitions
                            })
                        });
                    }
                });
            break;
        case 'gallery':
            userService.findFavoriteGalleries(userId)
                .then(response => {
                    if (response.ok) {
                        response.json().then(favorites => {
                            dispatch({
                                type: SET_FAVORITES,
                                favorites: favorites.favoriteGalleries
                            })
                        });
                    }
                });
            break;
        default:
            return;
    }
};