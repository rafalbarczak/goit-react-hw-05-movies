import { useEffect, useState } from 'react';
import css from './Home.module.css';
import { getTrendingMovies } from 'components/api';

export const Home = ({ onClick }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
        // console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <div className={css.nav}>
        <a href="#" className={css['nav_link']}>
          Home
        </a>
        <a href="#" className={css['nav_link']}>
          Movies
        </a>
      </div>
      <ul>
        {trendingMovies.map(movie => (
          <li
            className={css['movie_name']}
            onClick={() => onClick(movie)}
            key={movie.id}
          >
            {movie.title || movie.name}
          </li>
        ))}
      </ul>
    </>
  );
};
