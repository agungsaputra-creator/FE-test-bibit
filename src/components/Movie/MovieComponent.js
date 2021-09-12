import React from "react";
import "./MovieComponent.css";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className="movie-container"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className="cover-img" src={Poster} alt={Title} />
      <span className="movie-name">{Title}</span>
      <div className="movie-column">
        <span className="movie-info">Year : {Year}</span>
        <span className="movie-info">Type : {Type}</span>
      </div>
    </div>
  );
};
export default MovieComponent;
