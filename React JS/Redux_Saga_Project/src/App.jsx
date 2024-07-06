import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movie from "./redux/pages/Movie";
import Home from "./redux/pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h2>Movie</h2>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
