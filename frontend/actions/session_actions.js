import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = formUser => {
  return (dispatch) => {
    return SessionAPIUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), error => dispatch(receiveErrors(error.responseJSON)))
  }
}
export const login = formUser => {
  return (dispatch) => {
    return SessionAPIUtil.login(formUser)
      .then(user => { dispatch(receiveCurrentUser(user)) })
      .fail(error => { dispatch(receiveErrors(error.responseJSON)) })
  }
}

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => (dispatch(logoutCurrentUser())))
);
