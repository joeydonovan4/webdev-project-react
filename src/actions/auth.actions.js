import { LOGIN_REQUEST, USERNAME_CHANGED, PASSWORD_CHANGED } from '../constants/index';
import { authService } from '../services/auth.service';

export const login = (dispatch, username, password) => {
    authService.login(username, password)
        .then(dispatch({
            type: LOGIN_REQUEST,
            username,
            password
        }))
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