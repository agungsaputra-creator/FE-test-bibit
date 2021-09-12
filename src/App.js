import React, { useState } from "react";
import Axios from "axios";
import MovieComponent from "./components/Movie/MovieComponent";
import MovieInfoComponent from "./components/MovieInfo/MovieInfoComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export const API_KEY = "a9118a3a";

function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);

    console.log(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <div>
      <div className="header">
        <div className="d-flex align-items-center align-items-center">
          <img src="/react-movie-app/logo.svg" className="movie-img" />
        </div>
        <div className="search-box">
          <img src="/react-movie-app/search-icon.svg" className="search-icon" />
          <input
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
            className="search-input"
          />
        </div>
      </div>
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <div className="movie-list">
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <div className="Placeholder">
            <img src="/react-movie-app/logo.svg" alt="logo" className="mb-3" />
            <h4>Search Your Movie</h4>
          </div>
          // <SingleComponent title={title} />
        )}
      </div>
    </div>
  );
}

export default App;
