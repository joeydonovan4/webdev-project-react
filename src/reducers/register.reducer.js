import * as constants from '../constants/index';

export const registerReducer = (state = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
}, action) => {
    switch (action.type) {
        case constants.UPDATE_USERNAME:
            return {
                ...state,
                username: action.username
            }
        case constants.UPDATE_FIRSTNAME:
            return {
                ...state,
                firstName: action.firstName
            }
        case constants.UPDATE_LASTNAME:
            return {
                ...state,
                lastName: action.lastName
            }
        case constants.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case constants.UPDATE_EMAIL:
            return {
                ...state,
                email: action.email
            }
        default:
            return state;
    }
}