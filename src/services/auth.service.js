const HOST = 'http://localhost:4000/api';

function login(username, password) {
    fetch(HOST + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    .then(response => response.json())
}

export const authService = {
    login
};