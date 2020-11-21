import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import posts, { postsSaga } from "./posts";
import result, { resultSaga } from "./result";
import mychart, { mychartSaga } from "./mychart";
import modal from "./modal";

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
    post,
    posts,
    result,
    mychart,
    modal,
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        writeSaga(),
        postSaga(),
        postsSaga(),
        mychartSaga(),
        resultSaga()
    ]);
}

export default rootReducer;
