import { getMovieCast } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import NoActorPhoto from '../../avatar.png';

const Cast = () => {
  const [currentMovieCast, setCurrentMovieCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await getMovieCast(movieId);
        setCurrentMovieCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {currentMovieCast && (
        <ul>
          {currentMovieCast.map(member => (
            <li className={css.actor} key={member.id}>
              {member.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                  alt={`${member.name}`}
                />
              ) : (
                <img src={NoActorPhoto} alt="no img found" />
              )}
              <span>{member.name}</span>
              <span>Character: {member.character}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
