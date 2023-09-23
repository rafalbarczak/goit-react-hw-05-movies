import { fetchMovies } from './api';
export const App = () => {
  // const movies = fetchMovies(1);
  // console.log(movies.data);

  const getMovies = () => {
    let movies;
    fetchMovies(1)
      .then(movies => (movies = movies.results)``)
      .catch(error => console.log(error));
    console.log(movies);
  };
  getMovies();
  return <div>=</div>;
};
