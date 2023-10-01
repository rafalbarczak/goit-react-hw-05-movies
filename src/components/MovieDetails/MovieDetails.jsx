import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/api';
import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import css from './MovieDetails.module.css';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState();
  const navigate = useNavigate();
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setCurrentMovie(data);
        // console.log(movieId);
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
    <>
      {currentMovie && (
        <>
          <button onClick={buttonHandler}> Go back </button>
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
                {/* <a href="#">Cast</a>
                <Cast movieId={movieId} /> */}
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                {/* <a href="#">Reviews</a>
                <Reviews movieId={movieId} /> */}
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
      {/* <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes> */}
    </>
  );
};
