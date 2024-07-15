import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    movie: {},
  },

  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.movieList = action.payload;
    },
    getMovieDetail(id) {
      return id;
    },
    setMovieDetail: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export default movieSlice.reducer;

export const { getMovies, setMovies, getMovieDetail, setMovieDetail } =
  movieSlice.actions;
