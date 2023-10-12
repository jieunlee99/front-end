import React, { useState } from "react";

function Movie({ movie }) {
  const poster = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const mouseEnter = () => setTooltipVisible(true);
  const mouseLeave = () => setTooltipVisible(false);

  return (
    <div className="movie" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img className="movie_poster" src={poster} alt={movie.title} />
      
      <div className="movie_info">
        <div className="title">
          <p>{movie.title}</p>
        </div>
        <div className="vote_average">
          <p>{movie.vote_average}</p>
        </div>
      </div>
      <div className="details">
        <p>{movie.title}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
