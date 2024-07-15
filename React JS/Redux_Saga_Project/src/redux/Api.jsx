import axios from "axios";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=facb9a08`;

export const fetchMovies = async (movieName) =>
  await axios.get(`${API_ENDPOINT}&s=${movieName}`);

export const fetchMovieDetails = async (movieId) =>
  await axios.get(`${API_ENDPOINT}&i=${movieId}`);
