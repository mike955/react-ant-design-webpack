import * as actionTypes from '../constants/userinfo';

export function login(data) {
  return {
    type: actionTypes.USER_LOGIN,
    data
  }
}

export function logout(data) {
  return {
    type:actionTypes.USER_LOGOUT,
    data
  }
}
export function showLogin(data) {
  return {
    type: actionTypes.SHOW_LOGIN,
    data
  }
}

export function hideLogin(data) {
  return {
    type: actionTypes.HIDE_LOGIN,
    data
  }
}

export function showRegister(data) {
  return {
    type: actionTypes.SHOW_REGISTER,
    data
  }
}

export function hideRegister(data) {
  return {
    type: actionTypes.HIDE_REGISTER,
    data
  }
}

export function handleOkLogin(data) {
  return {
    type: actionTypes.HANDLE_OK_LOGIN,
    data
  }
}

export function handleOkRegister(data) {
  return {
    type: actionTypes.HANDLE_OK_REGISTER,
    data
  }
}
