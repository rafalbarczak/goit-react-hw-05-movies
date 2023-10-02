import { searchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Movies.module.css';
export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchedPhrase, setSearchedPhrase] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchSearchedMovies() {
      try {
        const data = await searchMovies(searchedPhrase);
        setMovies(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSearchedMovies();
  }, [searchedPhrase]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // onSubmit(searchedPhrase);
    setSearchedPhrase(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search a movie"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          // <li>{movie.title}</li>
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
