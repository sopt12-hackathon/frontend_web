import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import * as mychartAPI from "../lib/api/mychart";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";

const [
    MYCHART_RESULT,
    MYCHART_RESULT_SUCCESS,
    MYCHART_RESULT_FAILURE,
] = createRequestActionTypes("mychart/MYCHART_RESULT");

export const mychartResult = createAction(MYCHART_RESULT);

const mychartResultSaga = createRequestSaga(MYCHART_RESULT, mychartAPI.chart);

export function* mychartSaga() {
    yield takeLatest(MYCHART_RESULT, mychartResultSaga);
}

const initState = {
    data: null,
    error: null,
};

const mychart = handleActions(
    {
        [MYCHART_RESULT_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            data,
        }),
        [MYCHART_RESULT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initState
);

export default mychart;
