import * as actionTypes from '../constants/userinfo';

const initialState = {

};

export default function userinfo(state=initialState, action) {
  switch(action.type) {
    case actionTypes.USER_LOGIN:
      return action.data;
    case actionTypes.USER_REGISTER:
      return action.data;
    case actionTypes.SHOW_LOGIN:
      return action.data;
    case actionTypes.HIDE_LOGIN:
      return action.data;
    case actionTypes.SHOW_REGISTER:
      return action.data;
    case actionTypes.HIDE_REGISTER:
      return action.data;
    case actionTypes.HANDLE_OK_LOGIN:
      return action.data;
    case actionTypes.HANDLE_OK_REGISTER:
      return action.data;
    case actionTypes.USER_LOGOUT:
      return action.data;

    default: return state;
  }
}
