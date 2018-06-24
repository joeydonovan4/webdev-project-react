import * as constants from '../constants/index';

export const authReducer = (state = {loggingIn: false, user: {username: '', password: ''}, errorMsg: '', loggedIn: false}, action) => {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {
                ...state,
                errorMsg: '',
                loggingIn: true,
                user: action.user,
            }
        case constants.USERNAME_CHANGED:
            if (state.errorMsg.toLowerCase().includes('username')) {
                state.errorMsg = '';
            }
            return {
                ...state,
                loggingIn: false,
                user: {
                    username: action.username,
                    password: state.user.password
                }
            }
        case constants.PASSWORD_CHANGED:
            if (state.errorMsg.toLowerCase().includes('password')) {
                state.errorMsg = '';
            }
            return {
                ...state,
                loggingIn: false,
                user: {
                    username: state.user.username,
                    password: action.password
                }
            }
        case constants.LOGIN_FAILURE:
            return {
                loggingIn: false,
                user: state.user,
                errorMsg: action.errorMsg
            }
        case constants.LOGIN_SUCCESS:
            return {
                loggingIn: false,
                user: state.user,
                errorMsg: '',
                loggedIn: true
            }
        case constants.SET_LOGGED_IN:
            return {
                ...state,
                loggedIn: action.loggedIn
            }
        case constants.SET_CURRENT_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}