import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

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
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
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
