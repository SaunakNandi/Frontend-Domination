import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchMovies } from "./Api";
import { setMovies, getMovies } from "./feature/movieSlice";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
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

/* takeLatest allows only one onLoadMovies task to run at any moment and it will be the latest started task. If a previous task is still running, when another onLoadMovies task is started, then that previous task will be cancelled automatically by Redux Saga library.*/
function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

// fork is simply used to call a method, you passed a method and method is invoked
export const movieSagas = [fork(onLoadMovies)];
