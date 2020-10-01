import React from 'react';
import {Link} from 'react-router-dom'

export default function MovieList(props) {
  console.log(props)
  return (
    <div className="movie-list">
      {props.data.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { key,title, director, metascore } = props.movie;

  return (
      <div className="movie-card">
        <Link to={`/movies/${key}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        </Link>
      </div>
  );
}
