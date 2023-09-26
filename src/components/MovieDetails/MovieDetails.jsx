import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/api';

export const MovieDetails = ({ movieId }) => {
  const [currentMovie, setCurrentMovie] = useState();
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

  return (
    <>
      <button> Go back </button>
      <div>
        <img src={currentMovie._path} />
      </div>
    </>
  );
};
