const HOST = 'http://localhost:4000/api';

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