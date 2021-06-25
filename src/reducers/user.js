import * as types from '../actions/users/types';

export const initialState = {
  user: [],
  user_details: {},
  authenticating: false,
  loggedIn: false,
  updating: false,
  error: null,
}

export default function authReducers(state = initialState, action) {
  switch (action.type) {
    case types.DO_LOGIN_REQUEST:
    case types.DO_REGISTER_REQUEST:
      return update(state, action)
    case types.DO_LOGIN_SUCCESS:
    case types.DO_REGISTER_SUCCESS:
      return update(state, action)
    case types.DO_LOGIN_FAILURE:
    case types.DO_REGISTER_FAILURE:
      return update(state,action)
    case types.UPDATE_USER_REQUEST:
      return update(state, action)
    case types.UPDATE_USER_SUCCESS:
      return update(state,action)
    case types.UPDATE_USER_FAILURE:
      return update(state, action)
    default:
      return state;
  }
}

const update = (state, action) => ({
  user: action.type === types.DO_LOGIN_SUCCESS || action.type === types.DO_REGISTER_SUCCESS ? action.payload : [],
  user_details: action.type === types.UPDATE_USER_SUCCESS ? action.payload : {},
  authenticating: action.type === types.DO_LOGIN_REQUEST || action.type === types.DO_REGISTER_REQUEST ? true : false,
  loggedIn: action.type === types.DO_LOGIN_SUCCESS || action.type === types.DO_REGISTER_SUCCESS ? true : false,
  updating: action.type === types.UPDATE_USER_REQUEST ? true : false,
  error: typeof action.type === "string" && action.type.includes("FAILURE") ? action.error : null,
})