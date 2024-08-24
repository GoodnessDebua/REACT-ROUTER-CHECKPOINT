import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe 
        width="560" 
        height="315" 
        src={movie.trailerLink} 
        title={movie.title} 
        frameBorder="0" 
        allowFullScreen>
      </iframe>
      <br />
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetails;
