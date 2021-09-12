import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../../App";
import "./MovieInfoComponent.css";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="container-info">
      {movieInfo ? (
        <>
          <div className="d-flex">
            <img
              src={movieInfo?.Poster}
              alt={movieInfo?.Title}
              className="cover-img"
            />
            <div className="info-column">
              <div className="movie-name">
                {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
              </div>
              <div className="movie-info">
                IMDB Rating: <span>{movieInfo?.imdbRating}</span>
              </div>
              <div className="movie-info">
                Year: <span>{movieInfo?.Year}</span>
              </div>
              <div className="movie-info">
                Language: <span>{movieInfo?.Language}</span>
              </div>
              <div className="movie-info">
                Rated: <span>{movieInfo?.Rated}</span>
              </div>
              <div className="movie-info">
                Released: <span>{movieInfo?.Released}</span>
              </div>
              <div className="movie-info">
                Runtime: <span>{movieInfo?.Runtime}</span>
              </div>
              <div className="movie-info">
                Genre: <span>{movieInfo?.Genre}</span>
              </div>
              <div className="movie-info">
                Director: <span>{movieInfo?.Director}</span>
              </div>
              <div className="movie-info">
                Actors: <span>{movieInfo?.Actors}</span>
              </div>
              <div className="movie-info">
                Plot: <span>{movieInfo?.Plot}</span>
              </div>
            </div>
          </div>
          <div onClick={() => props.onMovieSelect()} className="close">
            X
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MovieInfoComponent;
