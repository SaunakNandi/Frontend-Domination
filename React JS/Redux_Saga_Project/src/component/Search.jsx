import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";
const Search = () => {
  const [name, setName] = useState("");
  const {
    movieList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  return (
    <>
      <h2 className="title">Movie Search App</h2>
      <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search Movie By Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {error && <p>error</p>}
      </form>
    </>
  );
};

export default Search;
