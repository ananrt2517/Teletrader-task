import {
  FETCH_SYMBOL_REQUEST,
  FETCH_SYMBOL_SUCCESS,
  SET_LOGIN,
} from "./actionType";

export interface IAction { 
  type: string;
  payload?: string[];
}

export const fetchSymbolRequest = (): IAction => ({
  type: FETCH_SYMBOL_REQUEST,
});

export const fetchSymbolSuccess = (
  payload: any
): IAction => ({
  type: FETCH_SYMBOL_SUCCESS,
  payload,
});

export const setLogin = (): IAction => ({
  type: SET_LOGIN,
});