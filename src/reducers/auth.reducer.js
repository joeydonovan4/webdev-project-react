import * as constants from '../constants/index';

export const authReducer = (state = {loggingIn: false, user: {username: '', password: ''}}, action) => {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }
        case constants.USERNAME_CHANGED:
            return {
                loggingIn: false,
                user: {
                    username: action.username,
                    password: state.user.password
                }
            }
        case constants.PASSWORD_CHANGED:
            return {
                loggingIn: false,
                user: {
                    username: state.user.username,
                    password: action.password
                }
            }
        default:
            return state;
    }
}