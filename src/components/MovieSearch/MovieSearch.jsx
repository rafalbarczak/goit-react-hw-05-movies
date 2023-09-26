import { fetchMovies } from 'components/api';
export const MovieList = () => {
  const [movies, setMovies] = useState();

  const getMovies = () => {
    fetchMovies(1)
      .then(data => {
        movies = data.results;
        return (
          <ul>
            {movies.map(movie => {
              <li>{movie.title}</li>;
            })}
          </ul>
        );
      })
      .catch(error => console.log(error));
    console.log(movies);
  };
  let allMovies = getMovies();
};
