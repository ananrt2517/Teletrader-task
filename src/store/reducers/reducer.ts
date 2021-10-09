import {
  FETCH_SYMBOL_REQUEST,
  FETCH_SYMBOL_SUCCESS,
  SET_LOGIN,
} from "../actions/actionType";

const initialState = {
  symbols: [],
  login: false,
};

export const cryptoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SYMBOL_REQUEST:
      return {
        ...state,
      };
    case FETCH_SYMBOL_SUCCESS:
      return {
        ...state,
        symbols: action.payload,
      };
    case SET_LOGIN:
      return {
        ...state,
        login: true,
      };
    default:
      return {
        ...state,
      };
  }
};