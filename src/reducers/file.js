import * as types from '../actions/file/types';

export const initialState = {
  processing: false,
  file: [],
  error: null,
}

export default function fileReducers(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST:
      return update(state, action)
    case types.SUCCESS:
      return update(state, action)
    case types.FAILURE:
      return update(state,action)
    default:
      return state;
  }
}

const update = (state, action) => ({
  file: action.type === types.SUCCESS ? action.payload : [],
  processing: action.type === types.REQUEST ? true : false,
  error: typeof action.type === "string" && action.type.includes("FAILURE") ? action.error : null,
})