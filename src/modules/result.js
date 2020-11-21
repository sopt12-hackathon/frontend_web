import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import {recommend} from "../lib/api/recommend";

import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [RECOMMEND, RECOMMEND_SUCCESS, RECOMMEND_FAILURE] = createRequestActionTypes(
  "result/RESULT"
);

export const recomendResult = createAction(RECOMMEND, ({time}) => ({time})); //time

const timeSaga = createRequestSaga(RECOMMEND, recommend); // 서버랑 통신 

export function* resultSaga() {
  yield takeLatest(RECOMMEND, timeSaga);
}

const initState = {
  data: null,
  error: null
};

const result = handleActions(
  {
    [RECOMMEND_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      data
    }),
    [RECOMMEND_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState
);
export default result;