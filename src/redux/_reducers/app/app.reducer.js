import { authConstants } from '../../_constants';

export function appState(state = { user: {} }, action) {
    switch (action.type) {
        case authConstants.USER_LOGIN:
            return { user: action.data };
        case authConstants.USER_LOGOUT:
            return { user: {} };
        default:
            return state
    }
}