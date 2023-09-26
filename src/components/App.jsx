import { useState } from 'react';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  // const movies = fetchMovies(1);
  // console.log(movies.data);
  const [selectedMovie, setSelectedMovie] = useState();
  const handleMovieClick = movie => {
    setSelectedMovie(movie.id);
  };

  // console.log(`Movie ID: ${selectedMovie}`);

  return (
    <>
      <Home onClick={handleMovieClick} />
      {selectedMovie && <MovieDetails movieId={selectedMovie} />}
    </>
  );
};
