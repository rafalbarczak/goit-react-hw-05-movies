import { searchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import css from './Movies.module.css';
const Movies = () => {
  // const [query, setQuery] = useState('');
  // const [searchedPhrase, setSearchedPhrase] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSearchedMovies() {
      try {
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSearchedMovies();
  }, [query]);

  const handleChange = e => {
    // setQuery(e.target.value);
    // setSearchParams({ query: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/movies?query=${query}`);
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    // setSearchedPhrase(query);
    // setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search a movie"
          // value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {query !== '' ? (
        movies.length === 0 ? (
          <p>There are no movies with that name. Insert a correct name.</p>
        ) : (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: `/movies?query=${query}` }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )
      ) : null}
    </>
  );
};

export default Movies;
