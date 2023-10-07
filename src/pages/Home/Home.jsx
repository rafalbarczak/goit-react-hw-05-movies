import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { getTrendingMovies } from 'components/api';

const Home = ({ onClick }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={css['movie_name']}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
