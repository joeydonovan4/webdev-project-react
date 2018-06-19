import { HOST } from '../constants/index';

function login(username, password) {
    return fetch(HOST + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });
}

export const authService = {
    login
};