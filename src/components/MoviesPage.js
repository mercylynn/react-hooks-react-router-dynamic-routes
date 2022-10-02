import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>

    </div>
  );
}
export default MoviesPage;
