import React from "react";
import { directors, movies } from "../data";

function Directors() {
  const directorsArray = directors.map(director => (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
    <ul>
      {director.movies.map(movie=>(
        <li key={movie}>{movie}</li>

      ))}
    </ul>
    </div>
  ))
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsArray}
  </div>
  )
}

export default Directors;
