import { Suspense, useEffect, useState } from 'react';
import { getMovieDetails } from 'components/api';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import css from './MovieDetails.module.css';
import NoPosterImage from '../../movie.jpg';

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {currentMovie && (
        <>
          <Link to={location.state?.from ?? '/'} className={css['back-btn']}>
            {' '}
            Go back{' '}
          </Link>
          <div className={css.container}>
            {currentMovie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w400${currentMovie.poster_path}`}
                alt="Movie poster"
              />
            ) : (
              <img src={NoPosterImage} alt="No poster found" />
            )}
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
