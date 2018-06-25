import { GET_USERS } from '../constants/index';

export const adminReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}