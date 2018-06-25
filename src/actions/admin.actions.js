import { userService } from '../services/user.service';
import { GET_USERS } from '../constants/index';

export const findAllUsers = (dispatch) => {
    userService.findAllUsers()
        .then(response => {
            if (response.ok) {
                response.json().then(users => {
                    dispatch({
                        type: GET_USERS,
                        users
                    })
                });
            }
        });
};