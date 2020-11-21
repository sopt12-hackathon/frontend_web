import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import * as api from "../lib/api/recommend";

import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [RECOMMEND_RESULT, RECOMMEND_RESULT_SUCCESS, RECOMMEND_RESULT_FAILURE] = createRequestActionTypes(
  "result/RESULT"
);

export const recomendResult = createAction(RECOMMEND_RESULT, (time) => time); //time

const timeSaga = createRequestSaga(RECOMMEND_RESULT, api.recommend); // 서버랑 통신 

export function* resultSaga() {
  yield takeLatest(RECOMMEND_RESULT, timeSaga);
}

const initState = {
  data: {
      hashtagList: ["홈트"],
      title: "땅끄",
      id: "CTojmKLkWTo"
  },
  error: null
};

const result = handleActions(
  {
    [RECOMMEND_RESULT_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    [RECOMMEND_RESULT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState
);
export default result;