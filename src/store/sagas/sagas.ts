import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  fetchSymbolSuccess} from "../actions/actions";
import { FETCH_SYMBOL_REQUEST} from "../actions/actionType";

const getSymbol = () =>
  axios.get<string[]>("https://api.bitfinex.com/v1/symbols");

function* fetchSymbolSaga() : any {
  try {
    const { data } = yield call(getSymbol);
    yield put(
      fetchSymbolSuccess(data?.slice(0, 5)));
  } catch (e) {
    console.log(e)
  }
}

function* todoSaga() {
  yield all([takeLatest(FETCH_SYMBOL_REQUEST, fetchSymbolSaga)]);
}

export default todoSaga;
