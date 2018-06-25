import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USERNAME_CHANGED, PASSWORD_CHANGED, SET_LOGGED_IN, SET_CURRENT_USER } from '../constants/index';
import { authService } from '../services/auth.service';

export const login = (dispatch, username, password) => {
    dispatch({
        type: LOGIN_REQUEST,
        user: {username, password}
    })
    authService.login(username, password)
        .then(resp => {
            if (resp.ok) {
                resp.json().then(user => {
                    dispatch({ type: LOGIN_SUCCESS, user});
                });
            } else {
                resp.json().then(err => {
                    dispatch({ type: LOGIN_FAILURE, errorMsg: err.error });
                });
            }
        });
};

export const handleUsernameUpdated = (dispatch, username) => (
    dispatch({
        type: USERNAME_CHANGED,
        username
    })
);

export const handlePasswordUpdated = (dispatch, password) => (
    dispatch({
        type: PASSWORD_CHANGED,
        password
    })
);

export const setLoggedIn = (dispatch, loggedIn) => (
    dispatch({
        type: SET_LOGGED_IN,
        loggedIn
    })
);

export const setCurrentUser = (dispatch, user) => (
    dispatch({
        type: SET_CURRENT_USER,
        user
    })
);