import { HOST } from '../constants/index';
const ENDPOINT = HOST + '/users';

function addFavoriteArtist(userId, artistId) {
    return fetch(ENDPOINT + '/' + userId + '/favorites/artists/' + artistId, {
        method: 'post',
        credentials: 'include'
    });
}

function findFavoriteArtists(id) {
    return fetch(ENDPOINT + '/' + id + '/favorites/artists', {
        credentials: 'include'
    });
}

export const userService = {
    addFavoriteArtist,
    findFavoriteArtists
};