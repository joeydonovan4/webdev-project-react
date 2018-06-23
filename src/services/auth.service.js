import { HOST } from '../constants/index';

function login(username, password) {
    return fetch(HOST + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({username, password})
    });
}

function logout() {
    return fetch(HOST + '/logout', {
        credentials: 'include'
    });
}

function getCurrentUser() {
    return fetch(HOST + '/profile', {
        credentials: 'include'
    });
}

export const authService = {
    login,
    logout,
    getCurrentUser
};