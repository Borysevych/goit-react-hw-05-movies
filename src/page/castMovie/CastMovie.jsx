import { getMovieCast } from 'components/fetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastMovie = () => {
  const [castMovie, setCastMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => setCastMovie(data))
      .catch(console.log);
  }, [movieId]);

  if (!castMovie) {
    return;
  }

  return (
    <>
      {castMovie.length > 0 ? (
        <ul>
          {castMovie
            .slice(0, 19)
            .map(({ id, name, character, profile_path }) => (
              <li key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width="100"
                  />
                ) : (
                  <div>Image not found</div>
                )}
                <div>
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>
                    Character: <b>{character}</b>
                  </p>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <div>No casts</div>
      )}
    </>
  );
};

export default CastMovie;