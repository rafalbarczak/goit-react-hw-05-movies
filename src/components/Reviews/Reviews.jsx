import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/api';

export const Reviews = ({ movieId }) => {
  const [movieReviews, setMovieReviews] = useState();

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReviews ? (
        <ul>
          {movieReviews.map(review => (
            <li>
              <span>Author: {review.author}</span>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </>
  );
};
