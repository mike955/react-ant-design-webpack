import * as actionTypes from '../constants/userinfo';

const initialState = {};

export default function userinfo(state=initialState, action) {
  switch(action.type) {
    case actionTypes.USER_LOGIN:
      return action.data;
    case actionTypes.USER_REGISTER:
      return action.data;

    default: return state;
  }
}
