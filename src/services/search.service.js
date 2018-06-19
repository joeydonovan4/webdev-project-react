import { HOST } from '../constants/index';

function findRecordsForType(type, query) {
    return fetch(HOST + '/museum/' + type + '?q=' + query);
}

export const searchService = {
    findRecordsForType
};