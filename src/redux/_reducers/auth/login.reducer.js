import { authConstants } from '../../_constants';

export function login(state = {}, action) {
  switch (action.type) {
    case authConstants.EMAIL_LOGIN_REQUEST:
      return { loading: true };
    case authConstants.EMAIL_LOGIN_SUCCESS:
      return {};
    case authConstants.EMAIL_LOGIN_FAILURE:
      return {};
    default:
      return state
  }
}