import { authConstants } from '../_constants';
import { authServices } from '../_services';
import { history } from '../_helpers';

export const authActions = {
    login,
    logout
};

function login(params) {
    return dispatch => {
        dispatch(request({ params }));
        return authServices.login(params)
            .then(
                data => {
                    history.push('/');
                    dispatch(success(data));
                    dispatch(login(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(auth) { return { type: authConstants.EMAIL_LOGIN_REQUEST, auth } }
    function login(auth) { return { type: authConstants.USER_LOGIN, auth } }
    function success(auth) { return { type: authConstants.EMAIL_LOGIN_SUCCESS, auth } }
    function failure(error) { return { type: authConstants.EMAIL_LOGIN_FAILURE, error } }
}
function logout() {
    authServices.logout();
    return { type: authConstants.USER_LOGOUT };
}