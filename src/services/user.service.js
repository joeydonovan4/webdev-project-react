import { HOST } from '../constants/index';
const ENDPOINT = HOST + '/users';

function createNewUser(user) {
    return fetch(ENDPOINT, {
        method: 'post',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

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

function addFavoriteObject(userId, objectId) {
    return fetch(ENDPOINT + '/' + userId + '/favorites/objects/' + objectId, {
        method: 'post',
        credentials: 'include'
    });
}

function findFavoriteObjects(id) {
    return fetch(ENDPOINT + '/' + id + '/favorites/objects', {
        credentials: 'include'
    });
}

function addFavoritePublication(userId, publicationId) {
    return fetch(ENDPOINT + '/' + userId + '/favorites/publications/' + publicationId, {
        method: 'post',
        credentials: 'include'
    });
}

function findFavoritePublications(id) {
    return fetch(ENDPOINT + '/' + id + '/favorites/publications', {
        credentials: 'include'
    });
}

function addFavoriteExhibition(userId, exhibitionId) {
    return fetch(ENDPOINT + '/' + userId + '/favorites/exhibitions/' + exhibitionId, {
        method: 'post',
        credentials: 'include'
    });
}

function findFavoriteExhibitions(id) {
    return fetch(ENDPOINT + '/' + id + '/favorites/exhibitions', {
        credentials: 'include'
    });
}

function addFavoriteGallery(userId, galleryId) {
    return fetch(ENDPOINT + '/' + userId + '/favorites/galleries/' + galleryId, {
        method: 'post',
        credentials: 'include'
    });
}

function findFavoriteGalleries(id) {
    return fetch(ENDPOINT + '/' + id + '/favorites/galleries', {
        credentials: 'include'
    });
}

export const userService = {
    createNewUser,
    addFavoriteArtist,
    findFavoriteArtists,
    addFavoriteObject,
    findFavoriteObjects,
    addFavoritePublication,
    findFavoritePublications,
    addFavoriteExhibition,
    findFavoriteExhibitions,
    addFavoriteGallery,
    findFavoriteGalleries
};