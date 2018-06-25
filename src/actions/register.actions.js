import { UPDATE_USERNAME, UPDATE_FIRSTNAME, UPDATE_LASTNAME, UPDATE_PASSWORD, UPDATE_EMAIL, SET_CURRENT_USER, SET_LOGGED_IN} from '../constants/index';
import { userService } from '../services/user.service';

export const handleUpdateUsername = (dispatch, username) => (
    dispatch({
        type: UPDATE_USERNAME,
        username
    })
);

export const handleUpdateFirstName = (dispatch, firstName) => (
    dispatch({
        type: UPDATE_FIRSTNAME,
        firstName
    })
);

export const handleUpdateLastName = (dispatch, lastName) => (
    dispatch({
        type: UPDATE_LASTNAME,
        lastName
    })
);

export const handleUpdatePassword = (dispatch, password) => (
    dispatch({
        type: UPDATE_PASSWORD,
        password
    })
);

export const handleUpdateEmail = (dispatch, email) => (
    dispatch({
        type: UPDATE_EMAIL,
        email
    })
);

export const register = (dispatch, user) => {
    userService.createNewUser(user)
        .then(response => {
            if (response.ok) {
                response.json().then(user => {
                    dispatch({
                        type: SET_CURRENT_USER,
                        user
                    })
                    dispatch({
                        type: SET_LOGGED_IN,
                        loggedIn: true
                    })
                });
            }
        });
};