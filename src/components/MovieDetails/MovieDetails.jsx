import { Suspense, useEffect, useState } from 'react';
import { getMovieDetails } from 'components/api';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState();
  const navigate = useNavigate();
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        setCurrentMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  const buttonHandler = () => {
    navigate('/');
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {currentMovie && (
        <>
          <button onClick={buttonHandler} className={css['back-btn']}>
            {' '}
            Go back{' '}
          </button>
          <div className={css.container}>
            <img
              src={`https://image.tmdb.org/t/p/w400${currentMovie.poster_path}`}
              alt="Movie poster"
            />
            <div>
              <h2>
                {`${currentMovie.title} (${currentMovie.release_date.slice(
                  0,
                  4
                )})`}
              </h2>
              <p>
                User score: {`${parseInt(currentMovie.vote_average * 10)}%`}
              </p>
              <h3>Overview</h3>
              <p>{currentMovie.overview}</p>
              <h3>Genres</h3>
              <p>{currentMovie.genres.map(genre => `${genre.name} `)}</p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </Suspense>
  );
};

export default MovieDetails;
