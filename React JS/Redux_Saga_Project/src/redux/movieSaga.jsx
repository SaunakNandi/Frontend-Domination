import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchMovieDetails, fetchMovies } from "./Api";
import {
  setMovies,
  getMovies,
  getMovieDetail,
  setMovieDetail,
} from "./feature/movieSlice";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    // console.log(movieName);
    // call -> It wait for the promise to finish. The argument should be a function that returns a promise.
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      console.log(response);
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onLoadMovieDetailAsync({ payload }) {
  try {
    const movieId = payload;
    // console.log(movieName);
    // call -> It wait for the promise to finish. The argument should be a function that returns a promise.
    const response = yield call(fetchMovieDetails, movieId);
    if (response.status === 200) {
      console.log(response);
      yield put(setMovieDetail({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}
/* takeLatest allows only one onLoadMovies task to run at any moment and it will be the latest started task. If a previous task is still running, when another onLoadMovies task is started, then that previous task will be cancelled automatically by Redux Saga library.*/
function* onLoadMovies() {
  console.log(getMovies.type);
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}
function* onLoadMovieDetail() {
  console.log(getMovies.type);
  yield takeLatest(getMovieDetail.type, onLoadMovieDetailAsync);
}
// fork is simply used to call a method, you passed a method and method is invoked
// let forkedValue=fork(onLoadMovies)
// console.log(forkedValue)
export const movieSagas = [fork(onLoadMovies), fork(onLoadMovieDetail)];
