import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesArray = movies.map(movie => (
    <div key={movie.title}>
      <h2>Title: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map(genre => (
          <li key={genre}>Genres: {genre}</li>
        ))}
      </ul>
      </div>
  ))
  return (
  <div>   
    <h1>Movies Page</h1>
      {moviesArray}
  </div>
  );
}

export default Movies;
