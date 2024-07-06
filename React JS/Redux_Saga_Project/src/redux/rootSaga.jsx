import { all } from "redux-saga/effects";
import { movieSagas } from "./movieSaga";

export default function* rootSaga() {
  yield all([...movieSagas]); // using all to run multiple saga in parallel
}
